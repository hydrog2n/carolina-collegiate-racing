import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ScheduleBrowser } from "@/components/events/schedule-browser";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { getScheduleData } from "@/lib/events/data";
import { schedulePage } from "@/content/pages";
import { contact, mailto, scheduleSectionLinks } from "@/content/site";

async function ScheduleContent() {
  const { events, now, isDevelopmentFixture } = await getScheduleData();

  return (
    <ScheduleBrowser
      events={events}
      now={now}
      isDevelopmentFixture={isDevelopmentFixture}
      emptyLabel={schedulePage.emptyLabel}
      emptyHeading={schedulePage.emptyHeading}
      emptyBody={schedulePage.emptyBody}
    />
  );
}

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Browse the Carolina Collegiate Racing schedule for verified team activities and competition information.",
};

export default function SchedulePage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={scheduleSectionLinks} />
      {/* <PageIntro
        index={schedulePage.index}
        label={schedulePage.label}
        title={schedulePage.title}
        intro={schedulePage.intro}
        meta={schedulePage.meta}
        tone="garnet"
        compact
        actions={
          <>
            <ArrowLink href="#calendar" variant="inverse">
              View Events
            </ArrowLink>
            <ArrowLink
              href={contact.instagramUrl}
              variant="outline"
            >
              Follow on Instagram
            </ArrowLink>
            <ArrowLink href={mailto(contact.generalSubject)} variant="outline">
              Email CCR
            </ArrowLink>
          </>
        }
      /> */}

      <PageSection
        id="calendar"
        tone="black"
        label="Schedule"
        title="Find an activity."
        intro="Browse by date, category, or keyword."
        compact
      >
        <Suspense
          fallback={
            <p className="border-t border-black/15 pt-6 text-[13px] text-black/60">
              Loading schedule…
            </p>
          }
        >
          <ScheduleContent />
        </Suspense>
      </PageSection>

      <PageSection
        id="directions"
        tone="black"
        label={schedulePage.directionsLabel}
        title={schedulePage.directionsHeading}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="grid gap-4 lg:col-span-7">
            {schedulePage.directions.map((direction, index) => (
              <article
                key={direction.title}
                className={`rounded-[var(--radius-lg)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:p-8 ${
                  index === 0
                    ? "bg-red text-white"
                    : "border border-white/15 bg-graphite text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.17em] ${
                      index === 0 ? "text-white" : "text-white/65"
                    }`}
                  >
                    {index === 0 ? "Active arena" : "In procurement"}
                  </p>
                  <span
                    aria-hidden="true"
                    className={`font-display text-[1.8rem] leading-none ${
                      index === 0 ? "text-white/80" : "text-white/45"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="heading-support mt-4 text-[clamp(2rem,4vw,3.1rem)]">
                  {direction.title}
                </h3>
                <p
                  className={`mt-4 max-w-xl text-[15px]/[1.7] ${
                    index === 0 ? "text-white" : "text-white/65"
                  }`}
                >
                  {direction.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="lg:col-span-5">
            <PhotoPlaceholder
              label="Race weekend"
              aspectClassName="aspect-[16/10] lg:aspect-[4/3]"
            />
          </div>
        </div>
      </PageSection>

      <CtaSection
        id="updates-cta"
        tone="red"
        label={schedulePage.updatesLabel}
        heading={schedulePage.updatesHeading}
        body={schedulePage.updatesBody}
      >
        <ArrowLink
          href={contact.instagramUrl}
          variant="inverse"
        >
          Follow on Instagram
        </ArrowLink>
        <ArrowLink href={mailto(contact.generalSubject)} variant="outline">
          Email CCR
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
