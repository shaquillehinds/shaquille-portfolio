import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

interface Experience {
  position: string;
  company: string;
  years: {
    start: string;
    end: string;
  };
}

const experiences: Experience[] = [
  {
    position: "Founder & Senior Software Engineer",
    company: "Merchive",
    years: { start: "Sep 2020", end: "Present" },
  },
  {
    position: "Senior Software Engineer",
    company: "Seventh Ave, Inc",
    years: { start: "Mar 2021", end: "Mar 2023" },
  },
  {
    position: "Web Develoer",
    company: "Giza Designs - Freelance",
    years: { start: "Apr 2019", end: "Sep 2020" },
  },
  {
    position: "Portrait Photographer",
    company: "Phantasy Photography - Freelance",
    years: { start: "Apr 2016", end: "Apr 2019" },
  },
];

export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"> </i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span> Experience </span>
            </h1>
          </div>

          <div className="resume-timeline">
            {experiences.map((exp, i) => (
              <div
                className="item scroll-animation"
                data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
              >
                <span className="date">
                  {exp.years.start} - {exp.years.end}
                </span>
                <h2>{exp.position}</h2>
                <p>{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
