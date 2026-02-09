import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectGrid } from "./ProjectGrid";
import type { Project } from "@/content/projects";

const mockProjects: Project[] = [
  {
    id: "project-1",
    name: "Project One",
    shortDescription: "First project description.",
    images: [{ url: "/img1.jpg", alt: "Image 1", isMain: true }],
    tags: [{ label: "React" }],
    sourceUrl: "https://github.com/test/one",
    detailUrl: "/projects/one",
    featured: true,
  },
  {
    id: "project-2",
    name: "Project Two",
    shortDescription: "Second project description.",
    images: [{ url: "/img2.jpg", alt: "Image 2", isMain: true }],
    tags: [{ label: "Python" }],
    sourceUrl: "https://github.com/test/two",
    detailUrl: "/projects/two",
    featured: false,
  },
  {
    id: "project-3",
    name: "Project Three",
    shortDescription: "Third project description.",
    images: [{ url: "/img3.jpg", alt: "Image 3", isMain: true }],
    tags: [{ label: "Rust" }],
    detailUrl: "/projects/three",
    featured: true,
  },
];

describe("ProjectGrid", () => {
  it("renders all projects", () => {
    render(<ProjectGrid projects={mockProjects} />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project Two" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project Three" }),
    ).toBeInTheDocument();
  });

  it("renders section title when provided", () => {
    render(<ProjectGrid projects={mockProjects} title="My Projects" />);

    expect(
      screen.getByRole("heading", { name: "My Projects" }),
    ).toBeInTheDocument();
  });

  it("renders section subtitle when provided", () => {
    render(
      <ProjectGrid projects={mockProjects} subtitle="A collection of work" />,
    );

    expect(screen.getByText("A collection of work")).toBeInTheDocument();
  });

  it("filters to featured projects when featuredOnly is true", () => {
    render(<ProjectGrid projects={mockProjects} featuredOnly />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project Two" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project Three" }),
    ).toBeInTheDocument();
  });

  it("limits number of projects when maxItems is set", () => {
    render(<ProjectGrid projects={mockProjects} maxItems={2} />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project Two" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project Three" }),
    ).not.toBeInTheDocument();
  });

  it("combines featuredOnly and maxItems filters", () => {
    render(<ProjectGrid projects={mockProjects} featuredOnly maxItems={1} />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project Three" }),
    ).not.toBeInTheDocument();
  });

  it("renders empty grid when no projects provided", () => {
    const { container } = render(<ProjectGrid projects={[]} title="Empty" />);

    expect(screen.getByRole("heading", { name: "Empty" })).toBeInTheDocument();
    // Grid should exist but be empty
    const grid = container.querySelector("div");
    expect(grid).toBeInTheDocument();
  });

  it("applies custom className to section", () => {
    const { container } = render(
      <ProjectGrid projects={mockProjects} className="custom-grid" />,
    );

    expect(container.querySelector("section")).toHaveClass("custom-grid");
  });
});
