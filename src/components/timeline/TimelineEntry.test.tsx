import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { TimelineEntry } from "./TimelineEntry";
import type { TimelineEntry as TimelineEntryType } from "@/types/timeline";

const mockEntry: TimelineEntryType = {
  id: "company-1",
  organization: "Acme Corporation",
  location: "San Francisco, CA",
  overallDuration: "2020 - Present",
  roles: [
    {
      title: "Senior Engineer",
      duration: "Jan 2022 - Present",
      bullets: ["Led platform development", "Mentored team of 5"],
    },
    {
      title: "Software Engineer",
      duration: "Mar 2020 - Dec 2021",
      bullets: ["Built core features"],
    },
  ],
};

const minimalEntry: TimelineEntryType = {
  id: "company-2",
  organization: "StartupCo",
  overallDuration: "2019 - 2020",
  roles: [
    {
      title: "Developer",
      duration: "Jun 2019 - Dec 2020",
    },
  ],
};

const entryWithLogo: TimelineEntryType = {
  ...mockEntry,
  logoUrl: "/logo.png",
};

describe("TimelineEntry", () => {
  it("renders organization name", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(
      screen.getByRole("heading", { name: "Acme Corporation" }),
    ).toBeInTheDocument();
  });

  it("renders location when provided", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
  });

  it("does not render location when not provided", () => {
    render(<TimelineEntry entry={minimalEntry} />);
    expect(screen.queryByText(/📍/)).not.toBeInTheDocument();
  });

  it("renders overall duration", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(screen.getByText("2020 - Present")).toBeInTheDocument();
  });

  it("renders logo when logoUrl is provided", () => {
    render(<TimelineEntry entry={entryWithLogo} />);
    const logo = screen.getByRole("img", { name: "Acme Corporation logo" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logo.png");
  });

  it("renders logo placeholder with initial when no logo", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(screen.getByText("A")).toBeInTheDocument(); // First letter of Acme
  });

  it("hides logo placeholder when showLogoPlaceholder is false", () => {
    render(<TimelineEntry entry={mockEntry} showLogoPlaceholder={false} />);
    expect(screen.queryByText("A")).not.toBeInTheDocument();
  });

  it("renders all roles", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(
      screen.getByRole("heading", { name: "Senior Engineer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Software Engineer" }),
    ).toBeInTheDocument();
  });

  it("renders role durations", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(screen.getByText("Jan 2022 - Present")).toBeInTheDocument();
    expect(screen.getByText("Mar 2020 - Dec 2021")).toBeInTheDocument();
  });

  it("renders role bullets", () => {
    render(<TimelineEntry entry={mockEntry} />);
    expect(screen.getByText("Led platform development")).toBeInTheDocument();
    expect(screen.getByText("Mentored team of 5")).toBeInTheDocument();
    expect(screen.getByText("Built core features")).toBeInTheDocument();
  });
});

describe("TimelineEntry - Mobile", () => {
  it("renders correctly with minimal data", () => {
    render(<TimelineEntry entry={minimalEntry} />);
    expect(
      screen.getByRole("heading", { name: "StartupCo" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2019 - 2020")).toBeInTheDocument(); // Overall duration
    expect(screen.getByText("Jun 2019 - Dec 2020")).toBeInTheDocument(); // Role duration
    expect(
      screen.getByRole("heading", { name: "Developer" }),
    ).toBeInTheDocument();
  });

  it("placeholder shows correct initial for different org names", () => {
    render(<TimelineEntry entry={minimalEntry} />);
    expect(screen.getByText("S")).toBeInTheDocument(); // First letter of StartupCo
  });
});
