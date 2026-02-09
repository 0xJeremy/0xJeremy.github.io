/**
 * Starfield Warp Simulation
 *
 * Creates a subtle, sophisticated starfield effect with:
 * - Parallax depth layers for visual richness
 * - Muted color palette with rare accent stars
 * - Smooth motion with configurable velocity
 * - Glow effects for polish
 */

import type { Star, StarfieldState, StarfieldConfig } from "./types";
import { STARFIELD_COLORS, DEFAULT_STARFIELD_CONFIG } from "./colorPalette";
import { smoothstep } from "./easing";

// ============================================================================
// State Creation
// ============================================================================

/**
 * Create initial starfield state with randomly distributed stars.
 */
export function createStarfieldState(
  width: number,
  height: number,
  config: Partial<StarfieldConfig> = {},
): StarfieldState {
  const fullConfig = {
    ...DEFAULT_STARFIELD_CONFIG,
    ...config,
  } as StarfieldConfig;
  const stars: Star[] = [];

  for (let i = 0; i < fullConfig.starCount; i++) {
    stars.push(createStar(width, height, fullConfig, true));
  }

  return {
    stars,
    focalPoint: {
      x: 0.5 + fullConfig.focalPointOffset.x,
      y: 0.5 + fullConfig.focalPointOffset.y,
    },
    velocity: fullConfig.velocity,
    width,
    height,
    maxDepth: fullConfig.maxDepth,
  };
}

/**
 * Create a single star with random properties.
 * @param initialSpawn - If true, distribute z across full depth. If false, spawn at max depth.
 */
function createStar(
  width: number,
  height: number,
  config: StarfieldConfig,
  initialSpawn: boolean,
): Star {
  // Determine layer (affects parallax speed and size)
  const layer = Math.floor(Math.random() * config.parallaxLayers);
  const layerRatio = layer / (config.parallaxLayers - 1); // 0 = far, 1 = near

  // Random position in a wider spread than the canvas for warp effect
  const spread = 2.5; // Stars spawn in larger area than visible
  const originX = (Math.random() - 0.5) * width * spread;
  const originY = (Math.random() - 0.5) * height * spread;

  // Z depth - either distributed (initial) or at max (respawn)
  const z = initialSpawn
    ? Math.random() * config.maxDepth
    : config.maxDepth * (0.9 + Math.random() * 0.1);

  // Choose color - mostly from palette, with accent variety
  const isAccent = Math.random() < config.accentProbability;
  let color: string;
  if (isAccent) {
    // Pick from multiple accent colors for variety
    const accentColors = [
      config.accentColor,
      STARFIELD_COLORS.accentAlt,
      STARFIELD_COLORS.accentGold,
      STARFIELD_COLORS.accentPink,
    ];
    color = accentColors[Math.floor(Math.random() * accentColors.length)];
  } else {
    const colorIndex = Math.floor(Math.random() * config.colorPalette.length);
    color = config.colorPalette[colorIndex];
  }

  // Base radius varies by layer - near stars can be larger
  const minRadius = 1.0;
  const maxRadiusForLayer = config.maxStarRadius * (0.5 + layerRatio * 0.5);
  const baseRadius =
    minRadius + Math.random() * (maxRadiusForLayer - minRadius);

  return {
    x: 0, // Will be calculated in projection
    y: 0,
    z,
    baseRadius,
    color,
    layer,
    originX,
    originY,
  };
}

// ============================================================================
// Simulation Update
// ============================================================================

/**
 * Update starfield state for one frame.
 * Pure function - returns new state.
 */
export function updateStarfield(
  state: StarfieldState,
  deltaTime: number,
  config: Partial<StarfieldConfig> = {},
): StarfieldState {
  const fullConfig = {
    ...DEFAULT_STARFIELD_CONFIG,
    ...config,
  } as StarfieldConfig;

  // Normalize deltaTime to reasonable range (cap at 100ms to prevent jumps)
  const dt = Math.min(deltaTime, 100);

  // Base movement speed (pixels per ms at z=1000)
  const baseSpeed = state.velocity * 0.8;

  const updatedStars = state.stars.map((star) => {
    // Layer affects speed - near layers move faster
    const layerRatio = star.layer / (fullConfig.parallaxLayers - 1);
    const layerSpeedMultiplier = 0.3 + layerRatio * 0.7;

    // Move star toward camera (decrease z)
    const speed = baseSpeed * layerSpeedMultiplier * dt;
    let newZ = star.z - speed;

    // Respawn if star passes camera
    if (newZ <= 0) {
      const newStar = createStar(state.width, state.height, fullConfig, false);
      return newStar;
    }

    return { ...star, z: newZ };
  });

  return {
    ...state,
    stars: updatedStars,
  };
}

// ============================================================================
// Projection & Rendering
// ============================================================================

/**
 * Project 3D star position to 2D screen coordinates.
 */
function projectStar(
  star: Star,
  width: number,
  height: number,
  focalPoint: { x: number; y: number },
  maxDepth: number,
): { x: number; y: number; scale: number; opacity: number } {
  // Perspective division factor
  const perspective = maxDepth / (star.z + 1);

  // Project from origin position toward focal point
  const focalX = width * focalPoint.x;
  const focalY = height * focalPoint.y;

  const x = focalX + star.originX * perspective;
  const y = focalY + star.originY * perspective;

  // Scale based on depth (closer = larger)
  const scale = perspective * 0.15;

  // Opacity based on depth - fade in as star approaches, fade at very close
  const depthRatio = star.z / maxDepth;
  const fadeIn = smoothstep(0.95, 0.7, depthRatio); // Fade in from far
  const fadeOut = smoothstep(0.02, 0.1, depthRatio); // Fade out when very close
  const opacity = fadeIn * fadeOut;

  return { x, y, scale, opacity };
}

/**
 * Render the starfield to a canvas context.
 */
export function renderStarfield(
  ctx: CanvasRenderingContext2D,
  state: StarfieldState,
  config: Partial<StarfieldConfig> = {},
): void {
  const fullConfig = {
    ...DEFAULT_STARFIELD_CONFIG,
    ...config,
  } as StarfieldConfig;
  const { width, height } = state;

  // Clear with deep space gradient
  renderBackground(ctx, width, height);

  // Sort stars by z (far to near) for proper depth rendering
  const sortedStars = [...state.stars].sort((a, b) => b.z - a.z);

  // Render each star
  for (const star of sortedStars) {
    const projected = projectStar(
      star,
      width,
      height,
      state.focalPoint,
      state.maxDepth,
    );

    // Skip if off-screen or too small/transparent
    if (
      projected.x < -50 ||
      projected.x > width + 50 ||
      projected.y < -50 ||
      projected.y > height + 50 ||
      projected.opacity < 0.01 ||
      projected.scale < 0.1
    ) {
      continue;
    }

    renderStar(ctx, star, projected, fullConfig);
  }
}

/**
 * Render background with subtle gradient.
 */
function renderBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): void {
  // Radial gradient from center
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const maxRadius = Math.max(width, height) * 0.8;

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    maxRadius,
  );

  gradient.addColorStop(0, STARFIELD_COLORS.backgroundGradient.mid);
  gradient.addColorStop(0.5, STARFIELD_COLORS.backgroundGradient.start);
  gradient.addColorStop(1, STARFIELD_COLORS.backgroundGradient.end);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Optional: Add very subtle nebula color washes
  renderNebulaTints(ctx, width, height);
}

/**
 * Render subtle nebula-like color tints.
 */
function renderNebulaTints(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): void {
  ctx.globalCompositeOperation = "screen";

  STARFIELD_COLORS.nebulaTints.forEach((color, i) => {
    const x = width * (0.3 + i * 0.2);
    const y = height * (0.4 + i * 0.15);
    const radius = Math.max(width, height) * 0.5;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  });

  ctx.globalCompositeOperation = "source-over";
}

/**
 * Render a single star with optional glow.
 */
function renderStar(
  ctx: CanvasRenderingContext2D,
  star: Star,
  projected: { x: number; y: number; scale: number; opacity: number },
  config: StarfieldConfig,
): void {
  const radius = star.baseRadius * projected.scale;
  const { x, y, opacity } = projected;

  // Parse color and apply opacity
  const colorWithOpacity = applyOpacity(star.color, opacity);

  // Render glow first - MUCH stronger and on all stars
  if (config.enableGlow) {
    const glowRadius = radius * 4;
    const glowOpacity = opacity * 0.5;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
    gradient.addColorStop(0, applyOpacity(star.color, glowOpacity));
    gradient.addColorStop(0.4, applyOpacity(star.color, glowOpacity * 0.3));
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Render star core - minimum size of 1.5px
  ctx.fillStyle = colorWithOpacity;
  ctx.beginPath();
  ctx.arc(x, y, Math.max(radius, 1.5), 0, Math.PI * 2);
  ctx.fill();

  // Add bright center for all visible stars
  if (radius > 0.8) {
    const coreRadius = radius * 0.5;
    ctx.fillStyle = applyOpacity("#ffffff", opacity * 0.85);
    ctx.beginPath();
    ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Apply opacity to an rgba color string.
 */
function applyOpacity(color: string, opacity: number): string {
  // Parse rgba(r, g, b, a) format
  const match = color.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
  );
  if (match) {
    const [, r, g, b, a = "1"] = match;
    const newAlpha = parseFloat(a) * opacity;
    return `rgba(${r}, ${g}, ${b}, ${newAlpha.toFixed(3)})`;
  }
  // Fallback for hex or other formats
  return color;
}

// ============================================================================
// Resize Handler
// ============================================================================

/**
 * Update state when canvas size changes.
 */
export function resizeStarfield(
  state: StarfieldState,
  newWidth: number,
  newHeight: number,
): StarfieldState {
  // Proportionally adjust star origins based on size change
  const scaleX = newWidth / state.width;
  const scaleY = newHeight / state.height;

  const updatedStars = state.stars.map((star) => ({
    ...star,
    originX: star.originX * scaleX,
    originY: star.originY * scaleY,
  }));

  return {
    ...state,
    stars: updatedStars,
    width: newWidth,
    height: newHeight,
  };
}
