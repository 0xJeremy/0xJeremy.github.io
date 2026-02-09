/**
 * FeaturedProjectsSection Component
 *
 * A section displaying 2-3 featured projects in hero-style layout.
 * Uses ShowcaseProject components with alternating alignment.
 *
 * Behavior:
 * - Filters projects to only show those marked as featured
 * - Alternates ShowcaseProject alignment (left, right, left) for visual variety
 * - Uses FlatSection wrapper with numbered header
 *
 * Usage:
 * - Use on home page for highlighted projects
 * - Pass full projects array - component filters to featured only
 */

import { FlatSection } from "./FlatSection";
import { ShowcaseProject } from "./ShowcaseProject";
import type { Project } from "@/content/projects";

interface FeaturedProjectsSectionProps {
  /** Array of all projects (will filter to featured only) */
  projects: Project[];
  /** Section title */
  title?: string;
  /** Section number for header (e.g., "02") */
  sectionNumber?: string;
  /** Maximum number of featured projects to display */
  maxProjects?: number;
  /** Optional id for anchor linking */
  id?: string;
}

export const FeaturedProjectsSection = ({
  projects,
  title = "Some Things I've Built",
  sectionNumber = void 0,
  maxProjects = 3,
  id = void 0,
}: FeaturedProjectsSectionProps) => {
  // Filter to featured projects only, limit to maxProjects
  const featuredProjects = projects
    .filter((p) => p.featured)
    .slice(0, maxProjects);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <FlatSection id={id} title={title} sectionNumber={sectionNumber}>
      {featuredProjects.map((project, index) => (
        <ShowcaseProject
          key={project.id}
          project={project}
          // Alternate alignment: false, true, false, true...
          alignRight={index % 2 === 1}
        />
      ))}
    </FlatSection>
  );
};
