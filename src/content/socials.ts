/**
 * Social Links Content
 *
 * Configuration for the sticky social links sidebar.
 * Update these values to customize your social links and contact email.
 */

export interface SocialLink {
  /** Display name for accessibility */
  name: string;
  /** URL to navigate to */
  href: string;
  /** Icon name from lucide-react (e.g., 'Github', 'Linkedin', 'Mail') */
  icon: "Github" | "Linkedin" | "Mail" | "Twitter" | "Instagram" | "Youtube";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/0xJeremy",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeremy-kanovsky/",
    icon: "Linkedin",
  },
  {
    name: "Email",
    href: "mailto:kanovsky.jeremy@gmail.com",
    icon: "Mail",
  },
];

export const contactEmail = "kanovsky.jeremy@gmail.com";
