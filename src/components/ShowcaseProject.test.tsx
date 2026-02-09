import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ShowcaseProject } from "./ShowcaseProject";
import type { Project } from "@/content/projects";

const mockProject: Project = {
  id: "featured-project",
  name: "Awesome Robot",
  shortDescription:
    "A complex robotics project with autonomous navigation and computer vision capabilities.",
  images: [
    {
      url: "/images/robot.jpg",
      alt: "Robot navigating obstacle course",
      isMain: true,
    },
  ],
  tags: [{ label: "Python" }, { label: "ROS" }, { label: "Computer Vision" }],
  sourceUrl: "https://github.com/test/robot",
  detailUrl: "/projects/robot",
  featured: true,
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

describe("ShowcaseProject", () => {
  it("renders featured project label", () => {
    render(<ShowcaseProject project={mockProject} />);
    expect(screen.getByText("Featured Project")).toBeInTheDocument();
  });

  it("renders project name as heading", () => {
    render(<ShowcaseProject project={mockProject} />);
    expect(
      screen.getByRole("heading", { name: "Awesome Robot" }),
    ).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ShowcaseProject project={mockProject} />);
    expect(screen.getByText(/A complex robotics project/)).toBeInTheDocument();
  });

  it("renders all technology tags", () => {
    render(<ShowcaseProject project={mockProject} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("ROS")).toBeInTheDocument();
    expect(screen.getByText("Computer Vision")).toBeInTheDocument();
  });

  it("renders project image", () => {
    render(<ShowcaseProject project={mockProject} />);
    const img = screen.getByRole("img", {
      name: "Robot navigating obstacle course",
    });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/robot.jpg");
  });

  it("renders placeholder when no image provided", () => {
    render(<ShowcaseProject project={mockProjectWithoutImage} />);
    expect(screen.getByLabelText("No project image")).toBeInTheDocument();
  });

  it("renders GitHub link when sourceUrl provided", () => {
    render(<ShowcaseProject project={mockProject} />);
    const link = screen.getByLabelText(
      /View Awesome Robot source code on GitHub/,
    );
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/test/robot");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not render GitHub link when sourceUrl not provided", () => {
    render(<ShowcaseProject project={mockProjectWithoutSource} />);
    expect(
      screen.queryByLabelText(/source code on GitHub/),
    ).not.toBeInTheDocument();
  });

  it("renders external link to project details", () => {
    render(<ShowcaseProject project={mockProject} />);
    const link = screen.getByLabelText("View Awesome Robot details");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects/robot");
  });

  it("links project title to detail page", () => {
    render(<ShowcaseProject project={mockProject} />);
    const titleLink = screen.getByRole("link", { name: "Awesome Robot" });
    expect(titleLink).toHaveAttribute("href", "/projects/robot");
  });

  it("renders with alignRight=true", () => {
    render(<ShowcaseProject project={mockProject} alignRight />);
    // Component should still render all content
    expect(screen.getByText("Featured Project")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Awesome Robot" }),
    ).toBeInTheDocument();
  });

  it("renders with alignRight=false (default)", () => {
    render(<ShowcaseProject project={mockProject} alignRight={false} />);
    expect(screen.getByText("Featured Project")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Awesome Robot" }),
    ).toBeInTheDocument();
  });
});
