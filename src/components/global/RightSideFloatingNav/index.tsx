import { useEffect, useState } from "react";
import navLinks from "./navLinks";
import "./styles.scss";

/** Tracks which section is most visible so the matching nav item gets `active`. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function RightSideFloatingNav() {
  const active = useActiveSection(sectionIds);

  return (
    <nav aria-label="Sections">
      <ul className="menu scroll-nav d-flex">
        {navLinks.map((link) => {
          const isActive = link.href === `#${active}`;
          return (
            <li key={link.name}>
              <a
                className={`scroll-to${isActive ? " active" : ""}`}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
              >
                <span>{link.name}</span> <i className={link.icon} aria-hidden="true"></i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
