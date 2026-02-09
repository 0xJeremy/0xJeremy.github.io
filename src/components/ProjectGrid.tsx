/**
 * ProjectGrid Component
 *
 * A responsive grid layout for displaying ProjectCards.
 * Supports up to 3 cards per row on desktop, scaling down on smaller screens.
 *
 * Breakpoints:
 * - Desktop (>900px): 3 columns
 * - Tablet portrait (>600px): 2 columns
 * - Mobile (<600px): 1 column
 *
 * Usage:
 * - Wrap ProjectCard components in this grid
 * - Or pass projects array and let grid render cards
 * - Optionally add section header with title/subtitle props
 */

import styled from "styled-components";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const Section = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-xl);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;

const Title = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0 0 var(--spacing-sm) 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin: 0;
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

interface ProjectGridProps {
  /** Array of projects to display */
  projects: Project[];
  /** Optional section title */
  title?: string;
  /** Optional section subtitle */
  subtitle?: string;
  /** Whether to only show featured projects */
  featuredOnly?: boolean;
  /** Maximum number of projects to display */
  maxItems?: number;
  /** Optional CSS class name */
  className?: string;
}

export const ProjectGrid = ({
  projects,
  title,
  subtitle,
  featuredOnly = false,
  maxItems,
  className,
}: ProjectGridProps) => {
  // Filter and limit projects
  let displayProjects = featuredOnly
    ? projects.filter((p) => p.featured)
    : projects;

  if (maxItems !== void 0 && maxItems > 0) {
    displayProjects = displayProjects.slice(0, maxItems);
  }

  return (
    <Section className={className}>
      {(title || subtitle) && (
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
      )}
      <Grid>
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Section>
  );
};
