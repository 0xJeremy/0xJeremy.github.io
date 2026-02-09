/**
 * StickyLinks Component
 *
 * Fixed sidebars displaying social links (left) and email (right).
 * Appears when user scrolls down, hidden at top of page and on mobile.
 *
 * Behavior:
 * - Fixed to bottom corners of viewport
 * - Left: Social icons (GitHub, LinkedIn, Email) with vertical line
 * - Right: Email address rotated vertically with vertical line
 * - Fades in/out based on scroll position (uses useScrollVisibility hook)
 * - Hidden on mobile breakpoints
 *
 * Accessibility:
 * - Links have proper aria-labels
 * - External links open in new tab with security attributes
 *
 * Usage:
 * - Render once at app root level (in App.tsx)
 * - Configure links in src/content/socials.ts
 */

import styled from "styled-components";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { socialLinks, contactEmail, type SocialLink } from "@/content/socials";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

// Icon map for dynamic rendering
const iconMap = {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
} as const;

// Colors from original Sticky.js
const STICKY_COLOR = "#FF7F11"; // orange
const STICKY_HOVER_COLOR = "#8892b0"; // slate

// Screen breakpoint for thin screens (narrower side spacing)
const THIN_SCREEN_BREAKPOINT = 950;

// Styled components
interface SidebarProps {
  $side: "left" | "right";
  $opacity: number;
}

const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  bottom: 0;
  left: ${(p) => (p.$side === "left" ? "40px" : "auto")};
  right: ${(p) => (p.$side === "right" ? "40px" : "auto")};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: var(--z-nav);
  opacity: ${(p) => p.$opacity};
  transform: translateY(${(p) => (p.$opacity === 0 ? "20px" : "0")});
  visibility: ${(p) => (p.$opacity === 0 ? "hidden" : "visible")};
  pointer-events: ${(p) => (p.$opacity > 0.1 ? "auto" : "none")};
  transition:
    opacity var(--transition-normal) ease,
    transform var(--transition-normal) ease,
    visibility var(--transition-normal) ease;

  /* Narrower side spacing on thin screens */
  @media (max-width: ${THIN_SCREEN_BREAKPOINT}px) {
    left: ${(p) => (p.$side === "left" ? "20px" : "auto")};
    right: ${(p) => (p.$side === "right" ? "20px" : "auto")};
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: ${STICKY_COLOR};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${STICKY_HOVER_COLOR};
    transform: translateY(-3px);
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 90px;
  margin-top: var(--spacing-lg);
  background-color: ${STICKY_COLOR};
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailLink = styled.a`
  writing-mode: vertical-rl;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  letter-spacing: 0.1em;
  color: ${STICKY_COLOR};
  padding: var(--spacing-xs);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${STICKY_HOVER_COLOR};
    transform: translateY(-3px);
  }
`;

// Helper to render icon by name
const renderIcon = (iconName: SocialLink["icon"]) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
};

export const StickyLinks = () => {
  const { visibility } = useScrollVisibility();

  return (
    <>
      {/* Left sidebar: Social icons */}
      <Sidebar $side="left" $opacity={visibility} data-testid="sticky-left">
        <SocialList>
          {socialLinks.map((link) => (
            <SocialItem key={link.name}>
              <SocialLinkStyled
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.name}
              >
                {renderIcon(link.icon)}
              </SocialLinkStyled>
            </SocialItem>
          ))}
        </SocialList>
        <VerticalLine />
      </Sidebar>

      {/* Right sidebar: Email */}
      <Sidebar $side="right" $opacity={visibility} data-testid="sticky-right">
        <EmailWrapper>
          <EmailLink href={`mailto:${contactEmail}`} aria-label="Send email">
            {contactEmail}
          </EmailLink>
          <VerticalLine />
        </EmailWrapper>
      </Sidebar>
    </>
  );
};
