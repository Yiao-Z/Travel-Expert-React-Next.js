
import Image from "next/image";
import SiteHeader from "../../apptopbar";
import "./our-story.css";

export const metadata = {
    title: "Our Story | AAA Travel Agency",
    description:
        "Discover AAA Travel Agency and our passion for exploring China's history, culture, and destinations.",
};

export default function AboutUsPage() {
    return (
        <>
            <SiteHeader />

            <main className="our-story">
                <section className="our-story__hero">
                    <Image
                        src="/images/china-lakeview.jpg"
                        alt="A scenic view of China's historic landmarks"
                        fill
                        priority
                        sizes="100vw"
                        className="our-story__hero-image"
                    />

                    <div className="our-story__overlay" />

                    <div className="our-story__hero-content">
                        <p className="our-story__eyebrow">
                            ABOUT AAA TRAVEL AGENCY
                        </p>
                        <h1>Every journey tells a story.</h1>
                        <p>
                            Discover new places, experience different cultures,
                            and create unforgettable memories with us.
                        </p>
                    </div>
                </section>

                <section className="our-story__intro">
                    <p className="our-story__eyebrow">OUR STORY</p>
                    <h2>Travel begins with a sense of wonder.</h2>

                    <p>
                        At AAA Travel Agency, we believe that travel is more
                        than visiting new places. It is about discovering
                        different cultures, learning from history, tasting
                        new flavors, and creating memories that last a lifetime.
                    </p>

                    <p>
                        Our Travel China project was created to inspire travelers
                        to explore the beauty and diversity of China, from its
                        ancient landmarks and vibrant cities to its traditional
                        cuisine and cultural experiences.
                    </p>

                    <p>
                        Through our website, we aim to help travelers discover
                        destinations and find inspiration for their next
                        adventure. Every destination has a story to tell,
                        and we invite you to discover yours with us.
                    </p>
                </section>

                <section className="our-story__values">
                    <article className="our-story__card" id="mission">
                        <span>01</span>
                        <h3>Our Mission</h3>
                        <p>
                            To inspire travelers to explore new destinations,
                            appreciate different cultures, and enjoy meaningful
                            travel experiences.
                        </p>
                    </article>

                    <article className="our-story__card">
                        <span>02</span>
                        <h3>Our Vision</h3>
                        <p>
                            To encourage a world where travel brings people
                            closer to different cultures, traditions, and
                            ways of life.
                        </p>
                    </article>

                    <article className="our-story__card">
                        <span>03</span>
                        <h3>Our Values</h3>
                        <p>
                            We value curiosity, cultural appreciation,
                            responsible exploration, and memorable journeys.
                        </p>
                    </article>
                </section>

                <section className="our-story__ending">
                    <p className="our-story__eyebrow">YOUR NEXT ADVENTURE</p>
                    <h2>Discover the wonders of China.</h2>
                    <p>
                        From historic landmarks to unforgettable food and
                        cultural traditions, let your journey of discovery begin.
                    </p>
                </section>
            </main>
        </>
    );
}