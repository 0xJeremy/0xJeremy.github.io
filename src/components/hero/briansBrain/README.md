# Brian's Brain Canvas

A React component that renders Brian's Brain cellular automaton on a canvas.

## Files

- `BrainsBrainCanvas.tsx` - Main component that manages canvas, animation loop, and resize handling
- `BrainsBrainCanvas.test.tsx` - Component tests

## Brian's Brain Rules

Brian's Brain is a cellular automaton with three states:

- **OFF (dead)**: Becomes ON if exactly 2 neighbors are ON
- **ON (alive)**: Always becomes DYING next tick
- **DYING**: Always becomes OFF next tick

This creates mesmerizing wave-like patterns that propagate across the grid.

## Configuration

The component accepts a `config` prop with the following options:

| Property         | Type    | Default    | Description                                       |
| ---------------- | ------- | ---------- | ------------------------------------------------- |
| `cols`           | number  | 120        | Number of columns (auto-calculated from viewport) |
| `rows`           | number  | 80         | Number of rows (auto-calculated from viewport)    |
| `cellSize`       | number  | 8          | Size of each cell in pixels                       |
| `ticksPerSecond` | number  | 12         | Simulation speed                                  |
| `colorOff`       | string  | near-black | Color for dead cells                              |
| `colorOn`        | string  | cyan       | Color for alive cells                             |
| `colorDying`     | string  | orange-red | Color for dying cells                             |
| `initialDensity` | number  | 0.15       | Starting density of ON cells (0-1)                |
| `wrapEdges`      | boolean | true       | Whether to wrap at grid edges                     |

## Usage

```tsx
import { BrainsBrainCanvas } from '@/components/hero';

// Basic usage (auto-fills container)
<BrainsBrainCanvas />

// With custom config
<BrainsBrainCanvas
  config={{
    cellSize: 10,
    ticksPerSecond: 15,
    colorOn: 'rgba(0, 255, 128, 1)',
  }}
/>

// Paused
<BrainsBrainCanvas paused />
```

## Simulation Logic

The core simulation logic lives in `src/lib/briansBrain/` and is fully tested. The canvas component handles:

- Canvas setup with device pixel ratio
- Animation loop with configurable tick rate
- Resize handling with ResizeObserver
- Glow effects on alive cells for visual appeal
