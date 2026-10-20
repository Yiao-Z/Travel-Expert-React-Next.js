import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";

export const metadata = {
  title: "Landmarks & History | Travel China",
  description:
    "Explore the Great Wall, the Terracotta Army, and the stories behind China's historic landmarks.",
};

const landmarks = [
  {
    number: "01 / ANCIENT DEFENSE",
    title: "The Great Wall",
    description:
      "Follow a remarkable stretch of the Great Wall across mountain ridges and centuries of history.",
    image: "/images/great-wall.jpg",
    alt: "The Great Wall winding across green mountain ridges",
    className: "story-card story-card--wall",
  },
  {
    number: "02 / ANCIENT EMPIRE",
    title: "The Terracotta Army",
    description:
      "Meet the thousands of life-sized warriors created to guard China's first emperor in the afterlife.",
    image: "/images/stone-army.jpg",
    alt: "Rows of ancient Terracotta Army warriors",
    className: "story-card story-card--army",
  },
  {
    number: "03 / ART & HERITAGE",
    title: "Stories in every detail",
    description:
      "Discover the art, architecture, and traditions that carry China's history into the present.",
    image: "/images/chinese-art.webp",
    alt: "Traditional Chinese landscape painting",
    className: "story-card story-card--art",
  },
];

export default function LandmarksAndHistoryPage() {
  return (
    <>
      <SiteHeader />
      <main className="story-page">
        <section className="story-hero">
          <Image
            alt="A historic section of the Great Wall crosses the mountains"
            className="story-hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src="/images/great-wall.jpg"
          />
          <div className="story-hero__overlay" />
          <div className="story-hero__content">
            <p className="eyebrow">Things to do · Landmarks &amp; history</p>
            <h1>Walk through the stories of China.</h1>
            <p>
              From the Great Wall to the Terracotta Army, discover the places
              that bring thousands of years of history to life.
            </p>
            <Link className="hero-cta" href="#landmark-highlights">
              Explore the highlights <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </section>

        <section className="story-content" id="landmark-highlights">
          <header className="story-content__heading">
            <p className="eyebrow section-eyebrow">Timeless places</p>
            <h2>History you can step into.</h2>
            <p>
              See the landmarks, art, and ancient wonders that make every
              journey through China unforgettable.
            </p>
          </header>

          <div className="story-card-grid">
            {landmarks.map((landmark) => (
              <article className={landmark.className} key={landmark.title}>
                <div className="story-card__image">
                  <Image
                    alt={landmark.alt}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    src={landmark.image}
                  />
                </div>
                <div className="story-card__body">
                  <span>{landmark.number}</span>
                  <h3>{landmark.title}</h3>
                  <p>{landmark.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
