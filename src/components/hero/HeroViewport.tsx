/**
 * HeroViewport Component
 *
 * A full-viewport container with rounded corners and inset margins.
 * Designed for immersive hero sections with layered content.
 *
 * Structure:
 * - Outer container: full-bleed on mobile, viewport-inset margins on desktop (768px+)
 * - Optional media layer for background video/image/canvas
 * - Gradient overlay for text readability
 * - Content layer for children (above overlay)
 *
 * Usage:
 * - Use on landing/home pages for dramatic hero sections
 * - Pass `media` prop for animated backgrounds (e.g., HeroAnimationOrchestrator)
 * - Children render above the overlay (typically HeroContent + ScrollIndicator)
 */

import styled from "styled-components";

/**
 * The viewport inset creates equal spacing on all sides.
 * Using CSS custom property for consistent spacing.
 */
const VIEWPORT_INSET = "var(--viewport-inset)";

const ViewportContainer = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--color-viewport);
  z-index: var(--z-viewport);

  /* Mobile: full-bleed, no inset or border-radius */
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height accounts for mobile browser chrome */

  /* Desktop: inset with rounded corners */
  @media (min-width: 768px) {
    width: calc(100vw - ${VIEWPORT_INSET} * 2);
    height: calc(100vh - ${VIEWPORT_INSET} * 2);
    margin: ${VIEWPORT_INSET};
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-viewport);
  }
`;

const MediaLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  /* Ensure media fills container */
  & > video,
  & > img,
  & > svg,
  & > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  /* Subtle gradient overlay with navy tint to ensure text readability */
  background: linear-gradient(
    135deg,
    rgba(10, 25, 47, 0.7) 0%,
    rgba(2, 12, 27, 0.4) 50%,
    rgba(10, 25, 47, 0.5) 100%
  );
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: var(--z-content);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export interface HeroViewportProps {
  children: React.ReactNode;
  /** Optional media element (video, image, SVG) to display as background */
  media?: React.ReactNode;
}

export const HeroViewport = ({ children, media = null }: HeroViewportProps) => (
  <ViewportContainer>
    {media && <MediaLayer>{media}</MediaLayer>}
    <Overlay />
    <ContentLayer>{children}</ContentLayer>
  </ViewportContainer>
);
