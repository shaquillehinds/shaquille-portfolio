import { useEffect, useState } from "react";
import "./styles.scss";

interface Package {
  name: string; // display name
  npm: string; // full package name, e.g. "@shaquillehinds/react-native-essentials"
  description: string;
  tags: string[];
  featured?: boolean;
  github?: string;
}

// TODO(shaq): confirm exact npm names for each package. These were checked
// against the npm registry (maintainer:shaquillehinds) on 2026-09-18.
const packages: Package[] = [
  {
    name: "react-native-essentials",
    npm: "@shaquillehinds/react-native-essentials",
    description:
      "Foundation library: layouts, typography, hooks, providers and MMKV storage utilities. Ships an AI agent rules installer (npx rne-rules) so coding agents use the library correctly.",
    tags: ["1,000+ downloads/mo", "170+ releases", "Since Apr 2025"],
    featured: true,
    github: "https://github.com/shaquillehinds/react-native-essentials",
  },
  // UI suite, built on Reanimated and Gesture Handler
  {
    name: "smooth-modal",
    npm: "@shaquillehinds/smooth-modal",
    description: "Smooth bottom modal for React Native",
    tags: ["UI"],
  },
  {
    name: "react-native-bottom-sheet",
    npm: "@shaquillehinds/react-native-bottom-sheet",
    description: "Bottom sheet that just works",
    tags: ["UI"],
  },
  {
    name: "dropdown-selector",
    npm: "@shaquillehinds/react-native-dropdown-selector",
    description: "Dropdown selector for React Native",
    tags: ["UI"],
  },
  {
    name: "in-app-notification",
    npm: "@shaquillehinds/react-native-in-app-notification",
    description: "In-app notification banners",
    tags: ["UI"],
  },
  {
    name: "spot-modal",
    npm: "@shaquillehinds/react-native-spot-modal",
    description: "Modal anchored to a spot on screen",
    tags: ["UI"],
  },
  {
    name: "menu-modal",
    npm: "@shaquillehinds/react-native-menu-modal",
    description: "Context menu modal",
    tags: ["UI"],
  },
  {
    name: "input-focus",
    npm: "@shaquillehinds/input-focus",
    description: "Keyboard-aware input focusing",
    tags: ["UI"],
  },
  // Developer tooling
  {
    name: "tscodeinject",
    npm: "tscodeinject",
    description: "TypeScript code injection",
    tags: ["Tooling"],
  },
  {
    name: "log-location-injector",
    npm: "log-location-injector",
    description: "Injects file and line into log calls",
    tags: ["Tooling"],
  },
  {
    name: "redux-store-builder",
    npm: "@shaquillehinds/redux-store-builder",
    description: "CLI scaffolder for Redux stores",
    tags: ["Tooling"],
  },
  {
    name: "rn-stack-screen-builder",
    npm: "@shaquillehinds/rn-stack-screen-builder",
    description: "CLI scaffolder for React Navigation stacks",
    tags: ["Tooling"],
  },
  {
    name: "http-transports-builder",
    npm: "@shaquillehinds/http-transports-builder",
    description: "CLI scaffolder for HTTP transport layers",
    tags: ["Tooling"],
  },
];

const intro =
  "Tools I built to remove recurring friction in mobile development. All published under @shaquillehinds.";
const allPackagesUrl = "https://www.npmjs.com/~shaquillehinds";

const npmUrl = (pkg: Package) => `https://www.npmjs.com/package/${pkg.npm}`;

/** Live monthly downloads for one package; null until fetched or on any error. */
function useMonthlyDownloads(npmName: string | undefined) {
  const [downloads, setDownloads] = useState<number | null>(null);
  useEffect(() => {
    if (!npmName) return;
    const controller = new AbortController();
    fetch(
      `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(npmName)}`,
      { signal: controller.signal }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { downloads?: unknown }) => {
        if (typeof data.downloads === "number" && data.downloads > 0) {
          setDownloads(data.downloads);
        }
      })
      .catch(() => {
        /* keep the static fallback */
      });
    return () => controller.abort();
  }, [npmName]);
  return downloads;
}

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function OpenSource() {
  const featured = packages.find((p) => p.featured);
  const rest = packages.filter((p) => !p.featured);
  const liveDownloads = useMonthlyDownloads(featured?.npm);

  const featuredTags = featured
    ? featured.tags.map((tag, i) =>
        i === 0 && liveDownloads !== null
          ? `${liveDownloads.toLocaleString("en-US")} downloads/mo`
          : tag
      )
    : [];

  return (
    <section
      className="open-source-area page-section scroll-to-page"
      id="open-source"
    >
      <div className="custom-container">
        <div className="open-source-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-cube" aria-hidden="true"></i> Open source
            </h4>
            <h2 className="scroll-animation" data-aos="fade-up">
              20 packages on <span>npm</span>
            </h2>
          </div>
          <p className="intro scroll-animation" data-aos="fade-up">
            {intro}
          </p>

          {featured && (
            <div className="package-featured scroll-animation" data-aos="fade-up">
              <div className="package-featured-head">
                <h3>
                  <a href={npmUrl(featured)} {...externalProps}>
                    {featured.name}
                  </a>
                </h3>
                <span className="npm-name">{featured.npm}</span>
              </div>
              <p>{featured.description}</p>
              <ul className="tags">
                {featuredTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="package-links">
                <a className="theme-btn" href={npmUrl(featured)} {...externalProps}>
                  <i className="lab la-npm" aria-hidden="true"></i> npm
                </a>
                {featured.github && (
                  <a className="text-link" href={featured.github} {...externalProps}>
                    <i className="lab la-github" aria-hidden="true"></i> GitHub
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="package-grid">
            {rest.map((pkg, i) => (
              <a
                key={pkg.npm}
                className="package-card scroll-animation"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
                href={npmUrl(pkg)}
                {...externalProps}
              >
                <span className="package-tag">{pkg.tags[0]}</span>
                <span className="package-name">{pkg.name}</span>
                <span className="package-desc">{pkg.description}</span>
              </a>
            ))}
          </div>

          <a className="all-packages" href={allPackagesUrl} {...externalProps}>
            All packages <i className="las la-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
