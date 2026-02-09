/**
 * Home Page
 *
 * The landing page featuring a dramatic full-viewport hero section
 * followed by About, Work Experience, and Projects sections.
 *
 * Structure:
 * - BackgroundDecorations: Scattered symbols across full page background
 * - HeroSection: Full-viewport with hero-specific decorations
 *   - DecorativeElements: Ambient floating symbols around hero
 *   - HeroViewport: Dark container with starfield
 *   - HeroContent: Title, subtitle, and CTA buttons
 *   - ScrollIndicator: Bouncing arrow
 * - SectionsContainer: Contains all content sections (flat design)
 *   - FlatSection + FlatAboutContent: About Me with skills grid
 *   - FlatSection + FlatExperienceContent: Work experience timeline
 *   - FeaturedProjectsSection: 2-3 hero-style featured projects
 *   - OtherProjectsSection: Grid of simpler project cards
 *
 * Content is imported from src/content/ for easy editing.
 */

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  HeroViewport,
  HeroContent,
  ScrollIndicator,
  BrainsBrainCanvas,
} from "@/components/hero";
import {
  BackgroundDecorations,
  DecorativeElements,
} from "@/components/decorations";
import {
  FlatSection,
  FlatAboutContent,
  FlatExperienceContent,
  FlatPatentsContent,
} from "@/components/sections";
import {
  FeaturedProjectsSection,
  OtherProjectsSection,
} from "@/components/projects";
import {
  heroContent,
  aboutContent,
  experienceContent,
  researchContent,
  patentsContent,
  projectsContent,
} from "@/content";

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;
`;

const SectionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-4xl);
  z-index: 1;
`;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* Background decorations span the full page, behind all content */}
      <BackgroundDecorations density={10} seed={42} />

      <HeroSection>
        <DecorativeElements />
        <HeroViewport media={<BrainsBrainCanvas />}>
          <HeroContent
            greeting={heroContent.greeting}
            title={heroContent.title}
            subtitle={heroContent.subtitle}
            description={heroContent.description}
            primaryAction={{
              label: heroContent.primaryButton.label,
              onClick: () => {
                const href = heroContent.primaryButton.href;
                if (href.startsWith("/#")) {
                  const elementId = href.split("/#")[1];
                  const element = document.getElementById(elementId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(href);
                  }
                } else {
                  navigate(href);
                }
              },
            }}
            secondaryAction={{
              label: heroContent.secondaryButton.label,
              onClick: () => {
                if (heroContent.secondaryButton.href.startsWith("/#")) {
                  const elementId =
                    heroContent.secondaryButton.href.split("/#")[1];
                  const element = document.getElementById(elementId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(heroContent.secondaryButton.href);
                  }
                } else {
                  navigate(heroContent.secondaryButton.href);
                }
              },
            }}
          />
          <ScrollIndicator />
        </HeroViewport>
      </HeroSection>

      <SectionsContainer>
        {/* About Me Section */}
        <FlatSection
          id="about"
          title={aboutContent.title}
          sectionNumber={aboutContent.sectionNumber}
        >
          <FlatAboutContent
            paragraphs={aboutContent.paragraphs}
            skills={aboutContent.skills}
            skillsIntro={aboutContent.skillsIntro}
            imageUrl={aboutContent.image.url}
            imageAlt={aboutContent.image.alt}
          />
        </FlatSection>

        {/* Work Experience Section */}
        <FlatSection
          id="experience"
          title={experienceContent.title}
          sectionNumber="02"
        >
          <FlatExperienceContent entries={experienceContent.entries} />
        </FlatSection>

        {/* Research Section */}
        <FlatSection
          id="research"
          title={researchContent.title}
          sectionNumber="03"
        >
          <FlatExperienceContent
            entries={researchContent.entries}
            showLogoPlaceholders={false}
          />
        </FlatSection>

        {/* Patents Section */}
        <FlatSection
          id="patents"
          title={patentsContent.title}
          sectionNumber="04"
        >
          <FlatPatentsContent entries={patentsContent.entries} />
        </FlatSection>

        {/* Featured Projects Section */}
        <FeaturedProjectsSection
          id="featured-projects"
          projects={projectsContent}
          title="Some Things I've Built"
          sectionNumber="05"
        />

        {/* Other Projects Section */}
        <OtherProjectsSection
          id="other-projects"
          projects={projectsContent}
          initialCount={6}
        />
      </SectionsContainer>
    </PageContainer>
  );
};
