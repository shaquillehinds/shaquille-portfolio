import Lsb from "./global/Lsb";
import Herosec from "./main/Herosec";
import About from "./main/About";
import Resume from "./main/Resume";
import Service from "./main/Service";
import Skills from "./main/Skills";
import Portfolio from "./main/Portfolio";
import Testimonials from "./main/Testimonials";
import Clientlogos from "./main/Clientlogos";
import Pricing from "./main/Pricing";
import Contact from "./main/Contact";

export default function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Lsb /> {/* this component will used by mobile devices */}
          <Herosec />
          <About />
          <Resume />
          <Service />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Clientlogos />
          <Pricing />
          <Contact />
        </div>
      </div>
    </main>
  );
}
