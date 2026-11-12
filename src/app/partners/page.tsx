import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { SponsorshipTiers } from "@/components/partners/sponsorship-tiers";
import { ArrowLink } from "@/components/ui/arrow-link";
import { partnersPage } from "@/content/pages";
import {
  sponsorshipSteps,
  supportAreas,
} from "@/content/sponsorship";
import {
  contact,
  mailto,
  partnersSectionLinks,
  sponsorship,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Partners & Sponsorship",
  description:
    "Sponsorship opportunities, the 2026–2027 packet, and partner information for Carolina Collegiate Racing.",
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={partnersSectionLinks} />
      <PageIntro
        index={partnersPage.index}
        label={partnersPage.label}
        title={partnersPage.title}
        intro={partnersPage.intro}
        meta={partnersPage.meta}
        actions={
          <>
            <ArrowLink
              href={sponsorship.packetPath}
              download
            >
              Download the packet
            </ArrowLink>
            <ArrowLink
              href={mailto(contact.sponsorshipSubject)}
              variant="outline"
            >
              Email CCR
            </ArrowLink>
          </>
        }
      />
      <PageSection
        id="steps"
        tone="smoke"
        label={partnersPage.stepsLabel}
        title={partnersPage.stepsHeading}
      >
        <ol className="grid gap-8 lg:grid-cols-3">
          {sponsorshipSteps.map((step, index) => (
            <li
              key={step.title}
              className="border-t border-black/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2.2rem] leading-none text-red"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16px] font-bold">{step.title}</h3>
              <p className="mt-2 text-[14px]/[1.7] text-black/65">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ArrowLink
            href={sponsorship.packetPath}
            variant="light"
            download
          >
            Download the 2026–27 packet
          </ArrowLink>
          <a
            href={mailto(contact.sponsorshipSubject)}
            className="text-[14px] font-medium text-black underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            {contact.email}
          </a>
        </div>
      </PageSection>

      <PageSection
        id="tiers"
        tone="black"
        label={partnersPage.tiersLabel}
        title={partnersPage.tiersHeading}
        intro={partnersPage.tiersBody}
      >
        <SponsorshipTiers />
      </PageSection>

      <PageSection
        id="support"
        tone="smoke"
        label={partnersPage.supportLabel}
        title={partnersPage.supportHeading}
        intro={partnersPage.supportBody}
      >
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {supportAreas.map((area, index) => (
            <article
              key={area.title}
              className="border-t border-black/15 pt-5"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2.2rem] leading-none text-red"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 max-w-md text-[16px] font-bold leading-snug">
                {area.title}
              </h3>
              <p className="mt-2 max-w-md text-[14px]/[1.7] text-black/65">
                {area.detail}
              </p>
            </article>
          ))}
        </div>
      </PageSection>
      <CtaSection
        id="contact-cta"
        tone="red"
        label="Sponsorship"
        heading="Start a conversation."
        body="Questions about tiers, recognition, or fulfillment? Email the team and we will follow up with the packet."
      >
        <ArrowLink
          href={mailto(contact.sponsorshipSubject)}
          variant="inverse"
        >
          Email CCR
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
