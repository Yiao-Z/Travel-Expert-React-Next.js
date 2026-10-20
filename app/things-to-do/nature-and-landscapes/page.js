import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";

export const metadata = {
  title: "Nature & Landscapes | Travel China",
  description:
    "Discover China's river valleys, mountain landscapes, and atmospheric cities.",
};

const landscapes = [
  {
    number: "01 / RIVERS & MOUNTAINS",
    title: "The Li River",
    description:
      "Drift past the limestone karsts of Guilin, where quiet river bends reveal a new mountain silhouette at every turn.",
    image: "/images/china-lakeview.jpg",
    alt: "A boat gliding across the Li River beneath Guilin's karst mountains",
    className: "story-card story-card--river",
  },
  {
    number: "02 / MOUNTAIN TRAILS",
    title: "The Great Wall",
    description:
      "Follow the old stone path as it climbs over forested mountain ridges and disappears into the distance.",
    image: "/images/great-wall.jpg",
    alt: "The Great Wall crossing a range of green mountains",
    className: "story-card story-card--mountains",
  },
  {
    number: "03 / RIVERSIDE NIGHTS",
    title: "China after dark",
    description:
      "Watch a riverside city glow after sunset, with reflections, lantern light, and mountain silhouettes.",
    image: "/images/nighttime-china.jpg",
    alt: "A Chinese riverside city illuminated at night",
    className: "story-card story-card--night",
  },
];

export default function NatureAndLandscapesPage() {
  return (
    <>
      <SiteHeader />
      <main className="story-page nature-page">
        <section className="story-hero">
          <Image
            alt="Tall sandstone peaks rise above the forests of Zhangjiajie"
            className="story-hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src="/images/background-stoney.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Things to do · Nature &amp; landscapes</p>
            <h1>Find your way into the wild.</h1>
            <p>
              Follow winding rivers, wander across mountain ridges, and see
              China in a whole new light.
            </p>
            <Link className="hero-cta" href="#landscape-highlights">
              Explore the landscapes <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content" id="landscape-highlights">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">A world outdoors</p>
            <h2>Take the scenic route.</h2>
            <p>
              From peaceful river journeys to forested mountain paths, discover
              the many landscapes that make China unforgettable.
            </p>
          </header>

          <div className="story-card-grid nature-card-list">
            {landscapes.map((landscape) => (
              <article
                className={`${landscape.className} nature-card-row`}
                key={landscape.title}
              >
                <div className="story-card__image">
                  <Image
                    alt={landscape.alt}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    src={landscape.image}
                  />
                </div>
                <div className="story-card__body">
                  <span>{landscape.number}</span>
                  <h3>{landscape.title}</h3>
                  <p>{landscape.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
