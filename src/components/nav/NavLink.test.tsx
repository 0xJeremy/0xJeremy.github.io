import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders internal link correctly", () => {
    render(<NavLink href="/about">About</NavLink>);
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toHaveAttribute("target");
  });

  it("renders external link with new tab attributes", () => {
    render(
      <NavLink href="https://github.com" external>
        GitHub
      </NavLink>,
    );
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("href", "https://github.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("shows external icon for external links", () => {
    render(
      <NavLink href="https://github.com" external>
        GitHub
      </NavLink>,
    );
    expect(screen.getByText("↗")).toBeInTheDocument();
  });

  it("does not show external icon for internal links", () => {
    render(<NavLink href="/about">About</NavLink>);
    expect(screen.queryByText("↗")).not.toBeInTheDocument();
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(
      <NavLink href="/about" onClick={handleClick}>
        About
      </NavLink>,
    );

    await userEvent.click(screen.getByRole("link"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
