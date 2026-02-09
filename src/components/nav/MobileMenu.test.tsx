import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { MobileMenu } from "./MobileMenu";

describe("MobileMenu", () => {
  it("renders nothing when closed", () => {
    const { container } = render(
      <MobileMenu isOpen={false} onClose={vi.fn()} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders menu when open", () => {
    render(<MobileMenu isOpen onClose={vi.fn()} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<MobileMenu isOpen onClose={vi.fn()} />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    render(<MobileMenu isOpen onClose={handleClose} />);

    await userEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when a link is clicked", async () => {
    const handleClose = vi.fn();
    render(<MobileMenu isOpen onClose={handleClose} />);

    await userEvent.click(screen.getByRole("link", { name: /^home$/i }));
    expect(handleClose).toHaveBeenCalled();
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = vi.fn();
    render(<MobileMenu isOpen onClose={handleClose} />);

    await userEvent.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("has correct accessibility attributes", () => {
    render(<MobileMenu isOpen onClose={vi.fn()} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-label", "Navigation menu");
  });
});
