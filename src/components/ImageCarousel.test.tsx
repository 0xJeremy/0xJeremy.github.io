import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { ImageCarousel } from "./ImageCarousel";
import type { ProjectImage } from "@/content/projects";

const mockImages: ProjectImage[] = [
  { url: "/img/image1.jpg", alt: "First image", isMain: true },
  { url: "/img/image2.jpg", alt: "Second image" },
  { url: "/img/image3.jpg", alt: "Third image" },
];

describe("ImageCarousel", () => {
  it("renders thumbnails for each image", () => {
    render(
      <ImageCarousel images={mockImages} currentIndex={0} onSelect={vi.fn()} />,
    );

    const thumbnails = screen.getAllByRole("tab");
    expect(thumbnails).toHaveLength(3);
  });

  it("marks the current image as selected", () => {
    render(
      <ImageCarousel images={mockImages} currentIndex={1} onSelect={vi.fn()} />,
    );

    const thumbnails = screen.getAllByRole("tab");
    expect(thumbnails[1]).toHaveAttribute("aria-selected", "true");
    expect(thumbnails[0]).toHaveAttribute("aria-selected", "false");
  });

  it("calls onSelect when a thumbnail is clicked", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <ImageCarousel
        images={mockImages}
        currentIndex={0}
        onSelect={handleSelect}
      />,
    );

    const thumbnails = screen.getAllByRole("tab");
    await user.click(thumbnails[2]);

    expect(handleSelect).toHaveBeenCalledWith(2);
  });

  it("returns null when only one image is provided", () => {
    const { container } = render(
      <ImageCarousel
        images={[mockImages[0]]}
        currentIndex={0}
        onSelect={vi.fn()}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("returns null when no images are provided", () => {
    const { container } = render(
      <ImageCarousel images={[]} currentIndex={0} onSelect={vi.fn()} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("has accessible labels for thumbnails", () => {
    render(
      <ImageCarousel images={mockImages} currentIndex={0} onSelect={vi.fn()} />,
    );

    expect(
      screen.getByRole("tab", { name: "View First image" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "View Second image" }),
    ).toBeInTheDocument();
  });
});
