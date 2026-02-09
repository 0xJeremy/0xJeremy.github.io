/**
 * Brian's Brain simulation logic.
 *
 * This implements the cellular automaton rules:
 * - OFF cell with exactly 2 ON neighbors → ON
 * - ON cell → DYING
 * - DYING cell → OFF
 *
 * Uses Uint8Array for memory efficiency and cache-friendly access patterns.
 * Double-buffering prevents allocation during ticks.
 */

import {
  CellState,
  type BrainConfig,
  type BrainState,
  type BrainStats,
} from "../core/types";
import { DEFAULT_CONFIG, NEIGHBOR_OFFSETS } from "../core/constants";

/**
 * Create initial simulation state.
 */
export function createBrainState(
  config: Partial<BrainConfig> = {},
): BrainState {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { cols, rows, initialDensity } = fullConfig;

  const grid = new Uint8Array(cols * rows);

  // Randomly initialize cells
  for (let i = 0; i < grid.length; i++) {
    if (Math.random() < initialDensity) {
      grid[i] = CellState.ON;
    } else {
      grid[i] = CellState.OFF;
    }
  }

  return {
    grid,
    cols,
    rows,
    generation: 0,
  };
}

/**
 * Create a state with a specific pattern (for testing).
 */
export function createBrainStateFromPattern(
  pattern: CellState[][],
  _config: Partial<BrainConfig> = {},
): BrainState {
  const rows = pattern.length;
  const cols = pattern[0]?.length ?? 0;

  const grid = new Uint8Array(cols * rows);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      grid[row * cols + col] = pattern[row][col];
    }
  }

  return {
    grid,
    cols,
    rows,
    generation: 0,
  };
}

/**
 * Get cell state at position.
 */
export function getCell(
  state: BrainState,
  row: number,
  col: number,
): CellState {
  if (row < 0 || row >= state.rows || col < 0 || col >= state.cols) {
    return CellState.OFF;
  }
  return state.grid[row * state.cols + col];
}

/**
 * Get cell state with wrapping (toroidal grid).
 */
export function getCellWrapped(
  state: BrainState,
  row: number,
  col: number,
): CellState {
  const wrappedRow = ((row % state.rows) + state.rows) % state.rows;
  const wrappedCol = ((col % state.cols) + state.cols) % state.cols;
  return state.grid[wrappedRow * state.cols + wrappedCol];
}

/**
 * Count ON neighbors for a cell.
 */
export function countOnNeighbors(
  state: BrainState,
  row: number,
  col: number,
  wrapEdges: boolean,
): number {
  let count = 0;
  const getFunc = wrapEdges ? getCellWrapped : getCell;

  for (const [dr, dc] of NEIGHBOR_OFFSETS) {
    if (getFunc(state, row + dr, col + dc) === CellState.ON) {
      count++;
    }
  }

  return count;
}

/**
 * Compute the next state of a cell based on Brian's Brain rules.
 */
export function computeNextCellState(
  currentState: CellState,
  onNeighborCount: number,
): CellState {
  switch (currentState) {
    case CellState.OFF:
      // OFF becomes ON if exactly 2 neighbors are ON
      return onNeighborCount === 2 ? CellState.ON : CellState.OFF;
    case CellState.ON:
      // ON always becomes DYING
      return CellState.DYING;
    case CellState.DYING:
      // DYING always becomes OFF
      return CellState.OFF;
    default:
      return CellState.OFF;
  }
}

// Pre-allocated buffer for double-buffering (avoids allocation during tick)
let nextGridBuffer: Uint8Array | null = null;

/**
 * Advance the simulation by one tick.
 * Returns a new state (immutable update pattern).
 */
export function tick(
  state: BrainState,
  config: Partial<BrainConfig> = {},
): BrainState {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { cols, rows, grid } = state;
  const { wrapEdges } = fullConfig;

  // Reuse buffer if same size, otherwise allocate
  if (!nextGridBuffer || nextGridBuffer.length !== grid.length) {
    nextGridBuffer = new Uint8Array(grid.length);
  }

  const nextGrid = nextGridBuffer;

  // Compute next state for each cell
  for (let row = 0; row < rows; row++) {
    const rowOffset = row * cols;

    for (let col = 0; col < cols; col++) {
      const index = rowOffset + col;
      const currentState = grid[index];
      const onNeighbors = countOnNeighbors(state, row, col, wrapEdges);
      nextGrid[index] = computeNextCellState(currentState, onNeighbors);
    }
  }

  // Swap buffers - copy next into a new array for the new state
  const newGrid = new Uint8Array(nextGrid);

  return {
    grid: newGrid,
    cols,
    rows,
    generation: state.generation + 1,
  };
}

/**
 * Get statistics about the current state.
 */
export function getStats(state: BrainState): BrainStats {
  let onCount = 0;
  let dyingCount = 0;

  for (let i = 0; i < state.grid.length; i++) {
    const cell = state.grid[i];
    if (cell === CellState.ON) onCount++;
    else if (cell === CellState.DYING) dyingCount++;
  }

  return {
    onCount,
    dyingCount,
    offCount: state.grid.length - onCount - dyingCount,
    generation: state.generation,
  };
}

/**
 * Set a cell's state (for interactive editing).
 */
export function setCell(
  state: BrainState,
  row: number,
  col: number,
  cellState: CellState,
): BrainState {
  if (row < 0 || row >= state.rows || col < 0 || col >= state.cols) {
    return state;
  }

  const newGrid = new Uint8Array(state.grid);
  newGrid[row * state.cols + col] = cellState;

  return {
    ...state,
    grid: newGrid,
  };
}

/**
 * Clear the grid (all cells to OFF).
 */
export function clearGrid(state: BrainState): BrainState {
  return {
    ...state,
    grid: new Uint8Array(state.cols * state.rows),
    generation: 0,
  };
}

/**
 * Randomize the grid with a given density.
 */
export function randomizeGrid(state: BrainState, density: number): BrainState {
  const newGrid = new Uint8Array(state.cols * state.rows);

  for (let i = 0; i < newGrid.length; i++) {
    if (Math.random() < density) {
      newGrid[i] = CellState.ON;
    }
  }

  return {
    ...state,
    grid: newGrid,
    generation: 0,
  };
}
