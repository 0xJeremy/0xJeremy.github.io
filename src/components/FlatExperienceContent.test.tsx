import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { FlatExperienceContent } from "./FlatExperienceContent";
import type { TimelineEntry } from "@/types/timeline";

const mockEntries: TimelineEntry[] = [
  {
    id: "company-1",
    organization: "Acme Corp",
    location: "San Francisco, CA",
    overallDuration: "2021 - Present",
    roles: [
      {
        title: "Senior Engineer",
        duration: "Jan 2023 - Present",
        description: "Leading platform development.",
        bullets: ["Led team of 5 engineers", "Improved performance by 40%"],
      },
      {
        title: "Software Engineer",
        duration: "Mar 2021 - Dec 2022",
        bullets: ["Built core features", "Wrote documentation"],
      },
    ],
  },
  {
    id: "company-2",
    organization: "StartupCo",
    location: "Boston, MA",
    overallDuration: "2019 - 2021",
    logoUrl: "/logos/startup.png",
    roles: [
      {
        title: "Full Stack Developer",
        duration: "Jun 2019 - Feb 2021",
        bullets: ["Developed web applications"],
      },
    ],
  },
];

describe("FlatExperienceContent", () => {
  it("renders all organization names", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(
      screen.getByRole("heading", { name: "Acme Corp" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "StartupCo" }),
    ).toBeInTheDocument();
  });

  it("renders locations", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(screen.getByText(/San Francisco, CA/)).toBeInTheDocument();
    expect(screen.getByText(/Boston, MA/)).toBeInTheDocument();
  });

  it("renders overall durations", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(screen.getByText("2021 - Present")).toBeInTheDocument();
    expect(screen.getByText("2019 - 2021")).toBeInTheDocument();
  });

  it("renders role titles", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(
      screen.getByRole("heading", { name: "Senior Engineer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Software Engineer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Full Stack Developer" }),
    ).toBeInTheDocument();
  });

  it("renders role durations", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(screen.getByText("Jan 2023 - Present")).toBeInTheDocument();
    expect(screen.getByText("Mar 2021 - Dec 2022")).toBeInTheDocument();
  });

  it("renders role descriptions when provided", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(
      screen.getByText("Leading platform development."),
    ).toBeInTheDocument();
  });

  it("renders bullet points", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    expect(screen.getByText("Led team of 5 engineers")).toBeInTheDocument();
    expect(screen.getByText("Improved performance by 40%")).toBeInTheDocument();
  });

  it("renders logo when provided", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    const logo = screen.getByRole("img", { name: "StartupCo logo" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logos/startup.png");
  });

  it("renders logo placeholder when no logo provided", () => {
    render(<FlatExperienceContent entries={mockEntries} />);
    // Acme Corp has no logo, should show 'A' placeholder
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("hides logo placeholder when showLogoPlaceholders is false", () => {
    render(
      <FlatExperienceContent
        entries={mockEntries}
        showLogoPlaceholders={false}
      />,
    );
    // Should not show the 'A' placeholder
    expect(screen.queryByText("A")).not.toBeInTheDocument();
    // But should still show the actual logo
    expect(
      screen.getByRole("img", { name: "StartupCo logo" }),
    ).toBeInTheDocument();
  });
});

describe("FlatExperienceContent - Edge Cases", () => {
  it("renders empty entries array without crashing", () => {
    const { container } = render(<FlatExperienceContent entries={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("handles entry without location", () => {
    const entryWithoutLocation: TimelineEntry[] = [
      {
        id: "remote-job",
        organization: "Remote Co",
        overallDuration: "2020 - 2021",
        roles: [
          {
            title: "Developer",
            duration: "2020 - 2021",
            bullets: ["Worked remotely"],
          },
        ],
      },
    ];
    render(<FlatExperienceContent entries={entryWithoutLocation} />);
    expect(screen.getByText("Remote Co")).toBeInTheDocument();
    // Should not crash without location
  });

  it("handles role without description or bullets", () => {
    const minimalEntry: TimelineEntry[] = [
      {
        id: "minimal",
        organization: "Minimal Co",
        overallDuration: "2020",
        roles: [
          {
            title: "Intern",
            duration: "Summer 2020",
          },
        ],
      },
    ];
    render(<FlatExperienceContent entries={minimalEntry} />);
    expect(screen.getByText("Intern")).toBeInTheDocument();
  });
});
