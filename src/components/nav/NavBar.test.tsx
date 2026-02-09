import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { NavBar } from "./NavBar";

// Mock useLocation to control which page we're on
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: vi.fn(() => ({ pathname: "/" })),
  };
});

describe("NavBar", () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 1000,
    });
  });

  it("renders logo", () => {
    render(<NavBar />);
    expect(screen.getByText("Sandbox")).toBeInTheDocument();
  });

  it("renders all navigation links on desktop", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
  });

  it("renders mobile menu button (hidden on desktop)", () => {
    render(<NavBar />);
    // Button exists but is hidden on desktop viewport
    expect(
      screen.getByRole("button", { name: /open menu/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it("opens mobile menu when hamburger is clicked", async () => {
    render(<NavBar />);

    // Use hidden: true since button is hidden on desktop
    await userEvent.click(
      screen.getByRole("button", { name: /open menu/i, hidden: true }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes mobile menu when close button is clicked", async () => {
    render(<NavBar />);

    // Open menu (button hidden on desktop)
    await userEvent.click(
      screen.getByRole("button", { name: /open menu/i, hidden: true }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Close menu (close button is visible in the dialog)
    await userEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("is always visible when scrollBased is false", () => {
    const { container } = render(<NavBar scrollBased={false} />);
    const header = container.querySelector("header");
    expect(header).toHaveStyle({ opacity: "1" });
  });

  it("has hidden state when scrollBased is true and at top of page", () => {
    const { container } = render(<NavBar scrollBased />);
    const header = container.querySelector("header");
    // At scroll position 0, visibility should be 0
    expect(header).toHaveStyle({ opacity: "0" });
  });
});
