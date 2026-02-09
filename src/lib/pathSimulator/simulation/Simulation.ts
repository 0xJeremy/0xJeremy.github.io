/**
 * Main Simulation class - orchestrates the entire path tracer simulation.
 */

import type {
  SimulationState,
  SimulationConfig,
  PathLineState,
  Shape,
  GridCoord,
  WorldCoord,
  BoundingBox,
} from "../core/types";
import {
  DEFAULT_CONFIG,
  MAX_LINES,
  TRAIL_POINT_SPACING,
  ANIMATION,
  SHAPE_GRADIENT_COLORS,
} from "../core/constants";
import * as Grid from "../core/GridCoord";
import * as Dir from "../core/Direction";
import {
  createShape,
  planSplit,
  planNextSegment,
  shouldSplit,
  pickNextDirection,
} from "./PathPlanner";

let lineIdCounter = 0;
function generateLineId(): string {
  return `line_${lineIdCounter++}`;
}

/**
 * Create initial simulation state.
 */
export function createSimulation(
  config: Partial<SimulationConfig> = {},
): SimulationState {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };

  // Start with one line at origin, moving right
  const startPos: GridCoord = { row: 0, col: 0 };
  const startDir = Dir.randomDirection();

  // Plan first segment
  const firstSegment = planNextSegment(startPos, startDir);

  const initialLine: PathLineState = {
    id: generateLineId(),
    position: startPos,
    direction: startDir,
    cellProgress: 0,
    trail: [Grid.toWorld(startPos, fullConfig.cellSize)],
    state: { type: "MOVING" },
    plannedPath: firstSegment.path,
    pathIndex: 0,
    stepsSinceSplit: 0,
  };

  // Create initial shape at start and end of first segment
  const shapes = new Map<string, Shape>();
  const startShape = createShape(startPos);
  shapes.set(Grid.toKey(startPos), startShape);
  shapes.set(Grid.toKey(firstSegment.endShape.position), firstSegment.endShape);

  const camera = {
    position: Grid.toWorld(startPos, fullConfig.cellSize),
    targetPosition: Grid.toWorld(startPos, fullConfig.cellSize),
    zoom: fullConfig.baseZoom,
    targetZoom: fullConfig.baseZoom,
  };

  return {
    lines: [initialLine],
    shapes,
    camera,
    tick: 0,
    gridOrigin: startPos,
  };
}

/**
 * Update simulation by one frame.
 */
export function updateSimulation(
  state: SimulationState,
  deltaTime: number,
  config: Partial<SimulationConfig> = {},
): SimulationState {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const dt = Math.min(deltaTime, 100) / 1000; // Convert to seconds, cap at 100ms

  let newState = { ...state, tick: state.tick + 1 };

  // Update each line
  const updatedLines: PathLineState[] = [];
  const linesToAdd: PathLineState[] = [];

  for (const line of newState.lines) {
    const result = updateLine(line, dt, fullConfig, newState);
    updatedLines.push(...result.updatedLines);
    linesToAdd.push(...result.newLines);

    // Add any new shapes
    for (const shape of result.newShapes) {
      newState.shapes.set(Grid.toKey(shape.position), shape);
    }
  }

  newState.lines = [...updatedLines, ...linesToAdd];

  // Update shapes (animations)
  newState.shapes = updateShapes(newState.shapes, dt, fullConfig);

  // Remove off-screen shapes
  newState = cullOffscreenShapes(newState, fullConfig);

  // Update camera
  newState.camera = updateCamera(newState, fullConfig);

  return newState;
}

/**
 * Update a single line.
 */
function updateLine(
  line: PathLineState,
  dt: number,
  config: SimulationConfig,
  state: SimulationState,
): {
  updatedLines: PathLineState[];
  newLines: PathLineState[];
  newShapes: Shape[];
} {
  const newShapes: Shape[] = [];
  let updatedLine = { ...line };

  // Move along current path
  const moveAmount = config.lineSpeed * dt;
  updatedLine.cellProgress += moveAmount;

  // Update trail
  const currentWorldPos = getCurrentWorldPosition(updatedLine, config);
  updatedLine.trail = updateTrail(updatedLine.trail, currentWorldPos, config);

  // Check if we've completed current cell
  while (updatedLine.cellProgress >= 1) {
    updatedLine.cellProgress -= 1;

    // Move to next position in path
    if (
      updatedLine.plannedPath &&
      updatedLine.pathIndex < updatedLine.plannedPath.length
    ) {
      updatedLine.position = updatedLine.plannedPath[updatedLine.pathIndex];
      updatedLine.pathIndex++;

      // Check if we've reached the end of our planned path (a shape)
      if (updatedLine.pathIndex >= updatedLine.plannedPath.length) {
        // We've arrived at a shape
        const shapeKey = Grid.toKey(updatedLine.position);
        const shape = state.shapes.get(shapeKey);

        if (shape) {
          // Activate the shape
          activateShape(shape, config);
        }

        // Decide what to do next: split or continue
        const currentLineCount = state.lines.length;

        if (
          shouldSplit(config, currentLineCount) &&
          currentLineCount < MAX_LINES
        ) {
          // Plan a split
          const plan = planSplit(
            updatedLine.position,
            updatedLine.direction,
            config,
          );

          // Add shapes from the split plan
          newShapes.push(
            plan.splitShape,
            plan.rejoinShape,
            ...plan.shapesA,
            ...plan.shapesB,
          );

          // Create two child lines
          const lineA: PathLineState = {
            id: generateLineId(),
            position: updatedLine.position,
            direction: updatedLine.direction,
            cellProgress: 0,
            trail: [...updatedLine.trail],
            state: { type: "SPLIT_CHILD", plan, pathIndex: 0 },
            plannedPath: plan.pathA,
            pathIndex: 0,
            stepsSinceSplit: 0,
          };

          const lineB: PathLineState = {
            id: generateLineId(),
            position: updatedLine.position,
            direction: updatedLine.direction,
            cellProgress: 0,
            trail: [...updatedLine.trail],
            state: { type: "SPLIT_CHILD", plan, pathIndex: 1 },
            plannedPath: plan.pathB,
            pathIndex: 0,
            stepsSinceSplit: 0,
          };

          // Replace current line with two split children
          return {
            updatedLines: [],
            newLines: [lineA, lineB],
            newShapes,
          };
        } else {
          // Continue with a new segment
          const newDirection = pickNextDirection(
            updatedLine.direction,
            updatedLine.position,
          );
          const nextSegment = planNextSegment(
            updatedLine.position,
            newDirection,
          );

          updatedLine.direction = newDirection;
          updatedLine.plannedPath = nextSegment.path;
          updatedLine.pathIndex = 0;
          updatedLine.state = { type: "MOVING" };

          newShapes.push(nextSegment.endShape);
        }
      }
    } else if (updatedLine.state.type === "SPLIT_CHILD") {
      // This line is following a pre-planned split path
      // Check if we've reached the rejoin point
      const plan = updatedLine.state.plan;

      if (Grid.equals(updatedLine.position, plan.rejoinPoint)) {
        // We've reached the rejoin - this line should merge
        // Mark for removal (the other split child will also reach here)
        updatedLine.state = { type: "MERGING", mergeShape: plan.rejoinShape };
      }
    }
  }

  // Handle merging lines
  if (updatedLine.state.type === "MERGING") {
    // Check if there's another merging line at the same position
    const otherMerging = state.lines.find(
      (l) =>
        l.id !== updatedLine.id &&
        l.state.type === "MERGING" &&
        Grid.equals(l.position, updatedLine.position),
    );

    if (otherMerging) {
      // Merge: create one new line continuing from rejoin
      const newDirection = pickNextDirection(
        updatedLine.direction,
        updatedLine.position,
      );
      const nextSegment = planNextSegment(updatedLine.position, newDirection);

      const mergedLine: PathLineState = {
        id: generateLineId(),
        position: updatedLine.position,
        direction: newDirection,
        cellProgress: 0,
        trail: [...updatedLine.trail], // Keep one trail
        state: { type: "MOVING" },
        plannedPath: nextSegment.path,
        pathIndex: 0,
        stepsSinceSplit: 0,
      };

      newShapes.push(nextSegment.endShape);

      // Remove both merging lines, add merged line
      return {
        updatedLines: [],
        newLines: [mergedLine],
        newShapes,
      };
    }
  }

  return {
    updatedLines: [updatedLine],
    newLines: [],
    newShapes,
  };
}

/**
 * Get current world position of a line (interpolated).
 */
function getCurrentWorldPosition(
  line: PathLineState,
  config: SimulationConfig,
): WorldCoord {
  if (!line.plannedPath || line.pathIndex >= line.plannedPath.length) {
    return Grid.toWorld(line.position, config.cellSize);
  }

  const nextPos = line.plannedPath[line.pathIndex];
  return Grid.lerpWorld(
    line.position,
    nextPos,
    line.cellProgress,
    config.cellSize,
  );
}

/**
 * Update trail, adding new point if far enough from last.
 */
function updateTrail(
  trail: WorldCoord[],
  currentPos: WorldCoord,
  config: SimulationConfig,
): WorldCoord[] {
  const newTrail = [...trail];

  // Add point if far enough from last
  const last = newTrail[newTrail.length - 1];
  const dx = currentPos.x - last.x;
  const dy = currentPos.y - last.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist >= TRAIL_POINT_SPACING) {
    newTrail.push(currentPos);
  }

  // Trim to max length
  while (newTrail.length > config.maxTrailLength) {
    newTrail.shift();
  }

  return newTrail;
}

/**
 * Create sparks for a shape activation.
 */
function createSparks(shape: Shape, config: SimulationConfig): void {
  const worldPos = Grid.toWorld(shape.position, config.cellSize);
  const count =
    ANIMATION.sparkCount.min +
    Math.floor(
      Math.random() * (ANIMATION.sparkCount.max - ANIMATION.sparkCount.min),
    );

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed =
      ANIMATION.sparkSpeed.min +
      Math.random() * (ANIMATION.sparkSpeed.max - ANIMATION.sparkSpeed.min);
    const lifetime =
      ANIMATION.sparkLifetime.min +
      Math.random() *
        (ANIMATION.sparkLifetime.max - ANIMATION.sparkLifetime.min);

    // Pick a bright color
    const colors = [
      "rgba(255, 200, 100, 1)",
      "rgba(255, 150, 80, 1)",
      "rgba(255, 255, 150, 1)",
      "rgba(255, 100, 100, 1)",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    shape.animation.sparks.push({
      x: worldPos.x,
      y: worldPos.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      lifetime,
      maxLifetime: lifetime,
      color,
      size: 2 + Math.random() * 3,
    });
  }
}

/**
 * Activate a shape (trigger animations).
 */
function activateShape(shape: Shape, config: SimulationConfig): void {
  if (shape.activated) return;

  shape.activated = true;

  for (const effect of shape.activationEffects) {
    switch (effect) {
      case "spin": {
        // Random spin: 90deg to full double rotation
        const spinAmount =
          ANIMATION.spinRotationMin +
          Math.random() *
            (ANIMATION.spinRotationMax - ANIMATION.spinRotationMin);
        shape.animation.targetRotation = shape.animation.rotation + spinAmount;
        break;
      }
      case "pulse": {
        // Random pulse size
        const pulseAmount =
          ANIMATION.pulseScaleMin +
          Math.random() * (ANIMATION.pulseScaleMax - ANIMATION.pulseScaleMin);
        shape.animation.targetScale = pulseAmount;
        break;
      }
      case "colorShift":
        shape.animation.targetColorIntensity = 1;
        break;
      case "gradient": {
        // Pick random gradient colors and mode (outline OR fill)
        const gradients = SHAPE_GRADIENT_COLORS;
        const gradient =
          gradients[Math.floor(Math.random() * gradients.length)];
        shape.animation.gradientColors = [gradient[0], gradient[1]];
        shape.animation.gradientMode = Math.random() < 0.5 ? "outline" : "fill";
        break;
      }
      case "sparks":
        createSparks(shape, config);
        break;
    }
  }
}

/**
 * Update shape animations.
 */
function updateShapes(
  shapes: Map<string, Shape>,
  dt: number,
  config: SimulationConfig,
): Map<string, Shape> {
  const speed = config.shapeAnimationSpeed * dt;

  for (const shape of shapes.values()) {
    // Animate rotation
    shape.animation.rotation +=
      (shape.animation.targetRotation - shape.animation.rotation) * speed;

    // Animate scale (with bounce back)
    if (shape.animation.scale !== 1 || shape.animation.targetScale !== 1) {
      shape.animation.scale +=
        (shape.animation.targetScale - shape.animation.scale) * speed;
      // Bounce back to 1 after pulse
      if (
        shape.animation.targetScale > 1 &&
        shape.animation.scale > shape.animation.targetScale * 0.95
      ) {
        shape.animation.targetScale = 1;
      }
    }

    // Animate color intensity
    shape.animation.colorIntensity +=
      (shape.animation.targetColorIntensity - shape.animation.colorIntensity) *
      speed;

    // Update sparks
    shape.animation.sparks = shape.animation.sparks
      .map((spark) => ({
        ...spark,
        x: spark.x + spark.vx * dt,
        y: spark.y + spark.vy * dt,
        vy: spark.vy + 50 * dt, // slight gravity
        lifetime: spark.lifetime - dt,
      }))
      .filter((spark) => spark.lifetime > 0);
  }

  return shapes;
}

/**
 * Remove shapes that are far off-screen.
 */
function cullOffscreenShapes(
  state: SimulationState,
  config: SimulationConfig,
): SimulationState {
  const bounds = getLineBounds(state.lines, config);
  const padding = config.cameraPadding + 5; // Extra padding before culling

  const minRow = bounds.minRow - padding;
  const maxRow = bounds.maxRow + padding;
  const minCol = bounds.minCol - padding;
  const maxCol = bounds.maxCol + padding;

  const newShapes = new Map<string, Shape>();
  for (const [key, shape] of state.shapes) {
    if (Grid.isInBounds(shape.position, minRow, maxRow, minCol, maxCol)) {
      newShapes.set(key, shape);
    }
  }

  return { ...state, shapes: newShapes };
}

/**
 * Get bounding box of all line heads.
 */
function getLineBounds(
  lines: PathLineState[],
  _config: SimulationConfig,
): BoundingBox {
  if (lines.length === 0) {
    return { minRow: 0, maxRow: 0, minCol: 0, maxCol: 0 };
  }

  let minRow = Infinity;
  let maxRow = -Infinity;
  let minCol = Infinity;
  let maxCol = -Infinity;

  for (const line of lines) {
    minRow = Math.min(minRow, line.position.row);
    maxRow = Math.max(maxRow, line.position.row);
    minCol = Math.min(minCol, line.position.col);
    maxCol = Math.max(maxCol, line.position.col);
  }

  return { minRow, maxRow, minCol, maxCol };
}

/**
 * Update camera to follow lines.
 */
function updateCamera(
  state: SimulationState,
  config: SimulationConfig,
): SimulationState["camera"] {
  const camera = state.camera;

  // Track actual line head positions (from trail end, which is most accurate)
  // This keeps the line heads centered in the viewport
  let targetX = 0;
  let targetY = 0;

  if (state.lines.length > 0) {
    // Average position of all line heads
    for (const line of state.lines) {
      const headPos =
        line.trail.length > 0
          ? line.trail[line.trail.length - 1]
          : Grid.toWorld(line.position, config.cellSize);
      targetX += headPos.x;
      targetY += headPos.y;
    }
    targetX /= state.lines.length;
    targetY /= state.lines.length;
  }

  const targetPos = { x: targetX, y: targetY };

  // Calculate zoom based on spread of line heads
  const bounds = getLineBounds(state.lines, config);
  const spreadRow = bounds.maxRow - bounds.minRow + config.cameraPadding * 2;
  const spreadCol = bounds.maxCol - bounds.minCol + config.cameraPadding * 2;
  const maxSpread = Math.max(spreadRow, spreadCol, 3);
  const targetZoom = Math.max(config.baseZoom / (maxSpread / 5), 0.8);

  // Smooth camera movement using exponential smoothing
  const smooth = config.cameraSmoothing;

  // Calculate deltas
  const dx = targetPos.x - camera.position.x;
  const dy = targetPos.y - camera.position.y;

  // Use consistent smoothing for predictable movement
  // Higher factor = faster catch-up, but still smooth
  const posSmooth = smooth * 1.5;

  return {
    position: {
      x: camera.position.x + dx * posSmooth,
      y: camera.position.y + dy * posSmooth,
    },
    targetPosition: targetPos,
    zoom: camera.zoom + (targetZoom - camera.zoom) * smooth * 0.5,
    targetZoom,
  };
}

/**
 * Get all shapes as an array (for rendering).
 */
export function getShapesArray(state: SimulationState): Shape[] {
  return Array.from(state.shapes.values());
}
