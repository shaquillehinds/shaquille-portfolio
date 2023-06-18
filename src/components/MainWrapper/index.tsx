import About from "../main/About";
import Resume from "../main/Resume";
import Service from "../main/Service";
import Skills from "../main/Skills";
import Portfolio from "../main/Portfolio";
import LeftSideBar from "../global/LeftSideBar";
import HeroSection from "../main/HeroSection";
// import Testimonials from "../main/Testimonials";
// import Pricing from "../main/Pricing";
// import Contact from "../main/Contact";
// import ClientLogos from "../main/ClientLogos";
import "./styles.scss";

export default function Main() {
  return (
    <main className="main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <LeftSideBar /> {/* this component will used by mobile devices */}
          <HeroSection />
          <About />
          <Resume />
          <Service />
          <Skills />
          <Portfolio />
          {/* <Testimonials />
          <ClientLogos />
          <Pricing />
          <Contact /> */}
        </div>
      </div>
    </main>
  );
}
