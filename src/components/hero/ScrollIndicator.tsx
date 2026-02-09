/**
 * ScrollIndicator Component
 *
 * A subtle animated hint encouraging users to scroll down.
 * Displays a label and bouncing arrow at the bottom of hero sections.
 *
 * Animation:
 * - Overall container pulses opacity (0.6 to 1)
 * - Arrow bounces up and down continuously
 *
 * Usage:
 * - Place at the bottom of HeroViewport content
 * - Customize label text via `label` prop (default: "Scroll")
 * - Designed for dark backgrounds (uses --color-text-on-dark-muted)
 */

import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

const fade = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  z-index: var(--z-content);
  animation: ${fade} 2s ease-in-out infinite;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 2s ease-in-out infinite;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-right: 2px solid var(--color-text-on-dark-muted);
    border-bottom: 2px solid var(--color-text-on-dark-muted);
    transform: rotate(45deg);
    margin-top: -4px;
  }
`;

const Label = styled.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-on-dark-muted);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
`;

export interface ScrollIndicatorProps {
  label?: string;
}

export const ScrollIndicator = ({ label = "Scroll" }: ScrollIndicatorProps) => (
  <Container>
    <Label>{label}</Label>
    <Arrow />
  </Container>
);
