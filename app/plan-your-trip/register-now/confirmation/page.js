import Link from "next/link";
import SiteHeader from "../../../apptopbar";
import "./confirmation.css";

export const metadata = {
  title: "Thank You | Travel China",
  description:
    "Thank you for registering your interest in traveling to China.",
};

export default function RegistrationConfirmationPage() {
  return (
    <>
      <SiteHeader />
      <main className="confirmation-page">
        <section
          aria-labelledby="confirmation-title"
          className="confirmation-card"
        >
          <span aria-hidden="true" className="confirmation-card__check">
            ✓
          </span>
          <p className="confirmation-card__eyebrow">Your journey starts here</p>
          <h1 id="confirmation-title">Thank you for registering!</h1>
          <p className="confirmation-card__description">
            We’re glad you’re interested in discovering China. Your registration
            and travel preferences have been saved.
          </p>
          <p className="confirmation-card__notice">
            Your account password was securely hashed before it was stored.
          </p>
          <div className="confirmation-card__actions">
            <Link className="confirmation-card__primary" href="/">
              Explore the travel guide <span aria-hidden="true">→</span>
            </Link>
            <Link className="confirmation-card__secondary" href="/destinations">
              Browse destinations
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}