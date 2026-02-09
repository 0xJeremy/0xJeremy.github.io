/**
 * Section Component
 *
 * A stylish content card with title floating above.
 * Centered at 80% width for visual appeal.
 *
 * Behavior:
 * - Title positioned outside/above the dark card
 * - Card is centered (80% on desktop, full on mobile)
 * - Background decorations are handled by BackgroundDecorations component
 *
 * Usage:
 * - Wrap any content section (About, Experience, etc.)
 * - Title renders above the card, content inside
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

interface StyledWrapperProps {
  $variant: "dark" | "light";
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  padding: 0 var(--spacing-xl);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0 var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
  }
`;

const TitleArea = styled.div`
  width: 80%;
  max-width: 1100px;
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-md);
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--color-accent);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-xl);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
  }
`;

const Card = styled.section<StyledWrapperProps>`
  position: relative;
  width: 100%;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  background-color: ${({ $variant }) =>
    $variant === "light" ? "var(--color-surface)" : "var(--color-viewport)"};
  color: ${({ $variant }) =>
    $variant === "light" ? "var(--color-text)" : "var(--color-text-on-dark)"};
  box-shadow: var(--shadow-lg);

  /* Subtle top accent line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: var(--spacing-xl);
    right: var(--spacing-xl);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-gray-700) 20%,
      var(--color-gray-700) 80%,
      transparent 100%
    );
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: var(--spacing-xl) var(--spacing-lg);
  }
`;

interface SectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Section title (displayed above card) */
  title?: string;
  /** Section subtitle/headline (displayed above card) */
  subtitle?: string;
  /** Visual variant - dark (default) or light background */
  variant?: "dark" | "light";
  /** Optional id for anchor linking */
  id?: string;
  /** Optional className for additional styling */
  className?: string;
}

export const Section = ({
  children,
  title = undefined,
  subtitle = undefined,
  variant = "dark",
  id = undefined,
  className = undefined,
}: SectionProps) => (
  <Wrapper>
    {(title || subtitle) && (
      <TitleArea>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleArea>
    )}
    <CardContainer>
      <Card $variant={variant} id={id} className={className}>
        {children}
      </Card>
    </CardContainer>
  </Wrapper>
);
