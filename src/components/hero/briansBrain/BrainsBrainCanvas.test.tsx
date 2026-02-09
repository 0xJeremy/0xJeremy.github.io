/**
 * Tests for BrainsBrainCanvas component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BrainsBrainCanvas } from "./BrainsBrainCanvas";

// Mock canvas context
const mockContext = {
  fillStyle: "",
  fillRect: vi.fn(),
  shadowColor: "",
  shadowBlur: 0,
  scale: vi.fn(),
};

// Mock ResizeObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

class MockResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe = mockObserve;
  unobserve = vi.fn();
  disconnect = mockDisconnect;
}

describe("BrainsBrainCanvas", () => {
  let originalResizeObserver: typeof ResizeObserver;
  let originalRAF: typeof requestAnimationFrame;
  let originalCAF: typeof cancelAnimationFrame;

  beforeEach(() => {
    // Mock ResizeObserver
    originalResizeObserver = (globalThis as any).ResizeObserver;
    (globalThis as any).ResizeObserver =
      MockResizeObserver as unknown as typeof ResizeObserver;

    // Mock requestAnimationFrame
    originalRAF = (globalThis as any).requestAnimationFrame;
    originalCAF = (globalThis as any).cancelAnimationFrame;
    (globalThis as any).requestAnimationFrame = vi.fn((_cb) => {
      // Don't actually call the callback to prevent infinite loops in tests
      return 1;
    });
    (globalThis as any).cancelAnimationFrame = vi.fn();

    // Mock canvas getContext
    HTMLCanvasElement.prototype.getContext = vi.fn(
      () => mockContext as unknown as CanvasRenderingContext2D,
    ) as unknown as typeof HTMLCanvasElement.prototype.getContext;

    // Reset mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    (globalThis as any).ResizeObserver = originalResizeObserver;
    (globalThis as any).requestAnimationFrame = originalRAF;
    (globalThis as any).cancelAnimationFrame = originalCAF;
    cleanup();
  });

  it("renders a canvas element", () => {
    const { container } = render(<BrainsBrainCanvas />);

    const canvas = container.querySelector("canvas");
    expect(canvas).not.toBeNull();
  });

  it("starts animation loop on mount", () => {
    render(<BrainsBrainCanvas />);

    expect((globalThis as any).requestAnimationFrame).toHaveBeenCalled();
  });

  it("cancels animation on unmount", () => {
    const { unmount } = render(<BrainsBrainCanvas />);

    unmount();

    expect((globalThis as any).cancelAnimationFrame).toHaveBeenCalled();
  });

  it("sets up resize observer", () => {
    render(<BrainsBrainCanvas />);

    expect(mockObserve).toHaveBeenCalled();
  });

  it("disconnects resize observer on unmount", () => {
    const { unmount } = render(<BrainsBrainCanvas />);

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("accepts custom config", () => {
    // Should not throw
    expect(() => {
      render(
        <BrainsBrainCanvas
          config={{
            ticksPerSecond: 20,
            cellSize: 10,
            colorOn: "red",
          }}
        />,
      );
    }).not.toThrow();
  });

  it("accepts paused prop", () => {
    // Should not throw
    expect(() => {
      render(<BrainsBrainCanvas paused />);
    }).not.toThrow();
  });
});
