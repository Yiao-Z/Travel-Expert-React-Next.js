/*alvin's ChinaMap.js */
"use client";

import Link from "next/link";
import { useState } from "react";
import mapData from "./china-provinces.json";

const provinceColors = ["#dce7db", "#e7e4d4", "#d7e4e4", "#ebddd2"];

export default function ChinaMap() {
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [focusedProvince, setFocusedProvince] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const activeProvince =
    hoveredProvince ?? focusedProvince ?? selectedProvince;
  const activeRegion = mapData.provinces.find(
    (province) => province.id === activeProvince,
  );

  function selectProvince(id) {
    setSelectedProvince((current) => (current === id ? null : id));
  }

  return (
    <section className="map-section">
      <header className="map-section__heading">
        <p className="eyebrow section-eyebrow">Destinations · Cities &amp; regions</p>
        <h1 id="map-heading">A closer look at China.</h1>
        <p>
          Every province has its own character. Hover, focus, or select a region
          to explore.
        </p>
      </header>

      <div className="interactive-map">
        <div className="china-map-card">
          <div className="china-map-card__topline">
            <span>CHINA · PROVINCES &amp; REGIONS</span>
            <span>{mapData.provinces.length} REGIONS</span>
          </div>

          <svg
            aria-labelledby="map-heading"
            className="china-map"
            role="group"
            viewBox={mapData.viewBox}
          >
            {mapData.provinces.map((province, index) => (
              <path
                aria-label={province.name}
                aria-pressed={selectedProvince === province.id}
                className={`china-map__province${
                  province.id === activeProvince
                    ? " china-map__province--active"
                    : ""
                }`}
                d={province.path}
                fill={
                  province.id === activeProvince
                    ? "#a2442d"
                    : provinceColors[index % provinceColors.length]
                }
                key={province.id}
                onBlur={() => setFocusedProvince(null)}
                onClick={() => selectProvince(province.id)}
                onFocus={() => setFocusedProvince(province.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectProvince(province.id);
                  }
                }}
                onPointerEnter={() => setHoveredProvince(province.id)}
                onPointerLeave={() =>
                  setHoveredProvince((current) =>
                    current === province.id ? null : current,
                  )
                }
                role="button"
                stroke={province.id === activeProvince ? "#fff" : "#fffdf8"}
                strokeWidth={province.id === activeProvince ? "2.5" : "1.5"}
                tabIndex={0}
              >
                <title>{province.name}</title>
              </path>
            ))}
            {activeRegion && (
              <path
                aria-hidden="true"
                className="china-map__province-overlay"
                d={activeRegion.path}
              />
            )}
          </svg>

          <p className="china-map-card__hint">
            <span aria-hidden="true">↗</span>
            Hover or use Tab to explore the map
          </p>
        </div>

        <aside
          aria-atomic="true"
          aria-live="polite"
          className="map-detail"
          key={activeRegion?.id ?? "map-intro"}
        >
          <span className="map-detail__marker" aria-hidden="true">
            {activeRegion ? "中" : "⌖"}
          </span>
          <p className="eyebrow map-detail__eyebrow">
            {activeRegion ? "Now exploring" : "Your journey starts here"}
          </p>
          <h3>{activeRegion?.name ?? "Pick a place on the map."}</h3>
          <p className="map-detail__description">
            {activeRegion
              ? `Discover the places, culture, and travel experiences of ${activeRegion.name}.`
              : "Each province and region offers a different way to experience China. Hover or focus on the map to begin."}
          </p>
          {activeRegion && (
            <Link className="map-detail__link" href="/#experiences">
              Find travel inspiration <span aria-hidden="true">→</span>
            </Link>
          )}
          <p className="map-detail__credit">
            Province boundary data from{" "}
            <a
              href="https://datav.aliyun.com/portal/school/atlas/area_selector"
              rel="noreferrer"
              target="_blank"
            >
              DataV Atlas
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
