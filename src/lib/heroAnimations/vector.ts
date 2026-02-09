/**
 * 2D Vector math utilities.
 * Pure functions for vector operations.
 */

import type { Vector2 } from "./types";

/** Create a new vector */
export const vec2 = (x: number, y: number): Vector2 => ({ x, y });

/** Vector addition */
export const add = (a: Vector2, b: Vector2): Vector2 => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

/** Vector subtraction */
export const sub = (a: Vector2, b: Vector2): Vector2 => ({
  x: a.x - b.x,
  y: a.y - b.y,
});

/** Scalar multiplication */
export const scale = (v: Vector2, s: number): Vector2 => ({
  x: v.x * s,
  y: v.y * s,
});

/** Vector magnitude (length) */
export const magnitude = (v: Vector2): number =>
  Math.sqrt(v.x * v.x + v.y * v.y);

/** Squared magnitude (faster, useful for comparisons) */
export const magnitudeSq = (v: Vector2): number => v.x * v.x + v.y * v.y;

/** Normalize vector to unit length */
export const normalize = (v: Vector2): Vector2 => {
  const mag = magnitude(v);
  if (mag === 0) return { x: 0, y: 0 };
  return { x: v.x / mag, y: v.y / mag };
};

/** Dot product */
export const dot = (a: Vector2, b: Vector2): number => a.x * b.x + a.y * b.y;

/** Cross product (returns scalar in 2D - the z component) */
export const cross = (a: Vector2, b: Vector2): number => a.x * b.y - a.y * b.x;

/** Distance between two points */
export const distance = (a: Vector2, b: Vector2): number =>
  magnitude(sub(b, a));

/** Squared distance (faster) */
export const distanceSq = (a: Vector2, b: Vector2): number =>
  magnitudeSq(sub(b, a));

/** Linear interpolation between two vectors */
export const lerp = (a: Vector2, b: Vector2, t: number): Vector2 => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
});

/** Rotate vector by angle (radians) */
export const rotate = (v: Vector2, angle: number): Vector2 => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: v.x * cos - v.y * sin,
    y: v.x * sin + v.y * cos,
  };
};

/** Get angle of vector (radians, from positive x-axis) */
export const angle = (v: Vector2): number => Math.atan2(v.y, v.x);

/** Create unit vector from angle (radians) */
export const fromAngle = (angle: number): Vector2 => ({
  x: Math.cos(angle),
  y: Math.sin(angle),
});

/** Reflect vector across a normal */
export const reflect = (v: Vector2, normal: Vector2): Vector2 => {
  const d = 2 * dot(v, normal);
  return {
    x: v.x - d * normal.x,
    y: v.y - d * normal.y,
  };
};

/** Perpendicular vector (rotated 90° counter-clockwise) */
export const perpendicular = (v: Vector2): Vector2 => ({
  x: -v.y,
  y: v.x,
});

/** Clamp vector magnitude */
export const clampMagnitude = (v: Vector2, maxMag: number): Vector2 => {
  const mag = magnitude(v);
  if (mag <= maxMag) return v;
  return scale(normalize(v), maxMag);
};

/** Random unit vector */
export const randomUnit = (): Vector2 => {
  const angle = Math.random() * Math.PI * 2;
  return fromAngle(angle);
};

/** Random vector within a circle of given radius */
export const randomInCircle = (radius: number): Vector2 => {
  const angle = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random()) * radius; // sqrt for uniform distribution
  return {
    x: Math.cos(angle) * r,
    y: Math.sin(angle) * r,
  };
};

/** Check if two vectors are approximately equal */
export const approxEqual = (
  a: Vector2,
  b: Vector2,
  epsilon: number = 0.0001,
): boolean => Math.abs(a.x - b.x) < epsilon && Math.abs(a.y - b.y) < epsilon;

/** Zero vector constant */
export const ZERO: Readonly<Vector2> = Object.freeze({ x: 0, y: 0 });

/** Unit vectors */
export const UP: Readonly<Vector2> = Object.freeze({ x: 0, y: -1 });
export const DOWN: Readonly<Vector2> = Object.freeze({ x: 0, y: 1 });
export const LEFT: Readonly<Vector2> = Object.freeze({ x: -1, y: 0 });
export const RIGHT: Readonly<Vector2> = Object.freeze({ x: 1, y: 0 });
