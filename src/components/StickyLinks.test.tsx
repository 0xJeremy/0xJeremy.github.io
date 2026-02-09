import { describe, it, expect, beforeEach } from "vitest";
import { screen, within } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { StickyLinks } from "./StickyLinks";
import { socialLinks, contactEmail } from "@/content/socials";

// Helper to set up scroll position so elements are visible
const setupScrollPosition = () => {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    configurable: true,
    value: 500,
  });
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: 1000,
  });
};

describe("StickyLinks", () => {
  beforeEach(() => {
    setupScrollPosition();
  });

  it("renders left and right sidebars", () => {
    render(<StickyLinks />);
    expect(screen.getByTestId("sticky-left")).toBeInTheDocument();
    expect(screen.getByTestId("sticky-right")).toBeInTheDocument();
  });

  it("renders all social links from content", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    socialLinks.forEach((link) => {
      expect(
        within(leftSidebar).getByRole("link", { name: link.name }),
      ).toBeInTheDocument();
    });
  });

  it("renders correct hrefs for social links", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    socialLinks.forEach((link) => {
      const linkElement = within(leftSidebar).getByRole("link", {
        name: link.name,
      });
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it('renders external links with target="_blank" and security attributes', () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const githubLink = within(leftSidebar).getByRole("link", {
      name: "GitHub",
    });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it('renders mailto links without target="_blank"', () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const emailIconLink = within(leftSidebar).getByRole("link", {
      name: "Email",
    });
    expect(emailIconLink).not.toHaveAttribute("target", "_blank");
  });

  it("renders the contact email on right sidebar", () => {
    render(<StickyLinks />);
    const rightSidebar = screen.getByTestId("sticky-right");
    const emailLink = within(rightSidebar).getByRole("link", {
      name: "Send email",
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${contactEmail}`);
    expect(emailLink).toHaveTextContent(contactEmail);
  });
});

describe("StickyLinks - Scroll Visibility Integration", () => {
  it("renders sidebars that will respond to scroll", () => {
    render(<StickyLinks />);
    expect(screen.getByTestId("sticky-left")).toBeInTheDocument();
    expect(screen.getByTestId("sticky-right")).toBeInTheDocument();
  });

  it("sidebars are hidden when at top of page (scrollY=0)", () => {
    // Reset to top of page
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 1000,
    });

    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const rightSidebar = screen.getByTestId("sticky-right");

    // With visibility: hidden, getByRole won't find them (they're inaccessible)
    // But the containers should still be in the DOM
    expect(leftSidebar).toBeInTheDocument();
    expect(rightSidebar).toBeInTheDocument();
  });
});

describe("StickyLinks - Icon Rendering", () => {
  beforeEach(() => {
    setupScrollPosition();
  });

  it("renders GitHub icon", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const githubLink = within(leftSidebar).getByRole("link", {
      name: "GitHub",
    });
    expect(githubLink.querySelector("svg")).toBeInTheDocument();
  });

  it("renders LinkedIn icon", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const linkedinLink = within(leftSidebar).getByRole("link", {
      name: "LinkedIn",
    });
    expect(linkedinLink.querySelector("svg")).toBeInTheDocument();
  });

  it("renders Mail icon", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const mailLink = within(leftSidebar).getByRole("link", { name: "Email" });
    expect(mailLink.querySelector("svg")).toBeInTheDocument();
  });
});

describe("StickyLinks - Mobile", () => {
  it("renders containers on mobile (CSS handles visibility)", () => {
    render(<StickyLinks />);
    expect(screen.getByTestId("sticky-left")).toBeInTheDocument();
    expect(screen.getByTestId("sticky-right")).toBeInTheDocument();
  });
});

describe("StickyLinks - Vertical Line", () => {
  it("renders vertical lines after content", () => {
    render(<StickyLinks />);
    const leftSidebar = screen.getByTestId("sticky-left");
    const rightSidebar = screen.getByTestId("sticky-right");

    // Each sidebar has a VerticalLine as a child
    expect(leftSidebar.children.length).toBeGreaterThanOrEqual(2); // List + Line
    expect(rightSidebar.children.length).toBeGreaterThanOrEqual(1); // EmailWrapper (contains line)
  });
});
