import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders the page title", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /^projects$/i }),
    ).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<Projects />);
    expect(screen.getByText(/collection of my work/i)).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<Projects />);
    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("Project Two")).toBeInTheDocument();
    expect(screen.getByText("Project Three")).toBeInTheDocument();
  });

  it("renders project tags", () => {
    render(<Projects />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });
});
