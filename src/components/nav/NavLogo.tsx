/**
 * NavLogo Component
 *
 * The site logo that links to the home page.
 * Displays the Raspberry Pi logo icon alongside "Jeremy Kanovsky" text.
 *
 * Behavior:
 * - Always links to root route
 * - Fades on hover for subtle interaction feedback
 *
 * Usage:
 * - Used in NavBar and MobileMenu header
 */

import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-text);
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.7;
  }
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
`;

export const NavLogo = () => (
  <LogoLink to="/">
    <LogoIcon src="/logo.png" alt="Logo" />
    <LogoText>Jeremy Kanovsky</LogoText>
  </LogoLink>
);
