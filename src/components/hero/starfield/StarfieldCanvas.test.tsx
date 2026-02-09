/**
 * Tests for StarfieldCanvas component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { StarfieldCanvas } from "./StarfieldCanvas";

describe("StarfieldCanvas", () => {
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

    // Mock getContext
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      scale: vi.fn(),
      clearRect: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      createRadialGradient: vi.fn(() => ({
        addColorStop: vi.fn(),
      })),
      globalAlpha: 1,
      fillStyle: "",
      globalCompositeOperation: "source-over",
    } as unknown as CanvasRenderingContext2D);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders canvas element with proper accessibility", () => {
    render(<StarfieldCanvas />);
    const canvas = screen.getByRole("img", { name: /starfield/i });
    expect(canvas).toBeInTheDocument();
    expect(canvas.tagName).toBe("CANVAS");
  });

  it("starts animation on mount", () => {
    render(<StarfieldCanvas />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("cleans up animation on unmount", () => {
    const { unmount } = render(<StarfieldCanvas />);
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<StarfieldCanvas className="custom-class" />);
    const canvas = screen.getByRole("img", { name: /starfield/i });
    expect(canvas).toHaveClass("custom-class");
  });

  it("respects paused prop", async () => {
    const { rerender } = render(<StarfieldCanvas paused />);

    // Animation should still be requested but not update state
    expect(window.requestAnimationFrame).toHaveBeenCalled();

    // Unpause and verify animation continues
    rerender(<StarfieldCanvas paused={false} />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("handles resize events", () => {
    render(<StarfieldCanvas />);

    // Trigger resize
    window.dispatchEvent(new Event("resize"));

    // Canvas should reconfigure
    expect(
      HTMLCanvasElement.prototype.getBoundingClientRect,
    ).toHaveBeenCalled();
  });
});
