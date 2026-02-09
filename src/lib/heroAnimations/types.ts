/**
 * Core types for the Hero Animation system.
 * These types are used across starfield, path tracer, and orchestrator.
 */

// ============================================================================
// Primitives
// ============================================================================

export interface Vector2 {
  x: number;
  y: number;
}

// ============================================================================
// Starfield Types
// ============================================================================

export interface Star {
  /** Screen X position (calculated from 3D projection) */
  x: number;
  /** Screen Y position (calculated from 3D projection) */
  y: number;
  /** Depth value: 0 = at camera, maxDepth = far away */
  z: number;
  /** Base size multiplier for the star */
  baseRadius: number;
  /** RGBA color string */
  color: string;
  /** Parallax layer (0 = far, higher = near) */
  layer: number;
  /** Original spawn position for respawn calculations */
  originX: number;
  originY: number;
}

export interface StarfieldState {
  stars: Star[];
  /** Center point for the warp effect (normalized 0-1) */
  focalPoint: Vector2;
  /** Current velocity multiplier */
  velocity: number;
  /** Canvas dimensions for projection */
  width: number;
  height: number;
  /** Maximum depth value */
  maxDepth: number;
}

export interface StarfieldConfig {
  /** Number of stars to render (default: 250) */
  starCount: number;
  /** Base velocity (0.1-1.0, default: 0.4) */
  velocity: number;
  /** Color palette for stars */
  colorPalette: string[];
  /** Accent color for rare bright stars */
  accentColor: string;
  /** Probability of accent-colored star (0-1, default: 0.03) */
  accentProbability: number;
  /** Warp center offset from canvas center (normalized -0.5 to 0.5) */
  focalPointOffset: Vector2;
  /** Number of parallax layers (default: 3) */
  parallaxLayers: number;
  /** Maximum star radius in pixels (default: 2.5) */
  maxStarRadius: number;
  /** Maximum depth value (default: 1500) */
  maxDepth: number;
  /** Whether to add glow effect to stars (default: true) */
  enableGlow: boolean;
}

// ============================================================================
// Path Tracer Types
// ============================================================================

export type ShapeType = "square" | "diamond" | "triangle" | "hexagon";

export interface Shape {
  id: string;
  type: ShapeType;
  /** World position (center of shape) */
  position: Vector2;
  /** Bounding size */
  size: number;
  /** Rotation in radians */
  rotation: number;
  /** Fill color */
  color: string;
  /** Stroke color */
  strokeColor: string;
  /** Depth for z-sorting (lower = behind) */
  zIndex: number;
  /** Whether line has passed through this shape */
  visited: boolean;
}

export interface PathSegment {
  start: Vector2;
  end: Vector2;
  /** Normalized direction vector */
  direction: Vector2;
  /** Timestamp when segment was created */
  timestamp: number;
  /** Length of this segment */
  length: number;
}

export interface Camera {
  /** World position */
  position: Vector2;
  /** Smoothed position (for lerp following) */
  targetPosition: Vector2;
  /** Zoom level (1 = normal) */
  scale: number;
  /** Camera rotation in radians */
  rotation: number;
}

export interface PathTracerState {
  /** All shapes in the world */
  shapes: Shape[];
  /** History of drawn path segments */
  pathHistory: PathSegment[];
  /** Current line tip position in world coords */
  currentPosition: Vector2;
  /** Current movement direction (normalized) */
  currentDirection: Vector2;
  /** Camera state */
  camera: Camera;
  /** Progress along current segment (0-1) */
  lineProgress: number;
  /** Current segment being drawn */
  currentSegment: PathSegment | null;
  /** Total distance traveled */
  totalDistance: number;
  /** World bounds */
  worldBounds: { width: number; height: number };
}

export interface PathTracerConfig {
  /** Line movement speed (pixels per second, default: 120) */
  velocity: number;
  /** Line color */
  lineColor: string;
  /** Line glow color */
  lineGlowColor: string;
  /** Line thickness (default: 2) */
  lineWidth: number;
  /** Maximum path segments to keep (default: 100) */
  pathHistoryLength: number;
  /** Number of shapes in world (default: 25) */
  shapeCount: number;
  /** Min/max shape size */
  shapeSizeRange: [number, number];
  /** World dimensions */
  worldBounds: { width: number; height: number };
  /** Camera follow smoothing (0.02-0.15, lower = more lag) */
  cameraSmoothing: number;
  /** How far ahead camera looks */
  cameraLeadDistance: number;
  /** Shape color palette */
  shapeColors: string[];
  /** Shape stroke color */
  shapeStrokeColor: string;
  /** Probability of random turn (0-1, default: 0.08) */
  turnProbability: number;
  /** Min/max turn angle in degrees */
  turnAngleRange: [number, number];
  /** Minimum segment length before turn allowed */
  minSegmentLength: number;
  /** Maximum segment length */
  maxSegmentLength: number;
  /** Distance at which shapes influence path direction */
  shapeInfluenceRadius: number;
  /** Whether to enable line glow effect */
  enableGlow: boolean;
  /** Path fade length (how many segments before full opacity) */
  pathFadeLength: number;
}

// ============================================================================
// Orchestrator Types
// ============================================================================

export type AnimationType = "starfield" | "pathTracer";

export interface AnimationSegment {
  /** Which animation to play */
  type: AnimationType;
  /** Duration in milliseconds */
  duration: number;
  /** Optional config overrides */
  config?: Partial<StarfieldConfig> | Partial<PathTracerConfig>;
}

export type TransitionType = "crossfade" | "fade-through-black" | "dissolve";

export interface TransitionConfig {
  /** Transition effect type */
  type: TransitionType;
  /** Transition duration in milliseconds */
  duration: number;
}

export interface HeroAnimationSequence {
  /** Ordered list of animation segments */
  segments: AnimationSegment[];
  /** Transition configuration between segments */
  transition: TransitionConfig;
  /** Whether to loop the sequence */
  loop: boolean;
}

export interface TransitionState {
  /** Whether a transition is currently active */
  active: boolean;
  /** Transition progress (0-1) */
  progress: number;
  /** Animation we're transitioning from */
  fromAnimation: AnimationType;
  /** Animation we're transitioning to */
  toAnimation: AnimationType;
  /** When transition started */
  startTime: number;
}

// ============================================================================
// Utility Types
// ============================================================================

export interface CanvasSize {
  width: number;
  height: number;
  /** Device pixel ratio for crisp rendering */
  dpr: number;
}
