import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";
import "./when-to-visit.css";

export const metadata = {
  title: "When to Visit China | Travel China",
  description:
    "Find the best seasons to visit China and plan around the busy National Day Golden Week holiday.",
};

const seasons = [
  {
    number: "01 / MARCH–MAY",
    title: "Spring",
    description:
      "Mild weather and fresh blooms make spring a lovely time to explore cities and countryside. Conditions vary between northern and southern China.",
  },
  
  {
    number: "03 / JUNE–AUGUST",
    title: "Summer",
    description:
      "Long days suit mountain and northern-region trips, though many places are hot, humid, or rainy. Expect busy domestic travel during school holidays.",
  },
  
  {
    number: "02 / SEPTEMBER–NOVEMBER",
    title: "Autumn",
    description:
      "Comfortable temperatures and clear days make autumn a popular choice. Plan around the early-October National Day holiday if you prefer quieter travel.",
  },
  
  {
    number: "04 / DECEMBER–FEBRUARY",
    title: "Winter",
    description:
      "Travel is quieter in many places, but temperatures can be very cold in the north. Southern destinations are generally milder, so pack for your region.",
  },
];

export default function WhenToVisitPage() {
  return (
    <>
      <SiteHeader />
      <main className="when-to-visit-page">
        <section className="story-hero">
          <Image
            alt="The Great Wall winding across mountain ridges in autumn"
            className="story-hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src="/images/great-wall.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Plan your trip · When to visit</p>
            <h1>Find your season in China.</h1>
            <p>
              Choose a time that suits your journey, and keep major public
              holidays in mind when planning your route.
            </p>
            <Link className="hero-cta" href="#golden-week">
              Check the dates to avoid <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content when-seasons" id="seasons">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">A guide to the seasons</p>
            <h2>Travel at your own pace.</h2>
            <p>
              China spans many climates, so the best time depends on where
              you’re going. Spring and autumn are comfortable in many popular
              regions, but check local conditions before you book.
            </p>
          </header>

          <div className="season-grid">
            {seasons.map((season) => (
              <article className="season-card" key={season.title}>
                <span>{season.number}</span>
                <h3>{season.title}</h3>
                <p>{season.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          aria-labelledby="golden-week-title"
          className="golden-week-section"
          id="golden-week"
        >
          <div className="golden-week-card">
            <div className="golden-week-card__date">
              <span>CHINA NATIONAL DAY</span>
              <strong>OCT 1–7</strong>
              <span>ANNUAL PUBLIC HOLIDAY</span>
            </div>
            <div className="golden-week-card__content">
              <p className="eyebrow">When to avoid</p>
              <h2 id="golden-week-title">
                Skip Golden Week if you can.
              </h2>
              <p>
                China’s National Day holiday, commonly called Golden Week,
                brings a huge surge in domestic travel. Popular attractions,
                trains, airports, and hotels can be exceptionally busy, with
                higher prices and limited availability. If your dates are
                flexible, avoid planning a China trip around October 1–7.
              </p>
              <div className="golden-week-advice">
                <span aria-hidden="true">!</span>
                <p>
                  If you must travel then, check the official holiday schedule
                  for that year, reserve transport and accommodation early, and
                  allow extra time for crowds and queues.
                </p>
              </div>
            </div>
          </div>
          <Link className="register-button" href="/plan-your-trip/register-now">
            Register now <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}
