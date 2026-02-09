import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { AboutMe } from "./AboutMe";

describe("AboutMe", () => {
  it("renders the page title", () => {
    render(<AboutMe />);
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
  });

  it("renders the hello section", () => {
    render(<AboutMe />);
    expect(screen.getByRole("heading", { name: /hello/i })).toBeInTheDocument();
  });

  it("renders the skills section", () => {
    render(<AboutMe />);
    expect(
      screen.getByRole("heading", { name: /skills/i }),
    ).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<AboutMe />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("renders individual skills", () => {
    render(<AboutMe />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });
});
