import { useEffect } from "react";
import AOS from "aos";

/** Initialises AOS scroll animations once for the whole app. */
export function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    // Sections mount before images finish loading; refresh so offsets are right.
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
}
