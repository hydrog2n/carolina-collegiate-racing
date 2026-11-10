import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { joinPage } from "@/content/pages";
import { contact, joinSectionLinks, mailto } from "@/content/site";

export const metadata: Metadata = {
  title: "Join CCR",
  description:
    "Membership in Carolina Collegiate Racing is open to University of South Carolina students and faculty.",
};

export default function JoinPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={joinSectionLinks} />
      <PageIntro
        index={joinPage.index}
        label={joinPage.label}
        title={joinPage.title}
        intro={joinPage.intro}
        tone="garnet"
        actions={
          <>
            <ArrowLink
              href={mailto(contact.joinSubject)}
              variant="inverse"
            >
              Email CCR
            </ArrowLink>
            <ArrowLink
              href={contact.instagramUrl}
              variant="outline"
            >
              Follow on Instagram
            </ArrowLink>
          </>
        }
      />

      <PageSection
        id="opportunities"
        tone="smoke"
        label={joinPage.opportunitiesLabel}
        title={joinPage.opportunitiesHeading}
      >
        <div className="grid gap-8 sm:grid-cols-3">
          {joinPage.opportunities.map((opportunity, index) => (
            <article
              key={opportunity.title}
              className="border-t border-black/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2.2rem] leading-none text-red"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16px] font-bold">
                {opportunity.title}
              </h3>
              <p className="mt-2 text-[14px]/[1.7] text-black/65">
                {opportunity.detail}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="how-to-join"
        tone="black"
        label={joinPage.howLabel}
        title={joinPage.howHeading}
        intro={joinPage.howBody}
      >
        <div className="grid gap-8 border-t border-white/15 pt-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <a
              href={mailto(contact.joinSubject)}
              className="heading-support group inline-flex max-w-full items-start gap-4 break-all text-[clamp(1.5rem,3.4vw,2.75rem)] text-white transition-colors hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {contact.email}
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-[0.55em] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="mt-4 max-w-xl text-[13px]/[1.65] text-white/65">
              {joinPage.note}
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
              Instagram
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {contact.instagramHandle}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </PageSection>

      <CtaSection
        id="join-cta"
        tone="red"
        label="Join CCR"
        heading="Ready to get involved?"
        body="Tell the team where you would like to contribute."
      >
        <ArrowLink
          href={mailto(contact.joinSubject)}
          variant="inverse"
        >
          Email CCR
        </ArrowLink>
        <ArrowLink href="/contact" variant="outline">
          Contact CCR
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
