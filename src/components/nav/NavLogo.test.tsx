import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { NavLogo } from "./NavLogo";

describe("NavLogo", () => {
  it("renders logo text", () => {
    render(<NavLogo />);
    expect(screen.getByText("Sandbox")).toBeInTheDocument();
  });

  it("renders placeholder icon by default", () => {
    render(<NavLogo />);
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  it("renders custom icon when provided", () => {
    render(<NavLogo icon={<span data-testid="custom-icon">★</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(screen.queryByText("S")).not.toBeInTheDocument();
  });

  it("links to home page", () => {
    render(<NavLogo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
