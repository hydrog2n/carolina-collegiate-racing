export const eventCategories = [
  "Autocross",
  "Track Days",
  "Sim Racing",
  "Wheel-to-Wheel Racing",
  "General Body Meetings",
  "Volunteering",
  "Fundraising",
] as const;

export type EventCategory = (typeof eventCategories)[number];
export type EventStatus = "confirmed" | "tentative" | "postponed" | "cancelled";
export type RegistrationStatus = "open" | "closed" | "full";

export type ScheduleEvent = {
  id: string;
  title: string;
  category: EventCategory;
  startDate: string;
  endDate?: string;
  allDay: boolean;
  startTime?: string;
  endTime?: string;
  timeZone?: string;
  venue: {
    name: string;
    kind: "physical" | "online";
    address?: string;
    room?: string;
  };
  summary: string;
  description: string;
  status: EventStatus;
  registration?: RegistrationStatus;
  seriesId?: string;
  image?: {
    src: string;
    alt: string;
  };
  actions?: {
    label: string;
    href: string;
  }[];
};
