import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { AboutPreview } from "./AboutPreview";

const mockParagraphs = [
  "First paragraph of about me content.",
  "Second paragraph with more details.",
];

describe("AboutPreview", () => {
  it("renders all paragraphs", () => {
    render(<AboutPreview paragraphs={mockParagraphs} />);
    expect(
      screen.getByText("First paragraph of about me content."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Second paragraph with more details."),
    ).toBeInTheDocument();
  });

  it("renders image when imageUrl is provided", () => {
    render(
      <AboutPreview
        paragraphs={mockParagraphs}
        imageUrl="/test.jpg"
        imageAlt="Test image"
      />,
    );
    const img = screen.getByRole("img", { name: "Test image" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.jpg");
  });

  it("renders placeholder when no image is provided", () => {
    render(<AboutPreview paragraphs={mockParagraphs} />);
    expect(screen.getByText("Photo")).toBeInTheDocument();
  });

  it("renders CTA button with default text", () => {
    render(<AboutPreview paragraphs={mockParagraphs} />);
    expect(
      screen.getByRole("link", { name: /learn more/i }),
    ).toBeInTheDocument();
  });

  it("renders CTA button with custom text", () => {
    render(<AboutPreview paragraphs={mockParagraphs} ctaText="Read More" />);
    expect(
      screen.getByRole("link", { name: /read more/i }),
    ).toBeInTheDocument();
  });

  it("links to /about by default", () => {
    render(<AboutPreview paragraphs={mockParagraphs} />);
    // With BrowserRouter basename, the href becomes /sandbox/about
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toHaveAttribute("href", "/about");
  });

  it("links to custom href when provided", () => {
    render(
      <AboutPreview paragraphs={mockParagraphs} ctaHref="/custom-about" />,
    );
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toHaveAttribute("href", "/custom-about");
  });

  it("renders arrow icon in CTA", () => {
    render(<AboutPreview paragraphs={mockParagraphs} />);
    expect(screen.getByText("→")).toBeInTheDocument();
  });
});

describe("AboutPreview - Mobile", () => {
  it("renders correctly with single paragraph", () => {
    render(<AboutPreview paragraphs={["Single paragraph for mobile."]} />);
    expect(
      screen.getByText("Single paragraph for mobile."),
    ).toBeInTheDocument();
  });

  it("image placeholder is accessible", () => {
    render(<AboutPreview paragraphs={["Content"]} />);
    expect(screen.getByText("Photo")).toBeInTheDocument();
  });
});
