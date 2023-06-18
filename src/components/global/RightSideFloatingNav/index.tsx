import navLinks from "./navLinks";
import "./styles.scss";

export default function RightSideFloatingNav() {
  return (
    <ul className="menu scroll-nav d-flex">
      {navLinks.map((link) => (
        <li>
          <a className="scroll-to" href={link.href}>
            <span> {link.name} </span> <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
