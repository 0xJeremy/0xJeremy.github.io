/**
 * FlatSection Component
 *
 * A section layout without a dark card container, for a flatter page design.
 * Uses a numbered section header inspired by developer portfolios (e.g., "01. About Me").
 *
 * Behavior:
 * - Section header with optional number prefix and horizontal accent line
 * - Content renders directly on page background (no card container)
 * - Responsive width: 75% on desktop, 95% on mobile
 * - Proper mobile-first responsive design
 *
 * Usage:
 * - Use for About, Experience, and Projects sections on the home page
 * - For sections with floating cards, use the individual card components inside
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";

const TABLET_BREAKPOINT = 950;

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: var(--spacing-4xl);
  width: 75%;
  max-width: 1100px;

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    width: 95%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-3xl);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
  white-space: nowrap;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-xl);
  }
`;

const HeaderNumber = styled.span`
  color: var(--color-accent);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  margin-right: var(--spacing-sm);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-lg);
  }
`;

const HeaderTitle = styled.h2`
  color: var(--color-white);
  font-family: var(--font-family);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 1px;
  padding-right: var(--spacing-lg);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: var(--font-size-xl);
  }
`;

const HeaderLine = styled.span`
  display: inline-block;
  position: relative;
  flex: 1;
  max-width: 300px;
  height: 1px;
  background-color: var(--color-accent);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const Content = styled.div`
  /* Content renders directly without card wrapper */
`;

interface FlatSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Section title (displayed in header) */
  title: string;
  /** Section number for header (e.g., "01", "02") - optional */
  sectionNumber?: string;
  /** Whether to show the horizontal accent line after title */
  showHeaderLine?: boolean;
  /** Optional id for anchor linking */
  id?: string;
  /** Optional className for additional styling */
  className?: string;
}

export const FlatSection = ({
  children,
  title,
  sectionNumber = void 0,
  showHeaderLine = true,
  id = void 0,
  className = void 0,
}: FlatSectionProps) => (
  <Wrapper id={id} className={className}>
    <Header>
      {sectionNumber && <HeaderNumber>{sectionNumber}.</HeaderNumber>}
      <HeaderTitle>{title}</HeaderTitle>
      {showHeaderLine && <HeaderLine aria-hidden="true" />}
    </Header>
    <Content>{children}</Content>
  </Wrapper>
);
