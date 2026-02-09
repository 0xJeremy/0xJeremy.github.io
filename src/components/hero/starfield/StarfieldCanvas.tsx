/**
 * StarfieldCanvas Component
 *
 * A canvas-based animated starfield with warp-speed parallax effect.
 * Stars stream outward from a focal point, creating depth through layered movement.
 *
 * Features:
 * - Multi-layer parallax for depth perception
 * - Configurable star count, velocity, and colors
 * - Accent-colored stars for visual interest
 * - Handles canvas resize and DPR scaling
 *
 * Performance:
 * - Uses requestAnimationFrame for smooth 60fps animation
 * - Can be paused via `paused` prop during transitions
 * - State reset when significant config changes
 *
 * Usage:
 * - Used by HeroAnimationOrchestrator
 * - Can be used standalone with custom config
 */

import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import type {
  StarfieldState,
  StarfieldConfig,
} from "@/lib/heroAnimations/types";
import {
  createStarfieldState,
  updateStarfield,
  renderStarfield,
  resizeStarfield,
} from "@/lib/heroAnimations/starfieldSimulation";

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

export interface StarfieldCanvasProps {
  /** Optional configuration overrides */
  config?: Partial<StarfieldConfig>;
  /** Whether the animation is paused */
  paused?: boolean;
  /** Opacity for transitions (0-1) */
  opacity?: number;
  /** CSS class name */
  className?: string;
}

export const StarfieldCanvas = ({
  config,
  paused = false,
  opacity = 1,
  className,
}: StarfieldCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<StarfieldState | null>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Initialize canvas with proper DPR
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    return { width: rect.width, height: rect.height, ctx };
  }, []);

  // Animation loop
  const animate = useCallback(
    (currentTime: number) => {
      if (paused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Calculate delta time
      const deltaTime = lastTimeRef.current
        ? currentTime - lastTimeRef.current
        : 16;
      lastTimeRef.current = currentTime;

      // Get display dimensions
      const rect = canvas.getBoundingClientRect();

      // Initialize state if needed
      if (!stateRef.current) {
        stateRef.current = createStarfieldState(
          rect.width,
          rect.height,
          config,
        );
      }

      // Update simulation
      stateRef.current = updateStarfield(stateRef.current, deltaTime, config);

      // Clear and render
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.globalAlpha = opacity;
      renderStarfield(ctx, stateRef.current, config);
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    },
    [config, paused, opacity],
  );

  // Handle resize
  const handleResize = useCallback(() => {
    const setup = setupCanvas();
    if (!setup) return;

    if (stateRef.current) {
      stateRef.current = resizeStarfield(
        stateRef.current,
        setup.width,
        setup.height,
      );
    }
  }, [setupCanvas]);

  // Initialize and start animation
  useEffect(() => {
    setupCanvas();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [setupCanvas, animate]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Reset state when config changes significantly
  useEffect(() => {
    stateRef.current = null;
  }, [config?.starCount, config?.parallaxLayers]);

  return (
    <Canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated starfield background"
    />
  );
};
