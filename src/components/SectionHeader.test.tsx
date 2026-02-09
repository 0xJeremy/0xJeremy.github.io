import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders title", () => {
    render(<SectionHeader title="About Me" />);
    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeader title="About Me" subtitle="A brief introduction" />);
    expect(screen.getByText("A brief introduction")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<SectionHeader title="About Me" />);
    expect(screen.queryByText("subtitle")).not.toBeInTheDocument();
  });

  it("renders with left alignment by default", () => {
    render(<SectionHeader title="Test" />);
    const header = screen
      .getByRole("heading", { name: "Test" })
      .closest("header");
    expect(header).toBeInTheDocument();
  });

  it("accepts center alignment", () => {
    render(<SectionHeader title="Centered" align="center" />);
    expect(
      screen.getByRole("heading", { name: "Centered" }),
    ).toBeInTheDocument();
  });

  it("renders with dark variant by default", () => {
    render(<SectionHeader title="Dark" />);
    expect(screen.getByRole("heading", { name: "Dark" })).toBeInTheDocument();
  });

  it("renders with light variant", () => {
    render(<SectionHeader title="Light" variant="light" />);
    expect(screen.getByRole("heading", { name: "Light" })).toBeInTheDocument();
  });
});
