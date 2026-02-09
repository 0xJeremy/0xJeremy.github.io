/**
 * Brian's Brain cellular automaton module.
 *
 * Exports all public APIs for the simulation.
 */

// Types
export { CellState } from "./core/types";
export type { BrainConfig, BrainState, BrainStats } from "./core/types";

// Constants
export { DEFAULT_CONFIG, NEIGHBOR_OFFSETS } from "./core/constants";

// Simulation
export {
  createBrainState,
  createBrainStateFromPattern,
  getCell,
  getCellWrapped,
  countOnNeighbors,
  computeNextCellState,
  tick,
  getStats,
  setCell,
  clearGrid,
  randomizeGrid,
} from "./simulation/Simulation";

// Rendering
export { render, renderWithGlow, canvasToGrid } from "./rendering/Renderer";
