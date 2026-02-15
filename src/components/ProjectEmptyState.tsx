/**
 * ProjectEmptyState Component
 *
 * Shown in the detail panel when no project is selected (desktop only).
 * Displays a subtle prompt encouraging the user to select a project from the list.
 *
 * Usage:
 * - Rendered inside the Projects page detail panel when projectId is undefined
 * - Not shown on mobile (mobile shows the list instead)
 */

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--spacing-3xl);
  text-align: center;
`;

const Icon = styled.span`
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.4;
`;

const Text = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  max-width: 28ch;
`;

export const ProjectEmptyState = () => (
  <Container>
    <Icon>←</Icon>
    <Text>Select a project from the list to view its details</Text>
  </Container>
);
