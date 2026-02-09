/**
 * ProjectsSection Component
 *
 * A section displaying project cards floating directly over the background.
 * Uses the same title styling as other sections but without a dark container.
 *
 * Layout:
 * - Title and subtitle positioned above the grid
 * - Project cards in responsive grid (1-3 columns)
 * - Cards float directly on the page background
 *
 * Usage:
 * - Use on home page for projects showcase
 * - Pass content from src/content/projects.ts
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

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
  margin-bottom: var(--spacing-xl);
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

const GridContainer = styled.div`
  width: 80%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;

  /* Tablet portrait: 2 columns */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface ProjectsSectionProps {
  /** Array of projects to display */
  projects: Project[];
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Section id for anchor linking */
  id?: string;
  /** Maximum number of projects to display */
  maxItems?: number;
  /** Optional CSS class name */
  className?: string;
}

export const ProjectsSection = ({
  projects,
  title = "Projects",
  subtitle,
  id,
  maxItems,
  className,
}: ProjectsSectionProps) => {
  const displayProjects =
    maxItems !== void 0 ? projects.slice(0, maxItems) : projects;

  return (
    <Wrapper className={className}>
      {(title || subtitle) && (
        <TitleArea>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TitleArea>
      )}
      <GridContainer>
        <Grid id={id}>
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </GridContainer>
    </Wrapper>
  );
};
