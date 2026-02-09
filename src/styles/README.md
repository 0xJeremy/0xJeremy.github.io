# Styles

Global styles and design tokens.

## Files

| File              | Description                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `GlobalStyles.ts` | Single source of truth for design tokens and CSS reset. Defines all CSS custom properties. |

## Design Tokens (CSS Variables)

All components MUST use these tokens instead of hardcoded values.

### Colors

- `--color-white`, `--color-black`
- `--color-gray-50` through `--color-gray-900`
- `--color-accent`, `--color-accent-hover`, `--color-accent-subtle`
- `--color-background`, `--color-surface`, `--color-viewport`
- `--color-text`, `--color-text-muted`, `--color-text-on-dark`, `--color-text-on-dark-muted`
- `--color-border`

### Typography

- `--font-family`, `--font-family-mono`
- `--font-size-xs` through `--font-size-6xl`
- `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
- `--line-height`, `--line-height-tight`
- `--letter-spacing-tight`, `--letter-spacing-wide`

### Spacing

- `--spacing-xs` through `--spacing-4xl`

### Layout

- `--max-width`, `--viewport-inset`, `--grid-gap`

### Borders & Shadows

- `--radius-sm` through `--radius-full`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-viewport`

### Transitions

- `--transition-fast`, `--transition-normal`, `--transition-slow`

### Z-Index Layers

- `--z-decorative`, `--z-viewport`, `--z-content`, `--z-nav`

## Usage Example

```tsx
const Button = styled.button`
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
`;
```
