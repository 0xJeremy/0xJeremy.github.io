# Hero Animation Orchestrator

A React component that coordinates multiple hero animations with smooth transitions.

## Files

- `HeroAnimationOrchestrator.tsx` - Main component that manages animation sequences
- `HeroAnimationOrchestrator.test.tsx` - Component tests

## Features

- **Animation sequencing**: Chain multiple animations with configurable durations
- **Smooth transitions**: Crossfade, fade-through-black, and dissolve effects
- **Preset sequences**: Pre-configured sequences for common use cases
- **Looping**: Optional loop support for continuous playback

## Transition Types

| Type                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| `crossfade`          | Simultaneous fade out/in between animations      |
| `fade-through-black` | Fade to black, then reveal next animation        |
| `dissolve`           | Crossfade with slight overlap for smoother blend |

## Preset Sequences

- `PRESET_CONTEMPLATIVE` - Longer durations, gentle fade-through-black transitions
- `PRESET_DYNAMIC` - Shorter durations, snappy crossfade transitions
- `PRESET_STARFIELD_ONLY` - Starfield animation only
- `PRESET_PATH_TRACER_ONLY` - Path tracer animation only

## Usage

```tsx
import {
  HeroAnimationOrchestrator,
  PRESET_CONTEMPLATIVE,
  PRESET_DYNAMIC,
} from "@/components/hero";

// Use a preset
<HeroAnimationOrchestrator sequence={PRESET_CONTEMPLATIVE} />;

// Custom sequence
const customSequence = {
  segments: [
    { type: "starfield", duration: 10000 },
    { type: "pathTracer", duration: 15000 },
  ],
  transition: { type: "crossfade", duration: 2000 },
  loop: true,
};

<HeroAnimationOrchestrator sequence={customSequence} />;
```

## Animation Types

The orchestrator currently supports:

- `starfield` - Warp-speed parallax starfield
- `pathTracer` - Free-form path tracer (legacy)

Note: For the grid-based path simulator (Brian's Brain, PathSimulator), use those components directly rather than through the orchestrator.
