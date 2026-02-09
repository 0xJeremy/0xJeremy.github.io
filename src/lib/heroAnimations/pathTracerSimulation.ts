/**
 * Path Tracer Simulation
 *
 * A line that draws itself through a world of shapes.
 * The camera follows the line tip, creating a journey through the space.
 */

import type {
  Vector2,
  Shape,
  PathSegment,
  Camera,
  PathTracerState,
  PathTracerConfig,
} from "./types";
import * as vec from "./vector";
import { DEFAULT_PATH_TRACER_CONFIG, PATH_TRACER_COLORS } from "./colorPalette";
import { expDecay, smoothstep } from "./easing";
import {
  generateShapes,
  generateNextDirection,
  detectShapeCollision,
  calculateSegmentLength,
} from "./pathGenerator";

// ============================================================================
// State Creation
// ============================================================================

/**
 * Create initial path tracer state.
 */
export function createPathTracerState(
  config: Partial<PathTracerConfig> = {},
): PathTracerState {
  const fullConfig = {
    ...DEFAULT_PATH_TRACER_CONFIG,
    ...config,
  } as PathTracerConfig;
  const { worldBounds } = fullConfig;

  // Start near center of world
  const startPosition: Vector2 = {
    x: worldBounds.width * 0.5,
    y: worldBounds.height * 0.5,
  };

  // Random initial direction
  const startDirection = vec.randomUnit();

  // Generate world shapes
  const shapes = generateShapes(config);

  // Initialize camera at start position
  const camera: Camera = {
    position: { ...startPosition },
    targetPosition: { ...startPosition },
    scale: 1,
    rotation: 0,
  };

  return {
    shapes,
    pathHistory: [],
    currentPosition: startPosition,
    currentDirection: startDirection,
    camera,
    lineProgress: 0,
    currentSegment: null,
    totalDistance: 0,
    worldBounds,
  };
}

// ============================================================================
// Simulation Update
// ============================================================================

/**
 * Update path tracer state for one frame.
 */
export function updatePathTracer(
  state: PathTracerState,
  deltaTime: number,
  config: Partial<PathTracerConfig> = {},
): PathTracerState {
  const fullConfig = {
    ...DEFAULT_PATH_TRACER_CONFIG,
    ...config,
  } as PathTracerConfig;

  // Cap delta time to prevent jumps
  const dt = Math.min(deltaTime, 100) / 1000; // Convert to seconds

  let newState = { ...state };

  // Start a new segment if needed
  if (!newState.currentSegment) {
    newState = startNewSegment(newState, config);
  }

  // Move along current segment
  const moveDistance = fullConfig.velocity * dt;
  newState = moveAlongSegment(newState, moveDistance, config);

  // Update camera to follow
  newState = updateCamera(newState, dt, config);

  return newState;
}

/**
 * Start a new path segment.
 */
function startNewSegment(
  state: PathTracerState,
  config: Partial<PathTracerConfig>,
): PathTracerState {
  // Generate new direction
  const newDirection = generateNextDirection(
    state.currentPosition,
    state.currentDirection,
    state.shapes,
    config,
  );

  // Calculate segment length
  const length = calculateSegmentLength(config);

  // Calculate end position
  const endPosition = vec.add(
    state.currentPosition,
    vec.scale(newDirection, length),
  );

  // Wrap end position to world bounds
  const wrappedEnd = wrapPosition(endPosition, state.worldBounds);

  const segment: PathSegment = {
    start: { ...state.currentPosition },
    end: wrappedEnd,
    direction: newDirection,
    timestamp: performance.now(),
    length,
  };

  return {
    ...state,
    currentSegment: segment,
    currentDirection: newDirection,
    lineProgress: 0,
  };
}

/**
 * Move along current segment.
 */
function moveAlongSegment(
  state: PathTracerState,
  distance: number,
  config: Partial<PathTracerConfig>,
): PathTracerState {
  const fullConfig = {
    ...DEFAULT_PATH_TRACER_CONFIG,
    ...config,
  } as PathTracerConfig;

  if (!state.currentSegment) return state;

  const segment = state.currentSegment;
  const progressIncrement = distance / segment.length;
  const newProgress = state.lineProgress + progressIncrement;

  if (newProgress >= 1) {
    // Segment complete - add to history and prepare for next
    const completedSegment = { ...segment };
    let newHistory = [...state.pathHistory, completedSegment];

    // Trim history if needed
    if (newHistory.length > fullConfig.pathHistoryLength) {
      newHistory = newHistory.slice(-fullConfig.pathHistoryLength);
    }

    // Check for shape collision at endpoint
    detectShapeCollision(segment.end, state.shapes);

    return {
      ...state,
      pathHistory: newHistory,
      currentPosition: { ...segment.end },
      currentSegment: null,
      lineProgress: 0,
      totalDistance: state.totalDistance + segment.length,
    };
  }

  // Still progressing along segment
  const newPosition = vec.lerp(segment.start, segment.end, newProgress);

  return {
    ...state,
    currentPosition: newPosition,
    lineProgress: newProgress,
  };
}

/**
 * Wrap position to stay within world bounds (creates infinite world feel).
 */
function wrapPosition(
  position: Vector2,
  bounds: { width: number; height: number },
): Vector2 {
  let { x, y } = position;

  // Instead of hard wrap, use soft bounds that gently redirect
  // This prevents jarring position jumps
  const margin = 200;

  if (x < margin) x = margin;
  if (x > bounds.width - margin) x = bounds.width - margin;
  if (y < margin) y = margin;
  if (y > bounds.height - margin) y = bounds.height - margin;

  return { x, y };
}

/**
 * Update camera to smoothly follow line tip.
 */
function updateCamera(
  state: PathTracerState,
  deltaTime: number,
  config: Partial<PathTracerConfig>,
): PathTracerState {
  const fullConfig = {
    ...DEFAULT_PATH_TRACER_CONFIG,
    ...config,
  } as PathTracerConfig;
  const { cameraSmoothing, cameraLeadDistance } = fullConfig;

  // Target position is slightly ahead of line tip
  const leadOffset = vec.scale(state.currentDirection, cameraLeadDistance);
  const targetPosition = vec.add(state.currentPosition, leadOffset);

  // Smooth follow using exponential decay
  const decay = cameraSmoothing * 60; // Normalize for 60fps
  const newCameraPosition: Vector2 = {
    x: expDecay(state.camera.position.x, targetPosition.x, decay, deltaTime),
    y: expDecay(state.camera.position.y, targetPosition.y, decay, deltaTime),
  };

  return {
    ...state,
    camera: {
      ...state.camera,
      position: newCameraPosition,
      targetPosition,
    },
  };
}

// ============================================================================
// Rendering
// ============================================================================

/**
 * Render the path tracer to a canvas context.
 */
export function renderPathTracer(
  ctx: CanvasRenderingContext2D,
  state: PathTracerState,
  canvasWidth: number,
  canvasHeight: number,
  config: Partial<PathTracerConfig> = {},
): void {
  const fullConfig = {
    ...DEFAULT_PATH_TRACER_CONFIG,
    ...config,
  } as PathTracerConfig;

  // Clear canvas
  ctx.fillStyle = PATH_TRACER_COLORS.background;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Save context for camera transform
  ctx.save();

  // Apply camera transform (center camera on canvas)
  const offsetX = canvasWidth / 2 - state.camera.position.x;
  const offsetY = canvasHeight / 2 - state.camera.position.y;
  ctx.translate(offsetX, offsetY);
  ctx.scale(state.camera.scale, state.camera.scale);

  // Collect renderables with z-index
  const renderables: Array<{ z: number; render: () => void }> = [];

  // Add shapes
  for (const shape of state.shapes) {
    renderables.push({
      z: shape.zIndex,
      render: () => renderShape(ctx, shape),
    });
  }

  // Add path (z-index 0 = between background and foreground shapes)
  renderables.push({
    z: 0,
    render: () => renderPath(ctx, state, fullConfig),
  });

  // Sort by z-index and render
  renderables.sort((a, b) => a.z - b.z);
  for (const item of renderables) {
    item.render();
  }

  ctx.restore();
}

/**
 * Render a single shape.
 */
function renderShape(ctx: CanvasRenderingContext2D, shape: Shape): void {
  ctx.save();
  ctx.translate(shape.position.x, shape.position.y);
  ctx.rotate(shape.rotation);

  ctx.fillStyle = shape.color;
  ctx.strokeStyle = shape.strokeColor;
  ctx.lineWidth = 1;

  const half = shape.size / 2;

  ctx.beginPath();
  switch (shape.type) {
    case "square":
      ctx.rect(-half, -half, shape.size, shape.size);
      break;
    case "diamond":
      ctx.moveTo(0, -half);
      ctx.lineTo(half, 0);
      ctx.lineTo(0, half);
      ctx.lineTo(-half, 0);
      ctx.closePath();
      break;
    case "triangle": {
      const h = (shape.size * Math.sqrt(3)) / 2;
      ctx.moveTo(0, (-h * 2) / 3);
      ctx.lineTo(half, (h * 1) / 3);
      ctx.lineTo(-half, (h * 1) / 3);
      ctx.closePath();
      break;
    }
    case "hexagon": {
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - Math.PI / 6;
        const x = half * Math.cos(angle);
        const y = half * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      break;
    }
  }

  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/**
 * Render the path with glow effect.
 */
function renderPath(
  ctx: CanvasRenderingContext2D,
  state: PathTracerState,
  config: PathTracerConfig,
): void {
  const { pathHistory, currentSegment, lineProgress } = state;
  const totalSegments = pathHistory.length + (currentSegment ? 1 : 0);

  if (totalSegments === 0) return;

  // Render glow layer first (if enabled)
  if (config.enableGlow) {
    renderPathGlow(ctx, state, config);
  }

  // Render main path
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Draw historical segments with fade
  for (let i = 0; i < pathHistory.length; i++) {
    const segment = pathHistory[i];
    const age = pathHistory.length - i;
    const opacity = smoothstep(config.pathFadeLength, 0, age);

    if (opacity > 0.01) {
      ctx.strokeStyle = applyOpacity(config.lineColor, opacity);
      ctx.lineWidth = config.lineWidth;
      ctx.beginPath();
      ctx.moveTo(segment.start.x, segment.start.y);
      ctx.lineTo(segment.end.x, segment.end.y);
      ctx.stroke();
    }
  }

  // Draw current segment (partial)
  if (currentSegment) {
    const currentEnd = vec.lerp(
      currentSegment.start,
      currentSegment.end,
      lineProgress,
    );

    ctx.strokeStyle = config.lineColor;
    ctx.lineWidth = config.lineWidth;
    ctx.beginPath();
    ctx.moveTo(currentSegment.start.x, currentSegment.start.y);
    ctx.lineTo(currentEnd.x, currentEnd.y);
    ctx.stroke();

    // Draw line tip highlight
    renderLineTip(ctx, currentEnd, config);
  }
}

/**
 * Render path glow effect.
 */
function renderPathGlow(
  ctx: CanvasRenderingContext2D,
  state: PathTracerState,
  config: PathTracerConfig,
): void {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Outer glow
  ctx.strokeStyle = PATH_TRACER_COLORS.line.glowOuter;
  ctx.lineWidth = config.lineWidth * 8;

  for (const segment of state.pathHistory.slice(-20)) {
    ctx.beginPath();
    ctx.moveTo(segment.start.x, segment.start.y);
    ctx.lineTo(segment.end.x, segment.end.y);
    ctx.stroke();
  }

  // Inner glow
  ctx.strokeStyle = config.lineGlowColor;
  ctx.lineWidth = config.lineWidth * 4;

  for (const segment of state.pathHistory.slice(-30)) {
    ctx.beginPath();
    ctx.moveTo(segment.start.x, segment.start.y);
    ctx.lineTo(segment.end.x, segment.end.y);
    ctx.stroke();
  }
}

/**
 * Render the animated line tip.
 */
function renderLineTip(
  ctx: CanvasRenderingContext2D,
  position: Vector2,
  config: PathTracerConfig,
): void {
  // Glowing dot at line tip
  const gradient = ctx.createRadialGradient(
    position.x,
    position.y,
    0,
    position.x,
    position.y,
    config.lineWidth * 6,
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.3, config.lineColor);
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(position.x, position.y, config.lineWidth * 6, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Apply opacity to an rgba color string.
 */
function applyOpacity(color: string, opacity: number): string {
  const match = color.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
  );
  if (match) {
    const [, r, g, b, a = "1"] = match;
    const newAlpha = parseFloat(a) * opacity;
    return `rgba(${r}, ${g}, ${b}, ${newAlpha.toFixed(3)})`;
  }
  return color;
}
