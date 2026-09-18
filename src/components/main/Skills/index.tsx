import "./styles.scss";

interface Skill {
  name: string;
  imageSrc?: string;
  icon?: string;
}

const skills: Skill[] = [
  { name: "React Native", icon: "lab la-react" },
  { name: "TypeScript", imageSrc: "/assets/images/typescript.svg" },
  // TODO(shaq): add /public/assets/images/expo.svg
  { name: "Expo", imageSrc: "/assets/images/expo.svg" },
  { name: "React", icon: "lab la-react" },
  // TODO(shaq): add /public/assets/images/reanimated.svg
  { name: "Reanimated", imageSrc: "/assets/images/reanimated.svg" },
  { name: "Node.js", icon: "lab la-node-js" },
  { name: "NestJS", imageSrc: "/assets/images/nest.svg" },
  { name: "MongoDB", imageSrc: "/assets/images/mongo.svg" },
  // TODO(shaq): add /public/assets/images/redis.svg
  { name: "Redis", imageSrc: "/assets/images/redis.svg" },
  { name: "Docker", icon: "lab la-docker" },
  { name: "Git", icon: "lab la-git" },
  { name: "Linux", icon: "lab la-linux" },
];

const animations = ["fade-right", "fade-up", "fade-down", "fade-left"];

export default function Skills() {
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes" aria-hidden="true"></i> Skills
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              My <span>Stack</span>
            </h2>
          </div>
          <div className="row skills text-center">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="col-md-3 col-6 scroll-animation"
                data-aos={animations[i % animations.length]}
              >
                <div className="skill">
                  <div className="skill-inner">
                    {skill.imageSrc ? (
                      <img src={skill.imageSrc} alt={skill.name} loading="lazy" />
                    ) : (
                      <i className={skill.icon} aria-hidden="true"></i>
                    )}
                  </div>
                  <p className="name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
