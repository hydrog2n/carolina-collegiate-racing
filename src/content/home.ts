export type FactStatus = "confirmed" | "planned" | "to-be-announced";

export type HeroFact = {
  label: string;
  value: string;
  status: FactStatus;
};

export const heroContent = {
  eyebrow: "Student-run motorsports",
  affiliation: "University of South Carolina",
  heading: ["Eyes on", "the grid."],
  description:
    "Carolina Collegiate Racing is a student-run motorsports team building a competitive program at the University of South Carolina. We are preparing to compete — and building the team to get there.",
  primaryCta: { label: "Explore the team", href: "#team" },
  secondaryCta: { label: "Partner with CCR", href: "#partners" },
  panel: {
    label: "CCR / Program",
    status: "Pre-competition",
    facts: [
      { label: "Vehicle focus", value: "Mazda Miata" },
      { label: "Racing scope", value: "Multiple disciplines" },
    ],
    disciplines: "Wheel-to-wheel / Sim racing",
  },
  facts: [
    { label: "Team", value: "Student-run", status: "confirmed" },
    { label: "Program", value: "Miata-based", status: "confirmed" },
    { label: "Racing", value: "Circuit + sim", status: "planned" },
    { label: "Stage", value: "Pre-competition", status: "confirmed" },
  ] satisfies HeroFact[],
} as const;

export const storyContent = {
  index: "01",
  label: "Who we are",
  heading: ["A new team.", "A serious brief."],
  intro:
    "Carolina Collegiate Racing is a student-run motorsports team and an officially recognized University of South Carolina student organization. We are building the program from the ground up — with real cars, real responsibility, and a standard that reaches beyond the classroom.",
  note:
    "CCR is recently founded and preparing to compete. That means we are clear about where we are: building the team, the car program, and the road to the grid.",
  commitments: [
    {
      title: "Build and operate competitive race cars.",
      detail:
        "A car program is at the center of CCR. The team's vehicle focus is primarily Miatas.",
    },
    {
      title: "Give students hands-on motorsports and engineering experience.",
      detail:
        "Members learn by doing — taking on the technical and operational work a race program demands.",
    },
    {
      title: "Develop professional motorsports and automotive industry connections.",
      detail:
        "Connecting students with the people, teams, and companies that move the sport forward.",
    },
    {
      title: "Organize racing events and collegiate competitions.",
      detail:
        "Building more opportunities for collegiate racers to compete and learn together.",
    },
  ],
} as const;

export const teamContent = {
  index: "02",
  label: "The team",
  heading: ["Student-run.", "Race", "focused."],
  intro:
    "A race team is more than a driver. CCR is being built by students who take on the work behind the car — the engineering, the planning, and the communication that turns an idea into a program.",
  areas: [
    {
      title: "Design & build",
      detail:
        "Apply engineering and hands-on problem solving to the car and the systems around it.",
    },
    {
      title: "Plan & operate",
      detail:
        "Keep the program moving through logistics, preparation, and race-day organization.",
    },
    {
      title: "Connect & communicate",
      detail:
        "Tell CCR's story and build the relationships that support a new team.",
    },
  ],
  rosterNote:
    "Leadership and member profiles are being finalized. CCR will publish its roster once details are confirmed.",
  cta: { label: "Recruitment status", href: "#join" },
} as const;

export const programContent = {
  index: "03",
  label: "The program",
  heading: ["Miatas.", "Multiple disciplines.", "One direction."],
  intro:
    "CCR's vehicle focus is primarily Miatas. The team is pursuing wheel-to-wheel circuit racing and sim racing as it prepares for competition.",
  specs: [
    {
      label: "Vehicle focus",
      value: "Mazda Miata",
      status: "confirmed",
    },
    {
      label: "Racing scope",
      value: "Multiple disciplines",
      status: "confirmed",
    },
    {
      label: "Circuit racing",
      value: "Planned / pursued",
      status: "planned",
    },
    {
      label: "Sim racing",
      value: "Planned / pursued",
      status: "planned",
    },
    {
      label: "Current stage",
      value: "Preparing to compete",
      status: "confirmed",
    },
    {
      label: "Technical details",
      value: "To be announced",
      status: "to-be-announced",
    },
  ] satisfies {
    label: string;
    value: string;
    status: FactStatus;
  }[],
  note:
    "Vehicle generation, specifications, competition series, and the race calendar are not yet public. Details will be added when confirmed.",
  disciplines: [
    {
      name: "Circuit racing",
      status: "planned",
      detail:
        "Wheel-to-wheel circuit racing is part of CCR's competitive direction. Series entries and the driver lineup will be announced when confirmed.",
    },
    {
      name: "Sim racing",
      status: "planned",
      detail:
        "Sim racing gives the team another arena to develop racecraft and compete. Platform, schedule, and participation details are not yet confirmed.",
    },
  ],
} as const;

export const seasonContent = {
  index: "04",
  label: "Season status",
  heading: ["Preparing", "to compete."],
  intro:
    "CCR is a recently founded team in its pre-competition phase. There is no published race calendar or results history yet.",
  note:
    "No confirmed entries, dates, or results have been published. When they are, they will appear here.",
  statuses: [
    { label: "Current phase", value: "Pre-competition" },
    { label: "Competition calendar", value: "To be announced" },
    { label: "Results", value: "None published" },
  ],
} as const;

export const partnersContent = {
  index: "05",
  label: "Partners",
  heading: ["Build it", "with us."],
  intro:
    "CCR is preparing to compete and developing the partnerships that will support the program. Confirmed partners will be announced as relationships are finalized.",
  statusPanel: {
    label: "Partner status",
    heading: "Announcements pending.",
    body:
      "Verified partner relationships will be listed here as they are finalized.",
    rows: [
      { label: "Confirmed partners", value: "None listed yet" },
      { label: "Sponsorship information", value: "Being finalized" },
      { label: "Inquiry channel", value: "Being established" },
    ],
  },
  supportPoints: [
    {
      title: "Student experience",
      detail:
        "Help students apply engineering, operations, and communications skills in a real motorsports program.",
    },
    {
      title: "A program in build",
      detail:
        "Support a newly founded team as it moves from preparation toward the grid.",
    },
  ],
} as const;

export const joinContent = {
  index: "06",
  label: "Join CCR",
  heading: ["Make it", "move."],
  intro:
    "If you want to help build a motorsports program from the ground up, CCR is a place to do real work. A race team needs people who can design, organize, communicate, and follow through.",
  statusPanel: {
    label: "Recruitment status",
    heading: "Details pending.",
    body:
      "Recruitment eligibility, meeting information, and application steps are being finalized. Application details are not yet published.",
    rows: [
      { label: "Applications", value: "Not published" },
      { label: "Eligibility", value: "Being finalized" },
      { label: "Meetings", value: "To be announced" },
    ],
  },
} as const;
