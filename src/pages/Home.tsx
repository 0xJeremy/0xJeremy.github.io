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

import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/Button";
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
  ContactSection,
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
  contactContent,
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
  padding-bottom: var(--spacing-lg);
  z-index: 1;
`;

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set the page title
  useEffect(() => {
    document.title = "JK | Home";
  }, []);

  // Scroll to hash target after navigation from another page (e.g., /projects -> /#about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Small delay to ensure the DOM has rendered before scrolling
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [location.hash]);

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
            imageUrl={aboutContent.image.url}
            imageAlt={aboutContent.image.alt}
          />
        </FlatSection>

        {/* Work Experience Section */}
        <FlatSection
          id="experience"
          title={experienceContent.title}
          sectionNumber="02"
          headerAction={
            <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
              <Button
                variant="secondary"
                onClick={() => window.open("/resume.pdf", "_blank")}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-md)",
                  fontSize: "var(--font-size-xs)",
                }}
              >
                Resume ↗
              </Button>
            </div>
          }
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

        {/* Contact Section - Section 06 */}
        <ContactSection
          id="contact"
          sectionNumber={contactContent.sectionNumber}
          title={contactContent.title}
          heading={contactContent.heading}
          description={contactContent.description}
          cta={contactContent.cta}
        />
      </SectionsContainer>
    </PageContainer>
  );
};
