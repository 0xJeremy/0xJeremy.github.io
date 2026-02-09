/**
 * NavLogo Component
 *
 * The site logo that links to the home page.
 * Displays an icon placeholder (or custom icon) alongside the "Sandbox" text.
 *
 * Behavior:
 * - Always links to root route
 * - Fades on hover for subtle interaction feedback
 * - Accepts custom icon via prop, defaults to "S" placeholder
 *
 * Usage:
 * - Used in NavBar and MobileMenu header
 * - Pass custom `icon` prop to replace the default placeholder
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

const IconPlaceholder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: var(--color-gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
`;

const LogoText = styled.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
`;

export interface NavLogoProps {
  /** Optional icon element to replace placeholder */
  icon?: React.ReactNode;
}

export const NavLogo = ({ icon = null }: NavLogoProps) => (
  <LogoLink to="/">
    {icon ?? <IconPlaceholder>S</IconPlaceholder>}
    <LogoText>Sandbox</LogoText>
  </LogoLink>
);
