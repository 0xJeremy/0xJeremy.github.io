/**
 * Button Component
 *
 * A versatile button with three variants for different UI contexts.
 * All variants use pill-shaped styling with uppercase text.
 *
 * Variants:
 * - `primary`: White background, inverts on hover (main CTAs)
 * - `secondary`: Transparent with white border, fills on hover
 * - `ghost`: No visible border until hover (subtle actions)
 *
 * Usage:
 * - Use `primary` for main call-to-action buttons
 * - Use `secondary` for secondary actions alongside primary
 * - Use `ghost` for tertiary/subtle actions
 */

import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface StyledButtonProps {
  $variant: ButtonVariant;
}

const variantStyles = {
  primary: css`
    background: var(--color-accent);
    color: var(--color-black);
    border: 2px solid var(--color-accent);

    &:hover {
      background: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }
  `,
  secondary: css`
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-gray-300);

    &:hover {
      background: var(--color-accent-subtle);
      border-color: var(--color-accent);
      color: var(--color-accent);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--color-gray-100);
    border: 2px solid transparent;

    &:hover {
      color: var(--color-accent);
      border-color: var(--color-gray-600);
    }
  `,
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  ${(p) => variantStyles[p.$variant]}

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => (
  <StyledButton $variant={variant} {...props}>
    {children}
  </StyledButton>
);
