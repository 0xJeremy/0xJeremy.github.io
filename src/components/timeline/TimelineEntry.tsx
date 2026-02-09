/**
 * TimelineEntry Component
 *
 * Displays a single organization entry with its roles.
 * Shows organization name, location, duration, optional logo, and roles.
 *
 * Behavior:
 * - Organization header with name, location, and duration
 * - Optional logo displayed alongside organization name
 * - Contains one or more TimelineRole components
 * - Vertical line connecting roles for visual timeline effect
 *
 * Usage:
 * - Used for work experience, research positions, etc.
 * - Pass array of roles for multiple positions at same organization
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import { TimelineRole } from "./TimelineRole";
import type { TimelineEntry as TimelineEntryType } from "@/types/timeline";

const Container = styled.article`
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
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-xl);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-left: var(--spacing-lg);
  }
`;

const Header = styled.header`
  margin-bottom: var(--spacing-xl);
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
  color: var(--color-text-on-dark-muted);
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
  color: var(--color-text-on-dark);
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
  color: var(--color-text-on-dark-muted);

  &::before {
    content: "📍 ";
  }
`;

const OverallDuration = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-text-on-dark-muted);
  font-family: var(--font-family-mono);
`;

const RolesContainer = styled.div`
  /* Roles are rendered here */
`;

export interface TimelineEntryProps {
  /** Entry data */
  entry: TimelineEntryType;
  /** Whether to show logo placeholder when no logo provided */
  showLogoPlaceholder?: boolean;
}

export const TimelineEntry = ({
  entry,
  showLogoPlaceholder = true,
}: TimelineEntryProps) => {
  const orgInitial = entry.organization.charAt(0).toUpperCase();

  return (
    <Container>
      <Header>
        <TopRow>
          {entry.logoUrl ? (
            <Logo src={entry.logoUrl} alt={`${entry.organization} logo`} />
          ) : (
            showLogoPlaceholder && (
              <LogoPlaceholder aria-hidden="true">{orgInitial}</LogoPlaceholder>
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
      </Header>
      <RolesContainer>
        {entry.roles.map((role) => (
          <TimelineRole key={`${role.title}-${role.duration}`} role={role} />
        ))}
      </RolesContainer>
    </Container>
  );
};
