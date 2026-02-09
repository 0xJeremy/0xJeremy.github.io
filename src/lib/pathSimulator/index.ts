/**
 * Path Simulator Module
 *
 * A simulation of lines moving on a grid, splitting and rejoining at nodes.
 * Creates a circuit-like visual effect.
 */

// Core types
export type {
  GridCoord,
  WorldCoord,
  ScreenCoord,
  LineState,
  PathLineState,
  ShapeType,
  ShapeAnimation,
  Shape,
  SplitPlan,
  CameraState,
  SimulationState,
  SimulationConfig,
  BoundingBox,
} from "./core/types";

export { Direction } from "./core/types";

// Constants
export { DEFAULT_CONFIG, MAX_LINES, SHAPE_TYPES } from "./core/constants";

// Direction utilities
export * as Dir from "./core/Direction";

// Grid coordinate utilities
export * as Grid from "./core/GridCoord";

// Path planner
export {
  createShape,
  planSplit,
  planNextSegment,
  shouldSplit,
  pickNextDirection,
  validateSplitPlan,
} from "./simulation/PathPlanner";

// Simulation
export {
  createSimulation,
  updateSimulation,
  getShapesArray,
} from "./simulation/Simulation";

// Renderer
export { render } from "./rendering/Renderer";
