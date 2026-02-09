/**
 * PathPlanner - Computes paths and split/rejoin sequences.
 *
 * This is the brain of the simulation. It:
 * - Determines when to split lines
 * - Plans complete split/rejoin sequences
 * - Ensures paths always converge back
 * - Places shapes at decision points
 */

import type {
  GridCoord,
  Direction,
  Shape,
  SplitPlan,
  SimulationConfig,
  ShapeType,
} from "../core/types";
import * as Dir from "../core/Direction";
import * as Grid from "../core/GridCoord";
import { SHAPE_TYPES } from "../core/constants";

let shapeIdCounter = 0;
function generateShapeId(): string {
  return `shape_${shapeIdCounter++}`;
}

/**
 * Create a shape at a grid position.
 */
export function createShape(position: GridCoord, type?: ShapeType): Shape {
  const shapeType =
    type ?? SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)];

  // Pick effects - gradient and colorShift are mutually exclusive (one or the other)
  // Always include some base effects
  const baseEffects: Array<"spin" | "pulse" | "sparks"> = [
    "spin",
    "pulse",
    "sparks",
  ];
  const shuffledBase = [...baseEffects].sort(() => Math.random() - 0.5);
  const numBaseEffects = 1 + Math.floor(Math.random() * 2); // 1-2 base effects

  // Choose either gradient OR colorShift (not both)
  const colorEffect: "gradient" | "colorShift" =
    Math.random() < 0.5 ? "gradient" : "colorShift";

  const activationEffects: Array<
    "spin" | "pulse" | "colorShift" | "gradient" | "sparks"
  > = [...shuffledBase.slice(0, numBaseEffects), colorEffect];

  return {
    id: generateShapeId(),
    position,
    type: shapeType,
    baseRotation: Math.random() * Math.PI * 2,
    animation: {
      rotation: 0,
      targetRotation: 0,
      scale: 1,
      targetScale: 1,
      colorIntensity: 0,
      targetColorIntensity: 0,
      gradientColors: null,
      gradientMode: null,
      sparks: [],
    },
    activated: false,
    activationEffects,
  };
}

/**
 * Determine the next direction for a line at a shape.
 * Excludes the direction it came from (no U-turns).
 */
export function pickNextDirection(
  currentDirection: Direction,
  _position: GridCoord,
): Direction {
  const validDirs = Dir.getValidTurnDirections(currentDirection);
  // Can also continue straight
  const allOptions = [...validDirs, currentDirection];
  return Dir.randomFrom(allOptions);
}

/**
 * Determine if a split should occur.
 * Only allows splitting when there's exactly 1 line (not already split).
 */
export function shouldSplit(
  config: SimulationConfig,
  currentLineCount: number,
): boolean {
  // Can only split if there's exactly 1 line (not already split)
  if (currentLineCount !== 1) return false;
  // Check split chance
  return Math.random() < config.splitChance;
}

/**
 * Determine if a split should be 3-way (creating 2 new lines).
 */
export function shouldTripleSplit(
  config: SimulationConfig,
  currentLineCount: number,
): boolean {
  // Can only triple split if we'd end up with <= 3 lines
  if (currentLineCount + 1 > 3) return false;
  return Math.random() < config.tripleSplitChance;
}

/**
 * Plan a complete split and rejoin sequence.
 *
 * The split works like this:
 * 1. At split point, line divides into 2 (going perpendicular directions)
 * 2. Both lines travel outward for `divergeDistance` cells
 * 3. Both lines turn to travel parallel (same direction as entry)
 * 4. After `parallelDistance` cells, both turn inward
 * 5. They meet at a rejoin shape
 *
 * Visual (entry from LEFT, going RIGHT):
 *
 *        [A2]----[A3]
 *         |       |
 *   ====[Split]  [Rejoin]====
 *         |       |
 *        [B2]----[B3]
 */
export function planSplit(
  splitPoint: GridCoord,
  entryDirection: Direction,
  config: SimulationConfig,
): SplitPlan {
  const [perpA, perpB] = Dir.getPerpendicular(entryDirection);

  // Randomize distances within config bounds
  const divergeDistance = 1 + Math.floor(Math.random() * config.maxDivergence);
  const parallelDistance =
    config.minParallelTravel +
    Math.floor(
      Math.random() * (config.maxParallelTravel - config.minParallelTravel + 1),
    );

  // Build path A (goes in perpA direction first)
  const pathA: GridCoord[] = [];
  const shapesA: Shape[] = [];

  let posA = splitPoint;

  // Step 1: Diverge in perpA direction
  for (let i = 0; i < divergeDistance; i++) {
    posA = Grid.step(posA, perpA);
    pathA.push(posA);
  }
  // Shape at turn point
  shapesA.push(createShape(posA));

  // Step 2: Travel parallel (same as entry direction)
  for (let i = 0; i < parallelDistance; i++) {
    posA = Grid.step(posA, entryDirection);
    pathA.push(posA);
  }
  // Shape at turn point
  shapesA.push(createShape(posA));

  // Step 3: Converge back (opposite of perpA)
  const convergeA = Dir.getOpposite(perpA);
  for (let i = 0; i < divergeDistance; i++) {
    posA = Grid.step(posA, convergeA);
    pathA.push(posA);
  }

  // Build path B (goes in perpB direction first) - mirror of A
  const pathB: GridCoord[] = [];
  const shapesB: Shape[] = [];

  let posB = splitPoint;

  // Step 1: Diverge in perpB direction
  for (let i = 0; i < divergeDistance; i++) {
    posB = Grid.step(posB, perpB);
    pathB.push(posB);
  }
  shapesB.push(createShape(posB));

  // Step 2: Travel parallel
  for (let i = 0; i < parallelDistance; i++) {
    posB = Grid.step(posB, entryDirection);
    pathB.push(posB);
  }
  shapesB.push(createShape(posB));

  // Step 3: Converge back
  const convergeB = Dir.getOpposite(perpB);
  for (let i = 0; i < divergeDistance; i++) {
    posB = Grid.step(posB, convergeB);
    pathB.push(posB);
  }

  // Both paths should end at same point (the rejoin point)
  const rejoinPoint = posA; // posA and posB should be equal

  // Create shapes at split and rejoin
  const splitShape = createShape(splitPoint);
  const rejoinShape = createShape(rejoinPoint);

  return {
    splitPoint,
    splitShape,
    entryDirection,
    pathA,
    pathB,
    rejoinPoint,
    rejoinShape,
    shapesA,
    shapesB,
  };
}

/**
 * Calculate the next shape position for a line traveling straight.
 * Returns the position where the next shape should be placed.
 */
export function getNextShapePosition(
  currentPos: GridCoord,
  direction: Direction,
  minDistance: number = 2,
  maxDistance: number = 5,
): GridCoord {
  const distance =
    minDistance + Math.floor(Math.random() * (maxDistance - minDistance + 1));
  return Grid.stepN(currentPos, direction, distance);
}

/**
 * Plan the next segment of a line's path (non-split).
 * Returns the path to follow and the shape at the end.
 */
export function planNextSegment(
  currentPos: GridCoord,
  currentDirection: Direction,
  minDistance: number = 3,
  maxDistance: number = 6,
): { path: GridCoord[]; endShape: Shape; newDirection: Direction } {
  const distance =
    minDistance + Math.floor(Math.random() * (maxDistance - minDistance + 1));

  const path: GridCoord[] = [];
  let pos = currentPos;

  for (let i = 0; i < distance; i++) {
    pos = Grid.step(pos, currentDirection);
    path.push(pos);
  }

  const endShape = createShape(pos);
  const newDirection = pickNextDirection(currentDirection, pos);

  return { path, endShape, newDirection };
}

/**
 * Validate a split plan (for testing).
 */
export function validateSplitPlan(plan: SplitPlan): boolean {
  // Path A and B should end at the same point (rejoin)
  const endA = plan.pathA[plan.pathA.length - 1];
  const endB = plan.pathB[plan.pathB.length - 1];

  if (!Grid.equals(endA, plan.rejoinPoint)) return false;
  if (!Grid.equals(endB, plan.rejoinPoint)) return false;
  if (!Grid.equals(endA, endB)) return false;

  // Paths should not be empty
  if (plan.pathA.length === 0 || plan.pathB.length === 0) return false;

  return true;
}
