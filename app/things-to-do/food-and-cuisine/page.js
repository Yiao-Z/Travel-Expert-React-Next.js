import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../apptopbar";
import "./food-and-cuisine.css";

export const metadata = {
  title: "Food & Cuisine | Travel China",
  description:
    "Explore regional Chinese dishes, local ingredients, and memorable food experiences.",
};

const dishes = [
  {
    number: "01 / BEIJING",
    name: "Peking Duck",
    description:
      "A famous Beijing dish featuring roasted duck with crispy skin, thin pancakes, scallions, and sauce.",
    image: "/images/peking-duck.png",
    alt: "Peking duck served with pancakes and traditional accompaniments",
    url: "https://www.nationalgeographic.com/travel/article/peking-duck-complex-history-chinese-classic",
  },
  {
    number: "02 / SICHUAN",
    name: "Mapo Tofu",
    description:
      "A popular Sichuan dish made with soft tofu and a savoury, spicy sauce.",
    image: "/images/mapo-tofu.png",
    alt: "A bowl of spicy tofu with savory sauce",
    url: "https://thewoksoflife.com/ma-po-tofu-real-deal/",
  },
  {
    number: "03 / SHANGHAI",
    name: "Xiaolongbao",
    description:
      "Delicate soup dumplings filled with seasoned meat and flavourful broth.",
    image: "/images/xialongbao.png",
    alt: "Xiaolongbao soup dumplings",
    url: "https://thewoksoflife.com/steamed-shanghai-soup-dumplings-xiaolongbao/",
  },
  {
    number: "04 / NOODLES",
    name: "Hand-Pulled Noodles",
    description:
      "Freshly stretched noodles served in warming broth or with delicious sauces.",
    image: "/images/hand-pulled-noodles.png",
    alt: "Fresh hand-pulled noodles",
    url: "https://redhousespice.com/hand-pulled-noodles/",
  },
  {
    number: "05 / STREET FOOD",
    name: "Jianbing",
    description:
      "A savoury Chinese breakfast crepe with egg, sauces, herbs, and crunchy toppings.",
    image: "/images/jianbing.png",
    alt: "Jianbing savory Chinese breakfast crepe",
    url: "https://redhousespice.com/jian-bing-chinese-crepes/",
  },
  {
    number: "06 / DUMPLINGS",
    name: "Steamed Dumplings",
    description:
      "Soft dumplings with different fillings, usually served with a dipping sauce.",
    image: "/images/dumplings.png",
    alt: "Steamed dumplings served with dipping sauce",
    url: "https://thewoksoflife.com/dumpling-recipe-youll-ever-need/",
  },
];

export default function FoodAndCuisinePage() {
  return (
    <>
      <SiteHeader />

      <main className="foodPage">
        <section className="foodHero">
          <Image
            alt=""
            className="foodHeroImage"
            fill
            loading="eager"
            sizes="100vw"
            src="/image/food-and-culture.png"
            unoptimized
          />
          <div className="foodHeroOverlay" />
          <div className="foodHeroContent">
            <p className="foodEyebrow">Discover Chinese cuisine</p>
            <h1>Food &amp; Cuisine in China</h1>
            <p>
              Explore delicious dishes, from comforting bowls of noodles to
              delicate dumplings, and discover the regional flavors that make
              every meal unique.
            </p>
            <div className="foodHeroActions">
              <Link className="foodButton" href="#food-highlights">
                Explore the dishes <span aria-hidden="true">↓</span>
              </Link>
              <Link className="foodButton" href="/things-to-do/culture">
                Discover the culture <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="foodSection" id="food-highlights">
          <header className="foodHeading">
            <p className="foodEyebrow">A journey through flavour</p>
            <h2>Must-Try Chinese Dishes</h2>
            <p>
              Every region offers its own ingredients, cooking methods, and
              flavours. Here are six dishes to look for on your trip.
            </p>
          </header>

          <div className="foodGrid">
            {dishes.map((dish) => (
              <article className="foodCard" key={dish.name}>
                <div className="foodCardImage">
                  <Image
                    alt={dish.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw"
                    src={dish.image}
                  />
                </div>
                <div className="foodCardBody">
                  <span>{dish.number}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <Link
                    className="foodCardLink"
                    href={dish.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore this dish <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="foodTips">
          <p className="foodEyebrow">Tips for food lovers</p>
          <h2>Enjoy Every Bite</h2>
          <ul className="foodTipsList">
            <li>Explore local restaurants and food markets.</li>
            <li>Ask about ingredients if you have allergies.</li>
            <li>Check spice levels before ordering.</li>
            <li>Try local specialities in each destination.</li>
          </ul>
        </section>

      </main>
    </>
  );
}
