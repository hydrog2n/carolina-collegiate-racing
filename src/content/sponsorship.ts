export const sponsorshipTiers = [
  { name: "Cocky", price: "$10,000+" },
  { name: "Garnet", price: "$5,000+" },
  { name: "Black", price: "$2,500+" },
  { name: "White", price: "$1,000+" },
  { name: "Blue", price: "$250+" },
] as const;

export const sponsorshipBenefits = [
  {
    label: "Logo on race car",
    values: ["Large", "Medium", "Small", "—", "—"],
  },
  {
    label: "Logo on trailer",
    values: ["Medium", "Small", "—", "—", "—"],
  },
  {
    label: "Logo/name on T-shirt",
    values: ["Large", "Large", "Medium", "Small", "—"],
  },
  {
    label: "Logo/name on banner*",
    values: ["Large", "Large", "Medium", "Small", "—"],
  },
  {
    label: "Complimentary T-shirts",
    values: ["4", "2", "1", "—", "—"],
  },
  {
    label: "Social media recognition with sponsor website link",
    values: ["Included", "Included", "Included", "Included", "Included"],
  },
  {
    label: "Email announcement with sponsor website link",
    values: ["Included", "Included", "Included", "Included", "Included"],
  },
  {
    label: "Recognition on CCR meeting presentation slides",
    values: ["Included", "Included", "Included", "Included", "—"],
  },
] as const;

export const sponsorshipNotes = [
  "* Cocky and Garnet banners will be hung at all CCR meetings leading up to competitions and brought to all major CCR events, including car shows and races.",
  "Email announcements reach CCR members and faculty leaders. — Not included.",
  "Presentation-slide recognition applies at all CCR meetings.",
] as const;

export const supportAreas = [
  {
    title: "Competition expenses",
    detail:
      "Entry fees, travel, accommodations, and opportunities for students to gain practical technical and professional experience.",
  },
  {
    title: "Vehicle, equipment & technical development",
    detail:
      "Vehicle preparation, materials, tools, safety equipment, and technical workshops as CCR establishes its racing program.",
  },
  {
    title: "Professional development & networking",
    detail:
      "Conferences, guest speakers, networking opportunities, résumé preparation, interview preparation, and professional development resources.",
  },
  {
    title: "Bonding, community & recognition",
    detail:
      "Team-building activities, student recognition, celebrations, and opportunities that encourage participation and community engagement.",
  },
] as const;

export const sponsorshipSteps = [
  {
    title: "Choose a tier",
    detail:
      "Review the sponsorship packages in the packet and select the level that fits your organization.",
  },
  {
    title: "Make a contribution",
    detail:
      "Contributions are made through the official University of South Carolina Carolina Collegiate Racing Fund. Consult the university and your tax advisor regarding the tax treatment of your contribution.",
  },
  {
    title: "Send the form",
    detail:
      "Email the completed sponsorship form with your company logo and donation confirmation or receipt reference, where available.",
  },
] as const;
