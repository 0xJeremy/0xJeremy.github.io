import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectDetail } from "./ProjectDetail";
import type { Project } from "@/content/projects";

const mockProject: Project = {
  id: "hexapod",
  name: "Hexapod Robot",
  shortDescription: "A six-legged walking robot.",
  fullDescription: "This robot was made for the final project of Tufts ME-134.",
  images: [
    { url: "/img/hexapod_main.jpg", alt: "Hexapod main view", isMain: true },
    { url: "/img/hexapod_side.jpg", alt: "Hexapod side view" },
  ],
  tags: [{ label: "Python" }, { label: "Raspberry Pi" }],
  sourceUrl: "https://github.com/0xJeremy/hexapod",
  detailUrl: "/projects/hexapod",
  featured: true,
};

describe("ProjectDetail", () => {
  it("renders the project name", () => {
    render(<ProjectDetail project={mockProject} />);
    expect(
      screen.getByRole("heading", { name: "Hexapod Robot" }),
    ).toBeInTheDocument();
  });

  it("renders the full description", () => {
    render(<ProjectDetail project={mockProject} />);
    expect(
      screen.getByText(/final project of Tufts ME-134/),
    ).toBeInTheDocument();
  });

  it("renders tags", () => {
    render(<ProjectDetail project={mockProject} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Raspberry Pi")).toBeInTheDocument();
  });

  it("renders the GitHub link", () => {
    render(<ProjectDetail project={mockProject} />);
    const link = screen.getByRole("link", { name: /view on github/i });
    expect(link).toHaveAttribute("href", "https://github.com/0xJeremy/hexapod");
  });

  it("renders project images", () => {
    render(<ProjectDetail project={mockProject} />);
    // Main image is displayed with alt text
    expect(screen.getByAltText("Hexapod main view")).toBeInTheDocument();
    // Other images are in the carousel as thumbnails (with aria-label on buttons)
    expect(
      screen.getByRole("tab", { name: "View Hexapod side view" }),
    ).toBeInTheDocument();
  });

  it("falls back to shortDescription when fullDescription is missing", () => {
    const project = { ...mockProject, fullDescription: undefined };
    render(<ProjectDetail project={project} />);
    expect(screen.getByText("A six-legged walking robot.")).toBeInTheDocument();
  });
});
