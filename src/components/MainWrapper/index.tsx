import About from "../main/About";
import Resume from "../main/Resume";
import Service from "../main/Service";
import Skills from "../main/Skills";
import OpenSource from "../main/OpenSource";
import Contact from "../main/Contact";
import LeftSideBar from "../global/LeftSideBar";
import HeroSection from "../main/HeroSection";
import "./styles.scss";

export default function Main() {
  return (
    <main className="main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <LeftSideBar /> {/* rendered inline on narrow screens only */}
          <HeroSection />
          <About />
          <Resume />
          <Service />
          <Skills />
          <OpenSource />
          <Contact />
        </div>
      </div>
    </main>
  );
}
