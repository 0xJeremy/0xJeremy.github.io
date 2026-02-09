# Path Tracer Canvas (Legacy)

A React component that renders a free-form path tracer animation with arbitrary angles.

**Note:** This is the legacy path tracer. For the newer grid-based version, see `pathSimulator/`.

## Files

- `PathTracerCanvas.tsx` - Main component that manages canvas and animation
- `PathTracerCanvas.test.tsx` - Component tests

## Features

- **Free-form movement**: Line can move in any direction (not grid-constrained)
- **Procedural shapes**: Squares, diamonds, triangles, hexagons
- **Camera following**: Smooth camera tracks the line tip with lead distance
- **Trail visualization**: Path history with fade effect

## Configuration

The component accepts a `config` prop with the following options:

| Property      | Type   | Default | Description                   |
| ------------- | ------ | ------- | ----------------------------- |
| `shapeCount`  | number | -       | Number of shapes in the world |
| `worldBounds` | object | -       | World size boundaries         |
| `lineSpeed`   | number | -       | Movement speed                |
| `cameraLead`  | number | -       | How far ahead camera looks    |

## Usage

```tsx
import { PathTracerCanvas } from '@/components/hero';

// Basic usage
<PathTracerCanvas />

// With custom config
<PathTracerCanvas
  config={{
    shapeCount: 50,
  }}
/>

// With opacity for transitions
<PathTracerCanvas opacity={0.5} />
```

## Simulation Logic

The core simulation logic lives in `src/lib/heroAnimations/pathTracerSimulation.ts`.
