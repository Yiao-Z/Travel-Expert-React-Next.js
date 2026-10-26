// Made by Andrew Maje and Alvin Zhao
// Ai was used in some of the code generation

"use client";

import Link from "next/link";
import { useActionState, useRef, useState } from "react";
import SiteHeader from "../../apptopbar";
import { createTravelRegistrationAction } from "../../../lib/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { travelPackages } from "../packages/packages";
import "./register-now.css";


function parseDateInput(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return null;

  const [, month, day, year] = match.map(Number);
  const date = new Date(0);
  date.setHours(12, 0, 0, 0);
  date.setFullYear(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function formatDateValue(date) {
  if (!date) return "";
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;
}

function calculateReturnDate(startDate, durationDays) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(startDate);
  if (!match) return "";

  const [, month, day, year] = match.map(Number);
  const start = new Date(0);
  start.setUTCHours(0, 0, 0, 0);
  start.setUTCFullYear(year, month - 1, day);
  if (
    start.getUTCFullYear() !== year ||
    start.getUTCMonth() !== month - 1 ||
    start.getUTCDate() !== day
  ) {
    return "";
  }

  start.setUTCDate(start.getUTCDate() + durationDays);
  const returnMonth = String(start.getUTCMonth() + 1).padStart(2, "0");
  const returnDay = String(start.getUTCDate()).padStart(2, "0");
  return `${returnMonth}/${returnDay}/${start.getUTCFullYear()}`;
}

export default function RegisterForm({ initialPackage }) {
  const [state, formAction, isPending] = useActionState(
    createTravelRegistrationAction,
    null,
  );
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewDetails, setReviewDetails] = useState([]);
  const confirmPasswordRef = useRef(null);
  const formRef = useRef(null);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsDoNotMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  function handleSubmit(event) {
    if (isReviewing) return;

    event.preventDefault();
    if (password !== confirmPassword) {
      confirmPasswordRef.current?.setCustomValidity("Passwords do not match.");
      confirmPasswordRef.current?.reportValidity();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const getValue = (name) => formData.get(name)?.toString() || "";
    setReviewDetails([
      ["Name", `${getValue("firstName")} ${getValue("lastName")}`.trim()],
      ["Street address", getValue("address")],
      ["City", getValue("city")],
      ["Province", getValue("province")],
      ["Country", getValue("addressCountry")],
      ["Postal code", getValue("postalCode")],
      ["Email address", getValue("email")],
      ["Home phone", getValue("homePhone")],
      ["Business phone", getValue("businessPhone") || "Not provided"],
      ["Username", getValue("userId")],
      ["Travel dates", `${getValue("dates")} – ${getValue("dates-end")}`],
      ["Destination", getValue("destinationRegion")],
      [
        "Travel package",
        travelPackages.find((travelPackage) => travelPackage.id === selectedPackage)
          ?.title || "No package selected",
      ],
      [
        "Primary interest",
        event.currentTarget.elements.interest.selectedOptions[0].text,
      ],
      ["Travel updates", formData.has("updates") ? "Yes" : "No"],
    ]);
    setIsReviewing(true);
  }

  function handleBackToEdit() {
    formRef.current?.reset();
    setPassword("");
    setConfirmPassword("");
    setTravelDate("");
    setReturnDate("");
    setSelectedPackage(initialPackage);
    setReviewDetails([]);
    confirmPasswordRef.current?.setCustomValidity("");
    setIsReviewing(false);
  }

  return (
    <>
      <SiteHeader />

      <main className="page">
        <section className="intro" aria-labelledby="register-title">
          <div className="introContent">
            <p className="eyebrow">Your next journey starts here</p>
            <h1 id="register-title">Make room for discovery.</h1>
            <p className="introDescription">
              Sign up for thoughtful travel inspiration and practical tips to
              help you plan your own China adventure.
            </p>
            <div className="introNote">
              <span aria-hidden="true">✦</span>
              <span>Inspiration, itineraries, and travel essentials.</span>
            </div>
          </div>
          <p className="introCaption">
            A new perspective is closer than you think.
          </p>
        </section>

        <section className="panel" aria-labelledby="form-title">
          <div className="panelHeading">
            <div className="panelKicker">
              <p className="panelEyebrow">Register your interest</p>
              <span>{isReviewing ? "02 / REVIEW" : "01 / YOUR TRIP"}</span>
            </div>
            <h2 id="form-title">
              {isReviewing
                ? "Review your registration."
                : "Create your Travel Experts account."}
            </h2>
            <p>
              {isReviewing
                ? "Check your details before confirming your registration."
                : "Enter your account details and share a few travel preferences."}
            </p>
          </div>

          <form
            action={formAction}
            className="form"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div hidden={isReviewing}>
            <fieldset className="formSection">
              <legend className="formSectionTitle">Customer account details</legend>
              <div className="fields">
                <div className="field">
                  <label htmlFor="register-name">First name</label>
                  <input
                    autoComplete="given-name"
                    id="register-name"
                    maxLength={25}
                    name="firstName"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-last-name">Last name</label>
                  <input
                    autoComplete="family-name"
                    id="register-last-name"
                    maxLength={25}
                    name="lastName"
                    placeholder="Your last name"
                    required
                  />
                </div>
                <div className="field field--full">
                  <label htmlFor="register-address">Street address</label>
                  <input
                    autoComplete="street-address"
                    id="register-address"
                    maxLength={75}
                    name="address"
                    placeholder="Street address"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-city">City</label>
                  <input
                    autoComplete="address-level2"
                    id="register-city"
                    maxLength={50}
                    name="city"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-province">Province abbreviation</label>
                  <input
                    autoComplete="address-level1"
                    id="register-province"
                    maxLength={2}
                    name="province"
                    placeholder="e.g. AB"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-address-country">Country</label>
                  <input
                    autoComplete="country-name"
                    id="register-address-country"
                    maxLength={25}
                    name="addressCountry"
                    placeholder="Country"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-postal-code">Postal code</label>
                  <input
                    autoComplete="postal-code"
                    id="register-postal-code"
                    maxLength={7}
                    name="postalCode"
                    placeholder="Postal code"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-email">Email address</label>
                  <input
                    autoComplete="email"
                    id="register-email"
                    maxLength={50}
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-home-phone">Home phone</label>
                  <input
                    autoComplete="tel"
                    id="register-home-phone"
                    maxLength={20}
                    name="homePhone"
                    placeholder="Home phone number"
                    required
                    type="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-business-phone">Business phone (optional)</label>
                  <input
                    autoComplete="work tel"
                    id="register-business-phone"
                    maxLength={20}
                    name="businessPhone"
                    placeholder="Business phone number"
                    type="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-user-id">Username</label>
                  <input
                    autoComplete="username"
                    id="register-user-id"
                    maxLength={50}
                    minLength={3}
                    name="userId"
                    placeholder="Choose a user ID"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-password">Password</label>
                  <input
                    autoComplete="new-password"
                    id="register-password"
                    name="password"
                    maxLength={128}
                    minLength={8}
                    onChange={(event) => {
                      const value = event.target.value;
                      setPassword(value);
                      confirmPasswordRef.current?.setCustomValidity(
                        confirmPassword && value !== confirmPassword
                          ? "Passwords do not match."
                          : "",
                      );
                    }}
                    placeholder="Create a password"
                    required
                    type="password"
                    value={password}
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-confirm-password">
                    Confirm password
                  </label>
                  <input
                    autoComplete="new-password"
                    id="register-confirm-password"
                    name="confirmPassword"
                    maxLength={128}
                    minLength={8}
                    onChange={(event) => {
                      const value = event.target.value;
                      setConfirmPassword(value);
                      event.target.setCustomValidity(
                        value && value !== password
                          ? "Passwords do not match."
                          : "",
                      );
                    }}
                    ref={confirmPasswordRef}
                    aria-describedby={
                      confirmPassword ? "password-match-status" : undefined
                    }
                    placeholder="Enter your password again"
                    required
                    type="password"
                    value={confirmPassword}
                  />
                  {confirmPassword && (
                    <p
                      className={`passwordMatch${passwordsDoNotMatch ? " passwordMatch--error" : " passwordMatch--success"}`}
                      id="password-match-status"
                      aria-live="polite"
                    >
                      {passwordsMatch
                        ? "Passwords match."
                        : "Passwords do not match."}
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            <fieldset className="formSection">
              <legend className="formSectionTitle">Travel preferences</legend>
              <div className="fields">
                <div className="field field--full">
                  <label htmlFor="register-package">Travel package</label>
                  <select
                    id="register-package"
                    name="travelPackage"
                    onChange={(event) => {
                      const packageId = event.target.value;
                      setSelectedPackage(packageId);
                      const chosenPackage = travelPackages.find(
                        (travelPackage) => travelPackage.id === packageId,
                      );
                      if (chosenPackage) {
                        setReturnDate(
                          calculateReturnDate(
                            travelDate,
                            chosenPackage.durationDays,
                          ),
                        );
                      }
                    }}
                    value={selectedPackage}
                  >
                    <option value="">Choose a package (optional)</option>
                    {travelPackages.map((travelPackage) => (
                      <option key={travelPackage.id} value={travelPackage.id}>
                        {travelPackage.title} — {travelPackage.regions}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="register-dates">When are you planning to travel?</label>
                  <DatePicker
                    autoComplete="off"
                    dateFormat="MM/dd/yyyy"
                    id="register-dates"
                    name="dates"
                    onChange={(date) => {
                      const startDate = date
                        ? `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`
                        : "";
                      setTravelDate(startDate);
                      if (!date) {
                        setReturnDate("");
                        return;
                      }

                      const chosenPackage = travelPackages.find(
                        (travelPackage) => travelPackage.id === selectedPackage,
                      );
                      if (chosenPackage) {
                        setReturnDate(
                          calculateReturnDate(
                            startDate,
                            chosenPackage.durationDays,
                          ),
                        );
                      }
                    }}
                    placeholderText="MM/DD/YYYY"
                    required
                    selected={parseDateInput(travelDate)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-dates-end">When will you return?</label>
                  <DatePicker
                    autoComplete="off"
                    dateFormat="MM/dd/yyyy"
                    id="register-dates-end"
                    name="dates-end"
                    onChange={(date) => setReturnDate(formatDateValue(date))}
                    placeholderText="MM/DD/YYYY"
                    required
                    selected={parseDateInput(returnDate)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-country">
                    Where are you travelling to?
                  </label>
                  <select
                    defaultValue=""
                    id="register-country"
                    name="destinationRegion"
                    required
                  >
                    <option disabled value="">
                      Choose a region
                    </option>
                    <option value="Anhui">Anhui</option>
                    <option value="Beijing">Beijing</option>
                    <option value="Chongqing">Chongqing</option>
                    <option value="Fujian">Fujian</option>
                    <option value="Gansu">Gansu</option>
                    <option value="Guangdong">Guangdong</option>
                    <option value="Guangxi">Guangxi</option>
                    <option value="Guizhou">Guizhou</option>
                    <option value="Hainan">Hainan</option>
                    <option value="Hebei">Hebei</option>
                    <option value="Heilongjiang">Heilongjiang</option>
                    <option value="Henan">Henan</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hubei">Hubei</option>
                    <option value="Hunan">Hunan</option>
                    <option value="Inner Mongolia">Inner Mongolia</option>
                    <option value="Jiangsu">Jiangsu</option>
                    <option value="Jiangxi">Jiangxi</option>
                    <option value="Jilin">Jilin</option>
                    <option value="Liaoning">Liaoning</option>
                    <option value="Macau">Macau</option>
                    <option value="Ningxia">Ningxia</option>
                    <option value="Qinghai">Qinghai</option>
                    <option value="Shaanxi">Shaanxi</option>
                    <option value="Shandong">Shandong</option>
                    <option value="Shanghai">Shanghai</option>
                    <option value="Shanxi">Shanxi</option>
                    <option value="Sichuan">Sichuan</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tianjin">Tianjin</option>
                    <option value="Tibet">Tibet</option>
                    <option value="Xinjiang">Xinjiang</option>
                    <option value="Yunnan">Yunnan</option>
                    <option value="Zhejiang">Zhejiang</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="register-interest">
                    What interests you most?
                  </label>
                  <select
                    defaultValue=""
                    id="register-interest"
                    name="interest"
                    required
                  >
                    <option disabled value="">
                      Choose an interest
                    </option>
                    <option value="culture">Culture and history</option>
                    <option value="food">Food and local life</option>
                    <option value="nature">Nature and landscapes</option>
                    <option value="planning">Practical travel planning</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <label className="consent">
              <input name="updates" type="checkbox" />
              <span>
                I’d like to receive occasional travel inspiration and updates.
              </span>
            </label>

            <button className="submit" type="submit">
              Register your interest <span aria-hidden="true">→</span>
            </button>

            <p className="privacy">
              Your details are saved securely to our travel registration database.
            </p>
            </div>
            {isReviewing && (
              <section
                aria-labelledby="review-title"
                className="review"
              >
                <h3 id="review-title">Registration details</h3>
                <dl className="reviewList">
                  {reviewDetails.map(([label, value]) => (
                    <div className="reviewItem" key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                  <div className="reviewItem">
                    <dt>Password</dt>
                    <dd>Set (hidden for your privacy)</dd>
                  </div>
                </dl>
                <p className="privacy">
                  Your password is stored as a secure hash and is never shown.
                </p>
                {state?.error && (
                  <p className="passwordMatch passwordMatch--error" role="alert">
                    {state.error}
                  </p>
                )}
                <div className="reviewActions">
                  <button
                    className="reviewBack"
                    onClick={handleBackToEdit}
                    type="button"
                  >
                    Back to edit
                  </button>
                  <button className="submit" disabled={isPending} type="submit">
                    {isPending ? "Saving registration..." : "Confirm registration"}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </section>
            )}
          </form>

          {!isReviewing && (
            <p className="back">
              Not ready yet? <Link href="/">Keep exploring</Link>
            </p>
          )}
        </section>
      </main>
    </>
  );
}