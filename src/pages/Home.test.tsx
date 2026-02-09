import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { Home } from "./Home";

describe("Home", () => {
  it("renders the hero title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /building the future/i }),
    ).toBeInTheDocument();
  });

  it("renders the hero subtitle", () => {
    render(<Home />);
    expect(screen.getByText(/passionate about creating/i)).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /see my work/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact me/i }),
    ).toBeInTheDocument();
  });

  it("renders hero decorative elements", () => {
    render(<Home />);
    // Multiple decorative × elements should be present (from both DecorativeElements and BackgroundDecorations)
    expect(screen.getAllByText("×").length).toBeGreaterThan(0);
  });

  it("renders background decorations layer", () => {
    render(<Home />);
    // BackgroundDecorations renders with this testid
    expect(screen.getByTestId("background-decorations")).toBeInTheDocument();
  });
});

describe("Home - About Section", () => {
  it("renders about section title", () => {
    render(<Home />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders about section number", () => {
    render(<Home />);
    expect(screen.getByText("01.")).toBeInTheDocument();
  });

  it("has anchor id for about section", () => {
    render(<Home />);
    expect(document.getElementById("about")).toBeInTheDocument();
  });

  it("renders skills list", () => {
    render(<Home />);
    // TypeScript appears in both skills and project tags, so use getAllByText
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    // Python only appears in skills
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
  });
});

describe("Home - Work Experience Section", () => {
  it("renders work experience section title", () => {
    render(<Home />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders company names", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Markforged" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Microsoft" }),
    ).toBeInTheDocument();
  });

  it("renders job titles", () => {
    render(<Home />);
    // Senior Software Engineer appears as a role under Markforged
    expect(
      screen.getByRole("heading", { name: "Senior Software Engineer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Makerspace Lead" }),
    ).toBeInTheDocument();
  });

  it("has anchor id for experience section", () => {
    render(<Home />);
    expect(document.getElementById("experience")).toBeInTheDocument();
  });
});

describe("Home - Featured Projects Section", () => {
  it("renders featured projects section title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Some Things I've Built" }),
    ).toBeInTheDocument();
  });

  it("renders featured project labels", () => {
    render(<Home />);
    expect(screen.getAllByText("Featured Project").length).toBeGreaterThan(0);
  });

  it("has anchor id for featured projects section", () => {
    render(<Home />);
    expect(document.getElementById("featured-projects")).toBeInTheDocument();
  });
});

describe("Home - Other Projects Section", () => {
  it("renders other projects section title", () => {
    render(<Home />);
    expect(screen.getByText("Other Noteworthy Projects")).toBeInTheDocument();
  });

  it("renders view all projects link", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: "view all projects" }),
    ).toBeInTheDocument();
  });

  it("has anchor id for other projects section", () => {
    render(<Home />);
    expect(document.getElementById("other-projects")).toBeInTheDocument();
  });
});
