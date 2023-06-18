import { useState } from "react";
import "./styles.scss";

const colorOptions = [
  "#28e98c",
  "#e4af12",
  "#fe6f1d",
  "#14c5fd",
  "#c0c0c0",
  "#1338f3",
  "#f31313",
  "#ff99cc",
];

export default function Settings() {
  const [activeColor, setActiveColor] = useState(colorOptions[0]); //this will set the default color to  '#28e98c'
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); //this settings overlay is closed defaultly

  const handleColorClick = (color: string) => {
    setActiveColor(color); //this will change the state colorOption[x] and it will pass down
    setIsSettingsOpen(false); // so when we select the color the overlay automatically closes
    document.documentElement.style.setProperty("--primary_color", color); // the setActiveColor after it being set it return the new color
  };

  return (
    //is the isSettingsOpen is true add class 'active' else 'leave empty'
    <div className={`global-color ${isSettingsOpen ? "active" : ""}`}>
      {/* this onClick event set the setIsSettingsOpen to be true */}
      <span className="setting-toggle" onClick={() => setIsSettingsOpen(true)}>
        <i className="las la-cog"> </i>
      </span>
      <div className="inner">
        {/* this onClick event set the setIsSettingsOpen to be false and closes the overlay */}
        <div className="overlay" onClick={() => setIsSettingsOpen(false)}></div>
        <div className="global-color-option">
          {/* this onClick event set the setIsSettingsOpen to be false and closes the overlay */}
          <span
            className="close-settings"
            onClick={() => setIsSettingsOpen(false)}
          >
            <i className="las la-times"> </i>
          </span>
          <h2> Configuration </h2>
          <div className="global-color-option-inner">
            <p> Colors </p>
            <div className="color-boxed">
              {colorOptions.map((color) => (
                <a
                  key={color}
                  href="#"
                  className={activeColor === color ? "clr-active" : ""}
                  onClick={() => handleColorClick(color)}
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
