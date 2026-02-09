/**
 * Hero Section Components
 *
 * Central export for all hero section components and backgrounds.
 *
 * Core Components:
 * - HeroViewport: Full-viewport container with media background support
 * - HeroContent: Title, subtitle, and CTA buttons
 * - ScrollIndicator: Animated scroll hint
 *
 * Background Simulations:
 * - BrainsBrainCanvas: Cellular automaton with mesmerizing wave patterns
 * - StarfieldCanvas: Warp-speed parallax starfield
 * - PathSimulatorCanvas: Grid-based path tracer (cardinal directions)
 * - PathTracerCanvas: Free-form path tracer (legacy)
 * - HeroAnimationOrchestrator: Sequences multiple animations with transitions
 */

// Core hero components
export { HeroViewport } from "./HeroViewport";
export type { HeroViewportProps } from "./HeroViewport";

export { HeroContent } from "./HeroContent";
export type { HeroContentProps } from "./HeroContent";

export { ScrollIndicator } from "./ScrollIndicator";
export type { ScrollIndicatorProps } from "./ScrollIndicator";

// Brian's Brain cellular automaton
export { BrainsBrainCanvas } from "./briansBrain";
export type { BrainsBrainCanvasProps } from "./briansBrain";

// Starfield parallax animation
export { StarfieldCanvas } from "./starfield";
export type { StarfieldCanvasProps } from "./starfield";

// Path simulator (grid-based, cardinal directions)
export { PathSimulatorCanvas } from "./pathSimulator";
export type { PathSimulatorCanvasProps } from "./pathSimulator";

// Path tracer (legacy, free-form)
export { PathTracerCanvas } from "./pathTracer";
export type { PathTracerCanvasProps } from "./pathTracer";

// Animation orchestrator with transitions
export {
  HeroAnimationOrchestrator,
  PRESET_CONTEMPLATIVE,
  PRESET_DYNAMIC,
  PRESET_STARFIELD_ONLY,
  PRESET_PATH_TRACER_ONLY,
} from "./orchestrator";
export type { HeroAnimationOrchestratorProps } from "./orchestrator";
