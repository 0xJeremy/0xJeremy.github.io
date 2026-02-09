# Decoration Components

Visual decoration elements for backgrounds and ambiance.

## Files

| File                        | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `BackgroundDecorations.tsx` | Full-page scattered symbols (×, ○, +, [], etc.) with animations |
| `DecorativeElements.tsx`    | Fixed floating symbols around viewport edges                    |
| `GrainBackground.tsx`       | Root wrapper with solid navy background                         |

## Usage

### BackgroundDecorations (Scattered)

```tsx
import { BackgroundDecorations } from "@/components/decorations";

<PageContainer>
  <BackgroundDecorations density={10} height="300vh" seed={42} />
  {/* Page content */}
</PageContainer>;
```

### DecorativeElements (Fixed)

```tsx
import { DecorativeElements } from "@/components/decorations";

<HeroSection>
  <DecorativeElements />
  {/* Hero content */}
</HeroSection>;
```

### GrainBackground (Root Wrapper)

```tsx
import { GrainBackground } from "@/components/decorations";

// In App.tsx
<GrainBackground>
  <NavBar />
  <Routes>...</Routes>
</GrainBackground>;
```

## BackgroundDecorations Props

| Prop      | Type     | Default  | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| `density` | `number` | `5`      | Element count (1=sparse, 10=dense)        |
| `height`  | `string` | `"100%"` | Layer height (use "300vh" for long pages) |
| `seed`    | `number` | `42`     | Random seed for consistent layouts        |

## Element Types

- `×` and `○` - Floating symbols
- `+` - Spinning accent
- `[]` - Frame brackets
- Dotted lines - Horizontal and vertical
- Boxes and circles - Outline shapes

## Related

- `@/constants/navigation.ts` - Mobile breakpoint for hiding on small screens
