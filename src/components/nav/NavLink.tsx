/**
 * NavLink Component
 *
 * A navigation link that handles both internal routes and external URLs.
 * Provides consistent styling for all navigation contexts (desktop/mobile).
 *
 * Behavior:
 * - Internal links use React Router's Link component
 * - External links open in new tab with security attributes
 * - External links show an arrow indicator (↗)
 *
 * Usage:
 * - Use in NavBar for desktop navigation
 * - Use in MobileMenu for mobile navigation
 * - Pass `external={true}` for links outside the app
 */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const linkStyles = css`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-50);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
    color: var(--color-accent);
  }
`;

const StyledInternalLink = styled(Link)`
  ${linkStyles}
`;

const StyledExternalLink = styled.a`
  ${linkStyles}
`;

const ExternalIcon = styled.span`
  font-size: var(--font-size-xs);
  opacity: 0.5;
`;

export interface NavLinkProps {
  /** Link destination */
  href: string;
  /** Link label */
  children: React.ReactNode;
  /** Whether this is an external link (opens in new tab) */
  external?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

export const NavLink = ({
  href,
  children,
  external = false,
  onClick = () => {},
}: NavLinkProps) => {
  if (external) {
    return (
      <StyledExternalLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
        <ExternalIcon aria-hidden="true">↗</ExternalIcon>
      </StyledExternalLink>
    );
  }

  return (
    <StyledInternalLink to={href} onClick={onClick}>
      {children}
    </StyledInternalLink>
  );
};
