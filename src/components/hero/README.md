# Hero Background Simulations

This folder contains all animated background simulations used in hero sections.

## Structure

```
hero/
├── index.ts              # Central exports for all hero components
├── README.md             # This file
├── briansBrain/          # Brian's Brain cellular automaton
├── starfield/            # Warp-speed starfield animation
├── pathSimulator/        # Grid-based path tracer (cardinal directions)
├── pathTracer/           # Free-form path tracer (legacy)
└── orchestrator/         # Sequences multiple animations with transitions
```

## Simulations

### Brian's Brain (`briansBrain/`)

A cellular automaton with three states: OFF, ON, and DYING. Creates mesmerizing wave-like patterns. Uses `src/lib/briansBrain/` for simulation logic.

### Starfield (`starfield/`)

A parallax starfield with warp-speed effect. Stars stream outward from a focal point with layered depth. Uses `src/lib/heroAnimations/starfieldSimulation.ts`.

### Path Simulator (`pathSimulator/`)

A grid-based path tracer where lines move in cardinal directions, splitting and rejoining at shape nodes. Uses `src/lib/pathSimulator/` for simulation logic.

### Path Tracer (`pathTracer/`)

Legacy free-form path tracer with arbitrary angles. Uses `src/lib/heroAnimations/pathTracerSimulation.ts`.

### Orchestrator (`orchestrator/`)

Coordinates multiple animations with smooth transitions (crossfade, fade-through-black, dissolve). Useful when cycling between different background effects.

## Usage

```tsx
import { BrainsBrainCanvas } from "@/components/hero";
import { HeroViewport } from "@/components/HeroViewport";

// Use a single simulation
<HeroViewport media={<BrainsBrainCanvas />}>{/* Hero content */}</HeroViewport>;

// Or use the orchestrator for multiple animations
import {
  HeroAnimationOrchestrator,
  PRESET_CONTEMPLATIVE,
} from "@/components/hero";

<HeroViewport
  media={<HeroAnimationOrchestrator sequence={PRESET_CONTEMPLATIVE} />}
>
  {/* Hero content */}
</HeroViewport>;
```

## Adding New Simulations

1. Create a new subfolder (e.g., `hero/newSimulation/`)
2. Add the canvas component and its test file
3. Add a README.md documenting the component
4. Export from `hero/index.ts`
5. If needed, create corresponding simulation logic in `src/lib/`
