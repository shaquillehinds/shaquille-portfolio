import "./styles.scss";

const paragraphs: string[] = [
  "I've spent seven years shipping React Native apps end to end: solo zero-to-App-Store builds, a social audio platform with live rooms, and most recently the mobile rewrite of StudyFetch, an AI learning platform used by 7M+ students, where I architected real-time lecture transcription and translation.",
  "I maintain 20 open source npm packages. The flagship, react-native-essentials, gets 1,000+ downloads a month, and integrating my libraries cut boilerplate by 60% in a production codebase. I also created the Render Isolated Components pattern for eliminating unnecessary re-renders. I'm based in Bangkok, Barbadian, available now, remote first and open to on-site roles with visa sponsorship.",
];

const video = {
  src: "https://www.youtube.com/embed/qlh3CKlkIEM",
  title: "Stop Unnecessary Re-renders With This React Pattern",
  caption:
    "Render Isolated Components, the pattern I created and used in the StudyFetch rewrite.",
};

export default function About() {
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user" aria-hidden="true"></i> About
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              A little bit about <span>me</span>
            </h2>
          </div>
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="scroll-animation" data-aos="fade-up">
              {text}
            </p>
          ))}
          <figure className="about-video scroll-animation" data-aos="fade-up">
            <iframe
              src={video.src}
              title={video.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <figcaption>{video.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
