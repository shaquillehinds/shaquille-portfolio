import "./styles.scss";

interface Experience {
  position: string;
  company: string;
  location: string;
  summary: string;
  years: {
    start: string;
    end: string;
  };
}

const experiences: Experience[] = [
  {
    position: "Lead Mobile Engineer",
    company: "H2 Security · Contract",
    location: "Remote (Bangkok)",
    years: { start: "May 2026", end: "Sep 2026" },
    summary:
      "Lead client engineer and architect for the Academy, a cybersecurity e-learning platform with hands-on coding labs. SSO with OpenID Connect (Authorization Code + PKCE), role-based access, and complete UI specs from backend API contracts. Stack: TypeScript, React, Next.js, React Native, Auth.js, OIDC (Zitadel), Django REST.",
  },
  {
    position: "Senior React Native Engineer",
    company: "BairesDev (StudyFetch project)",
    location: "Remote",
    years: { start: "Jan 2025", end: "Mar 2026" },
    summary:
      "Led the mobile app rewrite for StudyFetch (7M+ students): set the architecture and code patterns, architected real-time lecture transcription and auto-translation with the Render Isolated Components pattern, cut boilerplate by 60% by integrating my open source libraries, owned App Store and Google Play releases, mentored new engineers. Stack: React Native, Expo, TypeScript, Zustand, Reanimated.",
  },
  {
    position: "Full Stack Engineer",
    company: "Path",
    location: "Remote",
    years: { start: "Sep 2023", end: "Dec 2024" },
    summary:
      "AI-powered learning platform on OpenAI GPT-4 with text-to-speech delivery. Built the Skills Trainer feature (AI-generated learning modules). Stack: React, TypeScript, Node.js, Express.js, OpenAI API, MongoDB.",
  },
  {
    position: "Solo Mobile Engineer (Freelance)",
    company: "Casuarina",
    location: "Barbados · Remote",
    years: { start: "Oct 2022", end: "Feb 2024" },
    summary:
      "Designed, built and shipped a thrift shopping marketplace solo, zero to App Store. React Native client with performance-critical lists and optimistic UI; Nest.js backend with catalog, auth, real-time notifications and payments.",
  },
  {
    position: "Lead Mobile Engineer",
    company: "Seventh Ave",
    location: "Remote",
    years: { start: "Mar 2021", end: "Mar 2023" },
    summary:
      "Hired as a software engineer and grew into the lead mobile role on a social audio platform. Built live audio rooms end to end (React Native client plus Socket.io server), the multimedia feed, and anonymous Q&A with content moderation. Stack: React Native, TypeScript, Node.js, Nest.js, Express.js, Socket.io, MongoDB, Redis.",
  },
  {
    position: "Founder & Solo Engineer",
    company: "Merchive",
    location: "Barbados",
    years: { start: "Sep 2019", end: "Mar 2021" },
    summary:
      "Founded, built and launched an e-commerce platform for Barbados from scratch, with real-time messaging and Redis caching. Docker, Kubernetes, GCP.",
  },
];

export default function Resume() {
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase" aria-hidden="true"></i> Resume
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              My <span>Experience</span>
            </h2>
          </div>

          <div className="resume-timeline">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.years.start}`}
                className="item scroll-animation"
                data-aos={`fade-${i % 2 === 0 ? "right" : "left"}`}
              >
                <span className="date">
                  {exp.years.start} – {exp.years.end}
                </span>
                <h3>{exp.position}</h3>
                <p className="company">
                  {exp.company} <span className="location">· {exp.location}</span>
                </p>
                <p className="summary">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
