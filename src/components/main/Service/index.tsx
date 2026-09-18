import "./styles.scss";

interface Specialisation {
  name: string;
  description: string;
  icon: string;
  subscript: string;
}

const specialisations: Specialisation[] = [
  {
    name: "Mobile Engineering",
    icon: "las la-mobile",
    description:
      "React Native apps that stay fast under real load: architecture, render performance, animations, and the full App Store and Google Play release path.",
    subscript: "React Native · Expo · TypeScript · Reanimated",
  },
  {
    name: "Open Source & Developer Tooling",
    icon: "las la-cube",
    description:
      "Libraries and CLI tools that remove boilerplate and recurring friction for mobile teams. 20 packages on npm, used in production.",
    subscript: "react-native-essentials · UI suite · CLI scaffolders",
  },
  {
    name: "Backend & Full Stack",
    icon: "las la-server",
    description:
      "Node.js services behind the apps I ship: REST APIs, real-time sockets, auth, payments and deployment.",
    subscript: "Node.js · Nest.js · Express · MongoDB · Redis · Docker",
  },
];

export default function Service() {
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-stream" aria-hidden="true"></i> What I do
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              My <span>Specialisations</span>
            </h2>
          </div>
          <div className="services-items">
            {specialisations.map((spec, i) => (
              <div
                key={spec.name}
                className="service-item scroll-animation"
                data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
              >
                <i className={spec.icon} aria-hidden="true"></i>
                <h3>{spec.name}</h3>
                <p>{spec.description}</p>
                <span className="stack">{spec.subscript}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
