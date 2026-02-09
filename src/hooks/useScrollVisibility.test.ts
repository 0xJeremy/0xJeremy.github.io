import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useScrollVisibility } from "./useScrollVisibility";

describe("useScrollVisibility", () => {
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    // Mock window.innerHeight
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 1000,
    });
    // Reset scroll position
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: originalInnerHeight,
    });
  });

  it("returns visibility 0 when at top of page", () => {
    const { result } = renderHook(() => useScrollVisibility());
    expect(result.current.visibility).toBe(0);
    expect(result.current.isVisible).toBe(false);
  });

  it("returns visibility 1 when scrolled past threshold", () => {
    // With 15% threshold and 1000px height, threshold is 150px
    Object.defineProperty(window, "scrollY", { value: 200 });

    const { result } = renderHook(() => useScrollVisibility());

    // Trigger scroll event
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.visibility).toBe(1);
    expect(result.current.isVisible).toBe(true);
  });

  it("returns partial visibility when partially scrolled", () => {
    // With 15% threshold and 1000px height, threshold is 150px
    // At 75px scroll, should be 50% visible
    Object.defineProperty(window, "scrollY", { value: 75 });

    const { result } = renderHook(() => useScrollVisibility());

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.visibility).toBe(0.5);
    expect(result.current.isVisible).toBe(true);
  });

  it("respects custom threshold", () => {
    // With 10% threshold and 1000px height, threshold is 100px
    Object.defineProperty(window, "scrollY", { value: 50 });

    const { result } = renderHook(() =>
      useScrollVisibility({ threshold: 0.1 }),
    );

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current.visibility).toBe(0.5);
  });

  it("returns full visibility when disabled", () => {
    const { result } = renderHook(() =>
      useScrollVisibility({ enabled: false }),
    );
    expect(result.current.visibility).toBe(1);
  });

  it("cleans up scroll listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useScrollVisibility());
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );

    removeEventListenerSpy.mockRestore();
  });
});
