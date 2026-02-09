/**
 * ShowcaseProject Component
 *
 * A hero-style project display for featured projects.
 * Large image on one side, descriptive text overlay on the other.
 *
 * Behavior:
 * - Desktop: Image and text side by side, position alternates via `alignRight` prop
 * - Mobile: Stacks vertically with text below image
 * - "Featured Project" label above title
 * - Description box has subtle navy background and hover lift effect
 * - Technology tags displayed inline below description
 * - GitHub icon links to source (if provided)
 *
 * Usage:
 * - Use for 2-3 highlighted projects at the top of projects section
 * - Alternate alignRight prop for visual variety (false, true, false)
 */

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { Project } from "@/content/projects";

const TABLET_BREAKPOINT = 950;

interface AlignmentProps {
  $alignRight: boolean;
}

const Container = styled.article<AlignmentProps>`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-4xl);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-3xl);
  }
`;

const Grid = styled.div<AlignmentProps>`
  display: grid;
  grid-template-columns: ${({ $alignRight }) =>
    $alignRight ? "7fr 5fr" : "5fr 7fr"};
  gap: var(--spacing-md);
  align-items: center;
  overflow: visible;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ImageWrapper = styled.div<AlignmentProps>`
  position: relative;
  z-index: 1;
  order: ${({ $alignRight }) => ($alignRight ? 1 : 2)};

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    order: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    var(--color-gray-800) 0%,
    var(--color-gray-700) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-2xl);
`;

const ContentWrapper = styled.div<AlignmentProps>`
  position: relative;
  z-index: 10;
  text-align: ${({ $alignRight }) => ($alignRight ? "right" : "left")};
  order: ${({ $alignRight }) => ($alignRight ? 2 : 1)};
  overflow: visible;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    order: 2;
    text-align: left;
  }
`;

const FeaturedLabel = styled.span`
  display: block;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
`;

const titleHoverStyles = css`
  color: var(--color-accent);
  cursor: pointer;
`;

const ProjectTitle = styled.h3<AlignmentProps>`
  font-family: var(--font-family);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);
  transition: color var(--transition-fast);

  &:hover {
    ${titleHoverStyles}
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-xl);
  }
`;

const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    ${titleHoverStyles}
  }
`;

const Description = styled.div<AlignmentProps>`
  position: relative;
  background: var(--color-gray-900);
  border-radius: var(--radius-md);
  padding: var(--spacing-xl);
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  /* Extend past grid column for overlap effect */
  /* alignRight=true: content on right, image on left → extend LEFT to overlap image */
  /* alignRight=false: content on left, image on right → extend RIGHT to overlap image */
  width: 120%;
  max-width: 120%;

  ${({ $alignRight }) =>
    $alignRight
      ? css`
          margin-left: -20%;
          margin-right: 0;
        `
      : css`
          margin-left: 0;
          margin-right: 0;
        `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    background: transparent;
    padding: 0;
    font-size: var(--font-size-base);
  }
`;

const TechList = styled.div<AlignmentProps>`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: ${({ $alignRight }) =>
    $alignRight ? "flex-end" : "flex-start"};
  margin-bottom: var(--spacing-lg);

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    justify-content: flex-start;
  }
`;

const TechItem = styled.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`;

const IconsContainer = styled.div<AlignmentProps>`
  display: flex;
  gap: var(--spacing-md);
  justify-content: ${({ $alignRight }) =>
    $alignRight ? "flex-end" : "flex-start"};

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    justify-content: flex-start;
  }
`;

const IconLink = styled.a`
  color: var(--color-gray-200);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
`;

const GitHubIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface ShowcaseProjectProps {
  /** Project data to display */
  project: Project;
  /** Whether to align content to the right (image left, text right) */
  alignRight?: boolean;
}

export const ShowcaseProject = ({
  project,
  alignRight = false,
}: ShowcaseProjectProps) => {
  const mainImage =
    project.images.find((img) => img.isMain) ?? project.images[0];

  return (
    <Container $alignRight={alignRight}>
      <Grid $alignRight={alignRight}>
        <ImageWrapper $alignRight={alignRight}>
          {mainImage ? (
            <ProjectImage src={mainImage.url} alt={mainImage.alt} />
          ) : (
            <ImagePlaceholder aria-label="No project image">
              📁
            </ImagePlaceholder>
          )}
        </ImageWrapper>

        <ContentWrapper $alignRight={alignRight}>
          <FeaturedLabel>Featured Project</FeaturedLabel>
          <ProjectTitle $alignRight={alignRight}>
            <TitleLink to={project.detailUrl}>{project.name}</TitleLink>
          </ProjectTitle>
          <Description $alignRight={alignRight}>
            {project.shortDescription}
          </Description>
          <TechList $alignRight={alignRight}>
            {project.tags.map((tag) => (
              <TechItem key={tag.label}>{tag.label}</TechItem>
            ))}
          </TechList>
          <IconsContainer $alignRight={alignRight}>
            {project.sourceUrl && (
              <IconLink
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
              >
                <GitHubIcon />
              </IconLink>
            )}
            <IconLink
              href={project.detailUrl}
              aria-label={`View ${project.name} details`}
            >
              <ExternalLinkIcon />
            </IconLink>
          </IconsContainer>
        </ContentWrapper>
      </Grid>
    </Container>
  );
};
