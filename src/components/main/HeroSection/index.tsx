import "./styles.scss";

interface Fact {
  value: string;
  label: string;
}

const facts: Fact[] = [
  { value: "7+", label: "Years of experience" },
  { value: "20", label: "npm packages published" },
  { value: "7M+", label: "Students on the app I rewrote" },
];

const factAnimations = ["fade-right", "fade-up", "fade-left"];

export default function HeroSection() {
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-home" aria-hidden="true"></i> Introduce
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Hi, I'm <span>Shaquille</span>, a Senior React Native Engineer
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            I build React Native apps that stay fast under pressure, and the
            tools that make teams faster at building them.
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-aos="fade-up"
            aria-label="My projects"
          >
            <img src="/assets/images/round-text.png" alt="" />
            <i className="las la-arrow-down" aria-hidden="true"></i>
          </a>
          <div className="facts d-flex">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className="fact scroll-animation"
                data-aos={factAnimations[i % factAnimations.length]}
              >
                <p className="value">{fact.value}</p>
                <p className="label">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
