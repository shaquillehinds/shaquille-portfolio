import navLinks, { NavLink } from "../RightSideFloatingNav/navLinks";
import "./styles.scss";

const socials: NavLink[] = [
  { href: "https://twitter.com", icon: "lab la-twitter", name: "Twitter" },
  { href: "https://dribbble.com", icon: "lab la-dribbble", name: "Twitter" },
  { href: "https://instagram.com", icon: "lab la-instagram", name: "Twitter" },
];

export default function RightSideMenu() {
  function addActive() {
    document.querySelector(".responsive-sidebar-menu")?.classList.add("active");
  }

  function removeActive() {
    document
      .querySelector(".responsive-sidebar-menu")
      ?.classList.remove("active");
  }
  return (
    <div>
      <span className="icon-menu" onClick={addActive}>
        <span className="bar"> </span> <span className="bar"> </span>
      </span>
      <div className="responsive-sidebar-menu">
        <div className="overlay" onClick={removeActive}></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p> Menu </p>
            <ul className="menu scroll-nav-responsive d-flex">
              {navLinks.map((link) => (
                <li>
                  <a
                    className="scroll-to"
                    href={link.href}
                    onClick={removeActive}
                  >
                    <i className={link.icon}> </i> <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="sidebar-social">
            <p> Social </p>
            <ul className="social-links d-flex align-items-center">
              {socials.map((social) => (
                <li>
                  <a target="_blank" href={social.href}>
                    <i className={social.icon}> </i>
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
