# Content

Site text content and data. Edit these files to change content without touching components.

## Files

| File            | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `index.ts`      | Central export - import from `@/content` to access all content |
| `hero.ts`       | Home page hero section (title, subtitle, CTA buttons)          |
| `about.ts`      | About section content (title, paragraphs, image, CTA)          |
| `experience.ts` | Work experience timeline entries                               |
| `projects.ts`   | Project portfolio (names, descriptions, images, tags, links)   |

## projects.ts

### Types

```typescript
interface ProjectImage {
  url: string; // Image path
  alt: string; // Alt text
  isMain?: boolean; // True for the card thumbnail
}

interface ProjectTag {
  label: string; // Display text (e.g., "React")
  color?: string; // Optional custom color
}

interface Project {
  id: string; // Unique identifier
  name: string; // Project title
  shortDescription: string; // Card description (1-2 sentences)
  fullDescription?: string; // Detail page content
  images: ProjectImage[]; // At least one with isMain: true
  tags: ProjectTag[]; // Technology/skill tags
  sourceUrl?: string; // GitHub link (optional)
  detailUrl: string; // Internal route to detail page
  featured?: boolean; // Show in featured sections
}
```

### Usage

```tsx
import { projectsContent, projectsSectionContent } from "@/content";

<ProjectGrid
  projects={projectsContent}
  title={projectsSectionContent.title}
  subtitle={projectsSectionContent.subtitle}
/>;
```

## Adding New Content Files

1. Create `contentName.ts` with doc comment at top
2. Export content objects/arrays with JSDoc comments
3. Add export to `index.ts`
4. Update this README
