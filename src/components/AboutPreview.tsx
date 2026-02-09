/**
 * AboutPreview Component
 *
 * A preview/teaser for the About Me page, displayed on the home page.
 * Features an image alongside text content with a CTA button.
 *
 * Behavior:
 * - Two-column layout on desktop (image + text)
 * - Stacks vertically on mobile (image on top)
 * - Image is optional but recommended
 *
 * Usage:
 * - Use on home page as a teaser for the full About Me page
 * - Pass paragraphs as an array for multiple text blocks
 */

import styled from "styled-components";
import { Link } from "react-router-dom";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-3xl);
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: var(--color-gray-800);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 280px;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-on-dark-muted);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  color: var(--color-text-on-dark-muted);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-black);
  background-color: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-full);
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);
  width: fit-content;

  &:hover {
    background: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 0 auto;
  }
`;

const Arrow = styled.span`
  transition: transform var(--transition-fast);

  ${CTAButton}:hover & {
    transform: translateX(4px);
  }
`;

interface AboutPreviewProps {
  /** Array of paragraphs to display */
  paragraphs: string[];
  /** Image URL (optional) */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA link destination */
  ctaHref?: string;
}

export const AboutPreview = ({
  paragraphs,
  imageUrl = undefined,
  imageAlt = "About me",
  ctaText = "Learn More",
  ctaHref = "/about",
}: AboutPreviewProps) => (
  <Container>
    <ImageWrapper>
      {imageUrl ? (
        <Image src={imageUrl} alt={imageAlt} />
      ) : (
        <ImagePlaceholder>Photo</ImagePlaceholder>
      )}
    </ImageWrapper>
    <Content>
      {paragraphs.map((text, index) => (
        // Using index as key is safe here - paragraphs are static and won't reorder
        // eslint-disable-next-line react/no-array-index-key
        <Paragraph key={index}>{text}</Paragraph>
      ))}
      <CTAButton to={ctaHref}>
        {ctaText}
        <Arrow aria-hidden="true">→</Arrow>
      </CTAButton>
    </Content>
  </Container>
);
