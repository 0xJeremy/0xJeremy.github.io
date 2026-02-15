import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectEmptyState } from "./ProjectEmptyState";

describe("ProjectEmptyState", () => {
  it("renders the prompt text", () => {
    render(<ProjectEmptyState />);
    expect(screen.getByText(/select a project/i)).toBeInTheDocument();
  });
});
