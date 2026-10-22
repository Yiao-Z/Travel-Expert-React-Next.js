import Image from "next/image";
import SiteHeader from "../../apptopbar";
import "./culture.css";

export const metadata = {
    title: "Chinese Culture | Travel China",
    description:
        "Explore Chinese festivals, traditional arts, tea culture, and travel tips.",
};

const culturalHighlights = [
    {
        number: "01 / CELEBRATIONS",
        title: "Chinese Festivals",
        description:
            "Welcome the Lunar New Year with lanterns, family reunions, festive meals, and lively lion dances. In autumn, the Mid-Autumn Festival brings mooncakes and moonlit gatherings.",
        image: "/images/chinese-festivals.jpg",
        alt: "Lion dancers perform beneath red lanterns during a Chinese festival",
    },
    {
        number: "02 / ART & HERITAGE",
        title: "Traditional Chinese Arts",
        description:
            "Discover the expressive brushwork of Chinese ink painting and calligraphy, where line, balance, and empty space bring landscapes and ideas to life.",
        image: "/images/traditional-chinese-art.avif",
        alt: "Traditional Chinese artwork",
    },
    {
        number: "03 / DAILY TRADITIONS",
        title: "The Art of Chinese Tea",
        description:
            "Discover the role of tea in Chinese hospitality and social gatherings, and learn about the traditions behind preparing and sharing tea.",
        image: "/images/chinese-tea-ceremony.jpg",
        alt: "Chinese tea ceremony",
    },
];

export function CultureSection() {
    return (
        <section className="foodCulture" id="culture-highlights">
            <header className="foodCultureHeading">
                <p className="foodCultureEyebrow">Traditions &amp; heritage</p>
                <h2>A culture rich in history.</h2>
                <p>
                    From vibrant festivals to traditional art and tea ceremonies,
                    discover cultural experiences throughout China.
                </p>
            </header>

            <div className="foodCultureGrid">
                {culturalHighlights.map((item) => (
                    <article className="foodCultureCard" key={item.title}>
                        {item.image ? (
                            <div className="foodCultureImage">
                                <Image
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw"
                                    src={item.image}
                                />
                            </div>
                        ) : (
                            <div
                                aria-label="Tea, the Chinese character for tea"
                                className="foodCultureTeaArt"
                                role="img"
                            >
                                茶
                            </div>

                        )}
                        <div className="foodCultureBody">
                            <span>{item.number}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            <section className="cultureTips">
                <p className="cultureEyebrow">Tips for cultural explorers</p>
                <h2>Experience China’s Culture</h2>
                <ul className="cultureTipsList">
                    <li>Learn about local customs before visiting cultural sites.</li>
                    <li>Respect traditions and etiquette at temples and historic places.</li>
                    <li>Ask permission before photographing people or ceremonies.</li>
                    <li>Join a traditional tea ceremony or cultural festival when available.</li>
                </ul>
            </section>
        </section>
    );
}

export default function CulturePage() {
    return (
        <>
            <SiteHeader />
            <main className="foodPage">
                <section className="culturePageHero">
                    <Image
                        alt=""
                        className="culturePageHeroImage"
                        fill
                        priority
                        sizes="100vw"
                        src="/images/chinese-culture.jpg"
                    />
                    <div className="culturePageHeroOverlay" />
                    <div className="culturePageHeroContent">
                        <p className="foodCultureEyebrow">
                            Traditions &amp; heritage
                        </p>
                        <h1>Discover the culture of China.</h1>
                        <p>
                            Explore the celebrations, arts, and everyday
                            traditions that make each journey unique.
                        </p>
                    </div>
                </section>
                <CultureSection />
            </main>
        </>
    );
}
