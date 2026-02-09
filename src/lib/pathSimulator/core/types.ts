/**
 * Core types for the Path Simulator.
 *
 * This simulation renders lines moving on a discrete grid,
 * splitting and rejoining at shape nodes.
 */

// ============================================================================
// Coordinate Types
// ============================================================================

/** Grid coordinate (discrete, integer-based) */
export interface GridCoord {
  row: number;
  col: number;
}

/** World coordinate (continuous, pixel-based) */
export interface WorldCoord {
  x: number;
  y: number;
}

/** Screen coordinate (canvas pixels) */
export interface ScreenCoord {
  x: number;
  y: number;
}

// ============================================================================
// Direction
// ============================================================================

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

// ============================================================================
// Line Types
// ============================================================================

export type LineState =
  | { type: "MOVING" }
  | { type: "AT_SHAPE"; shape: Shape; ticksRemaining: number }
  | { type: "SPLITTING"; plan: SplitPlan }
  | { type: "SPLIT_CHILD"; plan: SplitPlan; pathIndex: number }
  | { type: "MERGING"; mergeShape: Shape };

export interface PathLineState {
  id: string;
  /** Current grid position */
  position: GridCoord;
  /** Current movement direction */
  direction: Direction;
  /** Progress through current cell (0-1) */
  cellProgress: number;
  /** Trail history (world coordinates for smooth rendering) */
  trail: WorldCoord[];
  /** Current state */
  state: LineState;
  /** If part of a split, the planned path to follow */
  plannedPath: GridCoord[] | null;
  /** Index in planned path */
  pathIndex: number;
  /** Steps taken since split (for tracking max split duration) */
  stepsSinceSplit: number;
}

// ============================================================================
// Shape Types
// ============================================================================

export type ShapeType = "square" | "diamond" | "triangle";

export interface ShapeAnimation {
  /** Rotation animation (radians added to base rotation) */
  rotation: number;
  /** Target rotation for animation */
  targetRotation: number;
  /** Scale multiplier (1 = normal) */
  scale: number;
  /** Target scale for animation */
  targetScale: number;
  /** Color intensity (0-1, affects brightness) */
  colorIntensity: number;
  /** Target color intensity */
  targetColorIntensity: number;
  /** Gradient colors (null if not using gradient) */
  gradientColors: [string, string] | null;
  /** Whether gradient applies to 'outline' or 'fill' */
  gradientMode: "outline" | "fill" | null;
  /** Sparks emitted from this shape */
  sparks: Spark[];
}

export interface Spark {
  /** World position */
  x: number;
  y: number;
  /** Velocity */
  vx: number;
  vy: number;
  /** Remaining lifetime (seconds) */
  lifetime: number;
  /** Initial lifetime (for fade calculation) */
  maxLifetime: number;
  /** Color */
  color: string;
  /** Size */
  size: number;
}

export interface Shape {
  id: string;
  /** Grid position */
  position: GridCoord;
  /** Shape type */
  type: ShapeType;
  /** Base rotation (radians) */
  baseRotation: number;
  /** Animation state */
  animation: ShapeAnimation;
  /** Whether this shape has been activated */
  activated: boolean;
  /** Which effects to apply on activation (randomly chosen at creation) */
  activationEffects: Array<
    "spin" | "pulse" | "colorShift" | "gradient" | "sparks"
  >;
}

// ============================================================================
// Split/Rejoin Planning
// ============================================================================

export interface SplitPlan {
  /** Where the split occurs */
  splitPoint: GridCoord;
  /** Shape at split point */
  splitShape: Shape;
  /** Direction line was traveling when it hit split */
  entryDirection: Direction;
  /** Full path for line A (includes split point, ends at rejoin) */
  pathA: GridCoord[];
  /** Full path for line B */
  pathB: GridCoord[];
  /** Where lines rejoin */
  rejoinPoint: GridCoord;
  /** Shape at rejoin point */
  rejoinShape: Shape;
  /** Shapes created along path A */
  shapesA: Shape[];
  /** Shapes created along path B */
  shapesB: Shape[];
}

// ============================================================================
// Camera
// ============================================================================

export interface CameraState {
  /** World position (center of viewport) */
  position: WorldCoord;
  /** Target position for smooth follow */
  targetPosition: WorldCoord;
  /** Zoom level (1 = default, higher = more zoomed in) */
  zoom: number;
  /** Target zoom for smooth transitions */
  targetZoom: number;
}

// ============================================================================
// Simulation State
// ============================================================================

export interface SimulationState {
  /** All active lines */
  lines: PathLineState[];
  /** All visible shapes (keyed by "row,col") */
  shapes: Map<string, Shape>;
  /** Camera state */
  camera: CameraState;
  /** Current tick count */
  tick: number;
  /** Grid dimensions (for reference, world is infinite) */
  gridOrigin: GridCoord;
}

// ============================================================================
// Configuration
// ============================================================================

export interface SimulationConfig {
  /** Size of each grid cell in world units */
  cellSize: number;
  /** Line movement speed (cells per second) */
  lineSpeed: number;
  /** Maximum trail length (in world coordinate points) */
  maxTrailLength: number;
  /** Probability of splitting at a shape (0-1) */
  splitChance: number;
  /** Probability of 3-way split when splitting (0-1) */
  tripleSplitChance: number;
  /** Maximum cells lines can diverge before rejoining */
  maxDivergence: number;
  /** Minimum parallel travel distance after diverging */
  minParallelTravel: number;
  /** Maximum parallel travel distance */
  maxParallelTravel: number;
  /** Maximum steps a split can last before forced rejoin */
  maxSplitSteps: number;
  /** Camera smoothing factor (0-1, lower = smoother) */
  cameraSmoothing: number;
  /** Padding around lines for camera bounds (in cells) */
  cameraPadding: number;
  /** Base zoom level */
  baseZoom: number;
  /** Animation speed for shape effects */
  shapeAnimationSpeed: number;
  /** Line color (CSS color string) */
  lineColor: string;
  /** Line glow color */
  lineGlowColor: string;
  /** Line width in pixels */
  lineWidth: number;
  /** Grid dot color */
  gridDotColor: string;
  /** Grid dot size */
  gridDotSize: number;
  /** Background color */
  backgroundColor: string;
  /** Shape base color */
  shapeColor: string;
  /** Shape activated color */
  shapeActivatedColor: string;
}

// ============================================================================
// Bounding Box
// ============================================================================

export interface BoundingBox {
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
}
