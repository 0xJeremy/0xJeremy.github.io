import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders the logo", () => {
    render(<Layout />);
    expect(screen.getByRole("link", { name: /sandbox/i })).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Layout />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about me/i })).toBeInTheDocument();
  });

  it("renders the footer with copyright", () => {
    render(<Layout />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
  });
});
