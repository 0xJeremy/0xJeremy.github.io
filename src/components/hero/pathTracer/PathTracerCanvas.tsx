/**
 * PathTracerCanvas Component (Legacy)
 *
 * A canvas-based animation that draws a continuous line through geometric shapes.
 * Camera follows the line tip as it navigates through a procedurally generated world.
 *
 * Note: This is the legacy free-form path tracer. For the newer grid-based
 * version with cardinal direction movement, see PathSimulatorCanvas.
 *
 * Features:
 * - Procedurally generated shapes (squares, diamonds, triangles, hexagons)
 * - Line traces paths with smooth direction changes
 * - Camera smoothly follows with configurable lead distance
 * - Path history with fade effect for trail visualization
 *
 * Performance:
 * - Uses requestAnimationFrame for smooth animation
 * - Can be paused during transitions
 * - State reset when world bounds or shape count changes
 *
 * Usage:
 * - Used by HeroAnimationOrchestrator
 * - Can be used standalone with custom config
 */

import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import type {
  PathTracerState,
  PathTracerConfig,
} from "@/lib/heroAnimations/types";
import {
  createPathTracerState,
  updatePathTracer,
  renderPathTracer,
} from "@/lib/heroAnimations/pathTracerSimulation";

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

export interface PathTracerCanvasProps {
  /** Optional configuration overrides */
  config?: Partial<PathTracerConfig>;
  /** Whether the animation is paused */
  paused?: boolean;
  /** Opacity for transitions (0-1) */
  opacity?: number;
  /** CSS class name */
  className?: string;
}

export const PathTracerCanvas = ({
  config,
  paused = false,
  opacity = 1,
  className,
}: PathTracerCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<PathTracerState | null>(null);
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
        stateRef.current = createPathTracerState(config);
      }

      // Update simulation
      stateRef.current = updatePathTracer(stateRef.current, deltaTime, config);

      // Clear and render
      ctx.save();
      ctx.globalAlpha = opacity;
      renderPathTracer(ctx, stateRef.current, rect.width, rect.height, config);
      ctx.globalAlpha = 1;
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    },
    [config, paused, opacity],
  );

  // Handle resize
  const handleResize = useCallback(() => {
    setupCanvas();
    // Path tracer state doesn't need resize adjustment - camera handles it
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
  }, [config?.shapeCount, config?.worldBounds]);

  return (
    <Canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated path tracer background"
    />
  );
};
