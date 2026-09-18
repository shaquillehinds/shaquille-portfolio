import { useCallback, useState } from "react";
import ImageModal from "../../ui/ImageModal";
import "./styles.scss";

interface PortfolioItem {
  name: string;
  image: string;
  narrow?: boolean;
  categories: string[];
  role: string;
  summary: string;
  link?: string;
  video?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "StudyFetch",
    // TODO(shaq): add /public/assets/images/portfolio-studyfetch.png (screenshot)
    image: "/assets/images/portfolio-studyfetch.png",
    categories: ["Mobile App", "React Native", "Expo", "TypeScript", "Zustand"],
    role: "Senior React Native Engineer, led the mobile rewrite",
    summary:
      "AI learning platform used by 7M+ students. Architected real-time lecture recording, transcription and translation.",
    // TODO(shaq): swap for the App Store listing URL
    link: "https://www.studyfetch.com",
  },
  {
    name: "H2 Security Academy",
    // TODO(shaq): add /public/assets/images/portfolio-h2.png (screenshot)
    image: "/assets/images/portfolio-h2.png",
    categories: ["Web App", "Next.js", "React", "OIDC"],
    role: "Lead engineer and architect",
    summary:
      "Cybersecurity e-learning platform with hands-on coding labs. SSO with OpenID Connect and role-based access.",
  },
  {
    name: "Casuarina Thrift",
    narrow: true,
    image: "/assets/images/portfolio4.png",
    categories: ["Mobile App", "React Native", "NestJS", "MongoDB"],
    role: "Solo engineer, zero to App Store",
    summary:
      "Thrift shopping marketplace. Performance-critical lists, optimistic UI, real-time notifications, payments.",
    link: "https://play.google.com/store/apps/details?id=com.casuarina&hl=en_US",
  },
  {
    name: "Path AI",
    image: "/assets/images/portfolio5.png",
    categories: ["Web App", "React", "TypeScript", "OpenAI API"],
    role: "Full stack engineer",
    summary:
      "AI-powered learning platform with GPT-4 course generation and text-to-speech.",
    link: "https://app.yourpath.ai",
  },
  {
    name: "7th Ave",
    narrow: true,
    image: "/assets/images/portfolio6.png",
    categories: ["Mobile App", "React Native", "Socket.io", "MongoDB"],
    role: "Lead mobile engineer",
    summary: "Social audio platform: live rooms, multimedia feed, anonymous Q&A.",
    video: "https://youtu.be/PyQ8WMFBoQI",
  },
  {
    name: "Merchive",
    image: "/assets/images/portfolio2.png",
    categories: ["Web App", "Next.js", "Express", "MongoDB", "Kubernetes"],
    role: "Founder and solo engineer",
    summary: "E-commerce platform for Barbados with real-time messaging.",
    // TODO(shaq): confirm the site is still up; otherwise remove the link
    link: "https://merchive.com",
  },
];

const animations = ["fade-right", "fade-up", "fade-left"];

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
              <i className="las la-grip-vertical" aria-hidden="true"></i> Portfolio
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              Featured <span>Projects</span>
            </h2>
          </div>

          <div className="row portfolio-items">
            {portfolioItems.map((item, i) => {
              const titleHref = item.link ?? item.video;
              const alt = `${item.name} screenshot`;
              return (
                <div
                  key={item.name}
                  className={`col-md-${item.narrow ? "6" : "12"} scroll-animation`}
                  data-aos={animations[i % animations.length]}
                >
                  <div className="portfolio-item portfolio-full">
                    <div className="portfolio-item-inner">
                      {item.video ? (
                        <a
                          href={item.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Watch the ${item.name} demo video`}
                        >
                          <img src={item.image} alt={alt} loading="lazy" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="portfolio-zoom"
                          aria-label={`View ${item.name} screenshot`}
                          onClick={() => setOpenItem(item)}
                        >
                          <img src={item.image} alt={alt} loading="lazy" />
                        </button>
                      )}
                      <ul className="portfolio-categories">
                        {item.categories.map((category) => (
                          <li key={category}>
                            <span>{category}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h3>
                      {titleHref ? (
                        <a href={titleHref} target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </a>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </h3>
                    <p className="role">{item.role}</p>
                    <p className="summary">{item.summary}</p>
                  </div>
                </div>
              );
            })}
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
