import Link from "next/link";

const navigationMenus = [
  {
    title: "Destinations",
    links: [
      { label: "Cities & regions", href: "/destinations" },
      { label: "The Great Wall", href: "/#experiences" },
      { label: "Travel essentials", href: "/#plan" },
    ],
  },
  {
    title: "Things to do",
    links: [
      {
        label: "Landmarks & history",
        href: "/things-to-do/landmarks-and-history",
      },
      { label: "Food & culture", href: "/#experiences" },
      {
        label: "Nature & landscapes",
        href: "/things-to-do/nature-and-landscapes",
      },
    ],
  },
  {
    title: "Plan your trip",
    links: [
      { label: "When to visit", href: "/plan-your-trip/when-to-visit" },
      { label: "Getting around", href: "/plan-your-trip/getting-around" },
      { label: "Register now", href: "/plan-your-trip/register-now" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Our story", href: "/#about" },
      { label: "Our mission", href: "/#about" },
      { label: "Get in touch", href: "/#about" },
    ],
  },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <Link href="/">CHINA TRAVEL GUIDE</Link>
        <div className="utility-links">
          <Link href="/#experiences">Inspiration</Link>
          <Link href="/#plan">Travel information</Link>
        </div>
      </div>

      <div className="main-nav">
        <Link className="brand" href="/" aria-label="Travel China home">
          <span className="brand-mark" aria-hidden="true">
            中
          </span>
          <span>
            <strong>TRAVEL</strong>
            <small>CHINA</small>
          </span>
        </Link>

        <nav className="navigation-links" aria-label="Main navigation">
          {navigationMenus.map((menu) => (
            <details
              className="nav-dropdown"
              key={menu.title}
              name="primary-navigation"
            >
              <summary>
                {menu.title}
                <span className="chevron" aria-hidden="true" />
              </summary>
              <div className="dropdown-panel">
                <p>{menu.title}</p>
                {menu.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>

        <Link className="nav-cta" href="/#plan">
          Start exploring <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
