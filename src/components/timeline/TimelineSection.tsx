/**
 * TimelineSection Component
 *
 * A styled timeline section with title outside the card.
 * Used for Work Experience, Research, Publications, Patents, etc.
 *
 * Behavior:
 * - Title and subtitle appear above the dark card
 * - Card contains timeline entries with roles
 *
 * Usage:
 * - Pass content from src/content/experience.ts (or similar)
 * - Reuse for different timeline types (research, patents, etc.)
 */

import { Section } from "@/components/sections";
import { TimelineEntry } from "./TimelineEntry";
import type { TimelineSectionProps } from "@/types/timeline";

export interface Props extends TimelineSectionProps {
  /** Section id for anchor linking */
  id?: string;
  /** Whether to show logo placeholders */
  showLogoPlaceholders?: boolean;
}

export const TimelineSection = ({
  title,
  subtitle = void 0,
  entries,
  id = void 0,
  showLogoPlaceholders = true,
}: Props) => (
  <Section id={id} title={title} subtitle={subtitle}>
    {entries.map((entry) => (
      <TimelineEntry
        key={entry.id}
        entry={entry}
        showLogoPlaceholder={showLogoPlaceholders}
      />
    ))}
  </Section>
);
