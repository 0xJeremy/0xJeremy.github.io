/**
 * Hero Animations Module
 *
 * Provides sophisticated animated backgrounds for the hero section:
 * - Starfield: Subtle warp-speed flight through stars
 * - Path Tracer: Line drawing through geometric shapes
 * - Orchestrator: Manages sequences and transitions
 */

// Types
export type {
  Vector2,
  Star,
  StarfieldState,
  StarfieldConfig,
  Shape,
  ShapeType,
  PathSegment,
  Camera,
  PathTracerState,
  PathTracerConfig,
  AnimationType,
  AnimationSegment,
  TransitionType,
  TransitionConfig,
  HeroAnimationSequence,
  TransitionState,
  CanvasSize,
} from "./types";

// Color palettes and defaults
export {
  STARFIELD_COLORS,
  PATH_TRACER_COLORS,
  TRANSITION_COLORS,
  DEFAULT_STARFIELD_CONFIG,
  DEFAULT_PATH_TRACER_CONFIG,
  DEFAULT_TRANSITION_CONFIG,
  DEFAULT_SEQUENCE,
} from "./colorPalette";

// Easing functions
export {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeOutQuart,
  easeInOutQuart,
  easeOutExpo,
  easeInOutExpo,
  easeInOutSine,
  easeOutBack,
  lerp,
  smoothLerp,
  clamp,
  mapRange,
  smoothstep,
  smootherstep,
  pulse,
  dampedSpring,
  expDecay,
} from "./easing";

// Vector utilities
export * as vec from "./vector";

// Starfield simulation
export {
  createStarfieldState,
  updateStarfield,
  renderStarfield,
  resizeStarfield,
} from "./starfieldSimulation";

// Path tracer simulation
export {
  createPathTracerState,
  updatePathTracer,
  renderPathTracer,
} from "./pathTracerSimulation";

// Path generator utilities
export {
  createShape,
  generateShapes,
  pointInShape,
  detectShapeCollision,
  findNearbyShapes,
  generateNextDirection,
  calculateExitDirection,
  calculateSegmentLength,
} from "./pathGenerator";
