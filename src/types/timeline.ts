/**
 * Timeline Types
 *
 * Shared types for timeline-based sections like Work Experience,
 * Research, Publications, Patents, etc.
 *
 * These types are intentionally generic to support reuse across
 * different timeline contexts while maintaining consistent structure.
 */

/** Individual role/position within a timeline entry */
export interface TimelineRole {
  /** Role title (e.g., "Senior Engineer", "Research Assistant") */
  title: string;
  /** Duration string (e.g., "Jan 2020 - Present") */
  duration: string;
  /** Optional brief description */
  description?: string;
  /** Bullet points describing responsibilities/achievements */
  bullets?: string[];
}

/** A single entry in a timeline (company, institution, etc.) */
export interface TimelineEntry {
  /** Unique identifier for React keys */
  id: string;
  /** Organization name (company, university, etc.) */
  organization: string;
  /** Optional location (city, state, country) */
  location?: string;
  /** Overall duration at organization (e.g., "2018 - Present") */
  overallDuration: string;
  /** Optional URL to organization logo */
  logoUrl?: string;
  /** Roles held at this organization */
  roles: TimelineRole[];
}

/** Props for timeline section components */
export interface TimelineSectionProps {
  /** Section title (e.g., "Work Experience", "Research") */
  title: string;
  /** Optional section subtitle */
  subtitle?: string;
  /** Timeline entries to display */
  entries: TimelineEntry[];
}
