import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"> </i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              A little bit about
              <span> me</span>
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            I am a proficient full-stack software engineer with a wealth of
            experience in building websites and web applications using React, as
            well as mobile applications with React Native. I was the Lead Mobile
            Engineer at a startup that raised over 2 million dollars, where I
            successfully developed various features such as audio/video
            experience, feed, question and answer, group chat, and communities.
            In addition to my role at Seventh Ave, I have demonstrated my
            entrepreneurial spirit by founding my own e-commerce platform,
            Merchive. I have enriched the platform with features such as live
            messaging and product filtering. I possesses a strong skill set that
            includes React, Redux, MongoDB, GIT, Docker, and more. I have keen
            interest in React Native, animations, and Typescript.
          </p>
          <iframe
            src="https://www.youtube.com/embed/gXywMPGTarY"
            title="About Shaquille Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
