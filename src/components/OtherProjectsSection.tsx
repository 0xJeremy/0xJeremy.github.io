/**
 * OtherProjectsSection Component
 *
 * A section displaying non-featured projects in a grid of simple cards.
 * Includes "Show More"/"Show Fewer" toggle functionality.
 *
 * Behavior:
 * - Filters out featured projects (shows only non-featured)
 * - Displays initial set of projects (default 6)
 * - "Show More" button reveals additional projects
 * - "Show Fewer" button collapses back to initial set
 * - Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
 * - Centered section title with link to full projects page
 *
 * Usage:
 * - Use on home page below FeaturedProjectsSection
 * - Pass full projects array - component filters to non-featured only
 */

import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import { OtherProjectCard } from "./OtherProjectCard";
import type { Project } from "@/content/projects";

const TABLET_BREAKPOINT = 950;

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: var(--spacing-4xl);
  width: 75%;
  max-width: 1100px;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    width: 95%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-3xl);
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h2`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-lg);
  }
`;

const Subtitle = styled(Link)`
  display: inline-block;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-base);
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: var(--spacing-3xl);
`;

const ToggleButton = styled.button`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-base);
  color: var(--color-accent);
  background: transparent;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-xl);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background-color: var(--color-accent-subtle);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
  }
`;

interface OtherProjectsSectionProps {
  /** Array of all projects (will filter to non-featured only) */
  projects: Project[];
  /** Section title */
  title?: string;
  /** Subtitle/link text */
  subtitleText?: string;
  /** Link destination for subtitle */
  subtitleHref?: string;
  /** Number of projects to show initially */
  initialCount?: number;
  /** Optional id for anchor linking */
  id?: string;
}

export const OtherProjectsSection = ({
  projects,
  title = "Other Noteworthy Projects",
  subtitleText = "view all projects",
  subtitleHref = "/projects",
  initialCount = 6,
  id = void 0,
}: OtherProjectsSectionProps) => {
  const [showAll, setShowAll] = useState(false);

  // Filter to non-featured projects only
  const otherProjects = projects.filter((p) => !p.featured);

  if (otherProjects.length === 0) {
    return null;
  }

  const displayedProjects = showAll
    ? otherProjects
    : otherProjects.slice(0, initialCount);
  const hasMoreProjects = otherProjects.length > initialCount;

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Wrapper id={id}>
      <Header>
        <Title>{title}</Title>
        <Subtitle to={subtitleHref}>{subtitleText}</Subtitle>
      </Header>

      <Grid>
        {displayedProjects.map((project) => (
          <OtherProjectCard key={project.id} project={project} />
        ))}
      </Grid>

      {hasMoreProjects && (
        <ButtonContainer>
          <ToggleButton onClick={toggleShowAll} type="button">
            {showAll ? "Show Fewer" : "Show More"}
          </ToggleButton>
        </ButtonContainer>
      )}
    </Wrapper>
  );
};
