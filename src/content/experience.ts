/**
 * Work Experience Content
 *
 * Edit this file to update work experience on the home page.
 * Structure mirrors a resume for easy copy/paste.
 *
 * Each entry represents a company/organization.
 * Each role represents a position held at that organization.
 */

import type { TimelineEntry } from "@/types/timeline";

export const experienceContent = {
  /** Section title displayed above the cards */
  title: "Work Experience",

  /** Optional subtitle */
  subtitle: "My professional journey so far",

  /** Work experience entries - most recent first */
  entries: [
    {
      id: "markforged",
      organization: "Markforged",
      location: "Waltham, MA",
      overallDuration: "2019 - Present",
      logoUrl: "/static/logos/markforged.png",
      roles: [
        {
          title: "Senior Software Engineer",
          duration: "June 2023 - Present",
          bullets: [
            "Lead design and implementation of cross-team features that spanned from hardware control to cloud data ingestion pipelines, improving pre-emptive device error detection and device thermal modeling.",
            "Coordinated fundamental architectural features between hardware platform team and cloud-based software teams to provide a seamless user experience across the 3D printing ecosystem.",
            "Worked closely with the product management and program management teams to plan and scope new initiatives and provided scoping and timelines to the software teams involved.",
            "Mentored junior software engineers in system design, software architecture, and testing best practices.",
          ],
        },
        {
          title: "Software Engineer II",
          duration: "October 2022 - June 2023",
          bullets: [
            "Implemented core functionality and device workflows for multiple new hardware products, including per-device automatic thermal and mechanical calibrations, and error detection and correction.",
            "Supported multiple engineering teams during initial manufacturing and testing new devices.",
          ],
        },
        {
          title: "Software Engineer",
          duration: "June 2021 - September 2022",
          bullets: [
            "Designed core infrastructure for a new printer software platform, including a real-time hardware telemetry system and user workflows guiding customers through calibration procedures.",
            "Implemented a data security and integrity pipeline for print-jobs being sent remotely to printers, and ensuring all data reported from the printers was encrypted and signed for integrity.",
          ],
        },
        {
          title: "Software Engineer Intern",
          duration: "May - August 2020",
          bullets: [
            "Designed and implemented an automatic multi-point print bed leveling compensation procedure that ensured consistent and repeatable machine zeroing before every print.",
          ],
        },
        {
          title: "Software Engineer Intern",
          duration: "May - August 2019",
          bullets: [
            "Developed a novel procedure for calibrating 3D printers before each print by determining the extrusion health of the system using closed-loop laser based on-device scanning.",
          ],
        },
      ],
    },
    {
      id: "microsoft",
      organization: "Microsoft",
      location: "Cambridge, MA",
      overallDuration: "January - May 2020",
      logoUrl: "/static/logos/microsoft.png",
      roles: [
        {
          title: "Makerspace Lead",
          duration: "January - May 2020",
          bullets: [
            "Managed operations, expanded makerspace capabilities, maintained and operated lab equipment.",
          ],
        },
      ],
    },
    {
      id: "nolop-makerspace",
      organization: "Nolop Makerspace, Tufts University",
      location: "Medford, MA",
      overallDuration: "January 2019 - May 2021",
      logoUrl: "/static/logos/nolop.png",
      roles: [
        {
          title: "Fabrication Supervisor",
          duration: "January 2019 - May 2021",
          bullets: [
            "Train and mentor students in fabrication techniques and project design.",
          ],
        },
      ],
    },
    {
      id: "tufts-ta",
      organization: "School of Engineering, Tufts University",
      location: "Medford, MA",
      overallDuration: "2019 - 2021",
      logoUrl: "/static/logos/tufts.jpg",
      roles: [
        {
          title: "Teaching Assistant",
          duration: "2019 - 2021",
          description:
            "Courses: Robotics and Mechatronics (2020, 2021), Electromechanical Systems and Robotics (2020), Simple Robotics (2019, 2020), Data Structures (2019), Introduction to Computer Science (2019), Introduction to Computing in Engineering (2019, 2020)",
        },
      ],
    },
  ] satisfies TimelineEntry[],
};
