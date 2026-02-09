import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectsSection } from "./ProjectsSection";
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
  },
  {
    id: "project-2",
    name: "Project Two",
    shortDescription: "Second project description.",
    images: [{ url: "/img2.jpg", alt: "Image 2", isMain: true }],
    tags: [{ label: "Python" }],
    detailUrl: "/projects/two",
  },
];

describe("ProjectsSection", () => {
  it("renders all projects", () => {
    render(<ProjectsSection projects={mockProjects} />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Project Two" }),
    ).toBeInTheDocument();
  });

  it("renders default title when not provided", () => {
    render(<ProjectsSection projects={mockProjects} />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("renders custom title and subtitle", () => {
    render(
      <ProjectsSection
        projects={mockProjects}
        title="My Work"
        subtitle="Featured projects"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "My Work" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Featured projects")).toBeInTheDocument();
  });

  it("limits projects when maxItems is set", () => {
    render(<ProjectsSection projects={mockProjects} maxItems={1} />);

    expect(
      screen.getByRole("heading", { name: "Project One" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Project Two" }),
    ).not.toBeInTheDocument();
  });

  it("applies id to grid element", () => {
    render(<ProjectsSection projects={mockProjects} id="projects-grid" />);

    expect(document.getElementById("projects-grid")).toBeInTheDocument();
  });
});
