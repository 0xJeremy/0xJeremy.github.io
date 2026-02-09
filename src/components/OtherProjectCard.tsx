/**
 * OtherProjectCard Component
 *
 * A simpler project card for non-featured projects.
 * Flat design with folder icon, no images, just text content.
 *
 * Behavior:
 * - Navy background card with subtle hover lift effect
 * - Folder icon (orange) top left, GitHub icon top right
 * - Title links to project detail page
 * - Description with line clamping
 * - Technology tags at bottom
 * - Entire card is clickable, linking to GitHub or detail page
 *
 * Usage:
 * - Use in OtherProjectsSection grid for non-featured projects
 * - Pass project data from content/projects.ts
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { Project } from "@/content/projects";

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: var(--color-gray-900);
  padding: var(--spacing-xl) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-white);
  transition:
    transform var(--transition-normal),
    color var(--transition-fast);
  position: relative;
  top: 0;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    color: var(--color-accent);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: var(--spacing-lg);
  }
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`;

const FolderIconWrapper = styled.span`
  color: var(--color-accent);
  display: flex;
  align-items: center;
`;

const GitHubIconWrapper = styled.span`
  color: var(--color-gray-200);
  display: flex;
  align-items: center;
  transition: color var(--transition-fast);

  ${Card}:hover & {
    color: var(--color-accent);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 140px;
`;

const Title = styled.h3`
  font-family: var(--font-family);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: inherit;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-lg);
  }
`;

const Description = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  line-height: 1.5;
  /* Clamp to ~3-4 lines */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
    -webkit-line-clamp: 3;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: auto;
  padding-top: var(--spacing-xl);
`;

const TechItem = styled.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-xs);
  }
`;

const FolderIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface OtherProjectCardProps {
  /** Project data to display */
  project: Project;
  /** Optional CSS class name */
  className?: string;
}

export const OtherProjectCard = ({
  project,
  className = undefined,
}: OtherProjectCardProps) => {
  // Link to GitHub if available, otherwise to detail page
  const href = project.sourceUrl ?? project.detailUrl;
  const isExternal = !!project.sourceUrl;

  return (
    <Card
      href={href}
      target={isExternal ? "_blank" : void 0}
      rel={isExternal ? "noopener noreferrer" : void 0}
      className={className}
    >
      <IconsRow>
        <FolderIconWrapper>
          <FolderIcon />
        </FolderIconWrapper>
        {project.sourceUrl && (
          <GitHubIconWrapper>
            <GitHubIcon />
          </GitHubIconWrapper>
        )}
      </IconsRow>

      <ContentArea>
        <Title>{project.name}</Title>
        <Description>{project.shortDescription}</Description>
      </ContentArea>

      <TechList>
        {project.tags.map((tag) => (
          <TechItem key={tag.label}>{tag.label}</TechItem>
        ))}
      </TechList>
    </Card>
  );
};
