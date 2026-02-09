/**
 * Default configuration and constants for Brian's Brain.
 */

import type { BrainConfig } from "./types";

export const DEFAULT_CONFIG: BrainConfig = {
  // Grid dimensions - enough to fill a typical viewport
  cols: 120,
  rows: 80,

  // Cell size in pixels
  cellSize: 8,

  // Simulation speed
  ticksPerSecond: 12,

  // Colors - dark theme with vibrant accents
  colorOff: "rgba(12, 14, 20, 1)", // Near-black background
  colorOn: "rgba(80, 200, 255, 1)", // Bright cyan for alive
  colorDying: "rgba(255, 100, 80, 0.6)", // Fading orange-red for dying

  // Initial state
  initialDensity: 0.15, // 15% of cells start ON

  // Wrap edges for continuous patterns
  wrapEdges: true,
};

/** Neighbor offsets for the 8 surrounding cells (Moore neighborhood) */
export const NEIGHBOR_OFFSETS: readonly [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
