import "./styles.scss";

interface ContactLink {
  label: string;
  href: string;
  icon: string;
  download?: boolean;
}

const email = "dev@shaquillehinds.com";
const availability =
  "Available now. Remote first, based in Bangkok, and open to on-site roles with visa sponsorship.";

const links: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaquillehinds/",
    icon: "lab la-linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/shaquillehinds",
    icon: "lab la-github",
  },
  {
    label: "npm",
    href: "https://www.npmjs.com/~shaquillehinds",
    icon: "lab la-npm",
  },
  {
    label: "Download resume",
    href: "/assets/ShaquilleHinds-Resume.pdf",
    icon: "las la-download",
    download: true,
  },
];

export default function Contact() {
  return (
    <section className="contact-area page-section scroll-to-page" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-envelope" aria-hidden="true"></i> Contact
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              Let's <span>talk</span>
            </h2>
          </div>
          <a
            className="contact-email scroll-animation"
            data-aos="fade-up"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <p className="availability scroll-animation" data-aos="fade-up">
            {availability}
          </p>
          <div className="contact-links scroll-animation" data-aos="fade-up">
            {links.map((link) =>
              link.download ? (
                <a
                  key={link.href}
                  className="theme-btn"
                  href={link.href}
                  download
                >
                  <i className={link.icon} aria-hidden="true"></i> {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  className="theme-btn outline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon} aria-hidden="true"></i> {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
