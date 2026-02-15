import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { NavLogo } from "./NavLogo";

describe("NavLogo", () => {
  it("renders logo text", () => {
    render(<NavLogo />);
    expect(screen.getByText("Jeremy Kanovsky")).toBeInTheDocument();
  });

  it("renders logo icon image", () => {
    render(<NavLogo />);
    const img = screen.getByRole("img", { name: /logo/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/logo.png");
  });

  it("links to home page", () => {
    render(<NavLogo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
