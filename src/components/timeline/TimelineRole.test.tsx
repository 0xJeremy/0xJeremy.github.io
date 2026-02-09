import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { TimelineRole } from "./TimelineRole";
import type { TimelineRole as TimelineRoleType } from "@/types/timeline";

const mockRole: TimelineRoleType = {
  title: "Senior Software Engineer",
  duration: "Jan 2022 - Present",
  description: "Leading development of core platform features.",
  bullets: [
    "Built scalable microservices architecture",
    "Mentored junior developers",
    "Reduced deployment time by 50%",
  ],
};

const minimalRole: TimelineRoleType = {
  title: "Junior Developer",
  duration: "Jun 2020 - Dec 2021",
};

describe("TimelineRole", () => {
  it("renders role title", () => {
    render(<TimelineRole role={mockRole} />);
    expect(
      screen.getByRole("heading", { name: "Senior Software Engineer" }),
    ).toBeInTheDocument();
  });

  it("renders duration", () => {
    render(<TimelineRole role={mockRole} />);
    expect(screen.getByText("Jan 2022 - Present")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<TimelineRole role={mockRole} />);
    expect(
      screen.getByText("Leading development of core platform features."),
    ).toBeInTheDocument();
  });

  it("does not render description when not provided", () => {
    render(<TimelineRole role={minimalRole} />);
    expect(screen.queryByText(/leading/i)).not.toBeInTheDocument();
  });

  it("renders all bullet points", () => {
    render(<TimelineRole role={mockRole} />);
    expect(
      screen.getByText("Built scalable microservices architecture"),
    ).toBeInTheDocument();
    expect(screen.getByText("Mentored junior developers")).toBeInTheDocument();
    expect(
      screen.getByText("Reduced deployment time by 50%"),
    ).toBeInTheDocument();
  });

  it("does not render bullet list when no bullets provided", () => {
    render(<TimelineRole role={minimalRole} />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders bullets as list items", () => {
    render(<TimelineRole role={mockRole} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });
});

describe("TimelineRole - Mobile", () => {
  it("renders correctly with minimal data", () => {
    render(<TimelineRole role={minimalRole} />);
    expect(
      screen.getByRole("heading", { name: "Junior Developer" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Jun 2020 - Dec 2021")).toBeInTheDocument();
  });

  it("handles empty bullets array", () => {
    const roleWithEmptyBullets: TimelineRoleType = {
      ...minimalRole,
      bullets: [],
    };
    render(<TimelineRole role={roleWithEmptyBullets} />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
