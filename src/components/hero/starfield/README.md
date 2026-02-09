# Starfield Canvas

A React component that renders a warp-speed parallax starfield animation.

## Files

- `StarfieldCanvas.tsx` - Main component that manages canvas, animation loop, and star rendering
- `StarfieldCanvas.test.tsx` - Component tests

## Features

- **Multi-layer parallax**: Stars at different depths move at different speeds
- **Warp-speed effect**: Stars stream outward from a central focal point
- **Accent colors**: Random stars have vibrant accent colors
- **Nebula tints**: Subtle color regions for depth and atmosphere

## Configuration

The component accepts a `config` prop with the following options:

| Property         | Type   | Default | Description                |
| ---------------- | ------ | ------- | -------------------------- |
| `starCount`      | number | 500     | Total number of stars      |
| `velocity`       | number | 0.6     | Base movement speed        |
| `maxStarRadius`  | number | 2.8     | Maximum star size          |
| `maxDepth`       | number | 1200    | Maximum depth for parallax |
| `parallaxLayers` | number | 5       | Number of depth layers     |

## Usage

```tsx
import { StarfieldCanvas } from '@/components/hero';

// Basic usage
<StarfieldCanvas />

// With custom config
<StarfieldCanvas
  config={{
    starCount: 800,
    velocity: 0.8,
  }}
/>

// With transition opacity
<StarfieldCanvas opacity={0.5} />

// Paused
<StarfieldCanvas paused />
```

## Simulation Logic

The core simulation logic lives in `src/lib/heroAnimations/starfieldSimulation.ts` and handles:

- Star creation and respawning
- Parallax depth calculation
- Projection to screen coordinates
- Glow and twinkling effects
