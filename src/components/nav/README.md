# Navigation Components

Components for site-wide navigation, including desktop and mobile layouts.

## Files

| File                   | Description                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `NavBar.tsx`           | Main navigation bar with scroll-based visibility and mobile responsiveness. Floating pill-shaped design with frosted glass effect. |
| `NavLink.tsx`          | Navigation link for internal routes and external URLs. Shows arrow indicator (↗) for external links.                              |
| `NavLogo.tsx`          | Site logo linking to home page. Displays icon placeholder alongside "Sandbox" text.                                                |
| `MobileMenu.tsx`       | Full-screen overlay menu for mobile navigation. Opens from hamburger button with staggered link animations.                        |
| `MobileMenuButton.tsx` | Animated hamburger/close button. Three bars morph into X when open.                                                                |

## Usage

```tsx
import { NavBar } from "@/components/nav";

// In App.tsx - render once at root level
<NavBar scrollBased />;
```

## NavBar Behavior

- **Home page with `scrollBased={true}`**: Fades in as user scrolls down
- **Other pages**: Always visible
- **Desktop**: Shows all nav links inline
- **Mobile**: Shows hamburger button that opens MobileMenu overlay

## Related

- `@/constants/navigation.ts` - NAV_LINKS array and breakpoint constants
- `@/hooks/useScrollVisibility` - Hook for scroll-based visibility
