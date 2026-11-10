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
  { label: "Our story", href: "/story" },
  { label: "The team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const mobileNav = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/story" },
  { label: "The team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Join CCR", href: "/join" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const footerNav = mobileNav;

export const homeSectionLinks = [
  { id: "top", label: "Home" },
  { id: "story", label: "Story" },
  { id: "program", label: "Program" },
  { id: "team", label: "Team" },
  { id: "partners", label: "Partners" },
  { id: "join", label: "Join" },
  { id: "contact", label: "Contact" },
] as const;

export const storySectionLinks = [
  { id: "top", label: "Story" },
  { id: "who-we-are", label: "Who we are" },
  { id: "program-direction", label: "The program" },
  { id: "mission", label: "Mission" },
  { id: "engineering", label: "Engineering" },
  { id: "join-cta", label: "Join" },
] as const;

export const teamSectionLinks = [
  { id: "top", label: "The team" },
  { id: "work-areas", label: "Ways to contribute" },
  { id: "member-profiles", label: "Member profiles" },
  { id: "join-cta", label: "Join" },
] as const;

export const eventsSectionLinks = [
  { id: "top", label: "Events" },
  { id: "upcoming", label: "Upcoming" },
  { id: "directions", label: "Racing directions" },
  { id: "updates-cta", label: "Follow CCR" },
] as const;

export const partnersSectionLinks = [
  { id: "top", label: "Partners" },
  { id: "support", label: "Support" },
  { id: "tiers", label: "Sponsorship tiers" },
  { id: "steps", label: "How to sponsor" },
  { id: "contact-cta", label: "Contact" },
] as const;

export const joinSectionLinks = [
  { id: "top", label: "Join CCR" },
  { id: "opportunities", label: "Ways to contribute" },
  { id: "how-to-join", label: "Getting involved" },
  { id: "join-cta", label: "Contact" },
] as const;

export const contactSectionLinks = [
  { id: "top", label: "Contact" },
  { id: "email", label: "Email the team" },
  { id: "instagram", label: "Instagram" },
  { id: "contact-cta", label: "Contact options" },
] as const;

export const gallerySectionLinks = [
  { id: "top", label: "Gallery" },
  { id: "gallery", label: "Photo & video" },
  { id: "follow-cta", label: "Follow CCR" },
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
