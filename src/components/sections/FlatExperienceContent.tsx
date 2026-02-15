/**
 * FlatExperienceContent Component
 *
 * Content layout for the Work Experience section with a flat design.
 * Displays timeline entries without the dark card container.
 *
 * Behavior:
 * - Each organization is an entry with optional logo
 * - Roles listed under each organization with bullets
 * - Vertical timeline line on the left connecting entries
 * - Clean, flat styling without card backgrounds
 *
 * Usage:
 * - Use inside FlatSection for the Work Experience section
 * - Pass entries from src/content/experience.ts
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { TimelineEntry } from "@/types/timeline";

const EntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EntryWrapper = styled.article`
  position: relative;
  padding-left: var(--spacing-xl);

  /* Vertical timeline line */
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

  /* Timeline dot at top */
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

  &:not(:last-child) {
    margin-bottom: var(--spacing-2xl);
    padding-bottom: var(--spacing-md);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: var(--spacing-lg);
  }
`;

const EntryHeader = styled.header`
  margin-bottom: var(--spacing-md);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  object-fit: contain;
  background-color: var(--color-gray-800);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 40px;
    height: 40px;
  }
`;

const LogoPlaceholder = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--color-gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-base);
  }
`;

const OrgInfo = styled.div`
  flex: 1;
`;

const OrgName = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-xs);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-lg);
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
`;

const Location = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);

  &::before {
    content: "📍 ";
  }
`;

const OverallDuration = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
  font-family: var(--font-family-mono);
`;

const RolesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--color-gray-700);
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`;

const RoleTitle = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const RoleDuration = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
  font-family: var(--font-family-mono);
  white-space: nowrap;
`;

const RoleDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

export interface FlatExperienceContentProps {
  /** Array of timeline entries to display */
  entries: TimelineEntry[];
  /** Whether to show logo placeholder when no logo provided */
  showLogoPlaceholders?: boolean;
}

export const FlatExperienceContent = ({
  entries,
  showLogoPlaceholders = true,
}: FlatExperienceContentProps) => (
  <EntriesContainer>
    {entries.map((entry) => {
      const orgInitial = entry.organization.charAt(0).toUpperCase();

      return (
        <EntryWrapper key={entry.id}>
          <EntryHeader>
            <TopRow>
              {entry.logoUrl ? (
                <Logo src={entry.logoUrl} alt={`${entry.organization} logo`} />
              ) : (
                showLogoPlaceholders && (
                  <LogoPlaceholder aria-hidden="true">
                    {orgInitial}
                  </LogoPlaceholder>
                )
              )}
              <OrgInfo>
                <OrgName>{entry.organization}</OrgName>
                <MetaRow>
                  {entry.location && <Location>{entry.location}</Location>}
                  <OverallDuration>{entry.overallDuration}</OverallDuration>
                </MetaRow>
              </OrgInfo>
            </TopRow>
          </EntryHeader>

          <RolesContainer>
            {entry.roles.map((role) => (
              <RoleWrapper key={`${role.title}-${role.duration}`}>
                <RoleHeader>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDuration>{role.duration}</RoleDuration>
                </RoleHeader>
                {role.description && (
                  <RoleDescription>{role.description}</RoleDescription>
                )}
                {/* Bullets removed as per request */}
              </RoleWrapper>
            ))}
          </RolesContainer>
        </EntryWrapper>
      );
    })}
  </EntriesContainer>
);
