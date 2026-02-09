import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { FlatAboutContent, AboutParagraph } from "./FlatAboutContent";

const mockParagraphs = [
  "First paragraph of text.",
  "Second paragraph of text.",
];

const mockSkills = ["TypeScript", "React", "Node.js", "Python"];

const mockParagraphsWithLinks: AboutParagraph[] = [
  {
    text: "I work at {company} building software.",
    links: {
      company: { text: "Acme Corp", href: "https://acme.com" },
    },
  },
];

describe("FlatAboutContent", () => {
  it("renders all paragraphs", () => {
    render(<FlatAboutContent paragraphs={mockParagraphs} />);
    expect(screen.getByText("First paragraph of text.")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph of text.")).toBeInTheDocument();
  });

  it("renders paragraphs with inline links", () => {
    render(<FlatAboutContent paragraphs={mockParagraphsWithLinks} />);
    const link = screen.getByRole("link", { name: "Acme Corp" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://acme.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders skills when provided", () => {
    render(
      <FlatAboutContent paragraphs={mockParagraphs} skills={mockSkills} />,
    );
    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders default skills intro text", () => {
    render(
      <FlatAboutContent paragraphs={mockParagraphs} skills={mockSkills} />,
    );
    expect(
      screen.getByText("Some of the things I've been working on recently:"),
    ).toBeInTheDocument();
  });

  it("renders custom skills intro text", () => {
    render(
      <FlatAboutContent
        paragraphs={mockParagraphs}
        skills={mockSkills}
        skillsIntro="Technologies I use:"
      />,
    );
    expect(screen.getByText("Technologies I use:")).toBeInTheDocument();
  });

  it("does not render skills section when skills array is empty", () => {
    render(<FlatAboutContent paragraphs={mockParagraphs} skills={[]} />);
    expect(
      screen.queryByText("Some of the things I've been working on recently:"),
    ).not.toBeInTheDocument();
  });

  it("does not render skills section when skills is undefined", () => {
    render(<FlatAboutContent paragraphs={mockParagraphs} />);
    expect(
      screen.queryByText("Some of the things I've been working on recently:"),
    ).not.toBeInTheDocument();
  });

  it("renders image when imageUrl provided", () => {
    render(
      <FlatAboutContent
        paragraphs={mockParagraphs}
        imageUrl="/photo.jpg"
        imageAlt="My photo"
      />,
    );
    const img = screen.getByRole("img", { name: "My photo" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/photo.jpg");
  });

  it("renders placeholder when no image provided", () => {
    render(<FlatAboutContent paragraphs={mockParagraphs} />);
    expect(screen.getByText("Photo")).toBeInTheDocument();
  });

  it("uses default alt text for image", () => {
    render(
      <FlatAboutContent paragraphs={mockParagraphs} imageUrl="/photo.jpg" />,
    );
    expect(
      screen.getByRole("img", { name: "Profile photo" }),
    ).toBeInTheDocument();
  });
});

describe("FlatAboutContent - Mixed Paragraph Types", () => {
  it("handles mix of string and object paragraphs", () => {
    const mixedParagraphs: (string | AboutParagraph)[] = [
      "Plain text paragraph.",
      {
        text: "Paragraph with a {link}.",
        links: { link: { text: "click here", href: "https://example.com" } },
      },
    ];
    render(<FlatAboutContent paragraphs={mixedParagraphs} />);
    expect(screen.getByText("Plain text paragraph.")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "click here" }),
    ).toBeInTheDocument();
  });
});
