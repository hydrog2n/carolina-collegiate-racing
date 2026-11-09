export type DestinationStatus = "current" | "on-this-page" | "pending";

export type Destination = {
  label: string;
  href?: string;
  status: DestinationStatus;
  note: string;
};

export const site = {
  name: "Carolina Collegiate Racing",
  abbreviation: "CCR",
  university: "University of South Carolina",
  affiliation: "Officially recognized student organization",
  description:
    "Carolina Collegiate Racing is a student-run motorsports team and an officially recognized University of South Carolina student organization, preparing to compete with a Miata-based program.",
} as const;

export const primaryNav = [
  { label: "Story", href: "/#story" },
  { label: "Team", href: "/#team" },
  { label: "Season", href: "/#season" },
  { label: "Partners", href: "/#partners" },
] as const;

export const mobileNav = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/#story" },
  { label: "The team", href: "/#team" },
  { label: "The program", href: "/#program" },
  { label: "Season status", href: "/#season" },
  { label: "Partners", href: "/#partners" },
  { label: "Join CCR", href: "/#join" },
  { label: "Contact", href: "/#contact" },
] as const;

export const destinations: Destination[] = [
  {
    label: "Home",
    href: "/",
    status: "current",
    note: "Current page",
  },
  {
    label: "Team / Members",
    href: "/#team",
    status: "on-this-page",
    note: "Homepage overview",
  },
  {
    label: "About / Our Story",
    href: "/#story",
    status: "on-this-page",
    note: "Homepage overview",
  },
  {
    label: "Events / Schedule",
    href: "/#season",
    status: "on-this-page",
    note: "Season status",
  },
  {
    label: "Sponsors / Partners",
    href: "/#partners",
    status: "on-this-page",
    note: "Partnership status",
  },
  {
    label: "Join CCR",
    href: "/#join",
    status: "on-this-page",
    note: "Recruitment status",
  },
  {
    label: "Contact",
    href: "/#contact",
    status: "on-this-page",
    note: "Channels being established",
  },
  {
    label: "Photo / Video Gallery",
    status: "pending",
    note: "Approved media pending",
  },
];

export const contact = {
  heading: "Contact",
  body: "Official contact channels are being established. Email, social profiles, and sponsorship inquiry details will be published here once confirmed.",
  status: "Contact channels pending",
} as const;
