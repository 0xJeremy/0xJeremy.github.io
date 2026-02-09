/**
 * Procedural Path Generator
 *
 * Generates paths that wind through a world of geometric shapes.
 * Handles collision detection and direction changes.
 */

import type { Vector2, Shape, ShapeType, PathTracerConfig } from "./types";
import * as vec from "./vector";
import { DEFAULT_PATH_TRACER_CONFIG } from "./colorPalette";

// ============================================================================
// Shape Generation
// ============================================================================

let shapeIdCounter = 0;

/**
 * Generate a random shape at a given position.
 */
export function createShape(
  position: Vector2,
  config: Partial<PathTracerConfig> = {},
): Shape {
  const fullConfig = { ...DEFAULT_PATH_TRACER_CONFIG, ...config };
  const [minSize, maxSize] = fullConfig.shapeSizeRange;

  const types: ShapeType[] = ["square", "diamond", "triangle", "hexagon"];
  const type = types[Math.floor(Math.random() * types.length)];

  const size = minSize + Math.random() * (maxSize - minSize);
  const rotation = Math.random() * Math.PI * 2;
  const color =
    fullConfig.shapeColors[
      Math.floor(Math.random() * fullConfig.shapeColors.length)
    ];

  // Z-index: some shapes behind line, some in front
  // Majority behind for the "passing through" effect
  const zIndex = Math.random() < 0.75 ? -1 : 1;

  return {
    id: `shape_${shapeIdCounter++}`,
    type,
    position,
    size,
    rotation,
    color,
    strokeColor: fullConfig.shapeStrokeColor,
    zIndex,
    visited: false,
  };
}

/**
 * Generate a world of shapes distributed across the bounds.
 */
export function generateShapes(
  config: Partial<PathTracerConfig> = {},
): Shape[] {
  const fullConfig = { ...DEFAULT_PATH_TRACER_CONFIG, ...config };
  const { worldBounds, shapeCount } = fullConfig;
  const shapes: Shape[] = [];

  // Create a grid-based distribution with jitter for organic feel
  const gridSize = Math.ceil(Math.sqrt(shapeCount));
  const cellWidth = worldBounds.width / gridSize;
  const cellHeight = worldBounds.height / gridSize;

  for (let i = 0; i < shapeCount; i++) {
    const gridX = i % gridSize;
    const gridY = Math.floor(i / gridSize);

    // Position with jitter
    const jitterX = (Math.random() - 0.5) * cellWidth * 0.8;
    const jitterY = (Math.random() - 0.5) * cellHeight * 0.8;

    const position: Vector2 = {
      x: gridX * cellWidth + cellWidth / 2 + jitterX,
      y: gridY * cellHeight + cellHeight / 2 + jitterY,
    };

    shapes.push(createShape(position, config));
  }

  return shapes;
}

// ============================================================================
// Collision Detection
// ============================================================================

/**
 * Check if a point is inside a shape.
 */
export function pointInShape(point: Vector2, shape: Shape): boolean {
  // Transform point to shape's local space
  const local = worldToLocal(point, shape);

  switch (shape.type) {
    case "square":
      return pointInSquare(local, shape.size);
    case "diamond":
      return pointInDiamond(local, shape.size);
    case "triangle":
      return pointInTriangle(local, shape.size);
    case "hexagon":
      return pointInHexagon(local, shape.size);
    default:
      return false;
  }
}

/**
 * Transform world point to shape's local coordinate space.
 */
function worldToLocal(point: Vector2, shape: Shape): Vector2 {
  const translated = vec.sub(point, shape.position);
  return vec.rotate(translated, -shape.rotation);
}

function pointInSquare(local: Vector2, size: number): boolean {
  const half = size / 2;
  return Math.abs(local.x) <= half && Math.abs(local.y) <= half;
}

function pointInDiamond(local: Vector2, size: number): boolean {
  const half = size / 2;
  return Math.abs(local.x) + Math.abs(local.y) <= half;
}

function pointInTriangle(local: Vector2, size: number): boolean {
  const h = (size * Math.sqrt(3)) / 2;
  const halfBase = size / 2;

  // Equilateral triangle pointing up, centered at origin
  // Check if point is inside using barycentric or bounds
  if (local.y < (-h * 2) / 3 || local.y > (h * 1) / 3) return false;

  // Width at this y level
  const yRatio = (local.y + (h * 2) / 3) / h;
  const widthAtY = halfBase * yRatio;

  return Math.abs(local.x) <= widthAtY;
}

function pointInHexagon(local: Vector2, size: number): boolean {
  const r = size / 2;
  const x = Math.abs(local.x);
  const y = Math.abs(local.y);

  // Hexagon bounds check
  return y <= r * 0.866 && x <= r && x + y * 0.577 <= r;
}

/**
 * Find the first shape that contains the given point.
 */
export function detectShapeCollision(
  point: Vector2,
  shapes: Shape[],
): Shape | null {
  for (const shape of shapes) {
    if (pointInShape(point, shape)) {
      return shape;
    }
  }
  return null;
}

/**
 * Find shapes within influence radius of a point.
 */
export function findNearbyShapes(
  point: Vector2,
  shapes: Shape[],
  radius: number,
): Shape[] {
  return shapes.filter((shape) => {
    const dist = vec.distance(point, shape.position);
    return dist < radius + shape.size / 2;
  });
}

// ============================================================================
// Direction Generation
// ============================================================================

/**
 * Calculate the edge normal at a point on a shape's boundary.
 */
export function getShapeEdgeNormal(point: Vector2, shape: Shape): Vector2 {
  const local = worldToLocal(point, shape);
  let localNormal: Vector2;

  switch (shape.type) {
    case "square": {
      // Find which edge we're closest to
      const half = shape.size / 2;
      const dx = half - Math.abs(local.x);
      const dy = half - Math.abs(local.y);

      if (dx < dy) {
        localNormal = { x: Math.sign(local.x), y: 0 };
      } else {
        localNormal = { x: 0, y: Math.sign(local.y) };
      }
      break;
    }
    case "diamond": {
      // Normal points outward from center through the point
      localNormal = vec.normalize(local);
      break;
    }
    case "triangle":
    case "hexagon":
    default: {
      // Simplified: normal points from center to point
      localNormal = vec.normalize(local);
      break;
    }
  }

  // Rotate normal back to world space
  return vec.rotate(localNormal, shape.rotation);
}

/**
 * Calculate new direction when exiting a shape.
 */
export function calculateExitDirection(
  entryDirection: Vector2,
  shape: Shape,
  exitPoint: Vector2,
  config: Partial<PathTracerConfig> = {},
): Vector2 {
  const fullConfig = { ...DEFAULT_PATH_TRACER_CONFIG, ...config };
  const [minAngle, maxAngle] = fullConfig.turnAngleRange;

  // Get the normal at exit point
  const normal = getShapeEdgeNormal(exitPoint, shape);

  // Reflect the direction across the normal (billiard-style)
  const reflected = vec.reflect(entryDirection, normal);

  // Add some randomization to make it more organic
  const angleVariation =
    (Math.random() - 0.5) * (maxAngle - minAngle) * (Math.PI / 180);
  const rotated = vec.rotate(reflected, angleVariation);

  return vec.normalize(rotated);
}

/**
 * Generate a new direction based on current state and nearby shapes.
 */
export function generateNextDirection(
  currentPosition: Vector2,
  currentDirection: Vector2,
  shapes: Shape[],
  config: Partial<PathTracerConfig> = {},
): Vector2 {
  const fullConfig = { ...DEFAULT_PATH_TRACER_CONFIG, ...config };
  const [minAngle, maxAngle] = fullConfig.turnAngleRange;

  // Check if we're inside a shape
  const collidingShape = detectShapeCollision(currentPosition, shapes);
  if (collidingShape && !collidingShape.visited) {
    // Mark as visited and calculate exit direction
    collidingShape.visited = true;
    return calculateExitDirection(
      currentDirection,
      collidingShape,
      currentPosition,
      config,
    );
  }

  // Check for nearby shapes to influence direction
  const nearbyShapes = findNearbyShapes(
    currentPosition,
    shapes.filter((s) => !s.visited),
    fullConfig.shapeInfluenceRadius,
  );

  if (nearbyShapes.length > 0 && Math.random() < 0.3) {
    // Occasionally steer toward nearest unvisited shape
    const nearest = nearbyShapes.reduce((a, b) =>
      vec.distance(currentPosition, a.position) <
      vec.distance(currentPosition, b.position)
        ? a
        : b,
    );

    const toShape = vec.normalize(vec.sub(nearest.position, currentPosition));
    const blended = vec.normalize(
      vec.add(vec.scale(currentDirection, 0.7), vec.scale(toShape, 0.3)),
    );
    return blended;
  }

  // Random turn based on probability
  if (Math.random() < fullConfig.turnProbability) {
    const angleChange =
      (minAngle + Math.random() * (maxAngle - minAngle)) * (Math.PI / 180);
    const sign = Math.random() < 0.5 ? 1 : -1;
    return vec.rotate(currentDirection, angleChange * sign);
  }

  // Continue in same direction with tiny drift
  const drift = (Math.random() - 0.5) * 0.05;
  return vec.rotate(currentDirection, drift);
}

/**
 * Calculate next segment length.
 */
export function calculateSegmentLength(
  config: Partial<PathTracerConfig> = {},
): number {
  const fullConfig = { ...DEFAULT_PATH_TRACER_CONFIG, ...config };
  const { minSegmentLength, maxSegmentLength } = fullConfig;
  return (
    minSegmentLength + Math.random() * (maxSegmentLength - minSegmentLength)
  );
}
