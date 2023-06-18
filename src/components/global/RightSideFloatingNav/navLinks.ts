export interface NavLink {
  href: string;
  name: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { href: "#home", name: "Name", icon: "las la-home" },
  { href: "#about", name: "About", icon: "las la-user" },
  { href: "#resume", name: "Resume", icon: "las la-briefcase" },
  { href: "#services", name: "Services", icon: "las la-stream" },
  { href: "#skills", name: "Skills", icon: "las la-shapes" },
  { href: "#portfolio", name: "Portfolio", icon: "las la-grip-vertical" },
  // { href: "#testimonial", name: "Testimonial", icon: "las la-comment" },
  // { href: "#contact", name: "Contact", icon: "las la-envelope" },
];

export default navLinks;
