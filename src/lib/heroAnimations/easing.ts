/**
 * Easing functions for smooth animations and transitions.
 * All functions take t (0-1) and return eased value (0-1).
 */

// ============================================================================
// Standard Easing Functions
// ============================================================================

/** Linear interpolation (no easing) */
export const linear = (t: number): number => t;

/** Quadratic ease in */
export const easeInQuad = (t: number): number => t * t;

/** Quadratic ease out */
export const easeOutQuad = (t: number): number => 1 - (1 - t) * (1 - t);

/** Quadratic ease in-out */
export const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/** Cubic ease in */
export const easeInCubic = (t: number): number => t * t * t;

/** Cubic ease out */
export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

/** Cubic ease in-out */
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Quartic ease out - nice for smooth deceleration */
export const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

/** Quartic ease in-out */
export const easeInOutQuart = (t: number): number =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

/** Exponential ease out - very smooth */
export const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

/** Exponential ease in-out */
export const easeInOutExpo = (t: number): number =>
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2;

/** Sine ease in-out - very gentle */
export const easeInOutSine = (t: number): number =>
  -(Math.cos(Math.PI * t) - 1) / 2;

/** Back ease out - slight overshoot */
export const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// ============================================================================
// Interpolation Utilities
// ============================================================================

/**
 * Linear interpolation between two values.
 */
export const lerp = (start: number, end: number, t: number): number =>
  start + (end - start) * t;

/**
 * Smooth lerp with easing function.
 */
export const smoothLerp = (
  start: number,
  end: number,
  t: number,
  easingFn: (t: number) => number = easeOutQuad,
): number => lerp(start, end, easingFn(t));

/**
 * Clamp value between min and max.
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Map a value from one range to another.
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number => {
  const t = (value - inMin) / (inMax - inMin);
  return lerp(outMin, outMax, clamp(t, 0, 1));
};

/**
 * Smooth step (Hermite interpolation).
 * Returns 0 if x < edge0, 1 if x > edge1, smooth interpolation otherwise.
 */
export const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Smoother step (Ken Perlin's improved version).
 */
export const smootherstep = (
  edge0: number,
  edge1: number,
  x: number,
): number => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

// ============================================================================
// Animation-specific helpers
// ============================================================================

/**
 * Create a pulsing value that oscillates smoothly.
 * Returns value between min and max based on time.
 */
export const pulse = (
  time: number,
  frequency: number,
  min: number,
  max: number,
): number => {
  const t = (Math.sin(time * frequency * Math.PI * 2) + 1) / 2;
  return lerp(min, max, t);
};

/**
 * Damped spring interpolation for smooth following.
 * Returns new current value moving toward target.
 */
export const dampedSpring = (
  current: number,
  target: number,
  velocity: number,
  stiffness: number,
  damping: number,
  deltaTime: number,
): { value: number; velocity: number } => {
  const springForce = (target - current) * stiffness;
  const dampingForce = -velocity * damping;
  const acceleration = springForce + dampingForce;
  const newVelocity = velocity + acceleration * deltaTime;
  const newValue = current + newVelocity * deltaTime;
  return { value: newValue, velocity: newVelocity };
};

/**
 * Simple exponential decay for smooth camera following.
 */
export const expDecay = (
  current: number,
  target: number,
  decay: number,
  deltaTime: number,
): number => {
  return lerp(current, target, 1 - Math.exp(-decay * deltaTime));
};
