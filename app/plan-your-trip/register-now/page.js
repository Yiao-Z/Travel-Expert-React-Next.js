"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import SiteHeader from "../../apptopbar";
import "./register-now.css";

export default function RegisterPage() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.push("/plan-your-trip/register-now/confirmation");
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
              <span>01 / YOUR TRIP</span>
            </div>
            <h2 id="form-title">Let’s plan something unforgettable.</h2>
            <p>
              Tell us a little about yourself and what you’d love to discover.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field">
                <label htmlFor="register-name">First name</label>
                <input
                  autoComplete="name"
                  id="register-name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="register-last-name">Last name</label>
                <input
                  autoComplete="family-name"
                  id="register-last-name"
                  name="last-name"
                  placeholder="Your last name"
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
                <label htmlFor="register-phone">Phone number</label>
                <input
                  autoComplete="tel"
                  id="register-phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  required
                  type="tel"
                />
              </div>

              <div className="field">
                <label htmlFor="register-dates">When are you planning to travel?</label>
                <input
                  autoComplete="off"
                  id="register-dates"
                  name="dates"
                  placeholder="MM/DD/YYYY"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="register-dates-end">When will you return?</label>
                <input
                  autoComplete="off"
                  id="register-dates-end"
                  name="dates-end"
                  placeholder="MM/DD/YYYY"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="register-country">
                  Where are you travelling from?
                </label>
                <input
                  autoComplete="country-name"
                  id="register-country"
                  name="country"
                  placeholder="Country or region"
                  required
                />
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
              This preview does not send or save your details.
            </p>
          </form>

          <p className="back">
            Not ready yet? <Link href="/">Keep exploring</Link>
          </p>
        </section>
      </main>
    </>
  );
}