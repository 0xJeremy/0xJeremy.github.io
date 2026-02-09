import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { FlatSection } from "./FlatSection";

describe("FlatSection", () => {
  it("renders title", () => {
    render(<FlatSection title="About Me">Content</FlatSection>);
    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
  });

  it("renders section number when provided", () => {
    render(
      <FlatSection title="About Me" sectionNumber="01">
        Content
      </FlatSection>,
    );
    expect(screen.getByText("01.")).toBeInTheDocument();
  });

  it("does not render section number when not provided", () => {
    render(<FlatSection title="About Me">Content</FlatSection>);
    expect(screen.queryByText(/^\d+\.$/)).not.toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <FlatSection title="Test Section">
        <p>Test content paragraph</p>
      </FlatSection>,
    );
    expect(screen.getByText("Test content paragraph")).toBeInTheDocument();
  });

  it("applies section id when provided", () => {
    render(
      <FlatSection title="About" id="about">
        Content
      </FlatSection>,
    );
    expect(document.getElementById("about")).toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    const { container } = render(
      <FlatSection title="Test" className="custom-section">
        Content
      </FlatSection>,
    );
    expect(container.firstChild).toHaveClass("custom-section");
  });

  it("renders header line by default", () => {
    const { container } = render(
      <FlatSection title="Test">Content</FlatSection>,
    );
    // The header line is decorative and aria-hidden
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("hides header line when showHeaderLine is false", () => {
    const { container } = render(
      <FlatSection title="Test" showHeaderLine={false}>
        Content
      </FlatSection>,
    );
    expect(
      container.querySelector('[aria-hidden="true"]'),
    ).not.toBeInTheDocument();
  });
});
