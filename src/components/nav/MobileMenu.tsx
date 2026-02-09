/**
 * MobileMenu Component
 *
 * A full-screen overlay menu for mobile navigation.
 * Opens from the hamburger button in NavBar on smaller viewports.
 *
 * Behavior:
 * - Covers entire screen with grain texture background
 * - Links animate in with staggered slide-up effect
 * - Closes on: close button click, link click, or Escape key
 * - Prevents body scroll while open
 *
 * Accessibility:
 * - Uses `role="dialog"` and `aria-modal="true"`
 * - Focus trap would be a good future enhancement
 *
 * Usage:
 * - Rendered by NavBar, controlled via `isOpen` and `onClose` props
 */

import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NAV_LINKS } from "@/constants/navigation";
import { NavLink } from "./NavLink";
import { NavLogo } from "./NavLogo";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-nav) + 1);
  background: var(--color-background);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  animation: ${fadeIn} var(--transition-fast) ease-out;

  /* Grain texture to match background */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.35;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='1.5' intercept='-0.25'/%3E%3CfeFuncG type='linear' slope='1.5' intercept='-0.25'/%3E%3CfeFuncB type='linear' slope='1.5' intercept='-0.25'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  position: relative;
  z-index: 1;
`;

const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--font-size-xl);
  color: var(--color-gray-50);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
    color: var(--color-accent);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

const LinksContainer = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-2xl);
  position: relative;
  z-index: 1;
`;

const LinkWrapper = styled.div<{ $index: number }>`
  animation: ${slideUp} var(--transition-normal) ease-out;
  animation-delay: ${({ $index }) => $index * 50}ms;
  animation-fill-mode: both;
`;

const MobileNavLink = styled(NavLink)`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-md) var(--spacing-xl);
`;

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay
      $isOpen={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <Header>
        <NavLogo />
        <CloseButton onClick={onClose} aria-label="Close menu">
          ×
        </CloseButton>
      </Header>
      <LinksContainer>
        {NAV_LINKS.map((link, index) => (
          <LinkWrapper key={link.href} $index={index}>
            <MobileNavLink
              href={link.href}
              external={link.external}
              onClick={onClose}
            >
              {link.label}
            </MobileNavLink>
          </LinkWrapper>
        ))}
      </LinksContainer>
    </Overlay>
  );
};
