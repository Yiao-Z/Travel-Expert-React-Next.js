import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";

export const metadata = {
  title: "Travel Essentials | Travel China",
  description:
    "Prepare for a trip to China with practical guidance on documents, payments, connectivity, and health.",
};

const essentials = [
  {
    number: "01 / DOCUMENTS",
    title: "Check entry requirements",
    description:
      "Visa and entry rules depend on your nationality and can change. Confirm current requirements with an official Chinese embassy or consulate before booking.",
  },
  {
    number: "02 / PAYMENTS",
    title: "Set up payment options",
    description:
      "Mobile payment services are widely used, but setup and card compatibility vary. Prepare a suitable option before departure and carry a backup card and some cash.",
  },
  {
    number: "03 / CONNECTIVITY",
    title: "Plan how you’ll stay connected",
    description:
      "Compare roaming, eSIM, and local SIM options. Save hotel details, important addresses, and an offline map so you can access them without a connection.",
  },
  {
    number: "04 / HEALTH & COMFORT",
    title: "Pack for your itinerary",
    description:
      "Bring any personal medication and check local weather for each destination. Comfortable walking shoes, a refillable water bottle, and weather-appropriate layers are useful.",
  },
  {
    number: "05 / GETTING AROUND",
    title: "Keep key details handy",
    description:
      "Save your accommodation address in Chinese and your own language. Check official transport information and leave extra time for stations and busy attractions.",
  },
  {
    number: "06 / BACKUP PLANS",
    title: "Keep copies of important details",
    description:
      "Store copies of your travel documents separately from the originals, and keep key contacts and reservations accessible offline.",
  },
];

export default function TravelEssentialsPage() {
  return (
    <>
      <SiteHeader />
      <main className="story-page">
        <section className="story-hero">
          <Image
            alt="Mountain peaks rising through mist in China"
            className="story-hero__image"
            fill
            priority
            sizes="100vw"
            src="/images/travel-essentials.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Destinations · Travel essentials</p>
            <h1>A little preparation goes a long way.</h1>
            <p>
              Take care of the practical details before you go, so you can spend
              more time enjoying the places and experiences along the way.
            </p>
            <Link className="hero-cta" href="#essentials-checklist">
              Explore the essentials <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content" id="essentials-checklist">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">Before you travel</p>
            <h2>Start with the essentials.</h2>
            <p>
              A few simple checks can make travel smoother. Rules and services
              may change, so confirm details with official providers before
              departure.
            </p>
          </header>
          <div className="story-card-grid">
            {essentials.map((item) => (
              <article className="story-card" key={item.number}>
                <div className="story-card__body">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="destination-page__next">
            <Link href="/plan-your-trip/travel-tips">
              More travel tips <span aria-hidden="true">→</span>
            </Link>
            <Link href="/plan-your-trip/register-now">
              Register your interest <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
