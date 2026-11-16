import "server-only";
import { connection } from "next/server";
import type { ScheduleEvent } from "@/lib/events/schema";

const publishedEvents: ScheduleEvent[] = [];

export async function getScheduleData() {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.CCR_DISABLE_EVENT_FIXTURE !== "true"
  ) {
    await connection();
    const { getDevelopmentEventFixtures, getEasternDate } = await import(
      "@/content/events/development-fixtures"
    );
    const now = new Date();
    return {
      events: getDevelopmentEventFixtures(getEasternDate(now)),
      now: now.toISOString(),
      isDevelopmentFixture: true,
    };
  }

  if (publishedEvents.length === 0) {
    return {
      events: publishedEvents,
      now: null,
      isDevelopmentFixture: false,
    };
  }

  await connection();
  return {
    events: publishedEvents,
    now: new Date().toISOString(),
    isDevelopmentFixture: false,
  };
}
