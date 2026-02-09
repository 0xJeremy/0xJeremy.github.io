# Path Simulator Canvas

A React component that renders a grid-based path simulation with lines moving in cardinal directions.

## Files

- `PathSimulatorCanvas.tsx` - Main component that manages canvas, animation loop, and simulation state
- `PathSimulatorCanvas.test.tsx` - Component tests

## Features

- **Grid-based movement**: Lines move only in 4 cardinal directions (up, down, left, right)
- **Shape interactions**: Lines pass through shapes and may change direction
- **Line splitting**: Lines can split into multiple paths and rejoin
- **Camera tracking**: Viewport follows the line heads smoothly
- **Trail effects**: Glowing trail with fade effect

## Configuration

The component accepts a `config` prop with the following options:

| Property          | Type   | Default | Description                               |
| ----------------- | ------ | ------- | ----------------------------------------- |
| `cellSize`        | number | 140     | Size of each grid cell in pixels          |
| `lineSpeed`       | number | 3       | Movement speed (cells per second)         |
| `splitChance`     | number | 0.15    | Probability of splitting at a shape       |
| `maxDivergence`   | number | 1       | Max cells apart before split lines rejoin |
| `cameraSmoothing` | number | 0.06    | Camera follow smoothness                  |
| `baseZoom`        | number | 2.2     | Default zoom level                        |

## Usage

```tsx
import { PathSimulatorCanvas } from '@/components/hero';

// Basic usage
<PathSimulatorCanvas />

// With custom config
<PathSimulatorCanvas
  config={{
    lineSpeed: 4,
    splitChance: 0.2,
  }}
/>

// Paused
<PathSimulatorCanvas paused />
```

## Simulation Logic

The core simulation logic lives in `src/lib/pathSimulator/` and includes:

- `core/` - Types, constants, direction/grid utilities
- `simulation/` - Path planning, split/rejoin logic, state management
- `rendering/` - Canvas rendering for grid, shapes, and lines
