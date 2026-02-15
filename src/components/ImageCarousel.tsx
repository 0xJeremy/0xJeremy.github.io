/**
 * ImageCarousel Component
 *
 * A horizontal thumbnail strip for navigating between images.
 * Displays small, clickable thumbnails with the active one highlighted.
 * Supports horizontal scrolling on overflow for many images.
 *
 * Usage:
 * - Used by ImageViewer for inline navigation
 * - Used by FullscreenLightbox for fullscreen navigation
 * - Automatically hides if only one image is provided
 */

import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/navigation";
import type { ProjectImage } from "@/content/projects";

const CarouselContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  overflow-x: auto;
  padding: var(--spacing-sm) 0;
  scrollbar-width: thin;
  scrollbar-color: var(--color-gray-600) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-600);
    border-radius: var(--radius-full);
  }
`;

const Thumbnail = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid
    ${({ $active }) => ($active ? "var(--color-accent)" : "transparent")};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition:
    border-color var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);
  cursor: pointer;
  padding: 0;
  background: var(--color-gray-800);

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 64px;
    height: 48px;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface ImageCarouselProps {
  images: ProjectImage[];
  currentIndex: number;
  onSelect: (index: number) => void;
  /** Optional class name for custom styling */
  className?: string;
}

export const ImageCarousel = ({
  images,
  currentIndex,
  onSelect,
  className,
}: ImageCarouselProps) => {
  // Don't render if there's only one image
  if (images.length <= 1) {
    return null;
  }

  return (
    <CarouselContainer
      className={className}
      role="tablist"
      aria-label="Image gallery thumbnails"
    >
      {images.map((image, index) => (
        <Thumbnail
          key={image.url}
          $active={index === currentIndex}
          onClick={() => onSelect(index)}
          role="tab"
          aria-selected={index === currentIndex}
          aria-label={`View ${image.alt}`}
          tabIndex={index === currentIndex ? 0 : -1}
        >
          <ThumbnailImage src={image.url} alt="" loading="lazy" />
        </Thumbnail>
      ))}
    </CarouselContainer>
  );
};
