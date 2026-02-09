/**
 * Core types for Brian's Brain cellular automaton.
 *
 * Brian's Brain has three states:
 * - OFF (dead): Can become ON if exactly 2 neighbors are ON
 * - ON (alive): Always becomes DYING next tick
 * - DYING: Always becomes OFF next tick
 */

/** Cell states in Brian's Brain */
export enum CellState {
  OFF = 0,
  ON = 1,
  DYING = 2,
}

/** Configuration for the simulation */
export interface BrainConfig {
  /** Number of columns in the grid */
  cols: number;
  /** Number of rows in the grid */
  rows: number;
  /** Size of each cell in pixels */
  cellSize: number;
  /** Simulation speed (ticks per second) */
  ticksPerSecond: number;
  /** Color for OFF (dead) cells */
  colorOff: string;
  /** Color for ON (alive) cells */
  colorOn: string;
  /** Color for DYING cells */
  colorDying: string;
  /** Initial density of ON cells (0-1) */
  initialDensity: number;
  /** Whether to wrap edges (toroidal grid) */
  wrapEdges: boolean;
}

/** The simulation state */
export interface BrainState {
  /** The grid of cell states (flat array, row-major order) */
  grid: Uint8Array;
  /** Grid dimensions */
  cols: number;
  rows: number;
  /** Current generation/tick count */
  generation: number;
}

/** Statistics about the current state */
export interface BrainStats {
  onCount: number;
  dyingCount: number;
  offCount: number;
  generation: number;
}
