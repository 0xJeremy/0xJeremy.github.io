/**
 * DecorativeElements Component
 *
 * Floating decorative symbols positioned around the viewport edges.
 * Adds visual interest and "designed" feel to pages without affecting content.
 *
 * Elements:
 * - Floating X and O symbols with gentle bobbing animation
 * - Pulsing box outlines
 * - Slowly spinning plus signs
 * - Dotted lines (horizontal and vertical)
 * - Square brackets as frame accents
 *
 * Behavior:
 * - Absolute position, scrolls with page content
 * - pointer-events: none (won't interfere with clicks)
 * - Hidden from screen readers via aria-hidden
 *
 * Usage:
 * - Render at page level for ambient decoration
 * - Currently used on Home page
 */

import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh; /* Only cover the hero section area */
  pointer-events: none;
  z-index: var(--z-decorative);
  overflow: hidden;
`;

const Element = styled.span<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}>`
  position: absolute;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-400);
  user-select: none;
  top: ${(p) => p.$top ?? "auto"};
  left: ${(p) => p.$left ?? "auto"};
  right: ${(p) => p.$right ?? "auto"};
  bottom: ${(p) => p.$bottom ?? "auto"};
`;

const FloatingX = styled(Element)`
  animation: ${float} 4s ease-in-out infinite;
`;

const FloatingO = styled(Element)`
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: -1s;
`;

const PulsingBox = styled(Element)`
  width: 12px;
  height: 12px;
  border: 2px solid var(--color-gray-600);
  border-radius: var(--radius-sm);
  animation: ${pulse} 3s ease-in-out infinite;
`;

const SpinningPlus = styled(Element)`
  animation: ${spin} 20s linear infinite;
`;

const DottedLine = styled.div<{
  $orientation: "horizontal" | "vertical";
  $position: string;
}>`
  position: absolute;
  ${(p) =>
    p.$orientation === "horizontal"
      ? `
    width: 60px;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      var(--color-gray-600) 0px,
      var(--color-gray-600) 4px,
      transparent 4px,
      transparent 8px
    );
  `
      : `
    width: 2px;
    height: 60px;
    background: repeating-linear-gradient(
      180deg,
      var(--color-gray-600) 0px,
      var(--color-gray-600) 4px,
      transparent 4px,
      transparent 8px
    );
  `}
  ${(p) => p.$position}
  opacity: 0.5;
`;

const Bracket = styled(Element)`
  font-size: var(--font-size-2xl);
  color: var(--color-gray-600);
`;

export const DecorativeElements = () => (
  <Container aria-hidden="true">
    {/* Left side decorations */}
    <FloatingX $top="15%" $left="3%">
      ×
    </FloatingX>
    <PulsingBox $top="35%" $left="2%" />
    <FloatingO $top="55%" $left="4%">
      ○
    </FloatingO>
    <Bracket $top="75%" $left="2%">
      [
    </Bracket>

    {/* Right side decorations */}
    <FloatingO $top="20%" $right="3%">
      ○
    </FloatingO>
    <SpinningPlus $top="40%" $right="2%">
      +
    </SpinningPlus>
    <PulsingBox $top="60%" $right="4%" />
    <FloatingX $top="80%" $right="3%">
      ×
    </FloatingX>
    <Bracket $top="75%" $right="2%">
      ]
    </Bracket>

    {/* Dotted lines */}
    <DottedLine $orientation="horizontal" $position="top: 12%; left: 1%;" />
    <DottedLine $orientation="vertical" $position="top: 25%; right: 1.5%;" />
    <DottedLine $orientation="horizontal" $position="bottom: 15%; right: 1%;" />
  </Container>
);
