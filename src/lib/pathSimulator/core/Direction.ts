/**
 * Direction utilities for cardinal movement.
 */

import { Direction, type GridCoord } from "./types";

/**
 * Get the opposite direction.
 */
export function getOpposite(dir: Direction): Direction {
  switch (dir) {
    case Direction.UP:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.UP;
    case Direction.LEFT:
      return Direction.RIGHT;
    case Direction.RIGHT:
      return Direction.LEFT;
  }
}

/**
 * Rotate direction 90 degrees clockwise.
 */
export function rotateCW(dir: Direction): Direction {
  switch (dir) {
    case Direction.UP:
      return Direction.RIGHT;
    case Direction.RIGHT:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.LEFT;
    case Direction.LEFT:
      return Direction.UP;
  }
}

/**
 * Rotate direction 90 degrees counter-clockwise.
 */
export function rotateCCW(dir: Direction): Direction {
  switch (dir) {
    case Direction.UP:
      return Direction.LEFT;
    case Direction.LEFT:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.RIGHT;
    case Direction.RIGHT:
      return Direction.UP;
  }
}

/**
 * Get the two perpendicular directions.
 */
export function getPerpendicular(dir: Direction): [Direction, Direction] {
  switch (dir) {
    case Direction.UP:
    case Direction.DOWN:
      return [Direction.LEFT, Direction.RIGHT];
    case Direction.LEFT:
    case Direction.RIGHT:
      return [Direction.UP, Direction.DOWN];
  }
}

/**
 * Get all directions except the given one.
 */
export function getOtherDirections(exclude: Direction): Direction[] {
  return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT].filter(
    (d) => d !== exclude,
  );
}

/**
 * Get valid turn directions (not opposite, not same).
 */
export function getValidTurnDirections(current: Direction): Direction[] {
  const opposite = getOpposite(current);
  return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT].filter(
    (d) => d !== current && d !== opposite,
  );
}

/**
 * Convert direction to grid delta.
 */
export function toGridDelta(dir: Direction): GridCoord {
  switch (dir) {
    case Direction.UP:
      return { row: -1, col: 0 };
    case Direction.DOWN:
      return { row: 1, col: 0 };
    case Direction.LEFT:
      return { row: 0, col: -1 };
    case Direction.RIGHT:
      return { row: 0, col: 1 };
  }
}

/**
 * Convert direction to angle (radians, 0 = right, counter-clockwise).
 */
export function toAngle(dir: Direction): number {
  switch (dir) {
    case Direction.RIGHT:
      return 0;
    case Direction.UP:
      return -Math.PI / 2;
    case Direction.LEFT:
      return Math.PI;
    case Direction.DOWN:
      return Math.PI / 2;
  }
}

/**
 * Get a random direction.
 */
export function randomDirection(): Direction {
  const dirs = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT];
  return dirs[Math.floor(Math.random() * dirs.length)];
}

/**
 * Get a random direction from the given set.
 */
export function randomFrom(directions: Direction[]): Direction {
  return directions[Math.floor(Math.random() * directions.length)];
}

/**
 * Check if two directions are opposite.
 */
export function areOpposite(a: Direction, b: Direction): boolean {
  return getOpposite(a) === b;
}

/**
 * Check if two directions are perpendicular.
 */
export function arePerpendicular(a: Direction, b: Direction): boolean {
  return !areOpposite(a, b) && a !== b;
}

/**
 * All cardinal directions.
 */
export const ALL_DIRECTIONS: readonly Direction[] = [
  Direction.UP,
  Direction.DOWN,
  Direction.LEFT,
  Direction.RIGHT,
];
