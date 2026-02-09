/**
 * Color palettes for hero animations.
 * Derived from the design system tokens but optimized for visual appeal.
 *
 * Design philosophy:
 * - Muted, sophisticated colors that don't distract from content
 * - Subtle depth through opacity variation
 * - Rare accent pops for visual interest
 */

// ============================================================================
// Starfield Colors
// ============================================================================

/**
 * Starfield uses cool, slightly blue-tinted grays for a cosmic feel.
 * Stars have varying opacity based on depth for natural parallax.
 */
export const STARFIELD_COLORS = {
  // Primary star colors - navy theme with warm accents
  stars: [
    // Bright slate whites
    "rgba(230, 241, 255, 1)", // Light slate white
    "rgba(204, 214, 246, 1)", // Cool slate
    "rgba(255, 245, 230, 1)", // Warm white
    // Colored stars - navy theme
    "rgba(168, 178, 209, 1)", // Muted slate
    "rgba(255, 200, 150, 1)", // Warm orange-cream
    "rgba(180, 190, 230, 1)", // Soft blue-slate
    "rgba(150, 220, 255, 1)", // Cyan tint
    "rgba(255, 180, 160, 1)", // Soft coral
    // Slightly dimmer for depth
    "rgba(136, 146, 176, 0.9)", // Mid slate
    "rgba(200, 180, 160, 0.9)", // Warm muted
  ],

  // Accent colors - orange theme (#FF7F11)
  accent: "rgba(255, 127, 17, 1)", // Orange accent
  accentAlt: "rgba(100, 200, 255, 1)", // Cyan blue
  accentGold: "rgba(255, 200, 100, 1)", // Warm gold
  accentPink: "rgba(255, 160, 140, 1)", // Coral pink

  // More accent stars
  accentProbability: 0.12,

  // Background gradient for depth - deep navy
  backgroundGradient: {
    start: "rgba(2, 12, 27, 1)", // Deep navy
    mid: "rgba(10, 25, 47, 1)", // Navy
    end: "rgba(5, 15, 30, 1)", // Edge darkness
  },

  // Subtle nebula tints (very faint background color washes)
  nebulaTints: [
    "rgba(35, 53, 84, 0.04)", // Navy wash
    "rgba(50, 60, 90, 0.03)", // Slate wash
    "rgba(40, 55, 75, 0.035)", // Teal-navy wash
  ],
} as const;

// ============================================================================
// Path Tracer Colors
// ============================================================================

/**
 * Path tracer uses darker, more geometric colors.
 * Shapes should feel architectural and mysterious.
 */
export const PATH_TRACER_COLORS = {
  // Line colors - orange accent theme (#FF7F11)
  line: {
    primary: "rgba(255, 127, 17, 0.95)", // Orange accent
    glow: "rgba(255, 127, 17, 0.25)", // Soft glow
    glowOuter: "rgba(255, 127, 17, 0.1)", // Outer glow
    trail: "rgba(255, 150, 80, 0.5)", // Fading trail
  },

  // Shape colors - dark navy architectural
  shapes: [
    "rgba(17, 34, 64, 0.92)", // Navy
    "rgba(35, 53, 84, 0.88)", // Mid navy
    "rgba(48, 61, 82, 0.85)", // Slate navy
    "rgba(10, 25, 47, 0.95)", // Deep navy
    "rgba(57, 75, 99, 0.82)", // Lighter slate
  ],

  // Shape strokes - subtle edge highlights with slate tint
  shapeStroke: "rgba(136, 146, 176, 0.06)",
  shapeStrokeHighlight: "rgba(168, 178, 209, 0.1)",

  // Background
  background: "rgba(2, 12, 27, 1)",

  // Subtle grid/pattern overlay (optional enhancement)
  gridColor: "rgba(136, 146, 176, 0.02)",
} as const;

// ============================================================================
// Transition Colors
// ============================================================================

export const TRANSITION_COLORS = {
  // Fade through this color - deep navy
  fadeColor: "rgba(2, 12, 27, 1)", // Deep navy

  // Dissolve noise tint
  dissolveColor: "rgba(10, 25, 47, 0.95)",
} as const;

// ============================================================================
// Default Configurations
// ============================================================================

export const DEFAULT_STARFIELD_CONFIG = {
  starCount: 450,
  velocity: 0.55,
  colorPalette: STARFIELD_COLORS.stars,
  accentColor: STARFIELD_COLORS.accent,
  accentProbability: STARFIELD_COLORS.accentProbability,
  focalPointOffset: { x: 0, y: 0 },
  parallaxLayers: 5,
  maxStarRadius: 2.6,
  maxDepth: 1400,
  enableGlow: true,
} as const;

export const DEFAULT_PATH_TRACER_CONFIG = {
  velocity: 100,
  lineColor: PATH_TRACER_COLORS.line.primary,
  lineGlowColor: PATH_TRACER_COLORS.line.glow,
  lineWidth: 2,
  pathHistoryLength: 120,
  shapeCount: 30,
  shapeSizeRange: [50, 140] as [number, number],
  worldBounds: { width: 4000, height: 4000 },
  cameraSmoothing: 0.045,
  cameraLeadDistance: 80,
  shapeColors: PATH_TRACER_COLORS.shapes,
  shapeStrokeColor: PATH_TRACER_COLORS.shapeStroke,
  turnProbability: 0.06,
  turnAngleRange: [25, 75] as [number, number],
  minSegmentLength: 80,
  maxSegmentLength: 350,
  shapeInfluenceRadius: 200,
  enableGlow: true,
  pathFadeLength: 40,
} as const;

export const DEFAULT_TRANSITION_CONFIG = {
  type: "crossfade" as const,
  duration: 2000,
};

export const DEFAULT_SEQUENCE = {
  segments: [
    { type: "starfield" as const, duration: 12000 },
    { type: "pathTracer" as const, duration: 18000 },
  ],
  transition: DEFAULT_TRANSITION_CONFIG,
  loop: true,
};
