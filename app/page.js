import Link from "next/link";
import SiteHeader from "./apptopbar";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">A world waiting to be discovered</p>
            <h1>Find your own China.</h1>
            <p className="hero-description">
              From ancient wonders to vibrant cities, begin a journey unlike
              any other.
            </p>
            <Link className="hero-cta" href="/destinations">
              Explore China <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Link className="scroll-cue" href="/destinations">
            <span aria-hidden="true">↓</span> Scroll to explore
          </Link>
        </section>

        <section className="content-section">
          <p className="eyebrow section-eyebrow">A land of many worlds</p>
          <h2>One journey. Endless discoveries.</h2>
          <p className="section-description">
            Wander through storied cities, walk the Great Wall, and find a new
            perspective in every region.
          </p>
          <div className="feature-grid" id="experiences">
            <article className="feature-card">
              <span>01 / PLACES</span>
              <h3>Ancient wonders</h3>
              <p>Trace centuries of history through remarkable landmarks.</p>
            </article>
            <article className="feature-card">
              <span>02 / CULTURE</span>
              <h3>Everyday discoveries</h3>
              <p>Meet local traditions, flavors, and ways of life.</p>
            </article>
            <article className="feature-card" id="plan">
              <span>03 / YOUR JOURNEY</span>
              <h3>Make it your own</h3>
              <p>Find inspiration and start planning your trip to China.</p>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow section-eyebrow">About us</p>
          <h2>Helping you discover China, your way.</h2>
          <p>
            We share inspiration and practical guidance to help make every
            journey through China memorable.
          </p>
        </section>
      </main>
    </>
  );
}
