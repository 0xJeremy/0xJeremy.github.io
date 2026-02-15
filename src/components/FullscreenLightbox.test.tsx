import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { FullscreenLightbox } from "./FullscreenLightbox";
import type { ProjectImage } from "@/content/projects";

const mockImages: ProjectImage[] = [
  { url: "/img/image1.jpg", alt: "First image", isMain: true },
  { url: "/img/image2.jpg", alt: "Second image" },
  { url: "/img/image3.jpg", alt: "Third image" },
];

describe("FullscreenLightbox", () => {
  it("renders the current image", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByAltText("First image")).toBeInTheDocument();
  });

  it("renders close button", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={handleClose}
      />,
    );

    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(handleClose).toHaveBeenCalled();
  });

  it("renders navigation buttons for multiple images", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={1}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("disables prev button on first image", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
  });

  it("disables next button on last image", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={2}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).not.toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });

  it("calls onIndexChange when next is clicked", async () => {
    const user = userEvent.setup();
    const handleIndexChange = vi.fn();

    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={handleIndexChange}
        onClose={vi.fn()}
      />,
    );

    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(handleIndexChange).toHaveBeenCalledWith(1);
  });

  it("calls onIndexChange when prev is clicked", async () => {
    const user = userEvent.setup();
    const handleIndexChange = vi.fn();

    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={2}
        onIndexChange={handleIndexChange}
        onClose={vi.fn()}
      />,
    );

    await user.click(screen.getByRole("button", { name: /previous/i }));
    expect(handleIndexChange).toHaveBeenCalledWith(1);
  });

  it("displays image counter", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={1}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("calls onClose when Escape key is pressed", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={handleClose}
      />,
    );

    await user.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalled();
  });

  it("navigates with arrow keys", async () => {
    const user = userEvent.setup();
    const handleIndexChange = vi.fn();

    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={1}
        onIndexChange={handleIndexChange}
        onClose={vi.fn()}
      />,
    );

    await user.keyboard("{ArrowRight}");
    expect(handleIndexChange).toHaveBeenCalledWith(2);

    await user.keyboard("{ArrowLeft}");
    expect(handleIndexChange).toHaveBeenCalledWith(0);
  });

  it("does not show navigation for single image", () => {
    render(
      <FullscreenLightbox
        images={[mockImages[0]]}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("button", { name: /previous/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /next/i }),
    ).not.toBeInTheDocument();
  });

  it("renders as a dialog with proper accessibility", () => {
    render(
      <FullscreenLightbox
        images={mockImages}
        currentIndex={0}
        onIndexChange={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });
});
