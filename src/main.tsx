import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import $ from "jquery";

window.$ = $;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
