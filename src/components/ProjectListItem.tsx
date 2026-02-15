/**
 * ProjectListItem Component
 *
 * A clickable list item for the projects sidebar. Displays project name,
 * technology tags as small pills, and an external GitHub link icon when available.
 * Highlights with an accent left-border and background when active/selected.
 *
 * Usage:
 * - Used inside the Projects page list panel
 * - Wraps a react-router Link so clicking navigates to /projects/:id
 * - GitHub icon click opens in new tab without triggering navigation
 */

import { Link } from "react-router-dom";
import styled from "styled-components";
import type { ProjectTag } from "@/content/projects";

const LIST_PANEL_PADDING = "var(--spacing-md)";

const ItemLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: ${LIST_PANEL_PADDING} var(--spacing-lg);
  border-left: 3px solid
    ${({ $active }) => ($active ? "var(--color-accent)" : "transparent")};
  background: ${({ $active }) =>
    $active ? "var(--color-accent-subtle)" : "transparent"};
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
  text-decoration: none;
  color: inherit;

  &:hover {
    background: ${({ $active }) =>
      $active ? "var(--color-accent-subtle)" : "rgba(255, 255, 255, 0.03)"};
  }
`;

const Name = styled.span<{ $active: boolean }>`
  display: block;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: ${({ $active }) =>
    $active ? "var(--color-accent)" : "var(--color-text)"};
  margin-bottom: var(--spacing-xs);
  line-height: var(--line-height-tight);
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
`;

const TagPill = styled.span`
  font-size: var(--font-size-xs);
  padding: 2px var(--spacing-sm);
  border-radius: var(--radius-full);
  background: var(--color-gray-800);
  color: var(--color-gray-100);
  white-space: nowrap;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--color-gray-200);
  transition: color var(--transition-fast);
  margin-left: auto;
  flex-shrink: 0;

  &:hover {
    color: var(--color-accent);
  }

  /* GitHub SVG icon */
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

export interface ProjectListItemProps {
  /** Project unique id, used to build the route */
  id: string;
  /** Display name */
  name: string;
  /** Technology tags */
  tags: ProjectTag[];
  /** Optional source URL (e.g. GitHub) */
  sourceUrl?: string;
  /** Whether this item is currently selected */
  active: boolean;
}

export const ProjectListItem = ({
  id,
  name,
  tags,
  sourceUrl,
  active,
}: ProjectListItemProps) => (
  <ItemLink to={`/projects/${id}`} $active={active}>
    <Name $active={active}>{name}</Name>
    <MetaRow>
      {tags.slice(0, 3).map((tag) => (
        <TagPill key={tag.label}>{tag.label}</TagPill>
      ))}
      {sourceUrl && (
        <ExternalLink
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${name} on GitHub`}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </ExternalLink>
      )}
    </MetaRow>
  </ItemLink>
);
