import type { Metadata } from "next";
import { CtaSection } from "@/components/layout/cta-section";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { teamPage } from "@/content/pages";
import { contact, mailto, teamSectionLinks } from "@/content/site";
import { GradientHeadingText } from "@/components/ui/gradient-heading-text";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Contribution areas, membership information, and team updates from Carolina Collegiate Racing at the University of South Carolina.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={teamSectionLinks} />
      {/* <PageIntro
        index={teamPage.index}
        label={teamPage.label}
        title={teamPage.title}
        intro={teamPage.intro}
        actions={
          <>
            <ArrowLink href={teamPage.primaryCta.href}>
              {teamPage.primaryCta.label}
            </ArrowLink>
          </>
        }
      /> */}

      <PageSection
        id="member-profiles"
        tone="black"
        label={teamPage.rosterLabel}
        title={teamPage.rosterHeading}
        intro={teamPage.rosterBody}
      >
        <div className="space-y-12 sm:space-y-14">
            <PhotoPlaceholder
              label={teamPage.photoLabel}
              aspectClassName="aspect-[21/9]"
            />
          </div>
        <div className="space-y-12 sm:space-y-14 mt-12 ">
          {teamPage.rosterGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-heading`}
              className="relative space-y-5 scroll-mt-32"
            >
              <div className="flex items-center gap-4">
                <h3
                  id={`${group.id}-heading`}
                  className="heading-support text-xl sm:text-2xl"
                >
                  {group.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-white/15"
                />
              </div>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-5 lg:gap-x-6">
                {group.members.map((member) => (
                  <li key={member.id}>
                    <figure className="transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      <div
                        role="img"
                        aria-label={`Portrait placeholder for ${member.name}`}
                        className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-graphite"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 180 300"
                          preserveAspectRatio="xMidYMax slice"
                          className="absolute inset-0 h-full w-full"
                        >
                          <circle cx="90" cy="150" r="36" fill="#343438" />
                          <path
                            d="M22 330v-34c0-57 25-97 68-97s68 40 68 97v34H22Z"
                            fill="#343438"
                          />
                        </svg>
                      </div>
                      <figcaption className="lg:pl-2 mt-4">
                        <p className="font-display text-[1.2rem] leading-none text-white uppercase sm:text-[1.4rem]">
                          {member.name}
                        </p>
                        <p className="mt-1.5 text-[12px]/[1.4] font-medium text-white/65">
                          {member.position}
                        </p>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </PageSection>

      <CtaSection
        id="join-cta"
        tone="smoke"
        label="Join the team"
        heading={
          <>
            There is work to do.{" "}
            <GradientHeadingText className="text-red">Start with an email.</GradientHeadingText>
          </>
        }
        body="Membership is open to University of South Carolina students and faculty."
      >
        <ArrowLink
          href={mailto(contact.joinSubject)}
          variant="solid"
        >
          Email CCR
        </ArrowLink>
        <ArrowLink href="/join" variant="light">
          Membership details
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
