/**
 * MobileMenuButton Component
 *
 * An animated hamburger/close button for toggling the mobile menu.
 * Uses CSS transforms to morph between hamburger (☰) and X (×) states.
 *
 * Behavior:
 * - Three horizontal bars that animate into an X when open
 * - Middle bar fades out, top/bottom bars rotate to form X
 * - Provides clear visual feedback for menu state
 *
 * Accessibility:
 * - Updates `aria-label` based on open state
 * - Sets `aria-expanded` to communicate state to screen readers
 *
 * Usage:
 * - Used exclusively by NavBar for mobile breakpoint
 */

import styled from "styled-components";

const Button = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: var(--spacing-sm);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

const Bar = styled.span<{ $isOpen: boolean }>`
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(6px) rotate(45deg)" : "translateY(-6px)"};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(-6px) rotate(-45deg)" : "translateY(6px)"};
  }
`;

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => (
  <Button
    $isOpen={isOpen}
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <Bar $isOpen={isOpen} />
    <Bar $isOpen={isOpen} />
    <Bar $isOpen={isOpen} />
  </Button>
);
