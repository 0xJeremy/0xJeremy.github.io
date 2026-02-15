/**
 * Projects Page
 *
 * A master/detail split-panel layout for browsing the project portfolio.
 *
 * Desktop (≥768px):
 * - Left panel: scrollable project list with name, tags, and GitHub links
 * - Right panel: selected project detail (images, full description) or empty state
 * - Both panels scroll independently
 *
 * Mobile (<768px):
 * - When no project selected: full-width project list
 * - When project selected (URL has :projectId): full-width detail view with back button
 * - Uses drill-down navigation pattern
 *
 * Routing:
 * - /projects → list view (desktop: empty state on right)
 * - /projects/:projectId → detail view for specific project
 *
 * Content is sourced from src/content/projects.ts.
 */

import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import { projectsContent } from "@/content";
import { ProjectListItem } from "@/components/ProjectListItem";
import { ProjectDetail } from "@/components/ProjectDetail";
import { ProjectEmptyState } from "@/components/ProjectEmptyState";

/** Width of the list panel — easy to change here */
const LIST_PANEL_WIDTH = "350px";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Account for fixed navbar + viewport insets */
  padding-top: calc(var(--spacing-3xl) + var(--spacing-xl));
`;

const SplitLayout = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

const ListPanel = styled.aside<{ $hidden: boolean }>`
  width: ${LIST_PANEL_WIDTH};
  flex-shrink: 0;
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  height: calc(100vh - var(--spacing-3xl) - var(--spacing-xl));
  position: sticky;
  top: calc(var(--spacing-3xl) + var(--spacing-xl));

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    height: auto;
    border-right: none;
    position: static;
    display: ${({ $hidden }) => ($hidden ? "none" : "block")};
  }
`;

const ListHeader = styled.div`
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
`;

const ListTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`;

const ListSubtitle = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
`;

const DetailPanel = styled.main<{ $hidden: boolean }>`
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - var(--spacing-3xl) - var(--spacing-xl));

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: auto;
    display: ${({ $hidden }) => ($hidden ? "none" : "block")};
  }
`;

const BackButton = styled(Link)`
  display: none;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-mono);
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);

  &:hover {
    background: var(--color-accent-subtle);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: flex;
  }
`;

export const Projects = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const navigate = useNavigate();

  const selectedProject = projectId
    ? projectsContent.find((p) => p.id === projectId)
    : undefined;

  // If the URL has a projectId that doesn't match any project, redirect to /projects
  useEffect(() => {
    if (projectId && !selectedProject) {
      navigate("/projects", { replace: true });
    }
  }, [projectId, selectedProject, navigate]);

  // Update the document title
  useEffect(() => {
    document.title = selectedProject
      ? `JK | ${selectedProject.name}`
      : "JK | Projects";
  }, [selectedProject]);

  const hasSelection = !!selectedProject;

  return (
    <PageContainer>
      <SplitLayout>
        {/* List panel — hidden on mobile when a project is selected */}
        <ListPanel $hidden={hasSelection}>
          <ListHeader>
            <ListTitle>Projects</ListTitle>
            <ListSubtitle>A selection of my work</ListSubtitle>
          </ListHeader>

          {projectsContent.map((project) => (
            <ProjectListItem
              key={project.id}
              id={project.id}
              name={project.name}
              tags={project.tags}
              sourceUrl={project.sourceUrl}
              active={project.id === projectId}
            />
          ))}
        </ListPanel>

        {/* Detail panel — hidden on mobile when no project is selected */}
        <DetailPanel $hidden={!hasSelection}>
          {selectedProject ? (
            <>
              <BackButton to="/projects">← Back to Projects</BackButton>
              <ProjectDetail project={selectedProject} />
            </>
          ) : (
            <ProjectEmptyState />
          )}
        </DetailPanel>
      </SplitLayout>
    </PageContainer>
  );
};
