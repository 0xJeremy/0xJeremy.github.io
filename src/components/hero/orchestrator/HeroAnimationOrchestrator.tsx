/**
 * HeroAnimationOrchestrator Component
 *
 * Manages animated background sequences for hero sections.
 * Coordinates transitions between different animation types (starfield, path tracer).
 *
 * Features:
 * - Sequences multiple animation segments with configurable durations
 * - Smooth transitions: crossfade, fade-through-black, dissolve
 * - Presets available for common configurations
 * - Respects reduced-motion preferences (via canvas components)
 *
 * Transition Types:
 * - `crossfade`: Simultaneous fade out/in
 * - `fade-through-black`: Fade to black, then reveal next
 * - `dissolve`: Crossfade with slight overlap
 *
 * Usage:
 * - Pass as `media` prop to HeroViewport
 * - Use preset sequences or create custom HeroAnimationSequence
 */

import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import type {
  HeroAnimationSequence,
  TransitionState,
  StarfieldConfig,
  PathTracerConfig,
} from "@/lib/heroAnimations/types";
import { DEFAULT_SEQUENCE } from "@/lib/heroAnimations/colorPalette";
import { easeInOutCubic } from "@/lib/heroAnimations/easing";
import { StarfieldCanvas } from "../starfield";
import { PathTracerCanvas } from "../pathTracer";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0a0a0f;
`;

const AnimationLayer = styled.div<{ $opacity: number }>`
  position: absolute;
  inset: 0;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.1s linear;
`;

const FadeOverlay = styled.div<{ $opacity: number }>`
  position: absolute;
  inset: 0;
  background: #050710;
  opacity: ${(props) => props.$opacity};
  pointer-events: none;
  z-index: 10;
`;

export interface HeroAnimationOrchestratorProps {
  /** Animation sequence configuration */
  sequence?: HeroAnimationSequence;
  /** Optional starfield config overrides */
  starfieldConfig?: Partial<StarfieldConfig>;
  /** Optional path tracer config overrides */
  pathTracerConfig?: Partial<PathTracerConfig>;
  /** CSS class name */
  className?: string;
}

export const HeroAnimationOrchestrator = ({
  sequence = DEFAULT_SEQUENCE,
  starfieldConfig,
  pathTracerConfig,
  className,
}: HeroAnimationOrchestratorProps) => {
  // Current segment index in sequence
  const [currentIndex, setCurrentIndex] = useState(0);

  // Transition state
  const [transition, setTransition] = useState<TransitionState | null>(null);

  // Animation frame ref
  const animationRef = useRef<number>(0);

  // Timing refs
  const segmentStartTime = useRef<number>(performance.now());
  const transitionStartTime = useRef<number>(0);

  // Get current and next animation types
  const currentSegment = sequence.segments[currentIndex];
  const nextIndex = (currentIndex + 1) % sequence.segments.length;
  const nextSegment = sequence.segments[nextIndex];

  /**
   * Calculate opacity for each animation based on transition state.
   */
  const getAnimationOpacities = useCallback((): {
    starfield: number;
    pathTracer: number;
    fadeOverlay: number;
  } => {
    if (!transition) {
      return {
        starfield: currentSegment.type === "starfield" ? 1 : 0,
        pathTracer: currentSegment.type === "pathTracer" ? 1 : 0,
        fadeOverlay: 0,
      };
    }

    const { progress, fromAnimation, toAnimation } = transition;
    const easedProgress = easeInOutCubic(progress);

    switch (sequence.transition.type) {
      case "crossfade": {
        const fromOpacity = 1 - easedProgress;
        const toOpacity = easedProgress;
        return {
          starfield:
            fromAnimation === "starfield"
              ? fromOpacity
              : toAnimation === "starfield"
                ? toOpacity
                : 0,
          pathTracer:
            fromAnimation === "pathTracer"
              ? fromOpacity
              : toAnimation === "pathTracer"
                ? toOpacity
                : 0,
          fadeOverlay: 0,
        };
      }
      case "fade-through-black": {
        // First half: fade out current
        // Second half: fade in next
        const fadeOut = progress < 0.5;
        const fadeProgress = fadeOut ? progress * 2 : (progress - 0.5) * 2;
        const overlayOpacity = fadeOut
          ? easeInOutCubic(fadeProgress)
          : 1 - easeInOutCubic(fadeProgress);

        return {
          starfield:
            fromAnimation === "starfield" && fadeOut
              ? 1
              : toAnimation === "starfield" && !fadeOut
                ? 1
                : 0,
          pathTracer:
            fromAnimation === "pathTracer" && fadeOut
              ? 1
              : toAnimation === "pathTracer" && !fadeOut
                ? 1
                : 0,
          fadeOverlay: overlayOpacity,
        };
      }
      case "dissolve":
      default: {
        // Similar to crossfade but with slight overlap
        const fromOpacity = Math.max(0, 1 - easedProgress * 1.2);
        const toOpacity = Math.min(1, easedProgress * 1.2);
        return {
          starfield:
            fromAnimation === "starfield"
              ? fromOpacity
              : toAnimation === "starfield"
                ? toOpacity
                : 0,
          pathTracer:
            fromAnimation === "pathTracer"
              ? fromOpacity
              : toAnimation === "pathTracer"
                ? toOpacity
                : 0,
          fadeOverlay: 0,
        };
      }
    }
  }, [transition, currentSegment.type, sequence.transition.type]);

  /**
   * Main timing loop.
   */
  useEffect(() => {
    const tick = (currentTime: number) => {
      // Check if we need to start a transition
      if (!transition) {
        const elapsed = currentTime - segmentStartTime.current;

        if (elapsed >= currentSegment.duration) {
          // Start transition to next segment
          if (nextIndex === 0 && !sequence.loop) {
            // Don't loop - stay on last segment
            return;
          }

          setTransition({
            active: true,
            progress: 0,
            fromAnimation: currentSegment.type,
            toAnimation: nextSegment.type,
            startTime: currentTime,
          });
          transitionStartTime.current = currentTime;
        }
      } else {
        // Update transition progress
        const transitionElapsed = currentTime - transitionStartTime.current;
        const progress = Math.min(
          transitionElapsed / sequence.transition.duration,
          1,
        );

        if (progress >= 1) {
          // Transition complete
          setTransition(null);
          setCurrentIndex(nextIndex);
          segmentStartTime.current = currentTime;
        } else {
          setTransition((prev) => (prev ? { ...prev, progress } : null));
        }
      }

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    transition,
    currentSegment,
    nextSegment,
    nextIndex,
    sequence.loop,
    sequence.transition.duration,
  ]);

  const opacities = getAnimationOpacities();

  // Determine which animations should be active (mounted)
  // Keep both mounted during transitions for smooth blending
  const showStarfield =
    opacities.starfield > 0 ||
    (transition &&
      (transition.fromAnimation === "starfield" ||
        transition.toAnimation === "starfield"));
  const showPathTracer =
    opacities.pathTracer > 0 ||
    (transition &&
      (transition.fromAnimation === "pathTracer" ||
        transition.toAnimation === "pathTracer"));

  return (
    <Container className={className} data-testid="hero-animation-orchestrator">
      {showStarfield && (
        <AnimationLayer $opacity={opacities.starfield}>
          <StarfieldCanvas
            config={starfieldConfig}
            paused={opacities.starfield === 0}
            opacity={1}
          />
        </AnimationLayer>
      )}

      {showPathTracer && (
        <AnimationLayer $opacity={opacities.pathTracer}>
          <PathTracerCanvas
            config={pathTracerConfig}
            paused={opacities.pathTracer === 0}
            opacity={1}
          />
        </AnimationLayer>
      )}

      {sequence.transition.type === "fade-through-black" &&
        opacities.fadeOverlay > 0 && (
          <FadeOverlay $opacity={opacities.fadeOverlay} />
        )}
    </Container>
  );
};

// ============================================================================
// Preset Sequences (for easy configuration)
// ============================================================================

/** Subtle, contemplative sequence - longer durations, gentle transitions */
export const PRESET_CONTEMPLATIVE: HeroAnimationSequence = {
  segments: [
    { type: "starfield", duration: 15000 },
    { type: "pathTracer", duration: 20000 },
  ],
  transition: { type: "fade-through-black", duration: 3000 },
  loop: true,
};

/** Dynamic sequence - shorter durations, snappy transitions */
export const PRESET_DYNAMIC: HeroAnimationSequence = {
  segments: [
    { type: "starfield", duration: 8000 },
    { type: "pathTracer", duration: 10000 },
  ],
  transition: { type: "crossfade", duration: 1500 },
  loop: true,
};

/** Starfield only - no path tracer */
export const PRESET_STARFIELD_ONLY: HeroAnimationSequence = {
  segments: [{ type: "starfield", duration: 999999 }],
  transition: { type: "crossfade", duration: 1000 },
  loop: false,
};

/** Path tracer only - no starfield */
export const PRESET_PATH_TRACER_ONLY: HeroAnimationSequence = {
  segments: [{ type: "pathTracer", duration: 999999 }],
  transition: { type: "crossfade", duration: 1000 },
  loop: false,
};
