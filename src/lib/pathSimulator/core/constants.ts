/**
 * Default configuration and constants for the Path Simulator.
 */

import type { SimulationConfig } from "./types";

export const DEFAULT_CONFIG: SimulationConfig = {
  // Grid - larger cells for more dramatic movement
  cellSize: 140,

  // Movement
  lineSpeed: 3, // cells per second

  // Trail
  maxTrailLength: 150,

  // Split mechanics
  splitChance: 0.15, // 15% chance to split at each shape
  tripleSplitChance: 0.08, // 8% of splits become 3-way (rare)
  maxDivergence: 1, // max cells apart before rejoin (keep very close)
  minParallelTravel: 1, // min cells to travel in parallel
  maxParallelTravel: 2, // max cells to travel in parallel (very short)
  maxSplitSteps: 10, // max steps before forced rejoin

  // Camera - tracks line heads with smooth interpolation
  cameraSmoothing: 0.06, // Slightly faster to keep up with movement
  cameraPadding: 2,
  baseZoom: 2.2,

  // Animation
  shapeAnimationSpeed: 6,

  // Visual - Line
  lineColor: "rgba(255, 80, 60, 1)",
  lineGlowColor: "rgba(255, 80, 60, 0.4)",
  lineWidth: 3,

  // Visual - Grid
  gridDotColor: "rgba(60, 70, 90, 0.4)",
  gridDotSize: 2.5,

  // Visual - Background
  backgroundColor: "rgba(8, 10, 15, 1)",

  // Visual - Shapes
  shapeColor: "rgba(30, 35, 45, 0.9)",
  shapeActivatedColor: "rgba(255, 100, 80, 0.8)",
};

/** Maximum number of simultaneous lines */
export const MAX_LINES = 3;

/** Ticks to pause at a shape before turning */
export const SHAPE_PAUSE_TICKS = 0; // Instant turns as requested

/** Shape size relative to cell size */
export const SHAPE_SIZE_RATIO = 0.6;

/** Trail point spacing (world units) - smaller = smoother trail */
export const TRAIL_POINT_SPACING = 1;

/** Animation durations and intensities */
export const ANIMATION = {
  spinDuration: 0.4,
  pulseDuration: 0.5,
  colorShiftDuration: 0.6,
  pulseScaleMin: 1.3,
  pulseScaleMax: 1.8, // Can grow much larger
  spinRotationMin: Math.PI * 0.5, // 90 degrees
  spinRotationMax: Math.PI * 2, // Up to full rotation (or 2x)
  sparkCount: { min: 3, max: 8 },
  sparkSpeed: { min: 80, max: 200 },
  sparkLifetime: { min: 0.3, max: 0.6 },
} as const;

/** Gradient colors for activated shapes */
export const SHAPE_GRADIENT_COLORS = [
  ["rgba(255, 100, 50, 1)", "rgba(255, 200, 50, 1)"], // Orange to gold
  ["rgba(50, 200, 255, 1)", "rgba(150, 50, 255, 1)"], // Cyan to purple
  ["rgba(255, 50, 150, 1)", "rgba(255, 150, 50, 1)"], // Pink to orange
  ["rgba(100, 255, 150, 1)", "rgba(50, 150, 255, 1)"], // Green to blue
  ["rgba(255, 80, 80, 1)", "rgba(255, 255, 100, 1)"], // Red to yellow
] as const;

/** Shape types available */
export const SHAPE_TYPES: readonly ("square" | "diamond" | "triangle")[] = [
  "square",
  "diamond",
  "triangle",
];
