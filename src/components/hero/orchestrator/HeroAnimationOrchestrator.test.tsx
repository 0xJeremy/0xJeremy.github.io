/**
 * Tests for HeroAnimationOrchestrator component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import {
  HeroAnimationOrchestrator,
  PRESET_CONTEMPLATIVE,
  PRESET_STARFIELD_ONLY,
} from "./HeroAnimationOrchestrator";
import type { HeroAnimationSequence } from "@/lib/heroAnimations/types";

describe("HeroAnimationOrchestrator", () => {
  beforeEach(() => {
    // Mock requestAnimationFrame
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      return setTimeout(() => cb(performance.now()), 16) as unknown as number;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => {
      clearTimeout(id);
    });

    // Mock performance.now for deterministic timing
    let mockTime = 0;
    vi.spyOn(performance, "now").mockImplementation(() => mockTime++);

    // Mock canvas APIs
    vi.spyOn(
      HTMLCanvasElement.prototype,
      "getBoundingClientRect",
    ).mockReturnValue({
      width: 800,
      height: 600,
      top: 0,
      left: 0,
      bottom: 600,
      right: 800,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      scale: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
      clearRect: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      arc: vi.fn(),
      rect: vi.fn(),
      closePath: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      translate: vi.fn(),
      rotate: vi.fn(),
      createRadialGradient: vi.fn(() => ({
        addColorStop: vi.fn(),
      })),
      globalAlpha: 1,
      fillStyle: "",
      strokeStyle: "",
      lineWidth: 1,
      lineCap: "butt",
      lineJoin: "miter",
      globalCompositeOperation: "source-over",
    } as unknown as CanvasRenderingContext2D);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders container with test id", () => {
    render(<HeroAnimationOrchestrator />);
    expect(
      screen.getByTestId("hero-animation-orchestrator"),
    ).toBeInTheDocument();
  });

  it("renders with default sequence", () => {
    render(<HeroAnimationOrchestrator />);
    // Should show starfield initially (first in default sequence)
    expect(screen.getByRole("img", { name: /starfield/i })).toBeInTheDocument();
  });

  it("renders with custom sequence", () => {
    render(<HeroAnimationOrchestrator sequence={PRESET_STARFIELD_ONLY} />);
    expect(screen.getByRole("img", { name: /starfield/i })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<HeroAnimationOrchestrator className="custom-class" />);
    expect(screen.getByTestId("hero-animation-orchestrator")).toHaveClass(
      "custom-class",
    );
  });

  it("accepts preset configurations", () => {
    const { rerender } = render(
      <HeroAnimationOrchestrator sequence={PRESET_CONTEMPLATIVE} />,
    );
    expect(
      screen.getByTestId("hero-animation-orchestrator"),
    ).toBeInTheDocument();

    rerender(<HeroAnimationOrchestrator sequence={PRESET_STARFIELD_ONLY} />);
    expect(
      screen.getByTestId("hero-animation-orchestrator"),
    ).toBeInTheDocument();
  });

  it("cleans up animation frames on unmount", () => {
    const { unmount } = render(<HeroAnimationOrchestrator />);
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it("accepts config overrides for individual animations", () => {
    render(
      <HeroAnimationOrchestrator
        starfieldConfig={{ velocity: 0.5, starCount: 300 }}
        pathTracerConfig={{ velocity: 150, shapeCount: 20 }}
      />,
    );
    expect(
      screen.getByTestId("hero-animation-orchestrator"),
    ).toBeInTheDocument();
  });

  it("handles non-looping sequences", () => {
    const nonLoopingSequence: HeroAnimationSequence = {
      segments: [
        { type: "starfield", duration: 1000 },
        { type: "pathTracer", duration: 1000 },
      ],
      transition: { type: "crossfade", duration: 500 },
      loop: false,
    };

    render(<HeroAnimationOrchestrator sequence={nonLoopingSequence} />);
    expect(
      screen.getByTestId("hero-animation-orchestrator"),
    ).toBeInTheDocument();
  });
});
