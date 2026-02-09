# Constants

Application-wide constant values and configuration.

## Files

| File            | Description                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `navigation.ts` | Navigation configuration: links, breakpoints, animation timings. Single source of truth for nav behavior. |

## navigation.ts

### Exports

| Export                    | Type             | Description                                                |
| ------------------------- | ---------------- | ---------------------------------------------------------- |
| `NAV_SCROLL_THRESHOLD`    | `number`         | Scroll percentage (0-1) at which nav becomes fully visible |
| `MOBILE_BREAKPOINT`       | `number`         | Pixel width below which mobile nav is shown                |
| `NAV_TRANSITION_DURATION` | `number`         | Animation duration in ms for nav transitions               |
| `NAV_LINKS`               | `readonly array` | Navigation link configuration (label, href, external flag) |
| `NavLinkConfig`           | `type`           | TypeScript type for a single nav link                      |

## Adding New Constants

1. Create appropriately named file (e.g., `animation.ts`, `api.ts`)
2. Add doc comment at top explaining purpose
3. Export typed constants with JSDoc comments
4. Update this README
