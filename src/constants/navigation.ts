/**
 * Navigation constants - single source of truth for nav behavior
 */

/** Scroll percentage (0-1) at which nav becomes fully visible */
export const NAV_SCROLL_THRESHOLD = 0.15;

/** Mobile breakpoint in pixels */
export const MOBILE_BREAKPOINT = 768;

/** Animation duration for nav transitions (ms) */
export const NAV_TRANSITION_DURATION = 300;

/** Navigation links configuration */
export const NAV_LINKS = [
  { label: "Home", href: "/", external: false },
  { label: "About Me", href: "/about", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Contact", href: "/contact", external: false },
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "Resume", href: "/resume.pdf", external: true },
] as const;

export type NavLinkConfig = (typeof NAV_LINKS)[number];
