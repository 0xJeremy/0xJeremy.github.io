/**
 * Patents Content
 *
 * Edit this file to update patents on the home page.
 */

export interface Patent {
  id: string;
  title: string;
  inventors: string[];
  applicationNumber: string;
  filedDate: string;
  link?: string;
}

export const patentsContent = {
  /** Section title displayed above the cards */
  title: "Patents",

  /** Optional subtitle */
  subtitle: void 0,

  /** Patent entries */
  entries: [
    {
      id: "extrusion-health",
      title: "Determination of Extrusion Component Health In 3D Printing",
      inventors: [
        "Jeremy Kanovsky",
        "Harrison Davis",
        "Nicholas Kalweit",
        "Bruce Jones",
      ],
      applicationNumber: "U.S. Patent Application No. 20250222656",
      filedDate: "January 6, 2025",
      link: "https://patents.google.com/patent/US20250222656A1",
    },
  ] satisfies Patent[],
};
