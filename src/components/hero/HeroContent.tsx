/**
 * HeroContent Component
 *
 * The text and CTA content for hero sections.
 * Displays a large title, subtitle, and two action buttons.
 *
 * Layout:
 * - Vertically centered within its container
 * - Left-aligned text with constrained max-width
 * - Button group with primary and secondary actions
 *
 * Usage:
 * - Place inside HeroViewport as the main content
 * - Customize via props: title, subtitle, primaryAction, secondaryAction
 * - Action objects can include onClick handlers for navigation
 */

import styled from "styled-components";
import { Button } from "@/components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-lg);
  max-width: 45vw;
  background: rgba(10, 25, 47, 0.5);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: auto var(--spacing-md);

  @media (min-width: 768px) {
    padding: var(--spacing-xl);
    margin: auto var(--spacing-2xl);
  }
`;

const Greeting = styled.h2`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-normal);

  @media (min-width: 768px) {
    font-size: var(--font-size-base);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Reduced from 3rem */
  font-weight: var(--font-weight-bold);
  color: var(--color-text-on-dark);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 4rem; /* Reduced from 4.5rem */
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem; /* Reduced from 2rem */
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-on-dark-muted);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-sm);

  @media (min-width: 768px) {
    font-size: 2.5rem; /* Reduced from 4rem */
  }
`;

const Description = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-on-dark-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`;

export interface HeroContentProps {
  greeting: string;
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction: {
    label: string;
    onClick?: () => void;
  };
}

export const HeroContent = ({
  greeting,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) => (
  <Container>
    <Greeting>{greeting}</Greeting>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Description>{description}</Description>
    <ButtonGroup>
      <Button variant="primary" onClick={primaryAction.onClick}>
        {primaryAction.label}
      </Button>
      <Button variant="secondary" onClick={secondaryAction.onClick}>
        {secondaryAction.label}
      </Button>
    </ButtonGroup>
  </Container>
);
