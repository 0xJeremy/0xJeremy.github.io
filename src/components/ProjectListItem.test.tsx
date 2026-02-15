import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { ProjectListItem } from "./ProjectListItem";

describe("ProjectListItem", () => {
  const baseProps = {
    id: "hexapod",
    name: "Hexapod Robot",
    tags: [{ label: "Python" }, { label: "Raspberry Pi" }],
    active: false,
  };

  it("renders the project name", () => {
    render(<ProjectListItem {...baseProps} />);
    expect(screen.getByText("Hexapod Robot")).toBeInTheDocument();
  });

  it("renders technology tags", () => {
    render(<ProjectListItem {...baseProps} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Raspberry Pi")).toBeInTheDocument();
  });

  it("renders GitHub link when sourceUrl is provided", () => {
    render(
      <ProjectListItem
        {...baseProps}
        sourceUrl="https://github.com/0xJeremy/hexapod"
      />,
    );
    expect(
      screen.getByLabelText("View Hexapod Robot on GitHub"),
    ).toBeInTheDocument();
  });

  it("does not render GitHub link when sourceUrl is absent", () => {
    render(<ProjectListItem {...baseProps} />);
    expect(screen.queryByLabelText(/view.*on github/i)).not.toBeInTheDocument();
  });

  it("links to the correct project route", () => {
    render(<ProjectListItem {...baseProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects/hexapod");
  });
});
