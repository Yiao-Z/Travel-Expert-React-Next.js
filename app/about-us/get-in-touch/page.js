import SiteHeader from "../../apptopbar";
import "./get-in-touch.css";

export const metadata = {
    title: "Get in Touch | AAA Travel Agency",
    description:
        "Contact AAA Travel Agency for information and inspiration for your China travel adventure.",
};

const teamMembers = [
    {
        name: "Alvin Zhao",
        alias: "赵一帆 / Alvin",
        phone: "1-123-555-0100",
        email: "alvin@example.com",
    },
    {
        name: "Andrew Maje",
        alias: "Andrew / Drew",
        phone: "1-305-216-5829",
        email: "andrew.maje@example.com",
    },
    {
        name: "Angie Chico",
        alias: "Angie",
        phone: "1-972-000-1111",
        email: "angie.chico@example.com",
    },
];

export default function GetInTouchPage() {
    return (
        <>
            <SiteHeader />

            <main className="get-in-touch">
                <section className="contact-hero">
                    <p className="contact-eyebrow">AAA TRAVEL AGENCY</p>
                    <h1>Let’s start your next journey.</h1>
                    <p>
                        Have questions or looking for travel inspiration?
                        We’re here to help you explore the wonders of China.
                    </p>
                </section>

                <section className="contact-intro">
                    <p className="contact-eyebrow">GET IN TOUCH</p>
                    <h2>We’d love to hear from you.</h2>
                    <p>
                        Whether you want to learn more about China’s historic
                        landmarks, discover local cuisine, or explore its
                        beautiful landscapes, feel free to reach out to our team.
                    </p>
                </section>

                <section className="contact-team">
                    {teamMembers.map((member) => (
                        <article className="contact-card" key={member.email}>
                            <span className="contact-card__label">
                                AAA TRAVEL TEAM
                            </span>

                            <h3>{member.name}</h3>
                            <p className="contact-card__alias">
                                {member.alias}
                            </p>

                            <div className="contact-detail">
                                <span>EMAIL</span>
                                <a href={`mailto:${member.email}`}>
                                    {member.email}
                                </a>
                            </div>

                            <div className="contact-detail">
                                <span>PHONE</span>
                                <a href={`tel:${member.phone.replaceAll("-", "")}`}>
                                    {member.phone}
                                </a>
                            </div>

                            <p className="contact-timezone">
                                Mountain Time
                            </p>
                        </article>
                    ))}
                </section>

                <section className="contact-ending">
                    <p className="contact-eyebrow">YOUR JOURNEY AWAITS</p>
                    <h2>China is waiting to be discovered.</h2>
                    <p>
                        Let curiosity guide you through a destination filled
                        with history, culture, flavors, and unforgettable views.
                    </p>
                </section>
            </main>
        </>
    );
}