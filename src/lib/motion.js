import { useReducedMotion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

/**
 * Entrance props for scroll-revealed blocks.
 *
 * Under prefers-reduced-motion this returns nothing at all, so the element
 * renders in place at full opacity. An entrance animation must never be the
 * reason a visitor cannot read the page.
 */
export function useReveal() {
  const reduced = useReducedMotion();

  return (delay = 0, y = 26) =>
    reduced
      ? {}
      : {
          initial: { y, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.8, ease: EASE, delay },
        };
}
