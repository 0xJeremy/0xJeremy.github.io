/**
 * Grid coordinate utilities.
 */

import type { GridCoord, WorldCoord, Direction } from "./types";
import { toGridDelta } from "./Direction";

/**
 * Create a grid coordinate.
 */
export function gridCoord(row: number, col: number): GridCoord {
  return { row, col };
}

/**
 * Check if two grid coordinates are equal.
 */
export function equals(a: GridCoord, b: GridCoord): boolean {
  return a.row === b.row && a.col === b.col;
}

/**
 * Add two grid coordinates.
 */
export function add(a: GridCoord, b: GridCoord): GridCoord {
  return { row: a.row + b.row, col: a.col + b.col };
}

/**
 * Subtract grid coordinates (a - b).
 */
export function subtract(a: GridCoord, b: GridCoord): GridCoord {
  return { row: a.row - b.row, col: a.col - b.col };
}

/**
 * Scale a grid coordinate.
 */
export function scale(coord: GridCoord, factor: number): GridCoord {
  return { row: coord.row * factor, col: coord.col * factor };
}

/**
 * Move one step in a direction.
 */
export function step(coord: GridCoord, direction: Direction): GridCoord {
  return add(coord, toGridDelta(direction));
}

/**
 * Move multiple steps in a direction.
 */
export function stepN(
  coord: GridCoord,
  direction: Direction,
  n: number,
): GridCoord {
  const delta = toGridDelta(direction);
  return { row: coord.row + delta.row * n, col: coord.col + delta.col * n };
}

/**
 * Manhattan distance between two grid coordinates.
 */
export function manhattanDistance(a: GridCoord, b: GridCoord): number {
  return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

/**
 * Convert grid coordinate to world coordinate (center of cell).
 */
export function toWorld(coord: GridCoord, cellSize: number): WorldCoord {
  return {
    x: coord.col * cellSize + cellSize / 2,
    y: coord.row * cellSize + cellSize / 2,
  };
}

/**
 * Convert world coordinate to grid coordinate.
 */
export function fromWorld(world: WorldCoord, cellSize: number): GridCoord {
  return {
    row: Math.floor(world.y / cellSize),
    col: Math.floor(world.x / cellSize),
  };
}

/**
 * Interpolate between two grid positions in world space.
 */
export function lerpWorld(
  from: GridCoord,
  to: GridCoord,
  t: number,
  cellSize: number,
): WorldCoord {
  const fromWorld = toWorld(from, cellSize);
  const toWorld_ = toWorld(to, cellSize);
  return {
    x: fromWorld.x + (toWorld_.x - fromWorld.x) * t,
    y: fromWorld.y + (toWorld_.y - fromWorld.y) * t,
  };
}

/**
 * Create a unique string key for a grid coordinate.
 */
export function toKey(coord: GridCoord): string {
  return `${coord.row},${coord.col}`;
}

/**
 * Parse a key back to a grid coordinate.
 */
export function fromKey(key: string): GridCoord {
  const [row, col] = key.split(",").map(Number);
  return { row, col };
}

/**
 * Get all grid coordinates in a path from start to end (straight line only).
 */
export function pathBetween(start: GridCoord, end: GridCoord): GridCoord[] {
  const path: GridCoord[] = [start];
  let current = { ...start };

  while (!equals(current, end)) {
    if (current.row < end.row) current.row++;
    else if (current.row > end.row) current.row--;
    else if (current.col < end.col) current.col++;
    else if (current.col > end.col) current.col--;

    path.push({ ...current });
  }

  return path;
}

/**
 * Check if a coordinate is within bounds.
 */
export function isInBounds(
  coord: GridCoord,
  minRow: number,
  maxRow: number,
  minCol: number,
  maxCol: number,
): boolean {
  return (
    coord.row >= minRow &&
    coord.row <= maxRow &&
    coord.col >= minCol &&
    coord.col <= maxCol
  );
}
