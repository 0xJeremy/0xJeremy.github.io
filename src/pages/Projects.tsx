/**
 * Projects Page
 *
 * Displays a grid of project cards showcasing portfolio work.
 * Uses placeholder data - meant to be replaced with real projects.
 *
 * Structure:
 * - Header with title and description
 * - Responsive grid of ProjectCards
 *   - Each card has: gradient image area, title, description, tags
 *
 * Styling Notes:
 * - Uses hardcoded styles (predates design token adoption)
 * - Cards have hover lift effect
 * - Grid auto-fits with 320px minimum column width
 *
 * TODO:
 * - Migrate to design tokens (CSS variables)
 * - Source project data from config/API
 * - Add project detail modal or page
 */

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #6c757d;
  font-size: 1.1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectImage = styled.div`
  height: 160px;
  background: linear-gradient(135deg, #e94560 0%, #1a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #f0f0f0;
  color: #1a1a2e;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A sample project showcasing React and TypeScript integration.",
    icon: "🚀",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Another exciting project demonstrating modern web development.",
    icon: "🎨",
    tags: ["styled-components", "CSS-in-JS"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A third project example to fill out the grid layout.",
    icon: "⚡",
    tags: ["GitHub Pages", "Static Site"],
  },
];

export const Projects = () => (
  <Container>
    <Header>
      <Title>Projects</Title>
      <Description>A collection of my work and side projects.</Description>
    </Header>

    <ProjectsGrid>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectImage>{project.icon}</ProjectImage>
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TagList>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </Container>
);
