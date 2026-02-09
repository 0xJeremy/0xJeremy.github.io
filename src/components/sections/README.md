# Section Components

Reusable building blocks for page sections with consistent styling.

## Files

| File                        | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| `Section.tsx`               | Dark card section with title floating above           |
| `SectionHeader.tsx`         | Consistent header with title and subtitle             |
| `FlatSection.tsx`           | Section without card container, numbered header style |
| `FlatAboutContent.tsx`      | Two-column about content (text/skills + image)        |
| `FlatExperienceContent.tsx` | Timeline entries without card container               |

## Usage

### Section (Dark Card)

```tsx
import { Section } from "@/components/sections";

<Section title="Experience" subtitle="My professional journey" variant="dark">
  <TimelineEntry entry={entry} />
</Section>;
```

### FlatSection (No Card)

```tsx
import { FlatSection, FlatAboutContent } from "@/components/sections";

<FlatSection title="About Me" sectionNumber="01">
  <FlatAboutContent
    paragraphs={aboutContent.paragraphs}
    skills={aboutContent.skills}
    imageUrl="/me.jpg"
  />
</FlatSection>;
```

## Section vs FlatSection

| Feature     | Section                      | FlatSection     |
| ----------- | ---------------------------- | --------------- |
| Background  | Dark card                    | Transparent     |
| Title style | Small label + large subtitle | Numbered header |
| Width       | 80% centered                 | 75% centered    |
| Use case    | Contained sections           | Open layouts    |

## Related

- `@/components/timeline` - Timeline components used in sections
- `@/content/about.ts` - About section content
- `@/content/experience.ts` - Experience section content
