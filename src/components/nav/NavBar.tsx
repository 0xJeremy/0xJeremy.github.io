/**
 * NavBar Component
 *
 * The main navigation bar with scroll-based visibility and mobile responsiveness.
 * Appears as a floating pill-shaped bar with frosted glass effect.
 *
 * Behavior:
 * - On home page with `scrollBased={true}`: fades in as user scrolls down
 * - On other pages: always visible
 * - Desktop: shows all nav links inline
 * - Mobile: shows hamburger button that opens MobileMenu overlay
 *
 * Usage:
 * - Render once at app root level (in App.tsx)
 * - Pass `scrollBased` to enable scroll-triggered visibility on hero pages
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import {
  NAV_LINKS,
  NAV_TRANSITION_DURATION,
  MOBILE_BREAKPOINT,
} from "@/constants/navigation";
import { NavLogo } from "./NavLogo";
import { NavLink } from "./NavLink";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

/**
 * Container that handles the scroll-based visibility animation.
 * Uses opacity and transform for smooth slide + fade effect.
 */
const Container = styled.header<{ $visibility: number }>`
  position: fixed;
  top: var(--viewport-inset);
  left: var(--viewport-inset);
  right: var(--viewport-inset);
  z-index: var(--z-nav);
  opacity: ${({ $visibility }) => $visibility};
  transform: translateY(${({ $visibility }) => ($visibility - 1) * 20}px);
  pointer-events: ${({ $visibility }) => ($visibility > 0.1 ? "auto" : "none")};
  transition:
    opacity ${NAV_TRANSITION_DURATION}ms ease,
    transform ${NAV_TRANSITION_DURATION}ms ease;
`;

/**
 * Inner wrapper with background, padding, and grain texture.
 */
const Inner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(17, 34, 64, 0.9);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-700);

  /* Grain texture overlay */
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.12;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  position: relative;
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

export interface NavBarProps {
  /** Whether to use scroll-based visibility (true on home page) */
  scrollBased?: boolean;
}

export const NavBar = ({ scrollBased = false }: NavBarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // On home page, visibility is scroll-based. Otherwise, always visible.
  const isHomePage = location.pathname === "/";
  const shouldUseScrollVisibility = scrollBased && isHomePage;

  const { visibility } = useScrollVisibility({
    enabled: shouldUseScrollVisibility,
  });

  // Always visible (1) if not using scroll-based visibility
  const effectiveVisibility = shouldUseScrollVisibility ? visibility : 1;

  return (
    <>
      <Container $visibility={effectiveVisibility}>
        <Inner>
          <LogoWrapper>
            <NavLogo />
          </LogoWrapper>

          <DesktopLinks>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                external={link.external}
              >
                {link.label}
              </NavLink>
            ))}
          </DesktopLinks>

          <MobileButtonWrapper>
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileButtonWrapper>
        </Inner>
      </Container>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
