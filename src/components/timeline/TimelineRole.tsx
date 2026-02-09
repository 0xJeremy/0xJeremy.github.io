/**
 * TimelineRole Component
 *
 * Displays a single role/position within a timeline entry.
 * Shows title, duration, optional description, and bullet points.
 *
 * Behavior:
 * - Title and duration displayed on same line (wraps on mobile)
 * - Optional description paragraph below title
 * - Bullet points styled as a clean list
 *
 * Usage:
 * - Used within TimelineEntry to display positions/roles
 * - Reusable for work experience, research roles, contributions, etc.
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { TimelineRole as TimelineRoleType } from "@/types/timeline";

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
    border-bottom: 1px solid var(--color-gray-700);
  }
`;

const Header = styled.div`
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

const Title = styled.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-on-dark);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-base);
  }
`;

const Duration = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-text-on-dark-muted);
  font-family: var(--font-family-mono);
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-text-on-dark-muted);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-on-dark-muted);
  line-height: var(--line-height);

  &::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--color-accent);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-sm);
  }
`;

export interface TimelineRoleProps {
  /** Role data */
  role: TimelineRoleType;
}

export const TimelineRole = ({ role }: TimelineRoleProps) => (
  <Container>
    <Header>
      <Title>{role.title}</Title>
      <Duration>{role.duration}</Duration>
    </Header>
    {role.description && <Description>{role.description}</Description>}
    {role.bullets && role.bullets.length > 0 && (
      <BulletList>
        {role.bullets.map((bullet) => (
          <BulletItem key={bullet}>{bullet}</BulletItem>
        ))}
      </BulletList>
    )}
  </Container>
);
