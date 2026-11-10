import type { Metadata } from "next";
import { UscMark } from "@/components/brand/usc-mark";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { contactPage } from "@/content/pages";
import { contact, contactSectionLinks, mailto, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Carolina Collegiate Racing about the program, membership, or sponsorship.",
};

function subjectLink(subject: string) {
  if (subject === "join") return mailto(contact.joinSubject);
  if (subject === "sponsorship") return mailto(contact.sponsorshipSubject);
  return mailto();
}

export default function ContactPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={contactSectionLinks} />
      <PageIntro
        index={contactPage.index}
        label={contactPage.label}
        title={contactPage.title}
        intro={contactPage.intro}
        meta={contactPage.meta}
      />

      <PageSection
        id="email"
        tone="smoke"
        label={contactPage.channelsLabel}
      >
        <div className="border-t border-black/15 pt-6">
          <a
            href={mailto()}
            className="heading-support group inline-flex max-w-full items-start gap-4 break-all text-[clamp(1.5rem,3.4vw,2.75rem)] text-black transition-colors hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            {contact.email}
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-[0.55em] transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {contactPage.channels.map((channel, index) => (
              <article
                key={channel.label}
                className="border-t border-black/15 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[2.2rem] leading-none text-red"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-[16px] font-bold">{channel.label}</h2>
                <p className="mt-2 text-[14px]/[1.7] text-black/65">
                  {channel.detail}
                </p>
                <a
                  href={subjectLink(channel.subject)}
                  className="group mt-4 inline-flex min-h-11 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-black/70 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  {channel.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        id="instagram"
        tone="black"
        label={contactPage.instagramLabel}
      >
        <div className="grid gap-8 border-t border-white/15 pt-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="heading-support max-w-xl text-[clamp(1.6rem,3.2vw,2.5rem)] text-white/85">
              {contactPage.instagramBody}
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-white transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {contact.instagramHandle}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-start gap-4 border-l-2 border-red pl-5">
              <UscMark className="h-11 w-10 shrink-0" />
              <p className="text-[11px] font-medium uppercase leading-[1.6] tracking-[0.12em] text-white/65">
                {site.affiliation}
                <br />
                {site.university}
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <CtaSection
        id="contact-cta"
        tone="red"
        label="Contact"
        heading="Start a conversation."
        body="Email is the best way to reach the team for program, membership, and sponsorship questions."
      >
        <ArrowLink href={mailto()} variant="inverse">
          Email CCR
        </ArrowLink>
        <ArrowLink
          href={mailto(contact.sponsorshipSubject)}
          variant="outline"
        >
          Sponsorship inquiry
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
