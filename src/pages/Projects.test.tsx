import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import { render } from "@/test/test-utils";
import { Projects } from "./Projects";

/**
 * Helper to render the Projects page within a Routes context,
 * matching the route pattern used in App.tsx.
 */
const renderProjects = (initialEntries: string[] = ["/projects"]) =>
  render(
    <Routes>
      <Route path="projects/:projectId?" element={<Projects />} />
    </Routes>,
    { initialEntries },
  );

describe("Projects", () => {
  it("renders the page title", () => {
    renderProjects();
    expect(
      screen.getByRole("heading", { name: /^projects$/i }),
    ).toBeInTheDocument();
  });

  it("renders project names from content", () => {
    renderProjects();
    expect(screen.getByText("Hexapod Robot")).toBeInTheDocument();
    expect(screen.getByText("socket.engine")).toBeInTheDocument();
    expect(screen.getByText("Ballbot")).toBeInTheDocument();
  });

  it("renders tags on list items", () => {
    renderProjects();
    // Hexapod has "Python" and "Raspberry Pi" tags
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
  });

  it("shows empty state when no project is selected", () => {
    renderProjects();
    expect(screen.getByText(/select a project/i)).toBeInTheDocument();
  });

  it("shows project detail when a project is selected via URL", () => {
    renderProjects(["/projects/hexapod"]);
    // Should render the detail heading
    expect(
      screen.getByRole("heading", { name: "Hexapod Robot" }),
    ).toBeInTheDocument();
    // Should render description text
    expect(screen.getByText(/obstacle course/i)).toBeInTheDocument();
  });

  it("renders back button in detail view (visible on mobile)", () => {
    renderProjects(["/projects/hexapod"]);
    // BackButton uses display:none on desktop via styled-components,
    // so getByRole can't find it. getByText checks raw DOM content.
    expect(screen.getByText(/back to projects/i)).toBeInTheDocument();
  });
});
