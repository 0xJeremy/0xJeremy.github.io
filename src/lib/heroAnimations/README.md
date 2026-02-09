# Hero Animations

Sophisticated animated backgrounds for hero sections. Provides two animation types (starfield, path tracer) with an orchestrator for sequencing and transitions.

## Files

| File                      | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| `index.ts`                | Public API - re-exports all types, functions, and utilities |
| `types.ts`                | TypeScript type definitions for all animation systems       |
| `colorPalette.ts`         | Color constants and default configurations                  |
| `easing.ts`               | Easing functions and animation math utilities               |
| `vector.ts`               | 2D vector math operations                                   |
| `starfieldSimulation.ts`  | Starfield animation state management and rendering          |
| `pathTracerSimulation.ts` | Path tracer animation state management and rendering        |
| `pathGenerator.ts`        | Shape generation and path navigation utilities              |

## Animation Types

### Starfield

Warp-speed flight through stars with parallax layering.

- Stars stream outward from focal point
- Multiple parallax layers for depth
- Configurable velocity, colors, and star count

### Path Tracer

Line drawing through procedurally generated geometric shapes.

- Shapes: squares, diamonds, triangles, hexagons
- Camera follows line tip with smooth lerp
- Path fades behind the current position

## Usage

Components (`StarfieldCanvas`, `PathTracerCanvas`, `HeroAnimationOrchestrator`) are in `src/components/`. This library provides the simulation logic.

```tsx
import {
  createStarfieldState,
  updateStarfield,
  renderStarfield,
} from "@/lib/heroAnimations";
```

## Configuration

See `types.ts` for full configuration options:

- `StarfieldConfig` - star count, velocity, colors, parallax layers
- `PathTracerConfig` - line speed, shape count, camera smoothing
- `HeroAnimationSequence` - segment durations, transition types

## Easing Functions

Available in `easing.ts`:

- Standard: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, etc.
- Utilities: `lerp`, `smoothLerp`, `clamp`, `mapRange`, `smoothstep`
- Physics: `dampedSpring`, `expDecay`
