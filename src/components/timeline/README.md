# Timeline Components

Components for displaying chronological content like work experience, research, publications, etc.

## Files

| File                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `TimelineSection.tsx` | Section wrapper that renders title, subtitle, and timeline entries               |
| `TimelineEntry.tsx`   | Single organization entry with logo, name, location, duration, and roles         |
| `TimelineRole.tsx`    | Individual role/position within an entry (title, duration, description, bullets) |

## Usage

```tsx
import { TimelineSection } from "@/components/timeline";
import { experienceContent } from "@/content/experience";

<TimelineSection
  id="experience"
  title={experienceContent.title}
  subtitle={experienceContent.subtitle}
  entries={experienceContent.entries}
/>;
```

## Data Types

Timeline data is typed via `@/types/timeline`:

- `TimelineEntry` - Organization with roles
- `TimelineRole` - Individual position/role
- `TimelineSectionProps` - Section props (title, subtitle, entries)

## Visual Structure

```
[Section Title]
[Section Subtitle]

● ─────────────────────────────────────
│  [Logo] Organization Name
│         📍 Location  |  Duration
│
│  ├── Role Title              Duration
│  │   Description paragraph...
│  │   ▸ Bullet point 1
│  │   ▸ Bullet point 2
│  │
│  └── Role Title              Duration
│      ▸ Bullet point
│
● ─────────────────────────────────────
│  [Logo] Next Organization...
```

## Related

- `@/types/timeline` - TypeScript interfaces
- `@/content/experience.ts` - Work experience content
- `@/components/sections/Section` - Base section component
