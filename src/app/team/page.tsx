import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { teamPage } from "@/content/pages";
import { contact, mailto, teamSectionLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Contribution areas, membership information, and team updates from Carolina Collegiate Racing at the University of South Carolina.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={teamSectionLinks} />
      <PageIntro
        index={teamPage.index}
        label={teamPage.label}
        title={teamPage.title}
        intro={teamPage.intro}
        meta={teamPage.meta}
        actions={
          <>
            <ArrowLink href={teamPage.primaryCta.href}>
              {teamPage.primaryCta.label}
            </ArrowLink>
            <ArrowLink href={teamPage.secondaryCta.href} variant="outline">
              {teamPage.secondaryCta.label}
            </ArrowLink>
          </>
        }
      />

      <PageSection
        id="work-areas"
        tone="smoke"
        label={teamPage.areasLabel}
        title={teamPage.areasHeading}
        intro={teamPage.areasBody}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="grid gap-0">
              {teamPage.areas.map((area, index) => (
                <article
                  key={area.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-black/15 py-5 sm:gap-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[1.8rem] leading-none text-red"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold leading-snug">
                      {area.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[14px]/[1.7] text-black/65">
                      {area.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 border-t border-black/15 pt-5 text-[13px]/[1.65] text-black/65">
              Membership is open to University of South Carolina students and
              faculty.
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            <PhotoPlaceholder
              label={teamPage.photoLabel}
              aspectClassName="aspect-[4/3]"
            />
            <PhotoPlaceholder
              label={teamPage.workshopLabel}
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </div>
      </PageSection>

      <PageSection
        id="member-profiles"
        tone="black"
        label={teamPage.rosterLabel}
        title={teamPage.rosterHeading}
        intro={teamPage.rosterBody}
      />

      <CtaSection
        id="join-cta"
        tone="garnet"
        label="Join the team"
        heading={
          <>
            There is work to do.{" "}
            <span className="text-white/60">Start with an email.</span>
          </>
        }
        body="Membership is open to University of South Carolina students and faculty."
      >
        <ArrowLink
          href={mailto(contact.joinSubject)}
          variant="inverse"
        >
          Email CCR
        </ArrowLink>
        <ArrowLink href="/join" variant="outline">
          Membership details
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
