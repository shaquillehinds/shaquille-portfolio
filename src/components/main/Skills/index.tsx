import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

interface Skill {
  name: string;
  percent: number;
  imageSrc?: string;
  icon?: string;
}

const skills: Skill[] = [
  {
    name: "Typescript",
    percent: 90,
    imageSrc: "/assets/images/typescript.svg",
  },
  { name: "React", percent: 90, icon: "lab la-react" },
  {
    name: "NestJS",
    percent: 90,
    imageSrc: "/assets/images/nest.svg",
  },
  {
    name: "MongoDB",
    percent: 90,
    imageSrc: "/assets/images/mongo.svg",
  },
  { name: "Figma", percent: 92, icon: "lab la-figma" },
  // { name: "NodeJS", percent: 80, icon: "lab la-node-js" },

  { name: "Git", percent: 90, icon: "lab la-git" },
  { name: "Linux", percent: 90, icon: "lab la-linux" },
  { name: "Docker", percent: 90, icon: "lab la-docker" },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"> </i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span> Advantages </span>
            </h1>
          </div>
          <div className="row skills text-center">
            {skills.map((skill, i) => (
              <div
                className="col-md-3 scroll-animation"
                data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
              >
                <div className="skill">
                  <div className="skill-inner">
                    {skill.imageSrc && (
                      <img src={skill.imageSrc} alt="Laravel/PHP" />
                    )}
                    <i className={skill.icon}> </i>
                    <h1 className="percent"> {skill.percent}% </h1>
                  </div>
                  <p className="name"> {skill.name} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
