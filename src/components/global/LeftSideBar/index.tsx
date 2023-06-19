import "./styles.scss";

interface SocialLink {
  href: string;
  className?: string;
  image?: string;
}

const socials: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/shaquillehinds/",
    className: "lab la-linkedin",
  },
  { href: "https://github.com/shaquillehinds", className: "lab la-github" },
  {
    href: "https://www.upwork.com/freelancers/~014d3855d49f2fb7c8",
    image: "/assets/images/upwork.svg",
  },
];

export default function LeftSideBar() {
  return (
    <div className="left-sidebar">
      {/* <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="./assets/images/logo.png" alt="Logo" />
        <span className="designation">Software Engineer</span>
      </div> */}
      <img className="me" src="./assets/images/me.png" alt="Me" />
      <h2>Shaquille Hinds</h2>
      <p className="address"> Based in Bridgetown, Barbados 🇧🇧</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {socials.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank">
              {link.image ? (
                <img src={link.image} />
              ) : (
                <i className={link.className}> </i>
              )}
            </a>
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        href="/assets/ShaquilleResume.pdf"
        className="theme-btn"
      >
        <i className="las la-download"> </i> CV/Resume
      </a>
    </div>
  );
}
