/**
 * ImageViewer Component
 *
 * A complete image viewing solution for project galleries.
 * Displays a main image with optional thumbnail carousel navigation.
 * Clicking the main image opens a fullscreen lightbox.
 *
 * Features:
 * - Single image: displays as-is, clickable for fullscreen
 * - Multiple images: main image + thumbnail carousel, fullscreen mode
 * - Main image uses object-fit: contain to show full image without cropping
 * - Responsive design with mobile support
 *
 * Usage:
 * - Used by ProjectDetail to display project images
 * - Pass the full images array from a project
 */

import { useState, useCallback } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { ProjectImage } from "@/content/projects";
import { getMainImage } from "@/content/projects";
import { ImageCarousel } from "./ImageCarousel";
import { FullscreenLightbox } from "./FullscreenLightbox";

const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const MainImageButton = styled.button`
  position: relative;
  width: 100%;
  padding: 0;
  border: none;
  background: var(--color-gray-800);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: zoom-in;
  transition: transform var(--transition-fast);

  &:hover {
    transform: scale(1.01);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  display: block;
  background: var(--color-gray-800);

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-height: 300px;
  }
`;

const ExpandHint = styled.div`
  position: absolute;
  bottom: var(--spacing-sm);
  right: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-family: var(--font-family-mono);
  color: var(--color-text-muted);
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;

  ${MainImageButton}:hover & {
    opacity: 1;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    /* Always show on mobile since hover doesn't work */
    opacity: 0.8;
  }
`;

const ExpandIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 1 13 1 13 5" />
    <polyline points="5 13 1 13 1 9" />
    <line x1="13" y1="1" x2="8" y2="6" />
    <line x1="1" y1="13" x2="6" y2="8" />
  </svg>
);

export interface ImageViewerProps {
  images: ProjectImage[];
}

export const ImageViewer = ({ images }: ImageViewerProps) => {
  // Find the main image to use as the initial display
  const mainImage = getMainImage(images);
  const mainImageIndex = mainImage ? images.indexOf(mainImage) : 0;

  const [currentIndex, setCurrentIndex] = useState(
    mainImageIndex >= 0 ? mainImageIndex : 0,
  );
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentImage = images[currentIndex];

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  const handleIndexChange = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Don't render if no images
  if (images.length === 0 || !currentImage) {
    return null;
  }

  return (
    <ViewerContainer>
      <MainImageButton
        onClick={openFullscreen}
        aria-label={`View ${currentImage.alt} in fullscreen`}
      >
        <MainImage
          src={currentImage.url}
          alt={currentImage.alt}
          loading="eager"
        />
        <ExpandHint>
          <ExpandIcon />
          Click to expand
        </ExpandHint>
      </MainImageButton>

      <ImageCarousel
        images={images}
        currentIndex={currentIndex}
        onSelect={handleIndexChange}
      />

      {isFullscreen && (
        <FullscreenLightbox
          images={images}
          currentIndex={currentIndex}
          onIndexChange={handleIndexChange}
          onClose={closeFullscreen}
        />
      )}
    </ViewerContainer>
  );
};
