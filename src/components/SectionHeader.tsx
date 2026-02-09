/**
 * SectionHeader Component
 *
 * Consistent header styling for content sections.
 * Displays a title with optional subtitle, aligned left or center.
 *
 * Behavior:
 * - Title uses large, bold typography
 * - Subtitle is muted and smaller
 * - Supports both dark and light backgrounds via variant
 *
 * Usage:
 * - Place at top of Section component
 * - Use variant to match parent Section's variant
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

interface StyledHeaderProps {
  $align: "left" | "center";
  $variant: "dark" | "light";
}

const StyledHeader = styled.header<StyledHeaderProps>`
  text-align: ${({ $align }) => $align};
  margin-bottom: var(--spacing-2xl);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-xl);
  }
`;

const Title = styled.h2<{ $variant: "dark" | "light" }>`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
  color: ${({ $variant }) =>
    $variant === "light" ? "var(--color-text)" : "var(--color-text-on-dark)"};
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-2xl);
  }
`;

const Subtitle = styled.p<{ $variant: "dark" | "light" }>`
  font-size: var(--font-size-lg);
  color: ${({ $variant }) =>
    $variant === "light"
      ? "var(--color-text-muted)"
      : "var(--color-text-on-dark-muted)"};
  max-width: 600px;
  margin: ${({ $variant }) => ($variant === "light" ? "0" : "0 auto")};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

interface SectionHeaderProps {
  /** Section title */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Match parent Section variant for correct colors */
  variant?: "dark" | "light";
}

export const SectionHeader = ({
  title,
  subtitle = undefined,
  align = "left",
  variant = "dark",
}: SectionHeaderProps) => (
  <StyledHeader $align={align} $variant={variant}>
    <Title $variant={variant}>{title}</Title>
    {subtitle && <Subtitle $variant={variant}>{subtitle}</Subtitle>}
  </StyledHeader>
);
