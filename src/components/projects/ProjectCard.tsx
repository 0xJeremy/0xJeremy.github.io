/**
 * ProjectCard Component
 *
 * A card displaying a project with image, name, description, tags, and action buttons.
 * Designed for use in grids on home page and projects page.
 *
 * Features:
 * - Main image with gradient placeholder fallback
 * - Project name and short description
 * - Technology tags displayed as pills
 * - Two action buttons: "Source" (GitHub) and "View More" (detail page)
 * - Hover animation: lifts up with enhanced shadow
 *
 * Usage:
 * - Use within ProjectGrid for consistent layout
 * - Pass project data from content/projects.ts
 * - sourceUrl is optional (button hidden if not provided)
 */

import { Link } from "react-router-dom";
import styled from "styled-components";
import type { Project, ProjectImage } from "@/content/projects";
import { getMainImage } from "@/content/projects";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--color-gray-800) 0%,
    var(--color-gray-700) 100%
  );
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-4xl);
  color: var(--color-gray-500);
  background: linear-gradient(
    135deg,
    var(--color-gray-800) 0%,
    var(--color-gray-700) 100%
  );
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--spacing-lg);
  gap: var(--spacing-md);
`;

const Name = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height);
  margin: 0;
  /* Clamp to ~3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: auto;
`;

const Tag = styled.span`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: var(--color-accent-subtle);
  border-radius: var(--radius-full);
  white-space: nowrap;
  font-family: var(--font-family-mono);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  padding-top: 0;
`;

const CardButton = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);
  cursor: pointer;
`;

const SourceButton = styled(CardButton)`
  color: var(--color-gray-100);
  background: var(--color-gray-800);
  border: 1px solid var(--color-gray-700);

  &:hover {
    background: var(--color-gray-700);
    border-color: var(--color-gray-600);
    color: var(--color-white);
  }
`;

const ViewMoreButton = styled(CardButton).attrs({ as: Link })`
  color: var(--color-black);
  background: var(--color-accent);
  border: 1px solid var(--color-accent);

  &:hover {
    background: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
  }
`;

const GitHubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export interface ProjectCardProps {
  /** Project data to display */
  project: Project;
  /** Optional CSS class name */
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const mainImage: ProjectImage | undefined = getMainImage(project.images);

  return (
    <Card className={className}>
      <ImageContainer>
        {mainImage?.url ? (
          <Image src={mainImage.url} alt={mainImage.alt} loading="lazy" />
        ) : (
          <ImagePlaceholder aria-label="No image available">
            📁
          </ImagePlaceholder>
        )}
      </ImageContainer>

      <Content>
        <Name>{project.name}</Name>
        <Description>{project.shortDescription}</Description>
        <TagsContainer>
          {project.tags.map((tag) => (
            <Tag key={tag.label}>{tag.label}</Tag>
          ))}
        </TagsContainer>
      </Content>

      <ButtonsContainer>
        {project.sourceUrl && (
          <SourceButton
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            Source
          </SourceButton>
        )}
        <ViewMoreButton to={project.detailUrl}>
          View More
          <ArrowIcon />
        </ViewMoreButton>
      </ButtonsContainer>
    </Card>
  );
};
