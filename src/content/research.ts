/**
 * Research Experience Content
 *
 * Edit this file to update research experience on the home page.
 */

import type { TimelineEntry } from "@/types/timeline";

export const researchContent = {
  /** Section title displayed above the cards */
  title: "Research",

  /** Optional subtitle */
  subtitle: void 0,

  /** Research entries - most recent first */
  entries: [
    {
      id: "tufts-asar",
      organization: "Tufts University, Department of Mechanical Engineering",
      location: "Medford, MA",
      overallDuration: "May 2018 - December 2018",
      logoUrl: "/sandbox/static/logos/tufts.jpg",
      roles: [
        {
          title: "Undergraduate Research Project",
          duration: "May 2018 - December 2018",
          description:
            "Autonomous Systems and Robotics (ASAR) Lab, PI: Prof. Jason Rife",
          bullets: [
            "Developed and implemented software infrastructure for the three-dimensional positioning and feedback control of multiple autonomous quadcopter UAVs.",
          ],
        },
      ],
    },
  ] satisfies TimelineEntry[],
};
