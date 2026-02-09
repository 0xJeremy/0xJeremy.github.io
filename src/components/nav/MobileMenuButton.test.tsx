import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@/test/test-utils";
import { MobileMenuButton } from "./MobileMenuButton";

describe("MobileMenuButton", () => {
  it('renders with "Open menu" label when closed', () => {
    render(<MobileMenuButton isOpen={false} onClick={vi.fn()} />);
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it('renders with "Close menu" label when open', () => {
    render(<MobileMenuButton isOpen onClick={vi.fn()} />);
    expect(
      screen.getByRole("button", { name: /close menu/i }),
    ).toBeInTheDocument();
  });

  it("has correct aria-expanded state", () => {
    const { rerender } = render(
      <MobileMenuButton isOpen={false} onClick={vi.fn()} />,
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );

    rerender(<MobileMenuButton isOpen onClick={vi.fn()} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<MobileMenuButton isOpen={false} onClick={handleClick} />);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
