"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "../../apptopbar";
import { travelPackages } from "./packages";
import "./packages.css";

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPackages = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return travelPackages;

    return travelPackages.filter((travelPackage) =>
      [
        travelPackage.title,
        travelPackage.regions,
        travelPackage.category,
        travelPackage.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [searchTerm]);

  return (
    <>
      <SiteHeader />
      <main className="packages-page">
        <section className="packages-hero">
          <p className="packages-eyebrow">Plan your trip · Packages</p>
          <h1>Find a journey that feels like yours.</h1>
          <p>
            Explore a few starting points for your China adventure, then carry
            your favorite into the registration form.
          </p>
        </section>

        <section aria-labelledby="packages-title" className="packages-content">
          <div className="packages-heading">
            <div>
              <p className="packages-eyebrow">A thoughtful place to start</p>
              <h2 id="packages-title">Explore travel packages</h2>
            </div>
            <label className="packages-search">
              <span>Search packages</span>
              <input
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Try Beijing, food, or nature"
                type="search"
                value={searchTerm}
              />
            </label>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="packages-grid">
              {filteredPackages.map((travelPackage) => (
                <article className="package-card" key={travelPackage.id}>
                  <div className="package-card__image">
                    <Image
                      alt={travelPackage.imageAlt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      src={travelPackage.image}
                    />
                    <span>{travelPackage.duration}</span>
                  </div>
                  <div className="package-card__body">
                    <p className="package-card__category">
                      {travelPackage.category}
                    </p>
                    <h3>{travelPackage.title}</h3>
                    <p className="package-card__regions">
                      {travelPackage.regions}
                    </p>
                    <p className="package-card__description">
                      {travelPackage.description}
                    </p>
                    <Link
                      className="package-card__link"
                      href={`/plan-your-trip/register-now?package=${travelPackage.id}`}
                    >
                      Choose this package <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="packages-empty" role="status">
              No packages match “{searchTerm}”. Try another destination or
              interest.
            </p>
          )}
        </section>
      </main>
    </>
  );
}
