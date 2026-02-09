import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { AboutSection } from "./AboutSection";

const mockParagraphs = ["First paragraph.", "Second paragraph."];

describe("AboutSection", () => {
  it("renders default title", () => {
    render(<AboutSection paragraphs={mockParagraphs} />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders custom title", () => {
    render(<AboutSection title="Who I Am" paragraphs={mockParagraphs} />);
    expect(screen.getByText("Who I Am")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <AboutSection
        paragraphs={mockParagraphs}
        subtitle="A brief introduction"
      />,
    );
    expect(screen.getByText("A brief introduction")).toBeInTheDocument();
  });

  it("renders paragraphs", () => {
    render(<AboutSection paragraphs={mockParagraphs} />);
    expect(screen.getByText("First paragraph.")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph.")).toBeInTheDocument();
  });

  it("renders image when provided", () => {
    render(
      <AboutSection
        paragraphs={mockParagraphs}
        imageUrl="/photo.jpg"
        imageAlt="My photo"
      />,
    );
    expect(screen.getByRole("img", { name: "My photo" })).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<AboutSection paragraphs={mockParagraphs} ctaText="Read More" />);
    expect(
      screen.getByRole("link", { name: /read more/i }),
    ).toBeInTheDocument();
  });

  it("applies section id", () => {
    render(<AboutSection paragraphs={mockParagraphs} id="about-preview" />);
    expect(document.getElementById("about-preview")).toBeInTheDocument();
  });
});

describe("AboutSection - Mobile", () => {
  it("renders correctly with minimal props", () => {
    render(<AboutSection paragraphs={["Single paragraph."]} />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Single paragraph.")).toBeInTheDocument();
  });
});
