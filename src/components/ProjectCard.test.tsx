import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/content/projects";

const mockProject: Project = {
  id: "test-project",
  name: "Test Project",
  shortDescription:
    "A test project for unit testing the ProjectCard component.",
  images: [
    {
      url: "/test-image.jpg",
      alt: "Test image",
      isMain: true,
    },
  ],
  tags: [{ label: "React" }, { label: "TypeScript" }],
  sourceUrl: "https://github.com/test/project",
  detailUrl: "/projects/test",
};

const mockProjectWithoutSource: Project = {
  ...mockProject,
  id: "no-source-project",
  sourceUrl: void 0,
};

const mockProjectWithoutImage: Project = {
  ...mockProject,
  id: "no-image-project",
  images: [],
};

describe("ProjectCard", () => {
  it("renders project name", () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByRole("heading", { name: "Test Project" }),
    ).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText(/A test project for unit testing/),
    ).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders project image with correct alt text", () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByRole("img", { name: "Test image" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  it("renders placeholder when no image provided", () => {
    render(<ProjectCard project={mockProjectWithoutImage} />);
    expect(screen.getByLabelText("No image available")).toBeInTheDocument();
  });

  it("renders Source button with GitHub link", () => {
    render(<ProjectCard project={mockProject} />);
    const sourceLink = screen.getByRole("link", { name: /source/i });
    expect(sourceLink).toHaveAttribute(
      "href",
      "https://github.com/test/project",
    );
    expect(sourceLink).toHaveAttribute("target", "_blank");
  });

  it("hides Source button when sourceUrl not provided", () => {
    render(<ProjectCard project={mockProjectWithoutSource} />);
    expect(
      screen.queryByRole("link", { name: /source/i }),
    ).not.toBeInTheDocument();
  });

  it("renders View More button with correct link", () => {
    render(<ProjectCard project={mockProject} />);
    const viewMoreLink = screen.getByRole("link", { name: /view more/i });
    expect(viewMoreLink).toHaveAttribute("href", "/projects/test");
  });

  it("applies custom className", () => {
    const { container } = render(
      <ProjectCard project={mockProject} className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
