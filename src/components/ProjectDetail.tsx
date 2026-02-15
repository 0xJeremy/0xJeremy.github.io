/**
 * ProjectDetail Component
 *
 * The right-side detail panel for the projects page. Displays the full project
 * information when a project is selected: title, tags, description, external
 * links, and an interactive image viewer with carousel and fullscreen support.
 *
 * Usage:
 * - Rendered inside the Projects page when a project is selected
 * - Receives a full Project object as a prop
 * - On mobile, takes up the full width with a back button above it
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { Project } from "@/content/projects";
import { ImageViewer } from "./ImageViewer";

const Container = styled.div`
  padding: var(--spacing-xl) var(--spacing-2xl);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: var(--spacing-lg) var(--spacing-md);
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-tight);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-2xl);
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const Tag = styled.span`
  font-size: var(--font-size-xs);
  font-family: var(--font-family-mono);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  background: var(--color-gray-800);
  color: var(--color-accent);
`;

const LinksRow = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const ExternalButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-mono);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-md);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
  text-decoration: none;

  &:hover {
    background: var(--color-accent);
    color: var(--color-black);
  }

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height);
  margin-bottom: var(--spacing-xl);
  max-width: 72ch;
`;

export interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <Container>
      <Title>{project.name}</Title>

      <TagRow>
        {project.tags.map((tag) => (
          <Tag key={tag.label}>{tag.label}</Tag>
        ))}
      </TagRow>

      {project.sourceUrl && (
        <LinksRow>
          <ExternalButton
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </ExternalButton>
        </LinksRow>
      )}

      <Description>
        {project.fullDescription ?? project.shortDescription}
      </Description>

      {project.images.length > 0 && <ImageViewer images={project.images} />}
    </Container>
  );
};
