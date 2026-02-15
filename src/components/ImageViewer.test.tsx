import { describe, it, expect } from "vitest";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { ImageViewer } from "./ImageViewer";
import type { ProjectImage } from "@/content/projects";

const mockImages: ProjectImage[] = [
  { url: "/img/image1.jpg", alt: "First image" },
  { url: "/img/image2.jpg", alt: "Second image", isMain: true },
  { url: "/img/image3.jpg", alt: "Third image" },
];

const singleImage: ProjectImage[] = [
  { url: "/img/single.jpg", alt: "Single image", isMain: true },
];

describe("ImageViewer", () => {
  it("renders the main image", () => {
    render(<ImageViewer images={mockImages} />);
    // The main image (isMain: true) should be displayed initially
    expect(screen.getByAltText("Second image")).toBeInTheDocument();
  });

  it("renders nothing when no images provided", () => {
    const { container } = render(<ImageViewer images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders carousel for multiple images", () => {
    render(<ImageViewer images={mockImages} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("does not render carousel for single image", () => {
    render(<ImageViewer images={singleImage} />);
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });

  it("changes displayed image when thumbnail is clicked", async () => {
    const user = userEvent.setup();
    render(<ImageViewer images={mockImages} />);

    // Initially shows main image (Second image)
    expect(screen.getByAltText("Second image")).toBeInTheDocument();

    // Click on first image thumbnail
    const thumbnails = screen.getAllByRole("tab");
    await user.click(thumbnails[0]);

    // Should now show first image
    const mainButton = screen.getByRole("button", {
      name: /view first image in fullscreen/i,
    });
    expect(within(mainButton).getByAltText("First image")).toBeInTheDocument();
  });

  it("opens fullscreen lightbox when main image is clicked", async () => {
    const user = userEvent.setup();
    render(<ImageViewer images={mockImages} />);

    const mainButton = screen.getByRole("button", {
      name: /view .* in fullscreen/i,
    });
    await user.click(mainButton);

    // Lightbox should be open
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes fullscreen lightbox when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<ImageViewer images={mockImages} />);

    // Open lightbox
    const mainButton = screen.getByRole("button", {
      name: /view .* in fullscreen/i,
    });
    await user.click(mainButton);

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Close lightbox
    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("has accessible expand button", () => {
    render(<ImageViewer images={mockImages} />);

    const button = screen.getByRole("button", {
      name: /view .* in fullscreen/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("shows expand hint", () => {
    render(<ImageViewer images={mockImages} />);
    expect(screen.getByText(/click to expand/i)).toBeInTheDocument();
  });

  it("falls back to first image when no isMain specified", () => {
    const imagesWithoutMain: ProjectImage[] = [
      { url: "/img/a.jpg", alt: "Image A" },
      { url: "/img/b.jpg", alt: "Image B" },
    ];

    render(<ImageViewer images={imagesWithoutMain} />);
    expect(screen.getByAltText("Image A")).toBeInTheDocument();
  });

  it("syncs carousel selection when navigating in fullscreen", async () => {
    const user = userEvent.setup();
    render(<ImageViewer images={mockImages} />);

    // Open lightbox
    await user.click(
      screen.getByRole("button", { name: /view .* in fullscreen/i }),
    );

    // Navigate to next image in fullscreen
    await user.click(screen.getByRole("button", { name: /next/i }));

    // Close lightbox
    await user.click(screen.getByRole("button", { name: /close/i }));

    // The main view should now show the third image
    expect(
      screen.getByRole("button", { name: /view third image in fullscreen/i }),
    ).toBeInTheDocument();
  });
});
