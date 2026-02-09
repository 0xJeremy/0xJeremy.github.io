import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { Section } from "./Section";

describe("Section", () => {
  it("renders children content", () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>,
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Section title="About Me">Content</Section>);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<Section subtitle="My journey so far">Content</Section>);
    expect(screen.getByText("My journey so far")).toBeInTheDocument();
  });

  it("renders both title and subtitle", () => {
    render(
      <Section title="Experience" subtitle="Professional history">
        Content
      </Section>,
    );
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Professional history")).toBeInTheDocument();
  });

  it("accepts custom id for anchor linking", () => {
    render(<Section id="about-section">Content</Section>);
    expect(document.getElementById("about-section")).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    render(<Section className="custom-class">Content</Section>);
    const section = screen.getByText("Content").closest("section");
    expect(section).toHaveClass("custom-class");
  });

  it("renders with light variant", () => {
    render(<Section variant="light">Light content</Section>);
    expect(screen.getByText("Light content")).toBeInTheDocument();
  });

  it("renders without title area when no title or subtitle", () => {
    render(<Section>Just content</Section>);
    expect(screen.getByText("Just content")).toBeInTheDocument();
    // Title area should not exist
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});

describe("Section - Mobile Responsiveness", () => {
  it("renders content on mobile viewports", () => {
    render(<Section title="Mobile Test">Mobile content</Section>);
    expect(screen.getByText("Mobile Test")).toBeInTheDocument();
    expect(screen.getByText("Mobile content")).toBeInTheDocument();
  });

  it("renders full structure with all props on mobile", () => {
    render(
      <Section
        title="About"
        subtitle="My story"
        id="about-mobile"
        variant="dark"
      >
        Mobile section content
      </Section>,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("My story")).toBeInTheDocument();
    expect(screen.getByText("Mobile section content")).toBeInTheDocument();
    expect(document.getElementById("about-mobile")).toBeInTheDocument();
  });
});
