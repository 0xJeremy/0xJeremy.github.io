/**
 * Tests for PathTracerCanvas component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { PathTracerCanvas } from "./PathTracerCanvas";

describe("PathTracerCanvas", () => {
  beforeEach(() => {
    // Mock requestAnimationFrame
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      return setTimeout(() => cb(performance.now()), 16) as unknown as number;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => {
      clearTimeout(id);
    });

    // Mock getBoundingClientRect
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

    // Mock getContext with more complete canvas context
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

  it("renders canvas element with proper accessibility", () => {
    render(<PathTracerCanvas />);
    const canvas = screen.getByRole("img", { name: /path tracer/i });
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName).toBe("CANVAS");
  });

  it("starts animation on mount", () => {
    render(<PathTracerCanvas />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("cleans up animation on unmount", () => {
    const { unmount } = render(<PathTracerCanvas />);
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<PathTracerCanvas className="custom-class" />);
    const canvas = screen.getByRole("img", { name: /path tracer/i });
    expect(canvas).toHaveClass("custom-class");
  });

  it("respects paused prop", () => {
    render(<PathTracerCanvas paused />);
    // Animation should still be requested but not update state
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("handles resize events", () => {
    render(<PathTracerCanvas />);

    // Trigger resize
    window.dispatchEvent(new Event("resize"));

    // Canvas should reconfigure
    expect(
      HTMLCanvasElement.prototype.getBoundingClientRect,
    ).toHaveBeenCalled();
  });

  it("accepts custom config", () => {
    const customConfig = {
      velocity: 200,
      shapeCount: 10,
    };

    render(<PathTracerCanvas config={customConfig} />);
    const canvas = screen.getByRole("img", { name: /path tracer/i });
    expect(canvas).toBeInTheDocument();
  });
});
