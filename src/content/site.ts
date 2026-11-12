export const site = {
  name: "Carolina Collegiate Racing",
  abbreviation: "CCR",
  university: "University of South Carolina",
  affiliation: "Officially recognized student organization",
  description:
    "Carolina Collegiate Racing is a student-run motorsports team and an officially recognized University of South Carolina student organization, building a Miata-based race program and preparing to compete.",
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
] as const;

export const mobileNav = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Join CCR", href: "/join" },
] as const;

export const footerNav = mobileNav;

export const homeSectionLinks = [
  { id: "top", label: "Home" },
  { id: "about", label: "About us" },
  { id: "program", label: "Program" },
  { id: "team", label: "Team" },
  { id: "partners", label: "Sponsor Us" },
] as const;

export const aboutSectionLinks = [
  { id: "top", label: "About us" },
  { id: "who-we-are", label: "Who we are" },
  { id: "program-direction", label: "The program" },
  { id: "mission", label: "Mission" },
  { id: "engineering", label: "Engineering" },
] as const;

export const teamSectionLinks = [
  { id: "member-profiles", label: "Our Roster" },
  { id: "exec", label: "Executive Board" },
  { id: "business", label: "Business" },
  { id: "marketing", label: "Marketing" },
  { id: "technical", label: "Technical" },
  { id: "trackside-operations", label: "Trackside operations" },
  { id: "race-engineers", label: "Race Engineers/Strategists" },
  { id: "sim-team", label: "Sim Team" },
  { id: "safety", label: "Safety" },
  { id: "driver-controls", label: "Driver Controls/Drivers" },
] as const;

export const eventsSectionLinks = [
  { id: "top", label: "Events" },
  { id: "upcoming", label: "Upcoming" },
  { id: "directions", label: "Racing directions" },
] as const;

export const partnersSectionLinks = [
  { id: "top", label: "Partners" },
  { id: "steps", label: "How to sponsor" },
  { id: "tiers", label: "Sponsorship tiers" },
  { id: "support", label: "Support" },
  { id: "contact-cta", label: "Sponsorship" },
] as const;

export const joinSectionLinks = [
  { id: "top", label: "Join CCR" },
  { id: "opportunities", label: "Ways to contribute" },
  { id: "how-to-join", label: "Getting involved" },
  { id: "join-cta", label: "Email CCR" },
] as const;

export const gallerySectionLinks = [
  { id: "top", label: "Gallery" },
  { id: "gallery", label: "Photo & video" },
] as const;

export const contact = {
  email: "carolinacollegiateracing@gmail.com",
  instagramHandle: "@carolina_collegiate_racing",
  instagramUrl: "https://www.instagram.com/carolina_collegiate_racing/",
  generalSubject: "General inquiry — Carolina Collegiate Racing",
  sponsorshipSubject: "Sponsorship inquiry — Carolina Collegiate Racing",
  joinSubject: "Joining Carolina Collegiate Racing",
  body: "For sponsorship, membership, and general questions, email the team.",
} as const;

export const sponsorship = {
  packetPath: "/docs/CCR_Sponsorship_Packet_2026-2027_v4.pdf",
  packetSize: "4.7 MB",
  year: "2026–2027",
} as const;

export function mailto(subject: string = contact.generalSubject) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
