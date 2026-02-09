/**
 * AboutSection Component
 *
 * A styled about section with title outside the card.
 * Combines Section and AboutPreview components.
 *
 * Behavior:
 * - Title and subtitle appear above the dark card
 * - Card contains image, text, and CTA button
 *
 * Usage:
 * - Use on home page as teaser for About Me page
 * - Pass content from src/content/about.ts
 */

import { Section } from "./Section";
import { AboutPreview } from "./AboutPreview";

interface AboutSectionProps {
  /** Section title (displayed above card) */
  title?: string;
  /** Section subtitle/headline (displayed above card) */
  subtitle?: string;
  /** About text paragraphs */
  paragraphs: string[];
  /** Image URL */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA link destination */
  ctaHref?: string;
  /** Section id for anchor linking */
  id?: string;
}

export const AboutSection = ({
  title = "About Me",
  subtitle = undefined,
  paragraphs,
  imageUrl = undefined,
  imageAlt = undefined,
  ctaText = undefined,
  ctaHref = undefined,
  id = undefined,
}: AboutSectionProps) => (
  <Section id={id} title={title} subtitle={subtitle}>
    <AboutPreview
      paragraphs={paragraphs}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      ctaText={ctaText}
      ctaHref={ctaHref}
    />
  </Section>
);
