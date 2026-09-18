import { useCallback, useState } from "react";
import ImageModal from "../../ui/ImageModal";
import "./styles.scss";

interface PortfolioItem {
  image: string;
  narrow?: boolean;
  categories: string[];
  name: string;
  link?: string;
  video?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "Path AI",
    image: "/assets/images/portfolio5.png",
    categories: ["Website", "React", "Tail Wind CSS", "Vite"],
    link: "https://app.yourpath.ai",
  },
  {
    name: "Casuarina Thrift",
    narrow: true,
    image: "/assets/images/portfolio4.png",
    categories: ["Mobile App", "React Native", "Figma", "NestJS", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.casuarina&hl=en_US",
  },
  {
    name: "7th Ave",
    narrow: true,
    image: "/assets/images/portfolio6.png",
    categories: ["Mobile App", "React Native", "Express", "MongoDB"],
    video: "https://youtu.be/PyQ8WMFBoQI",
  },
  {
    name: "Merchive",
    image: "/assets/images/portfolio2.png",
    categories: ["Website", "React", "Figma", "Express", "MongoDB"],
    link: "https://merchive.com",
  },
  {
    name: "Ortex Login",
    narrow: true,
    image: "/assets/images/portfolio1.png",
    categories: ["Website", "React"],
    link: "https://ortex-login-shaquille.netlify.app",
  },
  {
    name: "Indecision App",
    narrow: true,
    image: "/assets/images/portfolio3.png",
    categories: ["Website", "React"],
    link: "https://shaquille-indecision.netlify.app",
  },
];

export default function Portfolio() {
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);
  const closeModal = useCallback(() => setOpenItem(null), []);
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
                    {item.video ? (
                      <a href={item.video} target="_blank">
                        <img src={item.image} alt="Portfolio" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="portfolio-zoom"
                        aria-label={`View ${item.name} screenshot`}
                        onClick={() => setOpenItem(item)}
                      >
                        <img src={item.image} alt="Portfolio" />
                      </button>
                    )}
                    <ul className="portfolio-categories">
                      {item.categories.map((category) => (
                        <li key={category}>
                          <a> {category} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>
                    <a href={item.link || item.video} target="_blank">
                      {item.name}
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openItem && (
        <ImageModal
          src={openItem.image}
          alt={`${openItem.name} screenshot`}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
