/**
 * FlatAboutContent Component
 *
 * Content layout for the About Me section with a flat design.
 * Two-column grid: text/skills on left, image on right.
 *
 * Behavior:
 * - Desktop: 2-column layout (2fr / 1fr ratio)
 * - Mobile: Stacks vertically (text first, then image)
 * - Skills displayed in a 2-column grid with accent chevron icons
 * - Image has subtle rounded corners
 *
 * Usage:
 * - Use inside FlatSection for the About Me section
 * - Pass content from src/content/about.ts
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

const TABLET_BREAKPOINT = 950;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const Paragraph = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-gray-200);

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    line-height: 1.4;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const StyledLink = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--color-accent);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const SkillsIntro = styled.p`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  margin-top: var(--spacing-md);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm) var(--spacing-lg);
  margin-top: var(--spacing-md);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    gap: var(--spacing-xs) var(--spacing-md);
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const SkillIcon = styled.span`
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  transform: translateY(-1px);
`;

const SkillText = styled.span`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    order: -1;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
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
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
`;

/** Link within text content */
export interface AboutLink {
  /** The text to display */
  text: string;
  /** URL the link points to */
  href: string;
}

/** Paragraph with optional inline links */
export interface AboutParagraph {
  /** Plain text content, or content with {linkKey} placeholders */
  text: string;
  /** Links to interpolate into the text */
  links?: Record<string, AboutLink>;
}

export interface FlatAboutContentProps {
  /** Paragraphs to display - can be plain strings or objects with links */
  paragraphs: (string | AboutParagraph)[];
  /** List of skills/technologies */
  skills?: string[];
  /** Label for skills section (e.g., "Some of the things I've been working on:") */
  skillsIntro?: string;
  /** Image URL */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
}

/**
 * Renders a paragraph with optional inline links.
 * Links are specified as {linkKey} in the text and resolved from the links object.
 */
const renderParagraph = (paragraph: string | AboutParagraph, index: number) => {
  if (typeof paragraph === "string") {
    return <Paragraph key={index}>{paragraph}</Paragraph>;
  }

  const { text, links } = paragraph;
  if (!links || Object.keys(links).length === 0) {
    return <Paragraph key={index}>{text}</Paragraph>;
  }

  // Split text by {linkKey} patterns and interpolate links
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = /\{(\w+)\}/g;
  let match = regex.exec(text);

  while (match !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the link
    const linkKey = match[1];
    const link = links[linkKey];
    if (link) {
      parts.push(
        <StyledLink
          key={`${index}-${linkKey}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </StyledLink>,
      );
    } else {
      parts.push(match[0]); // Keep original if no link found
    }

    lastIndex = match.index + match[0].length;
    match = regex.exec(text);
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <Paragraph key={index}>{parts}</Paragraph>;
};

const ChevronIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const FlatAboutContent = ({
  paragraphs,
  skills = void 0,
  skillsIntro = "Some of the things I've been working on recently:",
  imageUrl = void 0,
  imageAlt = "Profile photo",
}: FlatAboutContentProps) => (
  <Grid>
    <TextColumn>
      {paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}

      {skills && skills.length > 0 && (
        <>
          <SkillsIntro>{skillsIntro}</SkillsIntro>
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillItem key={skill}>
                <SkillIcon>
                  <ChevronIcon />
                </SkillIcon>
                <SkillText>{skill}</SkillText>
              </SkillItem>
            ))}
          </SkillsGrid>
        </>
      )}
    </TextColumn>

    <ImageColumn>
      <ImageWrapper>
        {imageUrl ? (
          <Image src={imageUrl} alt={imageAlt} />
        ) : (
          <ImagePlaceholder>Photo</ImagePlaceholder>
        )}
      </ImageWrapper>
    </ImageColumn>
  </Grid>
);
