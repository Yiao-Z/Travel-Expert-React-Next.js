import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";

export const metadata = {
  title: "Getting Around China | Travel China",
  description:
    "Learn how to plan journeys around China by train, city transit, and taxi.",
};

const transportOptions = [
  {
    number: "01 / BETWEEN CITIES",
    title: "High-speed rail",
    description:
      "China's rail network connects many major cities quickly and comfortably. Compare routes and book through official channels, and bring the travel document used for your reservation.",
  },
  {
    number: "02 / IN THE CITY",
    title: "Metro and public transit",
    description:
      "Metro systems are a convenient way to cross large cities. Check local ticketing and payment options before you travel, since they vary by city.",
  },
  {
    number: "03 / SHORT JOURNEYS",
    title: "Taxis and ride-hailing",
    description:
      "Use official taxi ranks or a trusted ride-hailing service. Keep your destination written in Chinese and confirm the vehicle and route before setting off.",
  },
];

export default function GettingAroundPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="story-hero">
          <Image
            alt="A mountain lake and green landscape in China"
            className="story-hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src="/images/china-lakeview.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Plan your trip · Getting around</p>
            <h1>Make every connection part of the journey.</h1>
            <p>
              From fast intercity trains to local metro lines, choose the
              transport that fits your route and leave room for the unexpected.
            </p>
            <Link className="hero-cta" href="#transport-options">
              Explore your options <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content" id="transport-options">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">Travel with confidence</p>
            <h2>Choose the right way to go.</h2>
            <p>
              Transport options and ticketing rules differ by region. Check
              current details with official providers before your journey.
            </p>
          </header>

          <div className="feature-grid">
            {transportOptions.map((option) => (
              <article className="feature-card" key={option.title}>
                <span>{option.number}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}