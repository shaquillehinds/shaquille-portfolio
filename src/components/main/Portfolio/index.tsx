import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import "./styles.scss";
// import 'lightbox2/dist/js/lightbox.js';

interface PortfolioItem {
  image: string;
  narrow?: boolean;
  categories: string[];
  name: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "Merchive",
    image: "/assets/images/portfolio2.png",
    categories: ["React", "Figma", "Express", "MongoDB"],
    link: "https://merchive.com",
  },
  {
    name: "Ortex Login",
    narrow: true,
    image: "/assets/images/portfolio1.png",
    categories: ["React"],
    link: "https://ortex-login-shaquille.netlify.app",
  },
  {
    name: "Indecision App",
    narrow: true,
    image: "/assets/images/portfolio3.png",
    categories: ["React"],
    link: "https://shaquille-indecision.netlify.app",
  },
  {
    name: "Casuarina Thrift",
    image: "/assets/images/portfolio4.png",
    categories: ["React Native", "Figma", "NestJS", "MongoDB"],
  },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"> </i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span> Projects </span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {portfolioItems.map((item, i) => (
              <div
                key={item.image}
                className={`col-md-${
                  item.narrow ? "6" : "12"
                } scroll-animation`}
                data-aos={`fade-${
                  i % 3 === 0 ? "right" : i % 3 === 1 ? "up" : "left"
                }`}
              >
                <div className="portfolio-item portfolio-full">
                  <div className="portfolio-item-inner">
                    <a href={item.image} data-lightbox="example-1">
                      <img src={item.image} alt="Portfolio" />
                    </a>
                    <ul className="portfolio-categories">
                      {item.categories.map((category) => (
                        <li key={category}>
                          <a> {category} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>
                    <a href={item.link} target="_blank">
                      {item.name}
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
