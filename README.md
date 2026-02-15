# Sandbox

A modern multi-page React application built with TypeScript, Vite, and styled-components. Configured for static deployment to GitHub Pages.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool with hot module replacement
- **styled-components** - CSS-in-JS styling
- **React Router v6** - Client-side routing (BrowserRouter)
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Linting (Airbnb config)
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js 24 (use `nvm use` to switch to the correct version)
- npm

### Installation

```bash
# Switch to correct Node version
nvm use

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
```

The app will be available at `http://localhost:5173/`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
sandbox/
├── public/
│   └── 404.html              # GitHub Pages SPA redirect
├── src/
│   ├── components/           # Reusable components
│   │   ├── Layout.tsx        # Main layout with header/footer
│   │   └── Layout.test.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── Home.test.tsx
│   │   ├── Projects.tsx
│   │   ├── Projects.test.tsx
│   │   ├── AboutMe.tsx
│   │   └── AboutMe.test.tsx
│   ├── styles/
│   │   └── GlobalStyles.ts   # Global styled-components styles
│   ├── test/
│   │   ├── setup.ts          # Vitest setup
│   │   └── test-utils.tsx    # Custom render with providers
│   ├── App.tsx               # Router configuration
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts         # Vite type declarations
├── .eslintrc.cjs             # ESLint configuration
├── .nvmrc                    # Node version
├── .prettierrc               # Prettier configuration
├── index.html                # HTML entry point
├── package.json
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── vitest.config.ts          # Vitest configuration
```

## Adding a New Page

1. Create the page component in `src/pages/`:

```tsx
// src/pages/Contact.tsx
import styled from 'styled-components';

const Container = styled.div`
  /* styles */
`;

export const Contact = () => (
  <Container>
    <h1>Contact</h1>
    {/* page content */}
  </Container>
);
```

2. Create a test file:

```tsx
// src/pages/Contact.test.tsx
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/test-utils';
import { Contact } from './Contact';

describe('Contact', () => {
  it('renders the page title', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
  });
});
```

3. Add the route in `src/App.tsx`:

```tsx
import { Contact } from '@/pages/Contact';

// Inside the Routes component, add:
<Route path="contact" element={<Contact />} />
```

4. Add navigation link in `src/components/Layout.tsx`:

```tsx
<li>
  <StyledNavLink to="/contact">Contact</StyledNavLink>
</li>
```

## Adding a New Component

1. Create the component in `src/components/`:

```tsx
// src/components/Button.tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  /* styles */
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
```

2. Create a test file:

```tsx
// src/components/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

Run npm run build to verify

## Deployment to GitHub Pages

### Before First Deployment

⚠️ **Important**: Update the repository name in these locations if you rename the repo:

1. **`vite.config.ts`** - Change `base`:
   ```ts
   base: '/your-repo-name/',
   ```

2. **`src/App.tsx`** - Change `basename`:
   ```tsx
   <BrowserRouter basename="/your-repo-name">
   ```

3. **`public/404.html`** - Update `pathSegmentsToKeep` if needed (usually stays at `1`)

### Deploy

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

### GitHub Repository Settings

After running deploy for the first time:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
4. Save

Your site will be available at: `https://<username>.github.io/<repo-name>/`

## Path Aliases

The project uses `@/` as an alias for the `src/` directory:

```tsx
// Instead of:
import { Button } from '../../../components/Button';

// Use:
import { Button } from '@/components/Button';
```

## License

MIT

