/**
 * FullscreenLightbox Component
 *
 * A fullscreen image viewer overlay with navigation controls.
 * Renders as a portal to ensure it overlays all other content.
 *
 * Features:
 * - Full-viewport dark backdrop
 * - Centered image with object-fit: contain (never crops)
 * - X button in top-right corner to close
 * - Left/right arrow buttons for navigation
 * - Thumbnail carousel at bottom (when multiple images)
 * - Click outside image to close
 * - Keyboard support: arrows to navigate, Escape to close
 *
 * Usage:
 * - Rendered by ImageViewer when user clicks the main image
 * - Controls its own navigation state via callbacks
 */

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { ProjectImage } from "@/content/projects";
import { ImageCarousel } from "./ImageCarousel";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
  animation: fadeIn var(--transition-fast) ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: var(--spacing-md);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-800);
  border-radius: var(--radius-full);
  color: var(--color-text);
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
  z-index: 10;

  &:hover {
    background: var(--color-gray-700);
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    top: var(--spacing-md);
    right: var(--spacing-md);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: calc(100vh - 160px);
  position: relative;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-height: calc(100dvh - 140px);
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius-md);
  user-select: none;
`;

const NavButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === "prev" ? "left: 0;" : "right: 0;")}
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-800);
  border-radius: var(--radius-full);
  color: var(--color-text);
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
  z-index: 5;

  &:hover {
    background: var(--color-gray-700);
    transform: translateY(-50%) scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    &:hover {
      transform: translateY(-50%);
      background: var(--color-gray-800);
    }
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 40px;
    height: 40px;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: var(--spacing-lg);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: var(--spacing-md);
  }
`;

const Counter = styled.div`
  position: absolute;
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    bottom: var(--spacing-md);
    left: var(--spacing-md);
  }
`;

/** SVG icons for buttons */
const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="4" y1="4" x2="16" y2="16" />
    <line x1="16" y1="4" x2="4" y2="16" />
  </svg>
);

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export interface FullscreenLightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export const FullscreenLightbox = ({
  images,
  currentIndex,
  onIndexChange,
  onClose,
}: FullscreenLightboxProps) => {
  const currentImage = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;
  const hasMultiple = images.length > 1;

  const goToPrev = useCallback(() => {
    if (hasPrev) {
      onIndexChange(currentIndex - 1);
    }
  }, [hasPrev, currentIndex, onIndexChange]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      onIndexChange(currentIndex + 1);
    }
  }, [hasNext, currentIndex, onIndexChange]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrev();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goToPrev, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close only if clicking the overlay itself, not children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <CloseButton onClick={onClose} aria-label="Close image viewer">
        <CloseIcon />
      </CloseButton>

      <ImageContainer>
        {hasMultiple && (
          <NavButton
            $direction="prev"
            onClick={goToPrev}
            disabled={!hasPrev}
            aria-label="Previous image"
          >
            <ChevronIcon direction="left" />
          </NavButton>
        )}

        <MainImage
          src={currentImage.url}
          alt={currentImage.alt}
          draggable={false}
        />

        {hasMultiple && (
          <NavButton
            $direction="next"
            onClick={goToNext}
            disabled={!hasNext}
            aria-label="Next image"
          >
            <ChevronIcon direction="right" />
          </NavButton>
        )}
      </ImageContainer>

      {hasMultiple && (
        <CarouselWrapper>
          <ImageCarousel
            images={images}
            currentIndex={currentIndex}
            onSelect={onIndexChange}
          />
        </CarouselWrapper>
      )}

      {hasMultiple && (
        <Counter>
          {currentIndex + 1} / {images.length}
        </Counter>
      )}
    </Overlay>,
    document.body,
  );
};
