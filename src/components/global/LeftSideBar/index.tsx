import { useEffect } from "react";
import "./styles.scss";

interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

const socials: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/shaquillehinds/",
    label: "LinkedIn",
    icon: "lab la-linkedin",
  },
  {
    href: "https://github.com/shaquillehinds",
    label: "GitHub",
    icon: "lab la-github",
  },
  {
    href: "https://www.npmjs.com/~shaquillehinds",
    label: "npm",
    icon: "lab la-npm",
  },
  {
    // TODO(shaq): confirm channel URL
    href: "https://www.youtube.com/@shaquillehinds",
    label: "YouTube",
    icon: "lab la-youtube",
  },
];

// TODO(shaq): replace /public/assets/ShaquilleResume.pdf with the new PDF under
// this filename and delete the old one.
const resumeHref = "/assets/ShaquilleHinds-Resume.pdf";
const email = "dev@shaquillehinds.com";

function disableLoader() {
  document.querySelector(".page-loader")?.classList.add("d-none");
}

export default function LeftSideBar() {
  useEffect(() => {
    // Fallback: a cached or failed image never fires onLoad in some browsers,
    // so also dismiss the loader once the window has finished loading.
    if (document.readyState === "complete") {
      disableLoader();
      return;
    }
    window.addEventListener("load", disableLoader);
    return () => window.removeEventListener("load", disableLoader);
  }, []);

  return (
    <div className="left-sidebar">
      <img
        className="me"
        src="/assets/images/me.jpg"
        alt="Shaquille Hinds"
        onLoad={disableLoader}
        onError={disableLoader}
      />
      <h2>Shaquille Hinds</h2>
      <p className="address">Senior React Native Engineer · Bangkok, Thailand</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {socials.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <i className={link.icon} aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
      <a href={resumeHref} download className="theme-btn">
        <i className="las la-download" aria-hidden="true"></i> Resume
      </a>
      <a className="email-link" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}
