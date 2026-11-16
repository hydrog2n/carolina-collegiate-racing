import type { ScheduleEvent } from "@/lib/events/schema";

export const DEFAULT_EVENT_TIME_ZONE = "America/New_York";

type DateTimeParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

function getDateTimeParts(date: Date, timeZone: string): DateTimeParts {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: string) => Number(parts.find((item) => item.type === type)?.value);

  return {
    year: part("year"),
    month: part("month"),
    day: part("day"),
    hour: part("hour"),
    minute: part("minute"),
    second: part("second"),
  };
}

function dateTimePartsKey(parts: DateTimeParts) {
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(
    parts.day,
  ).padStart(2, "0")}T${String(parts.hour).padStart(2, "0")}:${String(
    parts.minute,
  ).padStart(2, "0")}:${String(parts.second).padStart(2, "0")}`;
}

function localDateTimeParts(date: string, time: string): DateTimeParts {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const timeMatch = /^(\d{2}):(\d{2})$/.exec(time);

  if (!dateMatch || !timeMatch) {
    throw new RangeError(`Invalid event date or time: ${date} ${time}`);
  }

  const parts = {
    year: Number(dateMatch[1]),
    month: Number(dateMatch[2]),
    day: Number(dateMatch[3]),
    hour: Number(timeMatch[1]),
    minute: Number(timeMatch[2]),
    second: 0,
  };
  const check = new Date(
    Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute),
  );

  if (
    check.getUTCFullYear() !== parts.year ||
    check.getUTCMonth() + 1 !== parts.month ||
    check.getUTCDate() !== parts.day ||
    parts.hour > 23 ||
    parts.minute > 59
  ) {
    throw new RangeError(`Invalid event date or time: ${date} ${time}`);
  }

  return parts;
}

export function getEventTimeZone(event: ScheduleEvent) {
  return event.timeZone ?? DEFAULT_EVENT_TIME_ZONE;
}

export function getEventLocalDate(event: ScheduleEvent, instant: Date) {
  const parts = getDateTimeParts(instant, getEventTimeZone(event));
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(
    parts.day,
  ).padStart(2, "0")}`;
}

export function getEventStartInstant(event: ScheduleEvent) {
  if (event.allDay) {
    return localDateTimeToInstant(
      event.startDate,
      "00:00",
      getEventTimeZone(event),
    );
  }
  if (!event.startTime) return null;

  return localDateTimeToInstant(
    event.startDate,
    event.startTime,
    getEventTimeZone(event),
  );
}

export function getEventEndExclusiveInstant(event: ScheduleEvent) {
  const timeZone = getEventTimeZone(event);
  if (event.allDay) {
    return localDateTimeToInstant(
      addCalendarDays(event.endDate ?? event.startDate, 1),
      "00:00",
      timeZone,
      true,
    );
  }
  if (!event.endTime) return getEventStartInstant(event);

  return localDateTimeToInstant(
    event.endDate ?? event.startDate,
    event.endTime,
    timeZone,
    true,
  );
}

export function isEventUpcoming(event: ScheduleEvent, now: Date) {
  const endExclusive = getEventEndExclusiveInstant(event);
  return endExclusive ? endExclusive.getTime() > now.getTime() : false;
}

export function isEventToday(event: ScheduleEvent, now: Date) {
  const currentDate = getEventLocalDate(event, now);
  return (
    currentDate >= event.startDate &&
    currentDate <= (event.endDate ?? event.startDate)
  );
}

export function formatCardDateRange(event: ScheduleEvent) {
  const start = dateParts(event.startDate);
  const end = event.endDate ? dateParts(event.endDate) : null;

  if (!end || event.endDate === event.startDate) {
    return `${start.month} ${start.day}`;
  }
  if (start.year !== end.year) {
    return `${start.month} ${start.day}, ${start.year} – ${end.month} ${end.day}, ${end.year}`;
  }
  if (start.month === end.month) {
    return `${start.month} ${start.day}–${end.day}`;
  }
  return `${start.month} ${start.day} – ${end.month} ${end.day}`;
}

export function formatFullDateRange(event: ScheduleEvent) {
  const start = dateParts(event.startDate, "long").text;
  if (!event.endDate || event.endDate === event.startDate) return start;
  return `${start} – ${dateParts(event.endDate, "long").text}`;
}

export function formatEventTime(event: ScheduleEvent, date: string, time: string) {
  const instant = localDateTimeToInstant(date, time, getEventTimeZone(event));
  return new Intl.DateTimeFormat("en-US", {
    timeZone: getEventTimeZone(event),
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(instant);
}

export function formatCardTime(event: ScheduleEvent) {
  if (event.allDay) {
    return event.endDate && event.endDate !== event.startDate
      ? "All day · each day"
      : "All day";
  }
  if (!event.startTime) return "Time to be announced";

  const start = formatEventTime(event, event.startDate, event.startTime);
  if (!event.endTime) return start;

  return `${start} – ${formatEventTime(
    event,
    event.endDate ?? event.startDate,
    event.endTime,
  )}`;
}

export function isCalendarEligible(event: ScheduleEvent) {
  if (
    event.status === "cancelled" ||
    event.status === "postponed" ||
    (!event.allDay && (!event.startTime || !event.endTime))
  ) {
    return false;
  }

  if (event.allDay) {
    return (event.endDate ?? event.startDate) >= event.startDate;
  }

  const start = getEventStartInstant(event);
  const end = getEventEndExclusiveInstant(event);
  return Boolean(start && end && end > start);
}

export function getCalendarDateRange(event: ScheduleEvent) {
  if (!isCalendarEligible(event)) return null;
  const timeZone = getEventTimeZone(event);

  if (event.allDay) {
    return {
      start: formatIcsDate(event.startDate),
      end: formatIcsDate(addCalendarDays(event.endDate ?? event.startDate, 1)),
      allDay: true,
    };
  }

  const endDate = event.endDate ?? event.startDate;
  const start = localDateTimeToInstant(
    event.startDate,
    event.startTime!,
    timeZone,
  );
  const end = localDateTimeToInstant(endDate, event.endTime!, timeZone, true);

  if (end <= start) return null;
  return { start: formatUtcDateTime(start), end: formatUtcDateTime(end), allDay: false };
}

export function createGoogleCalendarUrl(
  event: ScheduleEvent,
  developmentFixture: boolean,
) {
  const range = getCalendarDateRange(event);
  if (!range) return null;

  const title =
    event.status === "tentative" ? `[Tentative] ${event.title}` : event.title;
  const details = [
    event.description,
    developmentFixture
      ? "Fictional development fixture only. This is not a real CCR activity."
      : "",
    event.status === "tentative" ? "Event status: Tentative." : "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: developmentFixture ? `[FICTIONAL SAMPLE] ${title}` : title,
    dates: `${range.start}/${range.end}`,
    details,
    location: formatVenue(event),
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function createIcsContent(
  event: ScheduleEvent,
  developmentFixture: boolean,
  now: Date,
) {
  const range = getCalendarDateRange(event);
  if (!range) return null;

  const title =
    event.status === "tentative" ? `[Tentative] ${event.title}` : event.title;
  const description = [
    event.description,
    developmentFixture
      ? "Fictional development fixture only. This is not a real CCR activity."
      : "",
    event.status === "tentative" ? "Event status: Tentative." : "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const eventStatus = event.status === "tentative" ? "TENTATIVE" : "CONFIRMED";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Carolina Collegiate Racing//Schedule//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${escapeIcsText(event.id)}@schedule.carolinacollegiateracing.example`,
    `DTSTAMP:${formatUtcDateTime(now)}`,
    range.allDay
      ? `DTSTART;VALUE=DATE:${range.start}`
      : `DTSTART:${range.start}`,
    range.allDay ? `DTEND;VALUE=DATE:${range.end}` : `DTEND:${range.end}`,
    `SUMMARY:${escapeIcsText(
      developmentFixture ? `[FICTIONAL SAMPLE] ${title}` : title,
    )}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(formatVenue(event))}`,
    `STATUS:${eventStatus}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return `${lines.map(foldIcsLine).join("\r\n")}\r\n`;
}

export function downloadIcsFile(
  event: ScheduleEvent,
  developmentFixture: boolean,
) {
  const content = createIcsContent(event, developmentFixture, new Date());
  if (!content) return;

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.id}.ics`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function localDateTimeToInstant(
  date: string,
  time: string,
  timeZone: string,
  preferLate = false,
) {
  const requested = localDateTimeParts(date, time);
  const targetKey = dateTimePartsKey(requested);
  const wallClock = Date.UTC(
    requested.year,
    requested.month - 1,
    requested.day,
    requested.hour,
    requested.minute,
    requested.second,
  );
  const offsets = [-36, -12, 0, 12, 36].map((hours) => {
    const sample = new Date(wallClock + hours * 60 * 60 * 1000);
    const zonedSample = getDateTimeParts(sample, timeZone);
    const representedAsUtc = Date.UTC(
      zonedSample.year,
      zonedSample.month - 1,
      zonedSample.day,
      zonedSample.hour,
      zonedSample.minute,
      zonedSample.second,
    );
    return representedAsUtc - sample.getTime();
  });
  const matches = [...new Set(offsets)]
    .map((offset) => new Date(wallClock - offset))
    .filter(
      (candidate) =>
        dateTimePartsKey(getDateTimeParts(candidate, timeZone)) === targetKey,
    )
    .sort((first, second) => first.getTime() - second.getTime());

  if (matches.length === 0) {
    throw new RangeError(`The event time does not exist in ${timeZone}: ${date} ${time}`);
  }
  return matches[preferLate ? matches.length - 1 : 0];
}

function addCalendarDays(date: string, days: number) {
  const [year, month, day] = date.split("-").map(Number);
  const value = new Date(Date.UTC(year, month - 1, day + days));
  return `${value.getUTCFullYear()}-${String(value.getUTCMonth() + 1).padStart(
    2,
    "0",
  )}-${String(value.getUTCDate()).padStart(2, "0")}`;
}

function dateParts(date: string, style: "short" | "long" = "short") {
  const value = new Date(`${date}T00:00:00Z`);
  const options: Intl.DateTimeFormatOptions =
    style === "long"
      ? {
          timeZone: "UTC",
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      : { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" };
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(value);
  const part = (type: string) => parts.find((item) => item.type === type)?.value ?? "";

  return {
    month: part("month"),
    day: part("day"),
    year: part("year"),
    text: new Intl.DateTimeFormat("en-US", options).format(value),
  };
}

function formatUtcDateTime(date: Date) {
  const iso = date.toISOString();
  return iso
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function formatIcsDate(date: string) {
  return date.replace(/-/g, "");
}

function formatVenue(event: ScheduleEvent) {
  return [
    event.venue.name,
    event.venue.room,
    event.venue.address,
    event.venue.kind === "online" ? "Online" : "",
  ]
    .filter(Boolean)
    .join(", ");
}

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldIcsLine(line: string) {
  const encoder = new TextEncoder();
  let folded = "";
  let lineBytes = 0;

  for (const character of line) {
    const characterBytes = encoder.encode(character).length;
    if (lineBytes + characterBytes > 75) {
      folded += "\r\n ";
      lineBytes = 1;
    }
    folded += character;
    lineBytes += characterBytes;
  }

  return folded;
}
