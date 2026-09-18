export interface NavLink {
  href: string;
  name: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { href: "#home", name: "Home", icon: "las la-home" },
  { href: "#about", name: "About", icon: "las la-user" },
  { href: "#resume", name: "Resume", icon: "las la-briefcase" },
  { href: "#services", name: "What I do", icon: "las la-stream" },
  { href: "#skills", name: "Skills", icon: "las la-shapes" },
  { href: "#open-source", name: "Open Source", icon: "las la-cube" },
  { href: "#portfolio", name: "Portfolio", icon: "las la-grip-vertical" },
  { href: "#contact", name: "Contact", icon: "las la-envelope" },
];

export default navLinks;
