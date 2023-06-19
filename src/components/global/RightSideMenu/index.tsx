import { useState } from "react";
import navLinks from "../RightSideFloatingNav/navLinks";
import "./styles.scss";

// const socials: NavLink[] = [
//   { href: "https://twitter.com", icon: "lab la-twitter", name: "Twitter" },
//   { href: "https://dribbble.com", icon: "lab la-dribbble", name: "Twitter" },
//   { href: "https://instagram.com", icon: "lab la-instagram", name: "Twitter" },
// ];

const colorOptions = [
  "#e67143",
  "#28e98c",
  "#e4af12",
  "#14c5fd",
  "#c0c0c0",
  "#ff99cc",
];

export default function RightSideMenu() {
  const [activeColor, setActiveColor] = useState(colorOptions[0]); //this will set the default color to  '#28e98c'

  function addActive() {
    document.querySelector(".responsive-sidebar-menu")?.classList.add("active");
  }

  function removeActive() {
    document
      .querySelector(".responsive-sidebar-menu")
      ?.classList.remove("active");
  }

  const handleColorClick = (color: string) => {
    setActiveColor(color); //this will change the state colorOption[x] and it will pass down
    document.documentElement.style.setProperty("--primary_color", color); // the setActiveColor after it being set it return the new color
    removeActive();
  };

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
                <li key={link.name}>
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
          {/* <div className="d-flex flex-column justify-content-center"> */}
          <div className="pick-color d-flex flex-column">
            <p>Pick accent color</p>
            <div className="color-boxed">
              {colorOptions.map((color) => (
                <a
                  key={color}
                  className={activeColor === color ? "clr-active" : ""}
                  onClick={() => handleColorClick(color)}
                  style={{ background: color }}
                ></a>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
