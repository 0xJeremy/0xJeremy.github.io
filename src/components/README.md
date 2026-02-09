# Components

Reusable UI components for the application. Each component has a corresponding test file (`ComponentName.test.tsx`).

## Navigation

| File                   | Description                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `NavBar.tsx`           | Main navigation bar with scroll-based visibility and mobile responsiveness. Floating pill-shaped design with frosted glass effect. |
| `NavLink.tsx`          | Navigation link that handles both internal routes and external URLs. Shows arrow indicator for external links.                     |
| `NavLogo.tsx`          | Site logo linking to home page. Displays icon placeholder alongside "Sandbox" text.                                                |
| `MobileMenu.tsx`       | Full-screen overlay menu for mobile navigation. Opens from hamburger button with staggered link animations.                        |
| `MobileMenuButton.tsx` | Animated hamburger/close button for mobile menu. Three bars morph into X when open.                                                |

## Hero Section

| File                            | Description                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `HeroViewport.tsx`              | Full-viewport container with rounded corners and inset margins. Supports layered media backgrounds.             |
| `HeroContent.tsx`               | Text and CTA content for hero sections. Large title, subtitle, and primary/secondary action buttons.            |
| `HeroAnimationOrchestrator.tsx` | Manages animated background sequences. Coordinates transitions between starfield and path tracer animations.    |
| `StarfieldCanvas.tsx`           | Canvas-based animated starfield with warp-speed parallax effect. Configurable star count, velocity, and colors. |
| `PathTracerCanvas.tsx`          | Canvas animation drawing a continuous line through geometric shapes. Camera follows the line tip.               |
| `ScrollIndicator.tsx`           | Animated hint encouraging scroll. Bouncing arrow with customizable label.                                       |

## Layout & Background

| File                        | Description                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| `Layout.tsx`                | **LEGACY** - Original app shell with header, main content, and footer. Superseded by newer patterns. |
| `GrainBackground.tsx`       | Wrapper adding subtle film grain texture overlay. Creates "dirty paper" aesthetic.                   |
| `DecorativeElements.tsx`    | Floating decorative symbols (×, ○, +, brackets) around viewport edges. Adds visual interest.         |
| `BackgroundDecorations.tsx` | Scattered symbols across full page background. Seeded randomness for consistent layouts.             |

## Flat Layout Sections

New components for the flat page design without dark card containers.

| File                        | Description                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `FlatSection.tsx`           | Section wrapper with numbered header (e.g., "01. About Me") and horizontal accent line. Content renders on page background without card. |
| `FlatAboutContent.tsx`      | About section content with 2-column grid (text + image), inline links support, and skills grid with chevron icons.                       |
| `FlatExperienceContent.tsx` | Work experience timeline with organization logos, multiple roles per entry, and bullet points. Uses accent-colored timeline line.        |

## Featured Projects (Showcase)

Large hero-style project displays for highlighted work.

| File                          | Description                                                                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ShowcaseProject.tsx`         | Hero-style project card with large image and overlapping description box. Alternating left/right alignment. Features "Featured Project" label, tech tags, and GitHub link. |
| `FeaturedProjectsSection.tsx` | Section displaying 2-3 featured projects using ShowcaseProject components. Filters projects by `featured` flag.                                                            |

## Other Projects

Simpler card grid for non-featured projects.

| File                       | Description                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `OtherProjectCard.tsx`     | Flat card with folder icon, title, description, and tech tags. No images. Entire card is clickable, linking to GitHub or detail page. |
| `OtherProjectsSection.tsx` | Grid of OtherProjectCards with "Show More"/"Show Fewer" toggle. Responsive 3/2/1 column grid. Includes link to full projects page.    |

## Legacy Projects (may be deprecated)

| File                  | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `ProjectCard.tsx`     | Card displaying a project with image, name, description, tags, and action buttons. Hover lift animation.    |
| `ProjectGrid.tsx`     | Responsive grid layout for ProjectCards. Supports 1-4 columns based on viewport width.                      |
| `ProjectsSection.tsx` | Section with title styling matching other sections, but cards float over background without dark container. |

## Section Components (Legacy)

These components use the older "card" style with dark containers.

| File                | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `Section.tsx`       | Wrapper with dark card container and title above. Use `FlatSection` for new flat design. |
| `SectionHeader.tsx` | Header with large title and optional subtitle. Used inside Section component.            |
| `AboutSection.tsx`  | Combines Section + AboutPreview. Use FlatSection + FlatAboutContent for new design.      |
| `AboutPreview.tsx`  | Two-column layout with image and text. Legacy - prefer FlatAboutContent.                 |

## Timeline Components (Legacy)

These are used by the legacy TimelineSection. The new FlatExperienceContent has integrated styling.

| File                  | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| `TimelineSection.tsx` | Section wrapper for timeline entries. Legacy - use FlatSection + FlatExperienceContent. |
| `TimelineEntry.tsx`   | Single organization entry with roles.                                                   |
| `TimelineRole.tsx`    | Single role/position within a timeline entry.                                           |

## UI Elements

| File              | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `Button.tsx`      | Versatile button with three variants: `primary`, `secondary`, `ghost`. Pill-shaped with uppercase text. |
| `StickyLinks.tsx` | Fixed social links on left side of page.                                                                |

## Adding New Components

1. Create `ComponentName.tsx` with doc comment at top
2. Create `ComponentName.test.tsx` alongside it
3. Update this README with the new component
4. Use design tokens from `GlobalStyles.ts` (never hardcode values)

## Mobile Responsiveness

All new flat layout components are designed mobile-first with proper breakpoints:

- **Desktop** (>950px): Full multi-column layouts
- **Tablet** (768-950px): Reduced columns, adjusted spacing
- **Mobile** (<768px): Single column, stacked layouts, reduced font sizes

Key breakpoints are defined in `src/constants/navigation.ts` (`MOBILE_BREAKPOINT`).
