import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { eventsPage } from "@/content/pages";
import { contact, eventsSectionLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Events & Schedule",
  description:
    "Competition entries and team events for Carolina Collegiate Racing will be published here when confirmed.",
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={eventsSectionLinks} />
      <PageIntro
        index={eventsPage.index}
        label={eventsPage.label}
        title={eventsPage.title}
        intro={eventsPage.intro}
        meta={eventsPage.meta}
        actions={
          <>
            <ArrowLink
              href={contact.instagramUrl}
              variant="outline"
            >
              Follow on Instagram
            </ArrowLink>
            <ArrowLink href="/contact" variant="outline">
              Contact CCR
            </ArrowLink>
          </>
        }
      />

      <PageSection
        id="upcoming"
        tone="smoke"
        label={eventsPage.emptyLabel}
        title={eventsPage.emptyHeading}
        intro={eventsPage.emptyBody}
      >
        <div className="grid gap-4 border-t border-black/15 pt-6 sm:grid-cols-3">
          {[
            {
              title: "Competition entries",
              detail: "Published when an entry is confirmed.",
            },
            {
              title: "Team events",
              detail: "Meetings, work days, and public activities.",
            },
            {
              title: "Sim racing",
              detail: "Sessions and events when they are scheduled.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-black/15 pt-4">
              <h3 className="text-[14px] font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[13px]/[1.65] text-black/65">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="directions"
        tone="black"
        label={eventsPage.directionsLabel}
        title={eventsPage.directionsHeading}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="grid gap-4 lg:col-span-7">
            {eventsPage.directions.map((direction, index) => (
              <article
                key={direction.title}
                className={`p-6 sm:p-8 ${
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
                    {index === 0 ? "Competitive direction" : "Planned arena"}
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
        label={eventsPage.updatesLabel}
        heading={eventsPage.updatesHeading}
        body={eventsPage.updatesBody}
      >
        <ArrowLink
          href={contact.instagramUrl}
          variant="inverse"
        >
          Follow on Instagram
        </ArrowLink>
        <ArrowLink href="/contact" variant="outline">
          Contact CCR
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
