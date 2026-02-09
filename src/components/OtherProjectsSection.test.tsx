import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { OtherProjectsSection } from "./OtherProjectsSection";
import type { Project } from "@/content/projects";

const createMockProject = (id: string, featured: boolean = false): Project => ({
  id,
  name: `Project ${id}`,
  shortDescription: `Description for project ${id}`,
  images: [],
  tags: [{ label: "Tech" }],
  sourceUrl: `https://github.com/test/${id}`,
  detailUrl: `/projects/${id}`,
  featured,
});

// Create a mix of featured and non-featured projects
const mockProjects: Project[] = [
  createMockProject("featured-1", true),
  createMockProject("other-1", false),
  createMockProject("other-2", false),
  createMockProject("other-3", false),
  createMockProject("other-4", false),
  createMockProject("other-5", false),
  createMockProject("other-6", false),
  createMockProject("other-7", false),
  createMockProject("other-8", false),
];

const fewProjects: Project[] = [
  createMockProject("other-1", false),
  createMockProject("other-2", false),
  createMockProject("other-3", false),
];

describe("OtherProjectsSection", () => {
  it("renders section title", () => {
    render(<OtherProjectsSection projects={mockProjects} />);
    expect(
      screen.getByRole("heading", { name: "Other Noteworthy Projects" }),
    ).toBeInTheDocument();
  });

  it("renders custom title", () => {
    render(
      <OtherProjectsSection projects={mockProjects} title="More Projects" />,
    );
    expect(
      screen.getByRole("heading", { name: "More Projects" }),
    ).toBeInTheDocument();
  });

  it("renders subtitle link", () => {
    render(<OtherProjectsSection projects={mockProjects} />);
    const link = screen.getByRole("link", { name: "view all projects" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("renders custom subtitle", () => {
    render(
      <OtherProjectsSection
        projects={mockProjects}
        subtitleText="see more work"
        subtitleHref="/portfolio"
      />,
    );
    const link = screen.getByRole("link", { name: "see more work" });
    expect(link).toHaveAttribute("href", "/portfolio");
  });

  it("filters out featured projects", () => {
    render(<OtherProjectsSection projects={mockProjects} />);
    expect(screen.queryByText("Project featured-1")).not.toBeInTheDocument();
    expect(screen.getByText("Project other-1")).toBeInTheDocument();
  });

  it("shows only initialCount projects by default", () => {
    render(<OtherProjectsSection projects={mockProjects} initialCount={6} />);
    // Should show other-1 through other-6
    expect(screen.getByText("Project other-1")).toBeInTheDocument();
    expect(screen.getByText("Project other-6")).toBeInTheDocument();
    // Should not show other-7, other-8
    expect(screen.queryByText("Project other-7")).not.toBeInTheDocument();
    expect(screen.queryByText("Project other-8")).not.toBeInTheDocument();
  });

  it("shows all projects when Show More is clicked", () => {
    render(<OtherProjectsSection projects={mockProjects} initialCount={6} />);
    const button = screen.getByRole("button", { name: "Show More" });
    fireEvent.click(button);

    // Now should show all
    expect(screen.getByText("Project other-7")).toBeInTheDocument();
    expect(screen.getByText("Project other-8")).toBeInTheDocument();
  });

  it("toggles back to fewer when Show Fewer is clicked", () => {
    render(<OtherProjectsSection projects={mockProjects} initialCount={6} />);

    // Expand
    fireEvent.click(screen.getByRole("button", { name: "Show More" }));
    expect(screen.getByText("Project other-8")).toBeInTheDocument();

    // Collapse
    fireEvent.click(screen.getByRole("button", { name: "Show Fewer" }));
    expect(screen.queryByText("Project other-8")).not.toBeInTheDocument();
  });

  it("does not show toggle button when projects <= initialCount", () => {
    render(<OtherProjectsSection projects={fewProjects} initialCount={6} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("returns null when no non-featured projects", () => {
    const featuredOnly: Project[] = [
      createMockProject("featured-1", true),
      createMockProject("featured-2", true),
    ];
    const { container } = render(
      <OtherProjectsSection projects={featuredOnly} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("applies section id when provided", () => {
    render(
      <OtherProjectsSection projects={mockProjects} id="other-projects" />,
    );
    expect(document.getElementById("other-projects")).toBeInTheDocument();
  });
});
