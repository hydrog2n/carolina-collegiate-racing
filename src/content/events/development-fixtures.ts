import type { ScheduleEvent } from "@/lib/events/schema";

export function getEasternDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function dateOffset(days: number, today: string) {
  const [year, month, day] = today.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function getMonthBoundaryRange(today: string) {
  const [year, month, day] = today.split("-").map(Number);
  const finalDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const daysUntilMonthEnd = finalDay - day;
  return {
    start: dateOffset(daysUntilMonthEnd, today),
    end: dateOffset(daysUntilMonthEnd + 2, today),
  };
}

function getYearBoundaryRange(today: string) {
  const [year] = today.split("-").map(Number);
  const currentYearEnd = `${year}-12-31`;
  const start = currentYearEnd >= today ? currentYearEnd : `${year + 1}-12-31`;
  const end = new Date(
    Date.UTC(
      Number(start.slice(0, 4)),
      Number(start.slice(5, 7)) - 1,
      Number(start.slice(8, 10)) + 2,
    ),
  )
    .toISOString()
    .slice(0, 10);
  return { start, end };
}

const safeDemoAction = {
  label: "SAMPLE LINK",
  href: "https://example.com/",
};

export function getDevelopmentEventFixtures(today: string): ScheduleEvent[] {
  const monthBoundary = getMonthBoundaryRange(today);
  const yearBoundary = getYearBoundaryRange(today);

  return [
    {
      id: "fixture-piedmont-track-day",
      title: "Piedmont Open Lapping Day",
      category: "Track Days",
      startDate: dateOffset(-40, today),
      allDay: false,
      startTime: "08:00",
      endTime: "16:30",
      venue: {
        name: "Piedmont Raceway Park (fictional venue)",
        kind: "physical",
        address: "Columbia region, South Carolina",
      },
      summary: "A sample open-track day with classroom and paddock sessions.",
      description:
        "A fictional track-day listing for testing date blocks, venue details, and event descriptions. The sample itinerary includes a morning drivers' briefing, paced sessions on track, and a wrap-up in the paddock. This is not a real event and is not affiliated with Carolina Collegiate Racing.",
      status: "confirmed",
      registration: "closed",
      image: {
        src: "/images/miata_background.webp",
        alt: "Illustrative motorsports image, not a photo of this fictional event.",
      },
      actions: [safeDemoAction],
    },
    {
      id: "fixture-autocross-course-lab",
      title: "Cone Course Fundamentals",
      category: "Autocross",
      startDate: dateOffset(-21, today),
      allDay: true,
      venue: {
        name: "Midlands Driver Training Lot (fictional venue)",
        kind: "physical",
        address: "Columbia region, South Carolina",
      },
      summary: "A single-day sample autocross course and safety walkthrough.",
      description:
        "This fictional all-day autocross example is designed to check how a compact title, date block, and concise event description fit together. No real registration or competition is associated with this fixture.",
      status: "cancelled",
      registration: "closed",
    },
    {
      id: "fixture-sim-wet-weather",
      title: "Late Apex: Wet-Weather Setup Lab",
      category: "Sim Racing",
      startDate: dateOffset(-4, today),
      allDay: false,
      startTime: "19:00",
      endTime: "20:30",
      venue: {
        name: "Virtual / browser-based room",
        kind: "online",
      },
      summary: "A fictional online setup session for the sim-racing category.",
      description:
        "Sample online event details include a short technical exercise, a shared setup review, and a closing Q&A. The virtual location is descriptive only; this fixture does not include a real meeting room or participation link.",
      status: "postponed",
      registration: "full",
    },
    {
      id: "fixture-club-race-weekend",
      title:
        "Mid-Atlantic Club Racing Weekend: Practice, Qualifying, and Feature Sessions",
      category: "Wheel-to-Wheel Racing",
      startDate: dateOffset(-1, today),
      endDate: dateOffset(1, today),
      allDay: true,
      venue: {
        name: "Lakeview Motor Circuit (fictional venue)",
        kind: "physical",
        address: "Upstate South Carolina (fictional location)",
      },
      summary: "A multi-day fictional club-racing weekend with a long title.",
      description:
        "This intentionally long sample description exercises the event detail modal with a dense block of text. Across a fictional three-day club-racing format, the example agenda moves from paddock arrival and safety orientation to practice groups, qualifying simulations, and a final review. The event, venue, schedule, and all listed activities are invented solely to test the Schedule page; they do not represent a Carolina Collegiate Racing entry, competition, or announcement.",
      status: "tentative",
      registration: "open",
      image: {
        src: "/images/miata_background.webp",
        alt: "Illustrative motorsports image, not a photo of this fictional event.",
      },
      actions: [safeDemoAction, { ...safeDemoAction, label: "View another safe demo link" }],
    },
    {
      id: "fixture-body-meeting-november",
      title: "General Body Meeting: Winter Work Plan",
      category: "General Body Meetings",
      startDate: dateOffset(0, today),
      allDay: false,
      startTime: "18:00",
      endTime: "19:15",
      venue: {
        name: "Student Union Annex (sample venue)",
        kind: "physical",
        address: "Columbia, South Carolina",
        room: "Room 214",
      },
      summary: "A recurring meeting example with a campus room and TODAY marker.",
      description:
        "A fictional recurring-meeting record for testing the TODAY badge, room number, and series identifier. The example agenda covers work planning and an open discussion. It is not an announced or scheduled CCR meeting.",
      status: "confirmed",
      seriesId: "fixture-monthly-general-body",
      actions: [safeDemoAction],
    },
    {
      id: "fixture-volunteer-sort",
      title: "Community Gear-Sort Morning",
      category: "Volunteering",
      startDate: dateOffset(1, today),
      allDay: false,
      startTime: "09:00",
      endTime: "12:00",
      venue: {
        name: "Riverbend Community Workshop (fictional venue)",
        kind: "physical",
        address: "Columbia region, South Carolina",
      },
      summary: "A short, fictional volunteer activity with no registration link.",
      description:
        "A sample volunteer listing used to check a short description, timed schedule, and an event with no actions. All details are invented and do not describe an actual CCR activity.",
      status: "tentative",
    },
    {
      id: "fixture-online-member-orientation",
      title: "Sim Racing: Racecraft and Replay Review",
      category: "Sim Racing",
      startDate: dateOffset(3, today),
      allDay: false,
      startTime: "20:00",
      endTime: "21:00",
      venue: {
        name: "Online meeting room (sample)",
        kind: "online",
      },
      summary: "A timed online session with a single safe test action.",
      description:
        "This fictional online session demonstrates a one-action event and a virtual location. Its destination is a safe example.com test page, not a race server, registration form, or CCR meeting link.",
      status: "confirmed",
      registration: "open",
      actions: [safeDemoAction],
    },
    {
      id: "fixture-campus-fundraiser",
      title: "Campus Motorsports Trivia Night",
      category: "Fundraising",
      startDate: dateOffset(7, today),
      allDay: false,
      startTime: "18:30",
      endTime: "20:30",
      venue: {
        name: "Founders Hall (sample venue)",
        kind: "physical",
        address: "Columbia, South Carolina",
        room: "Room 108",
      },
      summary: "A fictional fundraiser example with multiple safe demo actions.",
      description:
        "A made-up campus trivia-night listing for visual testing. Its sample description is intentionally brief; its actions lead only to example.com and must not be used for registration or payment.",
      status: "confirmed",
      registration: "open",
      actions: [safeDemoAction, { ...safeDemoAction, label: "See the safe test page" }],
    },
    {
      id: "fixture-autocross-november",
      title: "Autocross: Precision and Slalom Practice",
      category: "Autocross",
      startDate: dateOffset(14, today),
      allDay: true,
      venue: {
        name: "Midlands Driver Training Lot (fictional venue)",
        kind: "physical",
        address: "Columbia region, South Carolina",
      },
      summary: "An all-day, fictional autocross sample with full capacity.",
      description:
        "A sample all-day course listing with a capacity state for testing status badges and search filtering. This is fictional development data, not a CCR activity or invitation.",
      status: "confirmed",
      registration: "full",
    },
    {
      id: "fixture-track-safety-clinic",
      title: "Track Safety & Flags Clinic",
      category: "Track Days",
      startDate: monthBoundary.start,
      endDate: monthBoundary.end,
      allDay: false,
      startTime: "10:00",
      endTime: "15:00",
      venue: {
        name: "Lakeview Motor Circuit (fictional venue)",
        kind: "physical",
        address: "Upstate South Carolina (fictional location)",
      },
      summary: "A two-day track-safety sample with registration closed.",
      description:
        "This fictional multi-day clinic lets the schedule display a date range alongside specific times. The listing has no real host, event entry, or registration.",
      status: "postponed",
      registration: "closed",
      image: {
        src: "/images/miata_background.webp",
        alt: "Illustrative motorsports image, not a photo of this fictional event.",
      },
      actions: [safeDemoAction],
    },
    {
      id: "fixture-body-meeting-december",
      title: "General Body Meeting: Year-End Roundtable",
      category: "General Body Meetings",
      startDate: dateOffset(35, today),
      allDay: false,
      startTime: "17:30",
      endTime: "18:30",
      venue: {
        name: "Student Union Annex (sample venue)",
        kind: "physical",
        address: "Columbia, South Carolina",
        room: "Room 214",
      },
      summary: "The second fictional occurrence in the monthly meeting series.",
      description:
        "A second sample event with the same series ID demonstrates how recurring meetings can be grouped without treating them as one event. This meeting date and its details are fictional.",
      status: "tentative",
      registration: "closed",
      seriesId: "fixture-monthly-general-body",
    },
    {
      id: "fixture-winter-sim-endurance",
      title: "Winter Sim Endurance Challenge",
      category: "Sim Racing",
      startDate: yearBoundary.start,
      endDate: yearBoundary.end,
      allDay: true,
      venue: {
        name: "Virtual / browser-based room",
        kind: "online",
      },
      summary: "A multi-day online example with registration shown as open.",
      description:
        "A fictional endurance-format sim-racing event used to check multi-day date treatment, online location labels, and open-registration styling. No real entry or competition is represented.",
      status: "confirmed",
      registration: "open",
      actions: [safeDemoAction],
    },
    {
      id: "fixture-volunteer-past",
      title: "Paddock Welcome and Wayfinding",
      category: "Volunteering",
      startDate: dateOffset(-10, today),
      endDate: dateOffset(-9, today),
      allDay: true,
      venue: {
        name: "Riverside Expo Grounds (fictional venue)",
        kind: "physical",
        address: "Columbia region, South Carolina",
      },
      summary: "A past, multi-day volunteer example with no optional actions.",
      description:
        "A fictional past listing included to make the Past tab useful during development. It contains no claim of a real volunteer event or CCR participation.",
      status: "confirmed",
    },
    {
      id: "fixture-body-meeting-past",
      title: "General Body Meeting: Project Check-In",
      category: "General Body Meetings",
      startDate: dateOffset(-3, today),
      allDay: false,
      startTime: "18:15",
      endTime: "19:00",
      venue: {
        name: "Student Union Annex (sample venue)",
        kind: "physical",
        address: "Columbia, South Carolina",
        room: "Room 214",
      },
      summary: "A past meeting occurrence in the recurring sample series.",
      description:
        "The third fictional occurrence of this sample series helps exercise repeated series IDs and the Past view. It is not evidence of an actual meeting.",
      status: "cancelled",
      seriesId: "fixture-monthly-general-body",
    },
  ];
}
