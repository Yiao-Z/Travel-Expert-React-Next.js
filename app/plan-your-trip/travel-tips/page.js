// Travel tips page made by Andrew Maje
// Ai was use in some of the code generation

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";
import "./travel-tips.css";

export const metadata = {
  title: "China Travel Tips | Travel China",
  description:
    "Practical tips for planning a smooth trip to China, from payments and getting around to seasonal travel.",
};

const travelTips = [
  {
    number: "01 / BEFORE YOU GO",
    title: "Check entry requirements",
    description:
      "Visa and entry rules depend on your nationality and can change. Before booking, check the latest guidance from an official Chinese embassy or consulate for your country.",
  },
  {
    number: "02 / EVERYDAY PAYMENTS",
    title: "Prepare more than one way to pay",
    description:
      "Mobile payment apps are widely used, but setup and card compatibility can vary. Set up a suitable payment option before you leave, and carry a backup card and some cash.",
  },
  {
    number: "03 / STAY CONNECTED",
    title: "Plan your connectivity",
    description:
      "Compare roaming, eSIM, and local SIM options before your trip. Save your hotel details, important addresses, and an offline map in case you temporarily lose internet access.",
  },
  {
    number: "04 / GETTING AROUND",
    title: "Book long-distance trains early",
    description:
      "Popular routes can sell out, especially around public holidays. Use official railway booking channels, enter your passport details carefully, and arrive at the station with time to spare.",
  },
  {
    number: "05 / LANGUAGE",
    title: "Keep key details ready to show",
    description:
      "Have your destination, hotel address, and important travel information saved in Chinese as well as your own language. An offline translation tool can be useful on the go.",
  },
  {
    number: "06 / TIMING",
    title: "Build flexibility into your itinerary",
    description:
      "China’s seasons and conditions vary widely by region. Check local forecasts and holiday dates, and allow extra time for busy stations, popular sights, and longer journeys.",
  },
  {
    number: "07 / TRAVEL INSURANCE",
    title: "Get the right coverage",
    description:
      "Make sure your travel insurance covers your planned activities, and check whether you need additional coverage for medical care, evacuation, or lost items.",
  },
  {
    number: "08 / WHEN TO VISIT",
    title: "Think before you book",
    description:
      "See seasonal guidance and learn why many travelers avoid China’s busy National Day Golden Week.",
  }
];

export default function TravelTips() {
  return (
    <>
      <SiteHeader />
      <main className="travel-tips-page">
        <section className="story-hero">
          <Image
            alt="A scenic view of stone mountains"
            className="story-hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src="/images/background-stoney.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Plan your trip · Travel tips</p>
            <h1>A little preparation goes a long way.</h1>
            <p>
              Keep these practical pointers close as you plan a more relaxed,
              rewarding journey through China.
            </p>
            <Link className="hero-cta" href="#travel-tips">
              Explore the travel tips <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content travel-tips-content" id="travel-tips">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">The essentials</p>
            <h2>Travel well, from day one.</h2>
            <p>
              A few small preparations can make getting around and enjoying
              your time in China much easier.
            </p>
          </header>

          <div className="travel-tips-grid">
            {travelTips.map((tip) => (
              <article className="travel-tip-card" key={tip.number}>
                <span>{tip.number}</span>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="travel-tips-next">
          <p className="eyebrow">Make the most of your trip</p>
          <h2>Choose your dates with care.</h2>
          <p>
            Avoid the busiest times of year and check local forecasts to help you plan a smoother, more rewarding journey.
          </p>
          <Link href="/plan-your-trip/when-to-visit">
            When to visit <span aria-hidden="true">→</span>
          </Link>
          <Link
            className="travel-tips-next__secondary"
            href="/plan-your-trip/register-now"
          >
            Register now <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}
