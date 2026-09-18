import { useEffect, useState } from "react";
import navLinks from "../RightSideFloatingNav/navLinks";
import "./styles.scss";

const colorOptions = [
  "#e67143",
  "#28e98c",
  "#e4af12",
  "#14c5fd",
  "#c0c0c0",
  "#ff99cc",
];

const STORAGE_KEY = "accent-color";

function readStoredColor(): string {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && colorOptions.includes(stored)) return stored;
  } catch {
    /* storage unavailable (private mode, blocked, etc.) */
  }
  return colorOptions[0];
}

function storeColor(color: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, color);
  } catch {
    /* ignore */
  }
}

function applyColor(color: string) {
  document.documentElement.style.setProperty("--primary_color", color);
}

export default function RightSideMenu() {
  const [activeColor, setActiveColor] = useState(readStoredColor);

  useEffect(() => {
    applyColor(activeColor);
  }, [activeColor]);

  function addActive() {
    document.querySelector(".responsive-sidebar-menu")?.classList.add("active");
  }

  function removeActive() {
    document
      .querySelector(".responsive-sidebar-menu")
      ?.classList.remove("active");
  }

  const handleColorClick = (color: string) => {
    setActiveColor(color);
    storeColor(color);
    removeActive();
  };

  return (
    <div>
      <button
        type="button"
        className="icon-menu"
        onClick={addActive}
        aria-label="Open menu"
      >
        <span className="bar"></span> <span className="bar"></span>
      </button>
      <div className="responsive-sidebar-menu">
        <div className="overlay" onClick={removeActive}></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    className="scroll-to"
                    href={link.href}
                    onClick={removeActive}
                  >
                    <i className={link.icon} aria-hidden="true"></i>{" "}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pick-color d-flex flex-column">
            <p>Pick accent color</p>
            <div className="color-boxed">
              {colorOptions.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={activeColor === color ? "clr-active" : ""}
                  onClick={() => handleColorClick(color)}
                  style={{ background: color }}
                  aria-label={`Use accent colour ${color}`}
                  aria-pressed={activeColor === color}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
