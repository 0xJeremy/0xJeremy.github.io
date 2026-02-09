# Projects Components

Components for displaying project showcases, cards, and grids.

## Files

| File                          | Description                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| `ProjectCard.tsx`             | Card with image, name, description, tags, and action buttons   |
| `ProjectGrid.tsx`             | Responsive grid layout for ProjectCards (1-3 columns)          |
| `ProjectsSection.tsx`         | Section displaying project cards floating over background      |
| `FeaturedProjectsSection.tsx` | Hero-style section for 2-3 featured projects                   |
| `ShowcaseProject.tsx`         | Large featured project display with alternating alignment      |
| `OtherProjectCard.tsx`        | Simple card for non-featured projects (folder icon, no images) |
| `OtherProjectsSection.tsx`    | Grid of non-featured projects with Show More toggle            |

## Usage

```tsx
import {
  FeaturedProjectsSection,
  OtherProjectsSection,
  ProjectsSection,
} from '@/components/projects';
import { projects } from '@/content/projects';

// Featured projects with hero-style layout
<FeaturedProjectsSection
  projects={projects}
  title="Some Things I've Built"
  sectionNumber="02"
  maxProjects={3}
/>

// Other projects grid with toggle
<OtherProjectsSection
  projects={projects}
  initialCount={6}
/>

// Simple grid layout
<ProjectsSection
  projects={projects}
  title="Projects"
  subtitle="Check out what I've been working on"
/>
```

## Component Hierarchy

```
FeaturedProjectsSection
└── ShowcaseProject (alternating left/right alignment)

OtherProjectsSection
└── OtherProjectCard (simple folder-style cards)

ProjectsSection / ProjectGrid
└── ProjectCard (full cards with images)
```

## Related

- `@/content/projects.ts` - Project data and types
- `@/components/sections/FlatSection` - Section wrapper for FeaturedProjectsSection
