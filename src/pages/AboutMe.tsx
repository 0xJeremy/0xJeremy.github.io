/**
 * AboutMe Page
 *
 * Personal introduction and skills overview.
 * Provides context about the developer and their technical capabilities.
 *
 * Structure:
 * - Page title
 * - Introduction section with welcome text
 * - Skills section with categorized lists (Frontend, Tools, Testing)
 *
 * Styling Notes:
 * - Uses hardcoded styles (predates design token adoption)
 * - Card-like sections with subtle shadows
 * - Skills displayed in responsive grid
 *
 * TODO:
 * - Migrate to design tokens (CSS variables)
 * - Consider adding photo/avatar
 * - Add links to social profiles or resume
 */

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a2e;
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e94560;
  display: inline-block;
`;

const Paragraph = styled.p`
  color: #4a4a4a;
  line-height: 1.8;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillCategory = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1rem;
  color: #e94560;
  margin-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SkillItem = styled.li`
  color: #4a4a4a;
  font-size: 0.95rem;

  &::before {
    content: "•";
    color: #e94560;
    margin-right: 0.5rem;
  }
`;

export const AboutMe = () => (
  <Container>
    <Title>About Me</Title>

    <Section>
      <SectionTitle>Hello!</SectionTitle>
      <Paragraph>
        Welcome to my personal sandbox. This is a place where I experiment with
        new technologies, build side projects, and showcase my work.
      </Paragraph>
      <Paragraph>
        Feel free to explore the projects section to see what I&apos;ve been
        working on, or reach out if you&apos;d like to connect.
      </Paragraph>
    </Section>

    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        <SkillCategory>
          <SkillCategoryTitle>Frontend</SkillCategoryTitle>
          <SkillList>
            <SkillItem>React</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>styled-components</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillCategoryTitle>Tools</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Vite</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>VS Code</SkillItem>
          </SkillList>
        </SkillCategory>

        <SkillCategory>
          <SkillCategoryTitle>Testing</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Vitest</SkillItem>
            <SkillItem>React Testing Library</SkillItem>
          </SkillList>
        </SkillCategory>
      </SkillsGrid>
    </Section>
  </Container>
);
