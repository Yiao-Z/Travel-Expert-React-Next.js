"use server";

import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
import { redirect } from "next/navigation";
import pool from "./database";
import { travelPackages } from "../app/plan-your-trip/packages/packages";

const scrypt = promisify(scryptCallback);
const destinations = new Set([
  "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong",
  "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan",
  "Hong Kong", "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi",
  "Jilin", "Liaoning", "Macau", "Ningxia", "Qinghai", "Shaanxi",
  "Shandong", "Shanghai", "Shanxi", "Sichuan", "Taiwan", "Tianjin",
  "Tibet", "Xinjiang", "Yunnan", "Zhejiang",
]);
const interests = new Set(["culture", "food", "nature", "planning"]);

function readText(formData, name) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function parseDate(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return null;

  const [, monthText, dayText, yearText] = match;
  const month = Number(monthText);
  const day = Number(dayText);
  const year = Number(yearText);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return `${yearText}-${monthText}-${dayText}`;
}

function getRegistration(formData) {
  const registration = {
    firstName: readText(formData, "firstName"),
    lastName: readText(formData, "lastName"),
    address: readText(formData, "address"),
    city: readText(formData, "city"),
    province: readText(formData, "province").toUpperCase(),
    country: readText(formData, "addressCountry"),
    postalCode: readText(formData, "postalCode"),
    email: readText(formData, "email").toLowerCase(),
    homePhone: readText(formData, "homePhone"),
    businessPhone: readText(formData, "businessPhone"),
    userId: readText(formData, "userId"),
    password: readText(formData, "password"),
    confirmPassword: readText(formData, "confirmPassword"),
    travelStart: parseDate(readText(formData, "dates")),
    travelEnd: parseDate(readText(formData, "dates-end")),
    packageId: readText(formData, "travelPackage"),
    destination: readText(formData, "destinationRegion"),
    interest: readText(formData, "interest"),
    receiveUpdates: formData.get("updates") === "on",
  };

  if (
    !registration.firstName ||
    registration.firstName.length > 25 ||
    !registration.lastName ||
    registration.lastName.length > 25 ||
    !registration.address ||
    registration.address.length > 75 ||
    !registration.city ||
    registration.city.length > 50 ||
    !/^[A-Z]{2}$/.test(registration.province) ||
    !registration.country ||
    registration.country.length > 25 ||
    !registration.postalCode ||
    registration.postalCode.length > 7 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registration.email) ||
    registration.email.length > 50 ||
    !registration.homePhone ||
    registration.homePhone.length > 20 ||
    !registration.businessPhone ||
    registration.businessPhone.length > 20
  ) {
    return { error: "Check the required contact details and their allowed lengths." };
  }

  if (
    !/^[A-Za-z0-9._-]{3,50}$/.test(registration.userId) ||
    registration.password.length < 8 ||
    registration.password.length > 128 ||
    registration.password !== registration.confirmPassword
  ) {
    return {
      error:
        "Enter a username (3–50 letters, numbers, dots, underscores, or hyphens) and matching passwords of at least 8 characters.",
    };
  }

  if (
    !registration.travelStart ||
    !registration.travelEnd ||
    registration.travelStart > registration.travelEnd
  ) {
    return { error: "Enter valid travel dates, with the return date on or after departure." };
  }

  const selectedPackage = travelPackages.find(
    (travelPackage) => travelPackage.id === registration.packageId,
  );
  if (
    (registration.packageId && !selectedPackage) ||
    !destinations.has(registration.destination) ||
    !interests.has(registration.interest)
  ) {
    return { error: "Choose a valid package, destination, and travel interest." };
  }

  return { registration, selectedPackage };
}

export async function createTravelRegistrationAction(_previousState, formData) {
  const result = getRegistration(formData);
  if (result.error) return result;

  const { registration, selectedPackage } = result;
  const salt = randomBytes(16).toString("hex");
  const passwordHash = await scrypt(registration.password, salt, 64);
  const encodedPasswordHash = `scrypt$${salt}$${passwordHash.toString("hex")}`;
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    const [customerResult] = await connection.execute(
      `INSERT INTO customers
        (CustFirstName, CustLastName, CustAddress, CustCity, CustProv,
         CustPostal, CustCountry, CustHomePhone, CustBusPhone, CustEmail, AgentId)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
      [
        registration.firstName,
        registration.lastName,
        registration.address,
        registration.city,
        registration.province,
        registration.postalCode,
        registration.country,
        registration.homePhone,
        registration.businessPhone,
        registration.email,
      ],
    );

    await connection.execute(
      `INSERT INTO webregistrations
        (CustomerId, UserId, Email, PasswordHash, TravelStart, TravelEnd,
         TravelPackage, DestinationRegion, Interest, ReceiveUpdates)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        customerResult.insertId,
        registration.userId,
        registration.email,
        encodedPasswordHash,
        registration.travelStart,
        registration.travelEnd,
        selectedPackage?.title ?? null,
        registration.destination,
        registration.interest,
        registration.receiveUpdates,
      ],
    );

    await connection.commit();
  } catch (error) {
    if (connection) {
      try {
        await connection.rollback();
      } catch (rollbackError) {
        console.error("Error rolling back travel registration:", rollbackError);
      }
    }

    if (error.code === "ER_DUP_ENTRY") {
      return { error: "That username or email is already registered." };
    }

    console.error("Error saving travel registration:", error);
    return {
      error:
        "Your registration could not be saved. Check the database connection and import the Travel Experts SQL and registration migration.",
    };
  } finally {
    connection?.release();
  }

  redirect("/plan-your-trip/register-now/confirmation");
}
