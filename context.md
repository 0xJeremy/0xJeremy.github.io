# Project Context for LLM Agents

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** - build/dev server
- **styled-components** - CSS-in-JS
- **React Router v6** - BrowserRouter with basename `/sandbox`
- **Vitest** + **React Testing Library** - component tests (no e2e)

## Commands

```bash
nvm use                    # **ALWAYS** run first
npm run dev                # Dev server @ localhost:5173/sandbox/
npm run test               # Tests (watch mode)
npm run test -- --run      # Tests (single run)
npm run lint               # ESLint
npm run lint:fix           # ESLint + autofix
npm run format             # Prettier
```

## Code Style Rules

### Component Architecture

1. **ALL components live in `src/components/`** - pages import from here, never define their own
2. **ALL components require tests** - `ComponentName.test.tsx` alongside each component
3. **Pages are composition only** - assemble components, minimal/no custom styled elements
4. **Reuse over creation** - before building a new component, check if an existing one can be adapted. **ASK the programmer before modifying an existing component's API**

### File Structure

```
src/
├── components/       # ALL reusable components (with tests)
│   ├── Layout.tsx
│   ├── Layout.test.tsx
│   ├── Button.tsx
│   └── Button.test.tsx
├── content/          # Site content (edit these to change text)
│   ├── index.ts           # Central export
│   ├── hero.ts            # Hero section content
│   ├── about.ts           # About section content
│   └── experience.ts      # Work experience content
├── pages/            # Page components (composition only)
│   └── Home.tsx
├── styles/
│   └── GlobalStyles.ts    # Single source of truth for design tokens
└── test/
    └── test-utils.tsx     # Custom render with providers
```

### Content System

**All site text content lives in `src/content/`** - edit these files to change content without touching components.

```tsx
// src/content/about.ts - Edit this to change about section
export const aboutContent = {
  title: 'About Me',
  subtitle: 'A little bit about who I am',
  paragraphs: [
    'Your first paragraph here...',
    'Your second paragraph here...',
  ],
  cta: { label: 'Learn More', href: '/about' },
};
```

```tsx
// Usage in page (composition only)
import { aboutContent } from '@/content';

export const Home = () => (
  <AboutSection {...aboutContent} />
);
```

### Documentation Requirements

1. **File Doc Comments** - Every component and page file MUST have a doc comment at the top (immediately after imports) explaining:
   - What the component/page is
   - How it should work (text spec)
   - Any edits to the file should also update this doc comment

```tsx
/**
 * Card Component
 *
 * A container with surface styling for grouping related content.
 * Uses design tokens for consistent appearance across the app.
 *
 * Usage:
 * - Wrap related content in a Card for visual grouping
 * - Cards automatically handle padding, background, and shadow
 */
```

2. **Folder README.md** - Every folder containing components or pages MUST have a `README.md` that:
   - Briefly explains each file in the folder
   - Describes each file's purpose and use

### Creating Components

```tsx
// src/components/Card.tsx
import styled from 'styled-components';

/**
 * Card Component
 *
 * A container with surface styling for grouping related content.
 * Uses design tokens for consistent appearance across the app.
 *
 * Usage:
 * - Wrap related content in a Card for visual grouping
 * - Cards automatically handle padding, background, and shadow
 */

const StyledCard = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
`;

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <StyledCard>{children}</StyledCard>
);
```

```tsx
// src/components/Card.test.tsx
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/test-utils';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

### Pages: Composition Only

```tsx
// GOOD - pages compose components
export const Projects = () => (
  <PageContainer>
    <PageHeader title="Projects" subtitle="My work" />
    <Grid>
      {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
    </Grid>
  </PageContainer>
);

// BAD - pages define their own styled components
export const Projects = () => {
  const CustomTitle = styled.h1`...`; // ❌ Never do this
  return <CustomTitle>Projects</CustomTitle>;
};
```

## Global Design System

**Source of truth:** `src/styles/GlobalStyles.ts` — consult this file for all available CSS variables.

Components MUST use CSS variables, never hardcoded values:

```tsx
// GOOD - uses design tokens
const Button = styled.button`
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
`;

// BAD - hardcoded values
const Button = styled.button`
  background: #e94560;      // ❌
  padding: 0.5rem 1rem;     // ❌
  border-radius: 8px;       // ❌
`;
```

Available token categories: `--color-*`, `--font-size-*`, `--spacing-*`, `--radius-*`, `--shadow-*`, `--transition-*`, `--gradient-*`

## Testing Guidelines

- Use `render` from `@/test/test-utils` (wraps with Router)
- Test user-visible behavior, not implementation
- Query by role/text, not test IDs
- Every component needs at minimum: renders correctly, key interactions work

## Path Aliases

Use `@/` for imports from `src/`:

```tsx
import { Button } from '@/components/Button';
import { render } from '@/test/test-utils';
```

