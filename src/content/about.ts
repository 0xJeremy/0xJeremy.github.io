/**
 * About Section Content
 *
 * Edit this file to change the About Me preview on the home page.
 * For the full About Me page, see src/pages/AboutMe.tsx
 *
 * Paragraphs can be:
 * - Plain strings: "Hello, I'm a developer."
 * - Objects with links: { text: "I work at {company}.", links: { company: { text: "Acme", href: "..." } } }
 *
 * Use {linkKey} placeholders in text, then define linkKey in the links object.
 */

import type { AboutParagraph } from "@/components/sections";

export const aboutContent = {
  /** Section title displayed in the header */
  title: "About Me",

  /** Section number for header (e.g., "01") - optional */
  sectionNumber: "01",

  /**
   * Paragraphs of text - can be plain strings or objects with links.
   * Links use {key} placeholders that get resolved from the links object.
   */
  paragraphs: [
    {
      text: "Hello! My name is Jeremy and I write code that lives and runs on hardware. Specifically, I enjoy writing code for robots, 3D printers, and embedded systems. I currently work at {markforged} writing software that powers next generation 3D printers. Previously I've worked at the {msgarage} and the {nolop}.",
      links: {
        markforged: { text: "Markforged", href: "https://markforged.com/" },
        msgarage: {
          text: "Microsoft Garage",
          href: "https://www.microsoft.com/en-us/garage/",
        },
        nolop: { text: "Nolop Makerspace", href: "https://nolop.org/" },
      },
    },
    "In my free time, I build open-source libraries, robots, and design circuit boards. I like to read, and climb up then fall off rocks.",
  ] satisfies (string | AboutParagraph)[],

  /** Profile image (optional - shows placeholder if omitted) */
  image: {
    url: "/me.jpg",
    alt: "Photo of Jeremy Kanovsky",
  },
};
