# Hooks

Custom React hooks for shared stateful logic.

## Hooks

| File                     | Description                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `useScrollVisibility.ts` | Calculates visibility (0-1) based on scroll position. Used for scroll-triggered animations like the NavBar fade-in. |

## useScrollVisibility

Returns an object with:

- `visibility`: Number from 0 (hidden) to 1 (fully visible)
- `isVisible`: Boolean indicating if visibility > 0
- `scrollY`: Current scroll position in pixels

Options:

- `threshold`: Scroll percentage (0-1) at which element becomes fully visible
- `enabled`: Whether the visibility effect is active

## Adding New Hooks

1. Create `useHookName.ts` with doc comment at top
2. Create `useHookName.test.ts` alongside it
3. Update this README with the new hook
