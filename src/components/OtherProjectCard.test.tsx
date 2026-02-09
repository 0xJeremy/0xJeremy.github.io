import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { OtherProjectCard } from "./OtherProjectCard";
import type { Project } from "@/content/projects";

const mockProject: Project = {
  id: "other-project",
  name: "Socket Engine",
  shortDescription:
    "A lightweight networking library for real-time communication between distributed systems.",
  images: [],
  tags: [{ label: "Python" }, { label: "WebSockets" }, { label: "Asyncio" }],
  sourceUrl: "https://github.com/test/socket-engine",
  detailUrl: "/projects/socket-engine",
};

const mockProjectWithoutSource: Project = {
  ...mockProject,
  id: "no-source-project",
  name: "Internal Tool",
  sourceUrl: void 0,
};

describe("OtherProjectCard", () => {
  it("renders project name", () => {
    render(<OtherProjectCard project={mockProject} />);
    expect(
      screen.getByRole("heading", { name: "Socket Engine" }),
    ).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<OtherProjectCard project={mockProject} />);
    expect(
      screen.getByText(/A lightweight networking library/),
    ).toBeInTheDocument();
  });

  it("renders all technology tags", () => {
    render(<OtherProjectCard project={mockProject} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("WebSockets")).toBeInTheDocument();
    expect(screen.getByText("Asyncio")).toBeInTheDocument();
  });

  it("links to GitHub when sourceUrl is provided", () => {
    render(<OtherProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/test/socket-engine",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("links to detail page when sourceUrl is not provided", () => {
    render(<OtherProjectCard project={mockProjectWithoutSource} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/socket-engine");
    expect(link).not.toHaveAttribute("target");
  });

  it("shows GitHub icon when sourceUrl is provided", () => {
    const { container } = render(<OtherProjectCard project={mockProject} />);
    // GitHub icon SVG should be present (has path with 24 viewBox for github)
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(2); // Folder + GitHub
  });

  it("hides GitHub icon when sourceUrl is not provided", () => {
    const { container } = render(
      <OtherProjectCard project={mockProjectWithoutSource} />,
    );
    // Should only have folder icon
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBe(1); // Only folder icon
  });

  it("always shows folder icon", () => {
    const { container } = render(<OtherProjectCard project={mockProject} />);
    // Folder icon SVG should be present (has path starting with 'M22 19')
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  it("applies custom className", () => {
    render(<OtherProjectCard project={mockProject} className="custom-card" />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-card");
  });
});
