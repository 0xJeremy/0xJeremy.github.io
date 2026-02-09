import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { TimelineSection } from "./TimelineSection";
import type { TimelineEntry } from "@/types/timeline";

const mockEntries: TimelineEntry[] = [
  {
    id: "company-1",
    organization: "TechCorp",
    location: "New York, NY",
    overallDuration: "2021 - Present",
    roles: [
      {
        title: "Lead Developer",
        duration: "Jan 2021 - Present",
        bullets: ["Led team of 10"],
      },
    ],
  },
  {
    id: "company-2",
    organization: "StartupInc",
    overallDuration: "2019 - 2021",
    roles: [
      {
        title: "Engineer",
        duration: "Mar 2019 - Dec 2021",
      },
    ],
  },
];

describe("TimelineSection", () => {
  it("renders section title", () => {
    render(<TimelineSection title="Work Experience" entries={mockEntries} />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <TimelineSection
        title="Work Experience"
        subtitle="My professional journey"
        entries={mockEntries}
      />,
    );
    expect(screen.getByText("My professional journey")).toBeInTheDocument();
  });

  it("renders all timeline entries", () => {
    render(<TimelineSection title="Experience" entries={mockEntries} />);
    expect(
      screen.getByRole("heading", { name: "TechCorp" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "StartupInc" }),
    ).toBeInTheDocument();
  });

  it("renders roles within entries", () => {
    render(<TimelineSection title="Experience" entries={mockEntries} />);
    expect(
      screen.getByRole("heading", { name: "Lead Developer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Engineer" }),
    ).toBeInTheDocument();
  });

  it("applies section id for anchor linking", () => {
    render(
      <TimelineSection
        title="Experience"
        entries={mockEntries}
        id="experience"
      />,
    );
    expect(document.getElementById("experience")).toBeInTheDocument();
  });

  it("shows logo placeholders by default", () => {
    render(<TimelineSection title="Experience" entries={mockEntries} />);
    expect(screen.getByText("T")).toBeInTheDocument(); // TechCorp initial
    expect(screen.getByText("S")).toBeInTheDocument(); // StartupInc initial
  });

  it("hides logo placeholders when disabled", () => {
    render(
      <TimelineSection
        title="Experience"
        entries={mockEntries}
        showLogoPlaceholders={false}
      />,
    );
    expect(screen.queryByText("T")).not.toBeInTheDocument();
    expect(screen.queryByText("S")).not.toBeInTheDocument();
  });
});

describe("TimelineSection - Mobile", () => {
  it("renders correctly with single entry", () => {
    render(<TimelineSection title="Experience" entries={[mockEntries[0]]} />);
    expect(
      screen.getByRole("heading", { name: "TechCorp" }),
    ).toBeInTheDocument();
  });

  it("handles empty entries array", () => {
    render(<TimelineSection title="Experience" entries={[]} />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });
});
