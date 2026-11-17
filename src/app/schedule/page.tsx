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
        label={schedulePage.label}
        title={schedulePage.title}
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
