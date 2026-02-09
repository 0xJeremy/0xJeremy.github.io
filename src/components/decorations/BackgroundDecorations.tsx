/**
 * BackgroundDecorations Component
 *
 * A full-page layer of scattered decorative symbols (×, ○, +, [], etc.)
 * that appear behind content on the solid navy background.
 *
 * Behavior:
 * - Renders decorations across the full viewport width and height
 * - Uses seeded random positions for consistent layout
 * - Density parameter controls number of elements (1 = sparse, 10 = dense)
 * - Elements use white and orange colors to match the site palette
 * - Elements have varied sizes, opacities, and animations
 * - Hidden on mobile for performance
 *
 * Usage:
 * - Render once at page level, behind main content
 * - Pass `height` to cover scrollable area (e.g., "300vh")
 * - Adjust `density` for more/fewer elements (default: 5)
 */

import { useMemo } from "react";
import styled, { keyframes, css } from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const floatAlt = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(8deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const drift = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(4px, -5px); }
  50% { transform: translate(-3px, -8px); }
  75% { transform: translate(5px, -3px); }
`;

// Seeded random number generator for consistent positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

// Types for decoration elements
type DecorationType =
  | "x"
  | "o"
  | "plus"
  | "box"
  | "circle"
  | "bracket"
  | "dotH"
  | "dotV";

interface DecorationItem {
  id: string;
  type: DecorationType;
  x: number; // percentage
  y: number; // percentage
  size: number; // rem
  opacity: number;
  animationDelay: number;
  animationType: "float" | "floatAlt" | "pulse" | "spin" | "drift" | "none";
}

// Generate scattered decorations based on density
const generateDecorations = (
  density: number,
  seed: number = 42,
): DecorationItem[] => {
  const items: DecorationItem[] = [];
  const types: DecorationType[] = [
    "x",
    "o",
    "plus",
    "box",
    "circle",
    "bracket",
    "dotH",
    "dotV",
  ];
  const animations: DecorationItem["animationType"][] = [
    "float",
    "floatAlt",
    "pulse",
    "spin",
    "drift",
    "none",
  ];

  // Base count scaled by density (density 5 = ~60 elements)
  const count = Math.floor(density * 12);

  for (let i = 0; i < count; i += 1) {
    const r1 = seededRandom(seed + i * 1);
    const r2 = seededRandom(seed + i * 2);
    const r3 = seededRandom(seed + i * 3);
    const r4 = seededRandom(seed + i * 4);
    const r5 = seededRandom(seed + i * 5);
    const r6 = seededRandom(seed + i * 6);

    // Avoid center 60% horizontally (where cards are)
    let x = r1 * 100;
    if (x > 15 && x < 85) {
      // Push to edges with some randomness
      x = r1 < 0.5 ? r1 * 15 : 85 + r1 * 15;
    }

    items.push({
      id: `deco-${i}`,
      type: types[Math.floor(r2 * types.length)],
      x,
      y: r3 * 100,
      size: 0.6 + r4 * 0.8, // 0.6rem to 1.4rem
      opacity: 0.15 + r5 * 0.35, // 0.15 to 0.5
      animationDelay: r6 * 5, // 0 to 5 seconds
      animationType: animations[Math.floor(r6 * animations.length)],
    });
  }

  return items;
};

// Styled components
const Container = styled.div<{ $height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${(p) => p.$height};
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const BaseDecoration = styled.span<{
  $x: number;
  $y: number;
  $size: number;
  $opacity: number;
  $delay: number;
  $animation: DecorationItem["animationType"];
}>`
  position: absolute;
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  font-family: var(--font-family-mono);
  font-size: ${(p) => p.$size}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  opacity: ${(p) => p.$opacity};
  user-select: none;
  animation-delay: ${(p) => p.$delay}s;

  ${(p) => {
    switch (p.$animation) {
      case "float":
        return css`
          animation: ${float} 4s ease-in-out infinite;
        `;
      case "floatAlt":
        return css`
          animation: ${floatAlt} 5s ease-in-out infinite;
        `;
      case "pulse":
        return css`
          animation: ${pulse} 3s ease-in-out infinite;
        `;
      case "spin":
        return css`
          animation: ${spin} 20s linear infinite;
        `;
      case "drift":
        return css`
          animation: ${drift} 7s ease-in-out infinite;
        `;
      default:
        return "";
    }
  }}
`;

/* White decorations */
const SymbolX = styled(BaseDecoration)`
  color: var(--color-white);
`;

const SymbolO = styled(BaseDecoration)`
  color: var(--color-white);
`;

/* Orange decorations */
const SymbolPlus = styled(BaseDecoration)`
  color: var(--color-accent);
`;

const SymbolBracket = styled(BaseDecoration)`
  color: var(--color-white);
`;

const BoxDecoration = styled(BaseDecoration)`
  width: ${(p) => p.$size * 0.7}rem;
  height: ${(p) => p.$size * 0.7}rem;
  border: 2px solid var(--color-accent);
  border-radius: 2px;
`;

const CircleDecoration = styled(BaseDecoration)`
  width: ${(p) => p.$size * 0.5}rem;
  height: ${(p) => p.$size * 0.5}rem;
  border: 2px solid var(--color-white);
  border-radius: 50%;
`;

const DottedLineH = styled(BaseDecoration)`
  width: ${(p) => p.$size * 2.5}rem;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-accent) 0px,
    var(--color-accent) 3px,
    transparent 3px,
    transparent 6px
  );
`;

const DottedLineV = styled(BaseDecoration)`
  width: 2px;
  height: ${(p) => p.$size * 2.5}rem;
  background: repeating-linear-gradient(
    180deg,
    var(--color-white) 0px,
    var(--color-white) 3px,
    transparent 3px,
    transparent 6px
  );
`;

// Render a single decoration item
const renderDecoration = (item: DecorationItem) => {
  const commonProps = {
    key: item.id,
    $x: item.x,
    $y: item.y,
    $size: item.size,
    $opacity: item.opacity,
    $delay: item.animationDelay,
    $animation: item.animationType,
  };

  switch (item.type) {
    case "x":
      return <SymbolX {...commonProps}>×</SymbolX>;
    case "o":
      return <SymbolO {...commonProps}>○</SymbolO>;
    case "plus":
      return <SymbolPlus {...commonProps}>+</SymbolPlus>;
    case "bracket":
      return (
        <SymbolBracket {...commonProps}>
          {item.x < 50 ? "[" : "]"}
        </SymbolBracket>
      );
    case "box":
      return <BoxDecoration {...commonProps} />;
    case "circle":
      return <CircleDecoration {...commonProps} />;
    case "dotH":
      return <DottedLineH {...commonProps} />;
    case "dotV":
      return <DottedLineV {...commonProps} />;
    default:
      return null;
  }
};

export interface BackgroundDecorationsProps {
  /**
   * Density of decorations (1-10)
   * 1 = sparse (~12 elements)
   * 5 = medium (~60 elements)
   * 10 = dense (~120 elements)
   * @default 5
   */
  density?: number;
  /**
   * Height of the decoration layer
   * Use viewport units to cover scrollable content
   * @default "100%"
   */
  height?: string;
  /**
   * Seed for random generation (for consistent layouts)
   * @default 42
   */
  seed?: number;
}

export const BackgroundDecorations = ({
  density = 5,
  height = "100%",
  seed = 42,
}: BackgroundDecorationsProps) => {
  // Memoize decorations to avoid regenerating on every render
  const decorations = useMemo(
    () => generateDecorations(Math.min(Math.max(density, 1), 10), seed),
    [density, seed],
  );

  return (
    <Container
      $height={height}
      aria-hidden="true"
      data-testid="background-decorations"
    >
      {decorations.map(renderDecoration)}
    </Container>
  );
};
