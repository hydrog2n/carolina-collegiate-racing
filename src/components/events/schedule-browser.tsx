"use client";

import Image from "next/image";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  eventCategories,
  type EventCategory,
  type EventStatus,
  type RegistrationStatus,
  type ScheduleEvent,
} from "@/lib/events/schema";
import {
  createGoogleCalendarUrl,
  downloadIcsFile,
  formatCardDateRange,
  formatCardTime,
  formatFullDateRange,
  formatEventTime,
  getEventEndExclusiveInstant,
  getEventStartInstant,
  isCalendarEligible,
  isEventToday,
  isEventUpcoming,
} from "@/lib/events/schedule-utils";

type ScheduleBrowserProps = {
  events: ScheduleEvent[];
  now: string | null;
  isDevelopmentFixture: boolean;
  emptyLabel: string;
  emptyHeading: string;
  emptyBody: string;
};

type EventTab = "upcoming" | "past";
type EventView = "grid" | "list";
type SortOption = "date-earliest" | "date-latest" | "name-az" | "name-za";

const statusLabels: Record<EventStatus, string> = {
  confirmed: "Confirmed",
  tentative: "Tentative",
  postponed: "Postponed",
  cancelled: "Cancelled",
};

const registrationLabels: Record<RegistrationStatus, string> = {
  open: "Registration open",
  closed: "Registration closed",
  full: "Full",
};

function CategoryMark({ category }: { category: EventCategory }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      {...common}
    >
      {category === "Autocross" ? (
        <>
          <path d="m5 19 3-9 3 9M6.5 14h3" />
          <path d="m14 19 2.5-7 2.5 7m-4-3h3" />
        </>
      ) : null}
      {category === "Track Days" ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v4l4 2" />
        </>
      ) : null}
      {category === "Sim Racing" ? (
        <>
          <path d="M7 8h10a3 3 0 0 1 2.8 2l1.1 3.2a2 2 0 0 1-3.1 2.2l-2.2-1.6H8.4l-2.2 1.6a2 2 0 0 1-3.1-2.2L4.2 10A3 3 0 0 1 7 8Z" />
          <path d="M7 10v4m-2-2h4m7-1h.01M18 13h.01" />
        </>
      ) : null}
      {category === "Wheel-to-Wheel Racing" ? (
        <>
          <path d="M6 21V4m0 1h12l-3 3 3 3H6" />
          <path d="M11 5v3h4V5m-4 3v3h4V8" />
        </>
      ) : null}
      {category === "General Body Meetings" ? (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19v-1a5.5 5.5 0 0 1 11 0v1Zm12-7a3 3 0 1 0-1.5-5.6M17 14a5 5 0 0 1 3.5 4.8V19h-4" />
        </>
      ) : null}
      {category === "Volunteering" ? (
        <>
          <path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" />
          <path d="M8 12h2l1.2-2.2 1.7 4.4 1.1-2.2H16" />
        </>
      ) : null}
      {category === "Fundraising" ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M14.5 8.5c-.6-.6-1.4-.9-2.5-.9-1.4 0-2.5.8-2.5 1.9s.9 1.7 2.5 2 2.5.9 2.5 2-1.1 1.9-2.5 1.9c-1.1 0-2-.3-2.7-1m2.7-8.8v10.8" />
        </>
      ) : null}
    </svg>
  );
}

function ViewIcon({ view }: { view: EventView }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      {view === "grid" ? (
        <>
          <rect x="2.5" y="2.5" width="6" height="6" rx="1" />
          <rect x="11.5" y="2.5" width="6" height="6" rx="1" />
          <rect x="2.5" y="11.5" width="6" height="6" rx="1" />
          <rect x="11.5" y="11.5" width="6" height="6" rx="1" />
        </>
      ) : (
        <>
          <path d="M7.5 4h10M7.5 10h10M7.5 16h10" />
          <circle cx="3.5" cy="4" r=".75" />
          <circle cx="3.5" cy="10" r=".75" />
          <circle cx="3.5" cy="16" r=".75" />
        </>
      )}
    </svg>
  );
}

function StatusBadge({
  status,
  variant = "event",
  prominent = false,
}: {
  status: EventStatus | RegistrationStatus;
  variant?: "event" | "registration";
  prominent?: boolean;
}) {
  const label =
    variant === "event"
      ? statusLabels[status as EventStatus]
      : registrationLabels[status as RegistrationStatus];
  const isAlert =
    status === "cancelled" || status === "postponed" || status === "full";
  const isTentative = status === "tentative";

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-sm)] border font-bold uppercase tracking-[0.11em] ${
        prominent
          ? "min-h-9 px-3 py-2 text-[clamp(0.625rem,0.8vw,0.75rem)]"
          : "min-h-6 px-2 py-1 text-[9px]"
      } ${
        isAlert
          ? "border-red/50 bg-red/15 text-white"
          : isTentative
            ? "border-white/25 bg-white/5 text-white/75"
            : "border-white/15 bg-white/5 text-white/80"
      }`}
    >
      {label}
    </span>
  );
}

function EventDateBlock({ event }: { event: ScheduleEvent }) {
  return (
    <div className="flex min-h-20 min-w-[8rem] self-center flex-col justify-center border-l-2 border-red py-1 pl-3">
      <p className="font-display text-[1.3rem] leading-[1.1] tracking-[0.005em] text-white">
        {formatCardDateRange(event)}
      </p>
      <p className="mt-1.5 text-[11px] font-bold leading-snug text-white/80">
        {formatCardTime(event)}
      </p>
    </div>
  );
}

function GridEventDate({ event }: { event: ScheduleEvent }) {
  const [startYear, startMonth, startDay] = event.startDate
    .split("-")
    .map(Number);
  const [endYear, endMonth, endDay] = (event.endDate ?? event.startDate)
    .split("-")
    .map(Number);
  const monthName = (year: number, month: number) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month - 1, 1)));
  const monthLabel =
    startYear === endYear
      ? startMonth === endMonth
        ? monthName(startYear, startMonth)
        : `${monthName(startYear, startMonth)}–${monthName(endYear, endMonth)}`
      : `${monthName(startYear, startMonth)}–${monthName(endYear, endMonth)}`;
  const dayLabel =
    event.endDate && event.endDate !== event.startDate
      ? `${startDay}–${endDay}`
      : String(startDay);
  const isRange = Boolean(event.endDate && event.endDate !== event.startDate);

  return (
    <div className="flex min-w-0 flex-col border-l-[3px] border-red pl-3">
      <p className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.16em] text-white/55">
        {monthLabel}
      </p>
      <p
        className={`mt-0.5 whitespace-nowrap font-display leading-none tracking-[0.005em] text-white ${
          isRange
            ? "text-[clamp(2rem,4vw,2.6rem)]"
            : "text-[clamp(2.4rem,5vw,4rem)]"
        }`}
      >
        {dayLabel}
      </p>
      {startYear !== endYear ? (
        <p className="mt-0.5 whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.16em] text-white/55">
          {startYear}–{endYear}
        </p>
      ) : null}
    </div>
  );
}

function EventAction({
  action,
  event,
  primary = false,
}: {
  action: NonNullable<ScheduleEvent["actions"]>[number];
  event: ScheduleEvent;
  primary?: boolean;
}) {
  return (
    <ArrowLink
      href={action.href}
      variant={primary ? "solid" : "outline"}
      wrap
    >
      {action.label}
      <span className="sr-only"> for {event.title}</span>
    </ArrowLink>
  );
}

function EventCard({
  event,
  now,
  view,
  isPast,
  onOpen,
}: {
  event: ScheduleEvent;
  now: Date;
  view: EventView;
  isPast: boolean;
  onOpen: (event: ScheduleEvent) => void;
}) {
  const isToday = isEventToday(event, now);
  const primaryAction = event.actions?.[0];
  const hasImage = view === "list" && Boolean(event.image);
  const listColumns = hasImage
    ? "grid gap-4 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.9fr)_11rem] lg:items-start"
    : "grid gap-4 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.9fr)] md:items-start";

  return (
    <article
      className={`group duration-300 overflow-hidden rounded-[var(--radius-lg)] border-2 border-graphite bg-graphite shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-[border-color, box-shadow] hover:border-red hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] motion-reduce:transition-none ${
        isPast
          ? "grayscale brightness-75 hover:grayscale-0 hover:brightness-100 hover:border-red"
          : "hover:border-red hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
      } ${view === "list"
          ? listColumns
          : "flex flex-col p-5 sm:p-6"
      }`}
    >
      {view === "grid" ? (
        <div className="flex flex-1 flex-col">
          <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 md:gap-8">
            <GridEventDate event={event} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-0">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-red">
                  <span className="text-red">
                    <CategoryMark category={event.category} />
                  </span>
                  <span>{event.category}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => onOpen(event)}
                className="heading-support mt-2 mb-3 block w-full text-left text-[clamp(1.35rem,3vw,1.8rem)] text-white transition-colors hover:text-red focus-visible:outline-white motion-reduce:transition-none"
              >
                {event.title}
              </button>
              {isToday ? (
                <span className="rounded-[var(--radius-sm)] border-2 border-red px-1.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  Today
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <Image
                src="/graphics/clock.svg"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <p className="text-[clamp(0.875rem,1.1vw,1rem)]/[1.45] font-bold text-white">
                {formatCardTime(event)}
              </p>
            </div>
            <div className="flex min-w-0 items-start gap-3">
              <Image
                src="/graphics/map-pin.svg"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0"
              />
              <p className="min-w-0 text-[clamp(0.8125rem,1vw,0.875rem)]/[1.5] text-white/80">
                <span className="block">
                  {event.venue.name}
                  {event.venue.kind === "online" ? " · Online" : ""}
                </span>
                {event.venue.room ? (
                  <span className="block">{event.venue.room}</span>
                ) : null}
                {event.venue.address ? (
                  <span className="block">{event.venue.address}</span>
                ) : null}
              </p>
            </div>
          </div>

          <div className="max-h-3xl mt-5 flex flex-wrap gap-2">
            <StatusBadge status={event.status} prominent />
            {event.registration ? (
              <StatusBadge
                status={event.registration}
                variant="registration"
                prominent
              />
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
            <button
              type="button"
              onClick={() => onOpen(event)}
              className="px-1 group/details inline-flex min-h-14 items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              aria-label={`View details for ${event.title}`}
            >
              Event details
              <ArrowIcon className="text-red transition-transform group-hover/details:translate-x-1" />
            </button>
            {primaryAction ? (
              <EventAction
                action={primaryAction}
                event={event}
                primary
              />
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 md:gap-8">
            <GridEventDate event={event} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-red">
                  <span className="text-red">
                    <CategoryMark category={event.category} />
                  </span>
                  <span>{event.category}</span>
                </span>
                
              </div>
              <button
                type="button"
                onClick={() => onOpen(event)}
                className="heading-support my-2 block w-full text-left text-[clamp(1.35rem,3vw,1.8rem)] text-white transition-colors hover:text-red focus-visible:outline-white motion-reduce:transition-none"
              >
                {event.title}
              </button>
              {isToday ? (
                  <span className="rounded-[var(--radius-sm)] border-2 border-red px-1.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                    Today
                  </span>
                ) : null}
              <p className="my-2 max-w-3xl text-[12px]/[1.6] text-white/65">
                {event.summary}
              </p>
              <div className="flex flex-wrap gap-2 py-1">
                <StatusBadge status={event.status} prominent />
                {event.registration ? (
                  <StatusBadge
                    status={event.registration}
                    variant="registration"
                    prominent
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 md:col-start-2 md:border-l md:border-white/15 md:pl-5 lg:col-start-auto">
            
            <div className="mb-2 grid gap-2">
              <div className="flex min-w-0 items-start gap-3">
                <Image
                  src="/graphics/clock.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="mt-0.5 h-6 w-6 shrink-0"
                />
                <p className="text-[clamp(0.875rem,1.1vw,1rem)]/[1.45] font-bold text-white">
                  {formatCardTime(event)}
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <Image
                  src="/graphics/map-pin.svg"
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="mt-0.5 h-6 w-6 shrink-0"
                />
                <p className="min-w-0 text-[clamp(0.8125rem,1vw,0.875rem)]/[1.5] text-white/80">
                  <span className="block">
                    {event.venue.name}
                    {event.venue.kind === "online" ? " · Online" : ""}
                  </span>
                  {event.venue.room ? (
                    <span className="block">{event.venue.room}</span>
                  ) : null}
                  {event.venue.address ? (
                    <span className="block">{event.venue.address}</span>
                  ) : null}
                </p>
              </div>
              
              <button
                type="button"
                onClick={() => onOpen(event)}
                className="px-1 group/details inline-flex mt-6 min-h-2 items-center justify-left gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                aria-label={`View details for ${event.title}`}
              >
                Event details
                <ArrowIcon className="text-red transition-transform group-hover/details:translate-x-1" />
              </button>
            </div>
            {primaryAction ? (
              <div>
                <EventAction action={primaryAction} event={event} primary />
              </div>
            ) : null}
          </div>

          {hasImage && event.image ? (
            <div className="relative aspect-[4/3] min-h-28 self-center overflow-hidden rounded-[var(--radius-md)] bg-ink md:col-span-2 md:aspect-[16/7] lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:aspect-[4/3]">
              <Image
                src={event.image.src}
                alt={event.image.alt}
                fill
                sizes="(min-width: 1024px) 176px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              {/* <span className="absolute bottom-2 left-2 rounded-[var(--radius-sm)] bg-black/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/85">
                Illustrative image
              </span> */}
            </div>
          ) : null}
        </>
      )}
    </article>
  );
}

function EventDialog({
  event,
  developmentFixture,
  onClose,
}: {
  event: ScheduleEvent;
  developmentFixture: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const googleCalendarUrl = createGoogleCalendarUrl(event, developmentFixture);
  const calendarEligible = isCalendarEligible(event);
  const startDate = formatFullDateRange(event);
  const startTime = event.allDay
    ? "All day"
    : event.startTime
      ? formatEventTime(event, event.startDate, event.startTime)
      : "Time to be announced";
  const endTime =
    !event.allDay && event.endTime
      ? formatEventTime(
          event,
          event.endDate ?? event.startDate,
          event.endTime,
        )
      : null;

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
    closeButtonRef.current?.focus();

    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") {
        keyboardEvent.preventDefault();
        onClose();
        return;
      }
      if (keyboardEvent.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) {
        keyboardEvent.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialogRef.current.contains(document.activeElement)) {
        keyboardEvent.preventDefault();
        first.focus();
      } else if (keyboardEvent.shiftKey && document.activeElement === first) {
        keyboardEvent.preventDefault();
        last.focus();
      } else if (
        !keyboardEvent.shiftKey &&
        document.activeElement === last
      ) {
        keyboardEvent.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [event.id, onClose]);

  const dateTimeLabel = endTime
    ? `${startDate}, ${startTime} – ${endTime}`
    : `${startDate}, ${startTime}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(mouseEvent) => {
        if (mouseEvent.target === mouseEvent.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-dialog-title"
        tabIndex={-1}
        className="max-h-[92dvh] w-full max-w-2xl overscroll-contain overflow-y-auto rounded-t-[var(--radius-lg)] border- border-white/20 bg-charcoal text-white shadow-[0_12px_30px_rgba(0,0,0,0.3)] sm:rounded-[var(--radius-lg)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/15 bg-charcoal/95 px-5 py-3 backdrop-blur sm:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-red">
            {event.category}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border-2 border-white/25 text-2xl leading-none text-white hover:bg-white hover:text-black focus-visible:outline-white"
            aria-label="Close event details"
          >
            ×
          </button>
        </div>

        {event.image ? (
          <div className="relative aspect-[16/7] bg-ink">
            <Image
              src={event.image.src}
              alt={event.image.alt}
              fill
              sizes="(min-width: 672px) 672px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-[var(--radius-sm)] bg-black/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/85">
              Illustrative image · not an event photo
            </span>
          </div>
        ) : null}

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={event.status} />
            {event.registration ? (
              <StatusBadge status={event.registration} variant="registration" />
            ) : null}
          </div>
          <h2
            id="event-dialog-title"
            className="heading-section mt-4 text-[clamp(2rem,7vw,3.2rem)]"
          >
            {event.title}
          </h2>
          <p className="mt-4 whitespace-pre-line text-[14px]/[1.7] text-white/75">
            {event.description}
          </p>

          <dl className="mt-6 grid gap-5 border-y border-white/15 py-5 sm:grid-cols-2">
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                Date & time
              </dt>
              <dd className="mt-1 text-[13px]/[1.6]">
                {dateTimeLabel}
                <br />
                <span className="text-white/50">
                  Event local time · {event.timeZone ?? "America/New_York"}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                Location
              </dt>
              <dd className="mt-1 text-[13px]/[1.6]">
                {event.venue.name}
                {event.venue.room ? <><br />{event.venue.room}</> : null}
                {event.venue.address ? <><br />{event.venue.address}</> : null}
                {event.venue.kind === "online" ? <><br />Online</> : null}
              </dd>
            </div>
            {event.seriesId ? (
              <div>
                <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                  Series
                </dt>
                <dd className="mt-1 text-[13px]/[1.6]">Recurring sample meeting</dd>
              </div>
            ) : null}
          </dl>

          {event.actions?.length ? (
            <div className="mt-5">
              <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                Event actions
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.actions.map((action, index) => (
                  <EventAction
                    key={`${action.label}-${index}`}
                    action={action}
                    event={event}
                  />
                ))}
              </div>
              {developmentFixture ? (
                <p className="mt-3 text-[11px]/[1.6] text-white/50">
                  Sample links open safe example.com destinations. They are not registration or CCR event links.
                </p>
              ) : null}
            </div>
          ) : null}

          {calendarEligible ? (
            <div className="mt-6 border-t border-white/15 pt-5">
              <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                Add to calendar
              </h3>
              <div className="flex flex-wrap gap-2">
                {googleCalendarUrl ? (
                  <ArrowLink href={googleCalendarUrl} variant="solid" wrap>
                    Google Calendar
                    <span className="sr-only"> for {event.title}</span>
                  </ArrowLink>
                ) : null}
                <button
                  type="button"
                  onClick={() => downloadIcsFile(event, developmentFixture)}
                  className="group/calendar-download inline-flex min-h-12 items-center justify-center gap-4 rounded-[var(--radius-sm)] border-2 border-white/35 bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-white/80 hover:bg-white/5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                  aria-label={`Download calendar file for ${event.title}`}
                >
                  <span className="inline-flex items-center gap-4">
                    Download .ics
                    <ArrowIcon className="transition-transform duration-200 group-hover/calendar-download:translate-x-1" />
                  </span>
                </button>
              </div>
              {event.status === "tentative" ? (
                <p className="mt-3 text-[11px]/[1.6] text-white/50">
                  This event is tentative and is labeled as such in the calendar entry.
                </p>
              ) : null}
              {developmentFixture ? (
                <p className="mt-2 text-[11px]/[1.6] text-white/50">
                  Calendar entries are marked as fictional development samples.
                </p>
              ) : null}
            </div>
          ) : event.status === "cancelled" || event.status === "postponed" ? (
            <p className="mt-5 border-t border-white/15 pt-4 text-[12px]/[1.6] text-white/60">
              Calendar links are unavailable for {statusLabels[event.status].toLowerCase()} activities.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export function ScheduleBrowser({
  events,
  now: initialNow,
  isDevelopmentFixture,
  emptyLabel,
  emptyHeading,
  emptyBody,
}: ScheduleBrowserProps) {
  const [now, setNow] = useState(() => new Date(initialNow ?? 0));
  const [tab, setTab] = useState<EventTab>("upcoming");
  const [view, setView] = useState<EventView>("grid");
  const [categories, setCategories] = useState<EventCategory[]>([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState<SortOption | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!initialNow) return;
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, [initialNow]);

  const upcoming = useMemo(
    () => events.filter((event) => isEventUpcoming(event, now)),
    [events, now],
  );
  const past = useMemo(
    () => events.filter((event) => !isEventUpcoming(event, now)),
    [events, now],
  );
  const selectedTabEvents = tab === "upcoming" ? upcoming : past;
  const activeSort =
    sortOption ??
    (tab === "upcoming" ? "date-earliest" : "date-latest");
  const query = search.trim().toLocaleLowerCase();
  const visibleEvents = useMemo(() => {
    const filtered = selectedTabEvents
      .filter(
        (event) =>
          categories.length === 0 || categories.includes(event.category),
      )
      .filter(
        (event) =>
          !query ||
          [
            event.title,
            event.category,
            event.summary,
            event.description,
            event.venue.name,
            event.venue.address ?? "",
            event.venue.room ?? "",
          ]
            .join(" ")
            .toLocaleLowerCase()
            .includes(query),
      );

    return filtered.sort((first, second) => {
      const nameOrder = first.title.localeCompare(second.title);
      if (activeSort === "name-az") {
        return nameOrder || first.id.localeCompare(second.id);
      }
      if (activeSort === "name-za") {
        return -nameOrder || first.id.localeCompare(second.id);
      }

      const firstDate =
        getEventStartInstant(first)?.getTime() ?? Date.parse(first.startDate);
      const secondDate =
        getEventStartInstant(second)?.getTime() ?? Date.parse(second.startDate);
      const defaultPastSort = sortOption === null && tab === "past";
      const firstSortDate = defaultPastSort
        ? getEventEndExclusiveInstant(first)?.getTime() ?? firstDate
        : firstDate;
      const secondSortDate = defaultPastSort
        ? getEventEndExclusiveInstant(second)?.getTime() ?? secondDate
        : secondDate;
      const dateOrder =
        activeSort === "date-earliest"
          ? firstSortDate - secondSortDate
          : secondSortDate - firstSortDate;
      return (
        dateOrder ||
        first.title.localeCompare(second.title) ||
        first.id.localeCompare(second.id)
      );
    });
  }, [activeSort, categories, query, selectedTabEvents, sortOption, tab]);

  const selectedEventCount = categories.length + (query ? 1 : 0);
  const clearFilters = useCallback(() => {
    setCategories([]);
    setSearch("");
  }, []);
  const closeEvent = useCallback(() => setSelectedEvent(null), []);

  const handleSearchKeyDown = (keyboardEvent: ReactKeyboardEvent<HTMLInputElement>) => {
    if (keyboardEvent.key === "Escape" && search) {
      setSearch("");
      searchRef.current?.focus();
    }
  };

  const toggleCategory = (category: EventCategory, checked: boolean) => {
    setCategories((current) =>
      checked
        ? [...current, category]
        : current.filter((item) => item !== category),
    );
  };

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "date-earliest", label: "Date: soonest first" },
    { value: "date-latest", label: "Date: latest first" },
    { value: "name-az", label: "Name: A–Z" },
    { value: "name-za", label: "Name: Z–A" },
  ];

  return (
    <div>
      {isDevelopmentFixture ? (
        <aside
          role="note"
          className="mb-6  border-l-4 border-red bg-red/10 px-4 py-4 text-white sm:px-5"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
            Local development fixture · {events.length} fictional examples
          </p>
          <p className="mt-1 max-w-4xl text-[12px]/[1.6] text-white/75">
            Interface samples only—not real CCR meetings, activities, competition entries, or registration opportunities.
          </p>
        </aside>
      ) : null}

      {events.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
            {emptyLabel}
          </p>
          <h3 className="mt-2 font-display text-3xl uppercase text-white">
            {emptyHeading}
          </h3>
          <p className="mt-2 max-w-xl text-[14px]/[1.65] text-white/65">
            {emptyBody}
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Schedule period">
              {(["upcoming", "past"] as const).map((currentTab) => {
                const count =
                  currentTab === "upcoming" ? upcoming.length : past.length;
                return (
                  <button
                    key={currentTab}
                    type="button"
                    role="tab"
                    id={`schedule-tab-${currentTab}`}
                    aria-selected={tab === currentTab}
                    aria-controls="schedule-events"
                    onClick={() => setTab(currentTab)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-sm)] border-2 px-4 text-[20px] font-display uppercase tracking-[0.005em] transition-colors motion-reduce:transition-none ${
                      tab === currentTab
                        ? "border-red text-color-var(--ccr-red) hover:border-red/100 hover:text-color-var(--ccr-red)"
                        : "border-white/20 text-white/50 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {currentTab} <span className="opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-[var(--radius-lg)]  border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ">
            <div className="flex flex-wrap items-end gap-3">
              <label className="grid min-w-[min(100%,14rem)] flex-[2_1_16rem] gap-1.5">
                <span className="px-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">
                  Search the schedule
                </span>
                <span className="flex min-h-11 items-center rounded-[var(--radius-sm)] border-2 border-white/20 px-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white">
                  <input
                    ref={searchRef}
                    type="search"
                    value={search}
                    onChange={(changeEvent) => setSearch(changeEvent.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Title, details, venue, room..."
                    className="min-w-0 flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-white/45"
                  />
                </span>
              </label>

              <details className="group relative min-w-[10rem] flex-[1_1_11rem]">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-[var(--radius-sm)] border-2 border-white/20 px-3 text-[12px] text-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                  <span>
                    Category
                    {categories.length ? (
                      <span className="ml-2 font-bold text-red">
                        {categories.length} selected
                      </span>
                    ) : null}
                  </span>
                  <span aria-hidden="true" className="text-white/60">⌄</span>
                </summary>
                <fieldset className="absolute left-0 top-[calc(100%+0.5rem)] z-30 max-h-80 w-72 max-w-[calc(100vw-2.5rem)] overflow-y-auto rounded-[var(--radius-md)] border border-white/15 bg-graphite p-3 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                  <legend className="px-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                    Filter categories
                  </legend>
                  {eventCategories.map((category) => (
                    <label
                      key={category}
                      className="flex min-h-11 cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] px-2 text-[12px] hover:bg-white/5"
                    >
                      <input
                        type="checkbox"
                        checked={categories.includes(category)}
                        onChange={(changeEvent) =>
                          toggleCategory(category, changeEvent.target.checked)
                        }
                        className="h-4 w-4 accent-[var(--ccr-red)]"
                      />
                      {category}
                    </label>
                  ))}
                </fieldset>
              </details>

              <label className="grid min-w-[min(100%,12rem)] flex-[1_1_13rem] gap-1.5">
                <span className="px-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">
                  Sort by
                </span>
                <span className="relative block">
                  <select
                    value={activeSort}
                    onChange={(changeEvent) =>
                      setSortOption(changeEvent.target.value as SortOption)
                    }
                    className="min-h-11 w-full appearance-none rounded-[var(--radius-sm)] border-2 border-white/20 px-3 pr-10 text-[12px] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    style={{ colorScheme: "dark" }}
                  >
                    {sortOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-graphite text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/70"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="m3.5 6 4.5 4 4.5-4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </label>

              <div
                className="grid gap-1.5"
                role="group"
                aria-label="Event layout"
              >
                <span className="px-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">
                  View
                </span>
                <div className="flex items-center gap-1">
                  {(["grid", "list"] as const).map((currentView) => (
                    <button
                      key={currentView}
                      type="button"
                      aria-label={`${currentView === "grid" ? "Grid" : "List"} view`}
                      aria-pressed={view === currentView}
                      onClick={() => setView(currentView)}
                      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-reduce:transition-none ${
                        view === currentView
                          ? "border-2 border-white bg-white text-graphite"
                          : "border-2 border-white/20 text-white/65 hover:border-white hover:text-white"
                      }`}
                    >
                      <ViewIcon view={currentView} />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-end gap-3 px-1 pt-2">
              {selectedEventCount ? (
                <p className="mt-2 text-[10px] items-center font-semibold uppercase tracking-[0.1em] text-red">
                  {selectedEventCount} filter{selectedEventCount === 1 ? "" : "s"} active
                </p>
              ) : null}

              
              {selectedEventCount ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-2 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-white/50 underline decoration-black/30 underline-offset-4 hover:text-white focus-visible:outline-white"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
            
          </div>

          <div className="mb-3 mt-4 flex items-center justify-between gap-3">
            <p className="text-[11px] text-white/60" aria-live="polite">
              Showing{" "}
              <span className="font-bold text-white">{visibleEvents.length}</span>{" "}
              {visibleEvents.length === 1 ? "activity" : "activities"}
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/50">
              {tab === "upcoming" ? "Upcoming" : "Past"} · {selectedTabEvents.length} total
            </p>
          </div>

          {visibleEvents.length > 0 ? (
            <div
              id="schedule-events"
              role="tabpanel"
              aria-labelledby={`schedule-tab-${tab}`}
              className={
                view === "grid"
                  ? "grid items-start gap-4 sm:grid-cols-2 2xl:grid-cols-3"
                  : "grid gap-3"
              }
            >
              {visibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  now={now}
                  view={view}
                  isPast={tab === "past"}
                  onOpen={setSelectedEvent}
                />
              ))}
            </div>
          ) : (
            <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[300px] rounded-[var(--radius-lg)] items-center border-2 border-white/15 px-5 py-7 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <p className="mt-5 font-display text-2xl uppercase text-white">
                {selectedEventCount
                  ? "No activities match these filters."
                  : `No ${tab} activities.`}
              </p>
              <p className="mt-2 text-[13px] text-white/60">
                {selectedEventCount
                  ? "Change your search or selected categories."
                  : "Check back when the schedule is updated."}
              </p>
              {selectedEventCount ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 group inline-flex min-h-6 items-center justify-center gap-4 rounded-[var(--radius-sm)] bg-white px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                >
                  <span>Clear filters</span>
                  <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                </button>
              ) : null}
            </div>
          )}
        </>
      )}

      {selectedEvent ? (
        <EventDialog
          key={selectedEvent.id}
          event={selectedEvent}
          developmentFixture={isDevelopmentFixture}
          onClose={closeEvent}
        />
      ) : null}
    </div>
  );
}
