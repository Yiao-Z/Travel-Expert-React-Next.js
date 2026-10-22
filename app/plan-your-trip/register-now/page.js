"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import SiteHeader from "../../apptopbar";
import "./register-now.css";

function formatDateInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);

  if (digits.length >= 5) {
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  if (digits.length === 2) {
    return `${digits}/`;
  }
  return digits;
}

export default function RegisterPage() {
  const router = useRouter();
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewDetails, setReviewDetails] = useState([]);
  const confirmPasswordRef = useRef(null);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsDoNotMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  function handleSubmit(event) {
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
        "Primary interest",
        event.currentTarget.elements.interest.selectedOptions[0].text,
      ],
      ["Travel updates", formData.has("updates") ? "Yes" : "No"],
    ]);
    setIsReviewing(true);
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

          <form className="form" onSubmit={handleSubmit}>
            <div hidden={isReviewing}>
            <fieldset className="formSection">
              <legend className="formSectionTitle">Customer account details</legend>
              <div className="fields">
                <div className="field">
                  <label htmlFor="register-name">First name</label>
                  <input
                    autoComplete="given-name"
                    id="register-name"
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
                    name="city"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-province">Province</label>
                  <input
                    autoComplete="address-level1"
                    id="register-province"
                    name="province"
                    placeholder="Province"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-address-country">Country</label>
                  <input
                    autoComplete="country-name"
                    id="register-address-country"
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
                    name="homePhone"
                    placeholder="Home phone number"
                    required
                    type="tel"
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-business-phone">Business phone (Optional)</label>
                  <input
                    autoComplete="work tel"
                    id="register-business-phone"
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
                <div className="field">
                  <label htmlFor="register-dates">When are you planning to travel?</label>
                  <input
                    autoComplete="off"
                    id="register-dates"
                    name="dates"
                    onChange={(event) =>
                      setTravelDate(formatDateInput(event.target.value))
                    }
                    placeholder="MM/DD/YYYY"
                    required
                    value={travelDate}
                  />
                </div>
                <div className="field">
                  <label htmlFor="register-dates-end">When will you return?</label>
                  <input
                    autoComplete="off"
                    id="register-dates-end"
                    name="dates-end"
                    onChange={(event) =>
                      setReturnDate(formatDateInput(event.target.value))
                    }
                    placeholder="MM/DD/YYYY"
                    required
                    value={returnDate}
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
              Your details stay in this preview and are not sent anywhere.
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
                  This is a preview. Your information is not sent or saved.
                </p>
                <div className="reviewActions">
                  <button
                    className="reviewBack"
                    onClick={() => setIsReviewing(false)}
                    type="button"
                  >
                    Back to edit
                  </button>
                  <button
                    className="submit"
                    onClick={() =>
                      router.push("/plan-your-trip/register-now/confirmation")
                    }
                    type="button"
                  >
                    Confirm registration <span aria-hidden="true">→</span>
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