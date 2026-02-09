/**
 * GrainBackground Component
 *
 * A wrapper that provides the solid navy background for the app.
 * Previously had grain texture overlays, now simplified to solid color.
 *
 * Usage:
 * - Wrap entire app or major sections
 * - Used in App.tsx as the root visual wrapper
 */

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--color-background);
`;

const Content = styled.div`
  position: relative;
  z-index: var(--z-decorative);
`;

export interface GrainBackgroundProps {
  children: React.ReactNode;
}

export const GrainBackground = ({ children }: GrainBackgroundProps) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);
