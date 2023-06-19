import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

interface Specialization {
  name: string;
  description: string;
  icon: string;
  subscript: string;
}

const specializations: Specialization[] = [
  {
    name: "Mobile Development",
    description: "I code amazing apps with React Native",
    icon: "las la-mobile",
    subscript: "2 projects",
  },
  {
    name: "Frontend End Development",
    description: "I code beautiful UIs with React",
    icon: "las la-code",
    subscript: "10+ projects",
  },
  {
    name: "Back End Development",
    description: "I write serverside logic with Express & NestJS",
    icon: "las la-server",
    subscript: "10+ projects",
  },
];

export default function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="services"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-stream"> </i> Services
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span> Specializations </span>
            </h1>
          </div>
          <div className="services-items">
            {specializations.map((spec, i) => (
              <div
                key={spec.name}
                className="service-item scroll-animation"
                data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
              >
                <i className={spec.icon}> </i>
                <h2> {spec.name} </h2>
                <p> {spec.description} </p>
                <span className="projects"> {spec.subscript} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
