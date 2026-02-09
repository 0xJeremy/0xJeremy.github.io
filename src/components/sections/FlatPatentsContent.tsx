/**
 * FlatPatentsContent Component
 *
 * Content layout for the Patents section with a flat design.
 * Displays patent entries with title, inventors, and filing info.
 *
 * Usage:
 * - Use inside FlatSection for the Patents section
 * - Pass entries from src/content/patents.ts
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { Patent } from "@/content/patents";

const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const PatentCard = styled.article`
  position: relative;
  padding-left: var(--spacing-xl);

  /* Vertical line */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--color-accent) 0%,
      var(--color-gray-700) 100%
    );
  }

  /* Dot at top */
  &::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 10px;
    background-color: var(--color-accent);
    border-radius: 50%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: var(--spacing-lg);
  }
`;

const PatentTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-lg);
  }
`;

const PatentLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Inventors = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  line-height: var(--line-height);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

const ApplicationInfo = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  font-family: var(--font-family-mono);
`;

const FiledDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
`;

export interface FlatPatentsContentProps {
  /** Array of patent entries to display */
  entries: Patent[];
}

export const FlatPatentsContent = ({ entries }: FlatPatentsContentProps) => (
  <EntriesContainer>
    {entries.map((patent) => (
      <PatentCard key={patent.id}>
        <PatentTitle>
          {patent.link ? (
            <PatentLink
              href={patent.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {patent.title}
            </PatentLink>
          ) : (
            patent.title
          )}
        </PatentTitle>
        <MetaInfo>
          <Inventors>Inventors: {patent.inventors.join(", ")}</Inventors>
          <ApplicationInfo>{patent.applicationNumber}</ApplicationInfo>
          <FiledDate>Filed: {patent.filedDate}</FiledDate>
        </MetaInfo>
      </PatentCard>
    ))}
  </EntriesContainer>
);
