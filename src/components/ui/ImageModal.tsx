import { useEffect, useRef } from "react";
import "./ImageModal.scss";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * Dependency-free full-size image overlay.
 * Closes on Esc or overlay click; focus is trapped on the close button while open.
 */
export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        // Single focusable element, so keep focus on it.
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="image-modal-close"
        aria-label="Close image"
        onClick={onClose}
      >
        <i className="las la-times" aria-hidden="true"></i>
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
