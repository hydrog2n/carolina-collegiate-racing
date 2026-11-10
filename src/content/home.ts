export const heroContent = {
  name: "Carolina Collegiate Racing",
  affiliation: "University of South Carolina",
  heading: ["Eyes on", "the grid."],
  description:
    "A student-run motorsports organization at the University of South Carolina, bringing students together around racing and hands-on experience.",
  primaryCta: { label: "Join CCR", href: "/join" },
  secondaryCta: { label: "Partner with CCR", href: "/partners" },
  tertiaryCta: { label: "Explore the program", href: "#program" },
  facts: [
    { label: "Team", value: "Student-run" },
    { label: "Focus", value: "Miata-based" },
    { label: "Membership", value: "USC students & faculty" },
  ],
  imageNote: "Illustrative racing image",
} as const;

export const storyContent = {
  index: "01",
  label: "Who we are",
  heading: ["Build cars.", "Develop people."],
  intro:
    "Carolina Collegiate Racing is an officially recognized student organization at the University of South Carolina.",
  missionLabel: "What we're building toward",
  mission: [
    {
      title: "Build and operate competitive race cars.",
      detail:
        "Develop a competitive program through careful preparation and teamwork.",
    },
    {
      title: "Learn by doing.",
      detail:
        "Apply engineering and operations skills to vehicle preparation and race operations.",
    },
    {
      title: "Connect with industry.",
      detail:
        "Build relationships across motorsport and the automotive sector.",
    },
    {
      title: "Grow collegiate racing.",
      detail:
        "Work toward organizing racing events and collegiate competitions.",
    },
  ],
  cta: { label: "Read our story", href: "/story" },
  sponsorCta: { label: "Sponsor the program", href: "/partners" },
} as const;

export const programContent = {
  index: "02",
  label: "The program",
  heading: ["A Miata-based", "race program."],
  intro:
    "CCR's vehicle focus is primarily Miatas, and the team is pursuing wheel-to-wheel circuit racing. It is acquiring a vehicle and equipment to establish the program.",
  buildHeading: "The work around the car.",
  buildNote:
    "Vehicle preparation, setup choices, race strategy, and team operations are part of the effort.",
  disciplines: [
    {
      index: "01",
      kicker: "Competitive direction",
      name: "Circuit racing",
      detail:
        "CCR is pursuing wheel-to-wheel road racing. The car and crew are being prepared for circuit competition.",
    },
    {
      index: "02",
      kicker: "Planned arena",
      name: "Sim racing",
      detail:
        "Sim racing is being explored as another way to develop racecraft while the car program is built.",
    },
  ],
  roadAheadLabel: "The road ahead",
  roadAhead: [
    {
      title: "Prepare the car",
      detail: "Finish the vehicle and equipment package for competition.",
    },
    {
      title: "Build the crew",
      detail: "Develop the people and processes that will run the car.",
    },
    {
      title: "Enter competition",
      detail: "Pursue wheel-to-wheel entries when the program is ready.",
    },
  ],
  roadAheadNote:
    "Competition dates and entries will be published when confirmed.",
  instagramCta: "Follow the build on Instagram",
  joinCta: { label: "Join the build", href: "/join" },
} as const;

export const teamContent = {
  index: "03",
  label: "The team",
  heading: ["The people", "behind the car."],
  intro:
    "Students contribute across the engineering, logistics, and communications work that supports a racing program.",
  areasLabel: "Where students contribute",
  areasNote: "Members contribute across these areas as the program grows.",
  areas: [
    {
      title: "Engineering & build",
      detail:
        "Apply engineering to the car, its systems, and the work of preparing it.",
    },
    {
      title: "Operations & logistics",
      detail:
        "Plan the work, prepare equipment, and keep the program organized.",
    },
    {
      title: "Story & partnerships",
      detail:
        "Communicate the build and build relationships across the motorsport community.",
    },
  ],
  cta: { label: "Join the team", href: "/join" },
  pageCta: { label: "More about the team", href: "/team" },
} as const;

export const partnersContent = {
  index: "04",
  label: "Partners",
  heading: ["Partner with", "CCR."],
  intro:
    "Sponsorship supports student learning and the work of establishing CCR's racing program. The 2026–27 packet outlines the tiers, recognition, and where contributions go.",
  supportPoints: [
    {
      title: "Student experience",
      detail:
        "Support students applying engineering, operations, and communications skills in a competitive environment.",
    },
    {
      title: "A program in build",
      detail:
        "Help a new team prepare its car, build its crew, and reach competition.",
    },
  ],
  panelLabel: "Sponsorship · 2026–27",
  panelHeading: "Help put this program on the grid.",
  panelBody:
    "Tiers range from $250 to $10,000+, with recognition across the car, trailer, team apparel, and CCR channels. Review the packet for the full benefit table.",
  downloadLabel: "Download the 2026–27 packet",
  emailCtaLabel: "Email CCR",
  packetNote: "PDF",
} as const;

export const joinContent = {
  index: "05",
  label: "Join CCR",
  heading: ["Join", "the team."],
  intro:
    "Membership is open to University of South Carolina students and faculty. Whether your interest is engineering, operations, or communications, there is work to do.",
  body:
    "Email the team with a short introduction and the areas that interest you. They can share current next steps.",
  emailCtaLabel: "Email CCR",
  instagramCtaLabel: "Follow on Instagram",
  pageCta: { label: "Membership details", href: "/join" },
} as const;
