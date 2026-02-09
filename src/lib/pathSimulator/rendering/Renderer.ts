/**
 * Canvas renderer for the path simulator.
 */

import type {
  SimulationState,
  SimulationConfig,
  Shape,
  WorldCoord,
  PathLineState,
} from "../core/types";
import { DEFAULT_CONFIG, SHAPE_SIZE_RATIO } from "../core/constants";
import * as Grid from "../core/GridCoord";
import { getShapesArray } from "../simulation/Simulation";

/**
 * Render the entire simulation to a canvas.
 */
export function render(
  ctx: CanvasRenderingContext2D,
  state: SimulationState,
  canvasWidth: number,
  canvasHeight: number,
  config: Partial<SimulationConfig> = {},
): void {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };

  // Clear canvas
  ctx.fillStyle = fullConfig.backgroundColor;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Save context for camera transform
  ctx.save();

  // Apply camera transform
  const { position: camPos, zoom } = state.camera;
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.scale(zoom, zoom);
  ctx.translate(-camPos.x, -camPos.y);

  // Render grid dots
  renderGrid(ctx, state, canvasWidth, canvasHeight, fullConfig);

  // Render shapes
  const shapes = getShapesArray(state);
  for (const shape of shapes) {
    renderShape(ctx, shape, fullConfig);
  }

  // Render line trails
  for (const line of state.lines) {
    renderLineTrail(ctx, line, fullConfig);
  }

  // Render line heads (on top)
  for (const line of state.lines) {
    renderLineHead(ctx, line, fullConfig);
  }

  // Render sparks (on top of everything)
  for (const shape of shapes) {
    renderSparks(ctx, shape);
  }

  ctx.restore();
}

/**
 * Render grid dots.
 */
function renderGrid(
  ctx: CanvasRenderingContext2D,
  state: SimulationState,
  canvasWidth: number,
  canvasHeight: number,
  config: SimulationConfig,
): void {
  const { cellSize, gridDotColor, gridDotSize } = config;
  const { position: camPos, zoom } = state.camera;

  // Calculate visible grid range
  const halfWidth = canvasWidth / 2 / zoom;
  const halfHeight = canvasHeight / 2 / zoom;

  const minX = camPos.x - halfWidth - cellSize;
  const maxX = camPos.x + halfWidth + cellSize;
  const minY = camPos.y - halfHeight - cellSize;
  const maxY = camPos.y + halfHeight + cellSize;

  // Grid cell boundaries
  const startCol = Math.floor(minX / cellSize);
  const endCol = Math.ceil(maxX / cellSize);
  const startRow = Math.floor(minY / cellSize);
  const endRow = Math.ceil(maxY / cellSize);

  ctx.fillStyle = gridDotColor;

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      const x = col * cellSize + cellSize / 2;
      const y = row * cellSize + cellSize / 2;

      ctx.beginPath();
      ctx.arc(x, y, gridDotSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

/**
 * Create a shape path for reuse.
 */
function drawShapePath(
  ctx: CanvasRenderingContext2D,
  type: Shape["type"],
  size: number,
): void {
  const half = size / 2;
  ctx.beginPath();

  switch (type) {
    case "square":
      ctx.rect(-half, -half, size, size);
      break;
    case "diamond":
      ctx.moveTo(0, -half);
      ctx.lineTo(half, 0);
      ctx.lineTo(0, half);
      ctx.lineTo(-half, 0);
      ctx.closePath();
      break;
    case "triangle": {
      const h = (size * Math.sqrt(3)) / 2;
      ctx.moveTo(0, (-h * 2) / 3);
      ctx.lineTo(half, h / 3);
      ctx.lineTo(-half, h / 3);
      ctx.closePath();
      break;
    }
  }
}

/**
 * Render a shape.
 */
function renderShape(
  ctx: CanvasRenderingContext2D,
  shape: Shape,
  config: SimulationConfig,
): void {
  const worldPos = Grid.toWorld(shape.position, config.cellSize);
  const baseSize = config.cellSize * SHAPE_SIZE_RATIO;
  const size = baseSize * shape.animation.scale;
  const rotation = shape.baseRotation + shape.animation.rotation;

  ctx.save();
  ctx.translate(worldPos.x, worldPos.y);
  ctx.rotate(rotation);

  // Interpolate color based on activation
  const intensity = shape.animation.colorIntensity;
  const baseColor = parseColor(config.shapeColor);
  const activeColor = parseColor(config.shapeActivatedColor);
  const color = lerpColor(baseColor, activeColor, intensity);

  // Check if we have a gradient effect
  const hasGradient =
    shape.animation.gradientColors &&
    shape.animation.gradientMode &&
    intensity > 0;

  if (hasGradient && shape.animation.gradientMode === "outline") {
    // OUTLINE GRADIENT MODE - gradient on stroke, solid fill
    const [color1, color2] = shape.animation.gradientColors!;
    const outlineSize = size * 1.15;

    // Create animated gradient (rotates over time)
    const angle = shape.animation.rotation * 2;
    const gradX = Math.cos(angle) * outlineSize;
    const gradY = Math.sin(angle) * outlineSize;

    const gradient = ctx.createLinearGradient(-gradX, -gradY, gradX, gradY);
    gradient.addColorStop(0, applyAlpha(color1, intensity));
    gradient.addColorStop(0.5, applyAlpha(color2, intensity));
    gradient.addColorStop(1, applyAlpha(color1, intensity));

    // Add glow effect
    ctx.shadowColor = color1;
    ctx.shadowBlur = 15 * intensity;

    // Draw larger outline shape
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 4 + intensity * 4;
    drawShapePath(ctx, shape.type, outlineSize);
    ctx.stroke();

    // Main shape fill (solid)
    ctx.shadowBlur = 0;
    ctx.fillStyle = colorToString(color);
    drawShapePath(ctx, shape.type, size);
    ctx.fill();
  } else if (hasGradient && shape.animation.gradientMode === "fill") {
    // FILL GRADIENT MODE - gradient on fill, subtle outline
    const [color1, color2] = shape.animation.gradientColors!;

    // Create animated gradient (rotates over time)
    const angle = shape.animation.rotation * 2;
    const gradX = Math.cos(angle) * size;
    const gradY = Math.sin(angle) * size;

    const gradient = ctx.createLinearGradient(-gradX, -gradY, gradX, gradY);
    gradient.addColorStop(0, applyAlpha(color1, intensity));
    gradient.addColorStop(0.5, applyAlpha(color2, intensity));
    gradient.addColorStop(1, applyAlpha(color1, intensity));

    // Add glow effect
    ctx.shadowColor = color1;
    ctx.shadowBlur = 20 * intensity;

    // Draw gradient-filled shape
    ctx.fillStyle = gradient;
    drawShapePath(ctx, shape.type, size);
    ctx.fill();

    // Subtle white outline
    ctx.shadowBlur = 0;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + intensity * 0.3})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else {
    // NO GRADIENT - use standard color fill
    ctx.fillStyle = colorToString(color);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + intensity * 0.3})`;
    ctx.lineWidth = 1.5 + intensity * 1;

    drawShapePath(ctx, shape.type, size);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

/**
 * Render sparks for a shape.
 */
function renderSparks(ctx: CanvasRenderingContext2D, shape: Shape): void {
  for (const spark of shape.animation.sparks) {
    const alpha = spark.lifetime / spark.maxLifetime;

    // Glow
    ctx.fillStyle = applyAlpha(spark.color, alpha * 0.5);
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, spark.size * 2, 0, Math.PI * 2);
    ctx.fill();

    // Core
    ctx.fillStyle = applyAlpha(spark.color, alpha);
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
    ctx.fill();

    // Bright center
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, spark.size * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Render a line's trail.
 */
function renderLineTrail(
  ctx: CanvasRenderingContext2D,
  line: PathLineState,
  config: SimulationConfig,
): void {
  const { trail } = line;
  if (trail.length < 2) return;

  const { lineColor, lineGlowColor, lineWidth } = config;

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Draw outer glow (full path)
  ctx.strokeStyle = lineGlowColor;
  ctx.lineWidth = lineWidth * 5;
  ctx.globalAlpha = 0.25;
  drawTrailPath(ctx, trail);

  // Draw inner glow (full path)
  ctx.lineWidth = lineWidth * 2.5;
  ctx.globalAlpha = 0.4;
  drawTrailPath(ctx, trail);

  // Draw main trail as continuous gradient
  // Use canvas gradient from trail start to end
  ctx.globalAlpha = 1;
  ctx.lineWidth = lineWidth;

  if (trail.length >= 2) {
    const startPos = trail[0];
    const endPos = trail[trail.length - 1];

    // Create gradient along trail direction
    const gradient = ctx.createLinearGradient(
      startPos.x,
      startPos.y,
      endPos.x,
      endPos.y,
    );
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(0.3, applyAlpha(lineColor, 0.3));
    gradient.addColorStop(0.7, applyAlpha(lineColor, 0.8));
    gradient.addColorStop(1, lineColor);

    ctx.strokeStyle = gradient;
    drawTrailPath(ctx, trail);
  }
}

/**
 * Draw trail as a continuous path.
 */
function drawTrailPath(
  ctx: CanvasRenderingContext2D,
  trail: WorldCoord[],
): void {
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);
  for (let i = 1; i < trail.length; i++) {
    ctx.lineTo(trail[i].x, trail[i].y);
  }
  ctx.stroke();
}

/**
 * Render a line's head (glowing dot).
 */
function renderLineHead(
  ctx: CanvasRenderingContext2D,
  line: PathLineState,
  config: SimulationConfig,
): void {
  const { trail } = line;
  if (trail.length === 0) return;

  const headPos = trail[trail.length - 1];
  const { lineColor, lineWidth } = config;

  // Outer glow
  const gradient = ctx.createRadialGradient(
    headPos.x,
    headPos.y,
    0,
    headPos.x,
    headPos.y,
    lineWidth * 8,
  );
  gradient.addColorStop(0, applyAlpha(lineColor, 0.8));
  gradient.addColorStop(0.3, applyAlpha(lineColor, 0.4));
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(headPos.x, headPos.y, lineWidth * 8, 0, Math.PI * 2);
  ctx.fill();

  // Bright core
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.beginPath();
  ctx.arc(headPos.x, headPos.y, lineWidth * 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Colored ring
  ctx.fillStyle = lineColor;
  ctx.beginPath();
  ctx.arc(headPos.x, headPos.y, lineWidth * 2.5, 0, Math.PI * 2);
  ctx.fill();

  // White center
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.beginPath();
  ctx.arc(headPos.x, headPos.y, lineWidth, 0, Math.PI * 2);
  ctx.fill();
}

// ============================================================================
// Color utilities
// ============================================================================

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

function parseColor(color: string): RGBA {
  const match = color.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
  );
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
      a: match[4] ? parseFloat(match[4]) : 1,
    };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

function colorToString(color: RGBA): string {
  return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${color.a})`;
}

function lerpColor(a: RGBA, b: RGBA, t: number): RGBA {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
    a: a.a + (b.a - a.a) * t,
  };
}

function applyAlpha(color: string, alpha: number): string {
  const parsed = parseColor(color);
  return colorToString({ ...parsed, a: parsed.a * alpha });
}
