/**
 * BrainsBrainCanvas - React component for Brian's Brain cellular automaton.
 *
 * Renders the simulation on a canvas element, managing the animation loop
 * and responding to container size changes.
 *
 * Features:
 * - Auto-sizes grid to fill container
 * - Device pixel ratio handling for crisp rendering
 * - Configurable tick rate and colors
 * - Glow effects on alive cells
 *
 * Usage:
 * - Use as hero section background
 * - Configure via `config` prop
 * - Pause during transitions with `paused` prop
 */

import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import type { BrainConfig, BrainState } from "@/lib/briansBrain";
import {
  DEFAULT_CONFIG,
  createBrainState,
  tick,
  renderWithGlow,
} from "@/lib/briansBrain";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;

export interface BrainsBrainCanvasProps {
  /** Override default configuration */
  config?: Partial<BrainConfig>;
  /** Whether the simulation is paused */
  paused?: boolean;
}

export const BrainsBrainCanvas = ({
  config = {},
  paused = false,
}: BrainsBrainCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<BrainState | null>(null);
  const animationRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);
  const configRef = useRef<BrainConfig>({ ...DEFAULT_CONFIG, ...config });

  // Update config ref when props change
  useEffect(() => {
    configRef.current = { ...DEFAULT_CONFIG, ...config };
  }, [config]);

  // Initialize state based on canvas size
  const initializeState = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { cellSize } = configRef.current;
    const cols = Math.ceil(canvas.width / cellSize);
    const rows = Math.ceil(canvas.height / cellSize);

    stateRef.current = createBrainState({
      ...configRef.current,
      cols,
      rows,
    });
  }, []);

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size with device pixel ratio for crisp rendering
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    // Reinitialize state with new dimensions
    initializeState();
  }, [initializeState]);

  // Animation loop
  const animate = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      const state = stateRef.current;
      if (!canvas || !state) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const { ticksPerSecond } = configRef.current;
      const tickInterval = 1000 / ticksPerSecond;

      // Check if it's time for a new tick
      if (!paused && timestamp - lastTickRef.current >= tickInterval) {
        stateRef.current = tick(state, configRef.current);
        lastTickRef.current = timestamp;
      }

      // Get display dimensions (before DPR scaling)
      const container = containerRef.current;
      const displayWidth = container?.clientWidth ?? canvas.width;
      const displayHeight = container?.clientHeight ?? canvas.height;

      // Render current state
      renderWithGlow(
        ctx,
        stateRef.current!,
        displayWidth,
        displayHeight,
        configRef.current,
      );

      animationRef.current = requestAnimationFrame(animate);
    },
    [paused],
  );

  // Setup and cleanup
  useEffect(() => {
    handleResize();

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Setup resize observer
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [handleResize, animate]);

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
    </Container>
  );
};
