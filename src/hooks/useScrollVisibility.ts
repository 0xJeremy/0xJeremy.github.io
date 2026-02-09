import { useState, useEffect, useCallback } from "react";
import { NAV_SCROLL_THRESHOLD } from "@/constants/navigation";

interface UseScrollVisibilityOptions {
  /** Scroll percentage (0-1) at which element becomes fully visible */
  threshold?: number;
  /** Whether the visibility effect is enabled */
  enabled?: boolean;
}

interface UseScrollVisibilityResult {
  /** Visibility value from 0 (hidden) to 1 (fully visible) */
  visibility: number;
  /** Whether currently scrolled past threshold */
  isVisible: boolean;
  /** Current scroll position in pixels */
  scrollY: number;
}

/**
 * Hook that calculates visibility based on scroll position.
 * Returns a value from 0-1 that can be used for opacity/transform animations.
 */
export const useScrollVisibility = ({
  threshold = NAV_SCROLL_THRESHOLD,
  enabled = true,
}: UseScrollVisibilityOptions = {}): UseScrollVisibilityResult => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return () => {};
    }

    // Set initial scroll position
    setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, handleScroll]);

  // Calculate the scroll distance needed to reach full visibility
  const scrollThreshold =
    typeof window !== "undefined" ? window.innerHeight * threshold : 0;

  // Calculate visibility (0 to 1)
  const visibility = enabled
    ? Math.min(1, Math.max(0, scrollY / scrollThreshold))
    : 1;

  return {
    visibility,
    isVisible: visibility > 0,
    scrollY,
  };
};
