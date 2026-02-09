import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders the page title", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<Contact />);
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it("renders placeholder for form", () => {
    render(<Contact />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });
});
