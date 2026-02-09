import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";
import type { Project } from "@/content/projects";

const mockFeaturedProjects: Project[] = [
  {
    id: "featured-1",
    name: "Featured Project One",
    shortDescription: "First featured project description",
    images: [{ url: "/img1.jpg", alt: "Image 1", isMain: true }],
    tags: [{ label: "React" }],
    detailUrl: "/projects/featured-1",
    featured: true,
  },
  {
    id: "featured-2",
    name: "Featured Project Two",
    shortDescription: "Second featured project description",
    images: [{ url: "/img2.jpg", alt: "Image 2", isMain: true }],
    tags: [{ label: "Python" }],
    detailUrl: "/projects/featured-2",
    featured: true,
  },
];

const mockNonFeaturedProject: Project = {
  id: "other-1",
  name: "Other Project",
  shortDescription: "A non-featured project",
  images: [],
  tags: [{ label: "Node.js" }],
  detailUrl: "/projects/other-1",
  featured: false,
};

const mockMixedProjects: Project[] = [
  ...mockFeaturedProjects,
  mockNonFeaturedProject,
];

describe("FeaturedProjectsSection", () => {
  it("renders section title", () => {
    render(<FeaturedProjectsSection projects={mockFeaturedProjects} />);
    expect(
      screen.getByRole("heading", { name: "Some Things I've Built" }),
    ).toBeInTheDocument();
  });

  it("renders custom title", () => {
    render(
      <FeaturedProjectsSection
        projects={mockFeaturedProjects}
        title="My Projects"
      />,
    );
    expect(
      screen.getByRole("heading", { name: "My Projects" }),
    ).toBeInTheDocument();
  });

  it("renders section number when provided", () => {
    render(
      <FeaturedProjectsSection
        projects={mockFeaturedProjects}
        sectionNumber="02"
      />,
    );
    expect(screen.getByText("02.")).toBeInTheDocument();
  });

  it("renders only featured projects", () => {
    render(<FeaturedProjectsSection projects={mockMixedProjects} />);
    expect(screen.getByText("Featured Project One")).toBeInTheDocument();
    expect(screen.getByText("Featured Project Two")).toBeInTheDocument();
    expect(screen.queryByText("Other Project")).not.toBeInTheDocument();
  });

  it("limits displayed projects to maxProjects", () => {
    const manyFeatured: Project[] = [
      ...mockFeaturedProjects,
      {
        id: "featured-3",
        name: "Featured Project Three",
        shortDescription: "Third featured",
        images: [],
        tags: [],
        detailUrl: "/projects/featured-3",
        featured: true,
      },
      {
        id: "featured-4",
        name: "Featured Project Four",
        shortDescription: "Fourth featured",
        images: [],
        tags: [],
        detailUrl: "/projects/featured-4",
        featured: true,
      },
    ];
    render(<FeaturedProjectsSection projects={manyFeatured} maxProjects={2} />);
    expect(screen.getByText("Featured Project One")).toBeInTheDocument();
    expect(screen.getByText("Featured Project Two")).toBeInTheDocument();
    expect(
      screen.queryByText("Featured Project Three"),
    ).not.toBeInTheDocument();
  });

  it("returns null when no featured projects", () => {
    const { container } = render(
      <FeaturedProjectsSection projects={[mockNonFeaturedProject]} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("applies section id when provided", () => {
    render(
      <FeaturedProjectsSection
        projects={mockFeaturedProjects}
        id="featured-projects"
      />,
    );
    expect(document.getElementById("featured-projects")).toBeInTheDocument();
  });

  it("renders Featured Project labels for each project", () => {
    render(<FeaturedProjectsSection projects={mockFeaturedProjects} />);
    const labels = screen.getAllByText("Featured Project");
    expect(labels).toHaveLength(2);
  });
});
