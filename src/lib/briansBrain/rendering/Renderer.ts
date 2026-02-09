/**
 * Canvas renderer for Brian's Brain.
 *
 * Optimized for performance:
 * - Only redraws changed cells when possible
 * - Uses fillRect for fast cell rendering
 * - Minimizes context state changes
 */

import { CellState, type BrainConfig, type BrainState } from "../core/types";
import { DEFAULT_CONFIG } from "../core/constants";

/**
 * Render the entire grid to a canvas.
 */
export function render(
  ctx: CanvasRenderingContext2D,
  state: BrainState,
  canvasWidth: number,
  canvasHeight: number,
  config: Partial<BrainConfig> = {},
): void {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { cellSize, colorOff, colorOn, colorDying } = fullConfig;
  const { grid, cols, rows } = state;

  // Calculate offset to center the grid
  const gridWidth = cols * cellSize;
  const gridHeight = rows * cellSize;
  const offsetX = Math.max(0, (canvasWidth - gridWidth) / 2);
  const offsetY = Math.max(0, (canvasHeight - gridHeight) / 2);

  // Clear canvas with background color
  ctx.fillStyle = colorOff;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Batch render by state for fewer context switches
  // First pass: DYING cells
  ctx.fillStyle = colorDying;
  for (let row = 0; row < rows; row++) {
    const rowOffset = row * cols;
    const y = offsetY + row * cellSize;

    for (let col = 0; col < cols; col++) {
      if (grid[rowOffset + col] === CellState.DYING) {
        const x = offsetX + col * cellSize;
        ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }

  // Second pass: ON cells (on top)
  ctx.fillStyle = colorOn;
  for (let row = 0; row < rows; row++) {
    const rowOffset = row * cols;
    const y = offsetY + row * cellSize;

    for (let col = 0; col < cols; col++) {
      if (grid[rowOffset + col] === CellState.ON) {
        const x = offsetX + col * cellSize;
        ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }
}

/**
 * Render with glow effects for ON cells (more visually appealing but slower).
 */
export function renderWithGlow(
  ctx: CanvasRenderingContext2D,
  state: BrainState,
  canvasWidth: number,
  canvasHeight: number,
  config: Partial<BrainConfig> = {},
): void {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { cellSize, colorOff, colorOn, colorDying } = fullConfig;
  const { grid, cols, rows } = state;

  // Calculate offset to center the grid
  const gridWidth = cols * cellSize;
  const gridHeight = rows * cellSize;
  const offsetX = Math.max(0, (canvasWidth - gridWidth) / 2);
  const offsetY = Math.max(0, (canvasHeight - gridHeight) / 2);

  // Clear canvas
  ctx.fillStyle = colorOff;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Render DYING cells first (underneath)
  ctx.fillStyle = colorDying;
  for (let row = 0; row < rows; row++) {
    const rowOffset = row * cols;
    const y = offsetY + row * cellSize;

    for (let col = 0; col < cols; col++) {
      if (grid[rowOffset + col] === CellState.DYING) {
        const x = offsetX + col * cellSize;
        ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }

  // Render ON cells with glow
  ctx.shadowColor = colorOn;
  ctx.shadowBlur = cellSize * 0.8;
  ctx.fillStyle = colorOn;

  for (let row = 0; row < rows; row++) {
    const rowOffset = row * cols;
    const y = offsetY + row * cellSize;

    for (let col = 0; col < cols; col++) {
      if (grid[rowOffset + col] === CellState.ON) {
        const x = offsetX + col * cellSize;
        ctx.fillRect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }

  // Reset shadow
  ctx.shadowBlur = 0;
}

/**
 * Get grid coordinates from canvas coordinates.
 */
export function canvasToGrid(
  canvasX: number,
  canvasY: number,
  canvasWidth: number,
  canvasHeight: number,
  state: BrainState,
  config: Partial<BrainConfig> = {},
): { row: number; col: number } | null {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { cellSize } = fullConfig;
  const { cols, rows } = state;

  const gridWidth = cols * cellSize;
  const gridHeight = rows * cellSize;
  const offsetX = Math.max(0, (canvasWidth - gridWidth) / 2);
  const offsetY = Math.max(0, (canvasHeight - gridHeight) / 2);

  const col = Math.floor((canvasX - offsetX) / cellSize);
  const row = Math.floor((canvasY - offsetY) / cellSize);

  if (col >= 0 && col < cols && row >= 0 && row < rows) {
    return { row, col };
  }

  return null;
}
