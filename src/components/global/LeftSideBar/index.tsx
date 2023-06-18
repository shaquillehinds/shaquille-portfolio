import "./styles.scss";

interface SocialLink {
  href: string;
  className: string;
}

const socials: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/shaquillehinds/",
    className: "lab la-linkedin",
  },
  { href: "https://github.com/shaquillehinds", className: "lab la-github" },
];

export default function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        {/* <img src="./assets/images/logo.png" alt="Logo" />
        <span className="designation">Software Engineer</span> */}
      </div>
      <img className="me" src="./assets/images/me.png" alt="Me" />
      <h2>Shaquille Hinds</h2>
      <p className="address"> Based in Bridgetown, Barbados 🇧🇧</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {socials.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank">
              <i className={link.className}> </i>
            </a>
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        href="/assets/ShaquilleResume.pdf"
        className="theme-btn"
      >
        <i className="las la-download"> </i> Download Resume
      </a>
    </div>
  );
}
