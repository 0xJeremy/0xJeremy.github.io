/**
 * PathSimulatorCanvas Component
 *
 * A canvas-based grid simulation where lines move in cardinal directions,
 * split at shapes, and rejoin. Camera smoothly tracks the line heads.
 *
 * Features:
 * - Grid-based movement in 4 cardinal directions
 * - Line splitting and rejoining at shape nodes
 * - Smooth camera follow with configurable tracking
 * - Glowing trail with fade effect
 * - Shape activation effects (spin, pulse, gradients, sparks)
 *
 * Performance:
 * - Uses requestAnimationFrame for smooth animation
 * - Can be paused during transitions
 * - State reset when significant config changes
 *
 * Usage:
 * - Used as hero section background
 * - Can be configured via props
 */

import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import type { SimulationState, SimulationConfig } from "@/lib/pathSimulator";
import {
  createSimulation,
  updateSimulation,
  render,
} from "@/lib/pathSimulator";

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

export interface PathSimulatorCanvasProps {
  /** Optional configuration overrides */
  config?: Partial<SimulationConfig>;
  /** Whether the animation is paused */
  paused?: boolean;
  /** CSS class name */
  className?: string;
}

export const PathSimulatorCanvas = ({
  config,
  paused = false,
  className,
}: PathSimulatorCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<SimulationState | null>(null);
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
        lastTimeRef.current = currentTime;
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
        stateRef.current = createSimulation(config);
      }

      // Update simulation
      stateRef.current = updateSimulation(stateRef.current, deltaTime, config);

      // Render
      render(ctx, stateRef.current, rect.width, rect.height, config);

      animationRef.current = requestAnimationFrame(animate);
    },
    [config, paused],
  );

  // Handle resize
  const handleResize = useCallback(() => {
    setupCanvas();
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
  }, [config?.cellSize, config?.lineSpeed]);

  return (
    <Canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Animated path tracer background"
    />
  );
};
