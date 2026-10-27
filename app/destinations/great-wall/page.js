/* made by Alvin */

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";

export const metadata = {
  title: "The Great Wall | Travel China",
  description:
    "Explore the Great Wall of China and plan a thoughtful visit to this historic landmark.",
};

const highlights = [
  {
    number: "01 / A LIVING HISTORY",
    title: "Built across generations",
    description:
      "The Great Wall is a network of walls and fortifications built and rebuilt across many centuries. Its routes cross mountains, valleys, and open countryside.",
  },
  {
    number: "02 / CHOOSE YOUR ROUTE",
    title: "Find a section that suits you",
    description:
      "Sections near Beijing offer different experiences, from restored paths with visitor facilities to quieter, rugged stretches. Check access and conditions before setting out.",
  },
  {
    number: "03 / GO PREPARED",
    title: "Make time for the journey",
    description:
      "Wear sturdy shoes, bring water, and allow time for steep steps and changing weather. Use official entrances and follow local guidance to protect the site.",
  },
];

export default function GreatWallPage() {
  return (
    <>
      <SiteHeader />
      <main className="story-page">
        <section className="story-hero">
          <Image
            alt="The Great Wall winding across green mountain ridges"
            className="story-hero__image"
            fill
            priority
            sizes="100vw"
            src="/images/great-wall-background.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Destinations · The Great Wall</p>
            <h1>Walk the story written across the mountains.</h1>
            <p>
              Follow ancient stone paths, take in sweeping mountain views, and
              discover one of China’s most remarkable landmarks.
            </p>
            <Link className="hero-cta" href="#great-wall-highlights">
              Plan your visit <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content" id="great-wall-highlights">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">A landmark through time</p>
            <h2>More than a wall.</h2>
            <p>
              Discover its history, choose a route that fits your day, and
              prepare for a memorable walk through China’s mountain landscape.
            </p>
          </header>
          <div className="story-card-grid">
            {highlights.map((highlight) => (
              <article className="story-card" key={highlight.number}>
                <div className="story-card__body">
                  <span>{highlight.number}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="destination-page__next">
            <Link href="/destinations/travel-essentials">
              Read the travel essentials <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
