export const storyPage = {
  index: "01",
  label: "Our story",
  title: "A team in the making.",
  intro:
    "Carolina Collegiate Racing is an officially recognized, student-run motorsports organization at the University of South Carolina. We are building a Miata-based race program and the team that will run it.",
  meta: [
    { label: "Affiliation", value: "University of South Carolina" },
    { label: "Focus", value: "Miata-based racing" },
    { label: "Membership", value: "Students and faculty" },
  ],
  whoLabel: "Who we are",
  whoHeading: "A student team with a car at the center.",
  whoBody: [
    "CCR connects classroom learning with the demands of motorsport. Its mission is to build competitive race cars while developing the people and processes needed to operate them.",
    "Students can contribute across areas such as engineering, operations, and marketing. Membership is open to University of South Carolina students and faculty.",
  ],
  nowLabel: "Where we are now",
  nowHeading: "Establishing the racing program.",
  nowBody:
    "CCR is acquiring a vehicle and equipment to establish its racing program, with an initial focus on Mazda MX-5 Miatas.",
  nowNote:
    "No competition entries or season dates have been announced.",
  engineeringLabel: "Rooted in engineering",
  engineeringHeading: "Learning beyond the classroom.",
  engineeringBody:
    "A racing program depends on many kinds of work, from vehicle systems and data to logistics and communications. CCR connects students' skills and interests with motorsport.",
  primaryCta: { label: "Inside the team", href: "/team" },
  secondaryCta: { label: "Join CCR", href: "/join" },
} as const;

export const teamPage = {
  index: "02",
  label: "The team",
  title: "The people behind the car.",
  intro:
    "CCR is built by students taking on the engineering, logistics, and communications work that keeps a race program moving. Membership is open to University of South Carolina students and faculty.",
  meta: [
    { label: "Membership", value: "USC students and faculty" },
    { label: "Work areas", value: "Engineering, operations, story" },
  ],
  areasLabel: "Where students can contribute",
  areasHeading: "Work across the program.",
  areasBody:
    "These are opportunities to learn by doing, not a fixed roster of departments. Members contribute where the program needs them.",
  areas: [
    {
      title: "Engineering & build",
      detail:
        "Work on the car, its systems, and the preparation that turns parts into a race-ready vehicle.",
    },
    {
      title: "Operations & logistics",
      detail:
        "Plan the work, organize equipment, and build the processes a race team needs.",
    },
    {
      title: "Story & partnerships",
      detail:
        "Document the build, communicate the program, and develop relationships across motorsport.",
    },
  ],
  rosterLabel: "Member profiles",
  rosterHeading: "Member profiles.",
  rosterBody: "Member names and leadership details are not listed here.",
  photoLabel: "Team portrait",
  workshopLabel: "Workshop and preparation",
  primaryCta: { label: "Join the team", href: "/join" },
  secondaryCta: { label: "Back to the program", href: "/#program" },
} as const;

export const eventsPage = {
  index: "03",
  label: "Events",
  title: "Events & schedule.",
  intro:
    "Competition entries, team events, and sim racing activities will be listed here as they are scheduled.",
  meta: [
    { label: "Circuit racing", value: "Preparing" },
    { label: "Sim racing", value: "Planned" },
  ],
  emptyLabel: "Upcoming",
  emptyHeading: "No events on the calendar yet.",
  emptyBody:
    "Confirmed entries and team activities will appear here.",
  directionsLabel: "What we're pursuing",
  directionsHeading: "Two ways to develop racecraft.",
  directions: [
    {
      title: "Wheel-to-wheel circuit racing",
      detail:
        "CCR is pursuing wheel-to-wheel road racing and preparing the car and crew for circuit competition.",
    },
    {
      title: "Sim racing",
      detail:
        "Sim racing is a planned arena for developing racecraft. No year-round competition schedule is established.",
    },
  ],
  updatesLabel: "Instagram",
  updatesHeading: "Follow Carolina Collegiate Racing.",
  updatesBody:
    "Follow the team's Instagram account or email CCR with a question about upcoming activities.",
  primaryCta: { label: "Follow on Instagram", href: "" },
  secondaryCta: { label: "Contact CCR", href: "/contact" },
} as const;

export const partnersPage = {
  index: "04",
  label: "Partners",
  title: "Partner with CCR.",
  intro:
    "Sponsorship supports student learning and the work of establishing a collegiate racing program at the University of South Carolina. The 2026–27 packet contains the full tiers and benefits.",
  meta: [
    { label: "Sponsorship year", value: "2026–2027" },
    { label: "Tiers", value: "$250 to $10,000+" },
    { label: "Packet", value: "PDF · 4.7 MB" },
  ],
  supportLabel: "Where support goes",
  supportHeading: "Support practical student learning.",
  supportBody:
    "Your support helps CCR build the resources and experiences that turn student interest into practical capability.",
  tiersLabel: "2026–27 sponsorship tiers",
  tiersHeading: "Recognition follows the level of support.",
  tiersBody:
    "The benefit table summarizes the 2026–27 packet. Contact the team with placement or fulfillment questions.",
  stepsLabel: "Become a sponsor",
  stepsHeading: "Three steps to support the program.",
  primaryCta: { label: "Email CCR", href: "" },
  secondaryCta: { label: "Contact CCR", href: "/contact" },
} as const;

export const joinPage = {
  index: "05",
  label: "Join CCR",
  title: "Join the team.",
  intro:
    "Membership is open to University of South Carolina students and faculty. Contribute across the work of establishing a racing program.",
  opportunitiesLabel: "Where you can help",
  opportunitiesHeading: "There is work across the program.",
  opportunities: [
    {
      title: "Engineering & build",
      detail:
        "Help prepare the car, understand its systems, and solve the problems that come with building a race program.",
    },
    {
      title: "Operations & logistics",
      detail:
        "Keep the work organized, prepare equipment, and help the team operate like a race team.",
    },
    {
      title: "Story & partnerships",
      detail:
        "Tell the story of the build and develop relationships with the motorsport community.",
    },
  ],
  howLabel: "How to get involved",
  howHeading: "Start with an email.",
  howBody:
    "Tell the team about your interests and ask about current ways to get involved.",
  note: "Email is the current contact for membership questions.",
  primaryCta: { label: "Email CCR", href: "" },
  secondaryCta: { label: "Follow on Instagram", href: "" },
} as const;

export const contactPage = {
  index: "06",
  label: "Contact",
  title: "Contact CCR.",
  intro:
    "For questions about the program, sponsorship, or membership, email the team.",
  meta: [
    { label: "Affiliation", value: "University of South Carolina" },
    { label: "Instagram", value: "@carolina_collegiate_racing" },
  ],
  channelsLabel: "Email the team",
  channels: [
    {
      label: "General inquiries",
      detail:
        "For questions about the organization, the program, or anything that does not fit the other paths.",
      subject: "general",
      cta: "Email CCR",
    },
    {
      label: "Membership",
      detail:
        "For University of South Carolina students and faculty interested in joining.",
      subject: "join",
      cta: "Ask about joining",
    },
    {
      label: "Sponsorship",
      detail:
        "For the 2026–27 sponsorship packet, tiers, benefits, and partnership questions.",
      subject: "sponsorship",
      cta: "Ask about sponsorship",
    },
  ],
  instagramLabel: "Instagram",
  instagramBody:
    "Connect with Carolina Collegiate Racing on Instagram.",
} as const;

export const galleryPage = {
  index: "07",
  label: "Gallery",
  title: "Photo & video gallery.",
  intro:
    "A place for photographs and video from Carolina Collegiate Racing.",
  meta: [{ label: "Updates", value: "Instagram" }],
  emptyLabel: "Gallery",
  emptyHeading: "No gallery items yet.",
  emptyBody:
    "This space is for photography and video from Carolina Collegiate Racing.",
  categoriesLabel: "Planned areas",
  categories: [
    {
      title: "Race weekends",
      detail: "Competition and trackside photography.",
    },
    {
      title: "Workshop",
      detail: "Vehicle preparation and technical work.",
    },
    {
      title: "The team",
      detail: "Members and team activities.",
    },
  ],
  primaryCta: { label: "Follow on Instagram", href: "" },
  secondaryCta: { label: "Contact CCR", href: "/contact" },
} as const;
