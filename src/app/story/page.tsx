import type { Metadata } from "next";
import Link from "next/link";
import { UscMark } from "@/components/brand/usc-mark";
import { CtaSection } from "@/components/layout/cta-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageSection } from "@/components/layout/page-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { storyContent } from "@/content/home";
import { storyPage } from "@/content/pages";
import { site, storySectionLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Carolina Collegiate Racing is building a student-run, Miata-based racing program at the University of South Carolina.",
};

export default function StoryPage() {
  return (
    <main id="main-content">
      <SectionScrollspy items={storySectionLinks} />
      <PageIntro
        index={storyPage.index}
        label={storyPage.label}
        title={storyPage.title}
        intro={storyPage.intro}
        meta={storyPage.meta}
        actions={
          <>
            <ArrowLink href={storyPage.primaryCta.href}>
              {storyPage.primaryCta.label}
            </ArrowLink>
            <ArrowLink href={storyPage.secondaryCta.href} variant="outline">
              {storyPage.secondaryCta.label}
            </ArrowLink>
          </>
        }
      />

      <PageSection
        id="who-we-are"
        tone="smoke"
        label={storyPage.whoLabel}
        title={storyPage.whoHeading}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4 border-l-2 border-garnet pl-5">
              <UscMark className="h-11 w-10 shrink-0" />
              <p className="text-[11px] font-medium uppercase leading-[1.6] tracking-[0.12em] text-black/70">
                {site.affiliation}
                <br />
                {site.university}
              </p>
            </div>

            <dl className="mt-8 grid gap-4 border-t border-black/15 pt-5">
              <div>
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-black/60">
                  Focus
                </dt>
                <dd className="mt-1 text-[14px] font-medium">
                  Miata-based racing
                </dd>
              </div>
              <div>
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-black/60">
                  Membership
                </dt>
                <dd className="mt-1 text-[14px] font-medium">
                  USC students and faculty
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-2xl">
              {storyPage.whoBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[16px]/[1.75] text-black/75 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href="/#program"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-black/65 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Explore the program
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="program-direction"
        tone="black"
        label={storyPage.nowLabel}
        title={storyPage.nowHeading}
        intro={storyPage.nowBody}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Vehicle focus", value: "Mazda MX-5 Miatas" },
                {
                    label: "Sim racing",
                    value: "CRS iRacing Championship",
                  },
                  { label: "Circuit racing", value: "MX-5 Cup procurement" },
                ].map((item) => (
                <div
                  key={item.label}
                  className="border-t border-white/15 pt-4"
                >
                  <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[15px] font-medium text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 border-t border-white/15 pt-5 text-[13px]/[1.65] text-white/65">
              {storyPage.nowNote}
            </p>
          </div>

          <div className="lg:col-span-5">
            <PhotoPlaceholder
              label="Vehicle preparation"
              aspectClassName="aspect-[16/10] lg:aspect-[4/3]"
            />
          </div>
        </div>
      </PageSection>

      <PageSection
        id="mission"
        tone="smoke"
        label="What guides the work"
        title="Four mission areas."
      >
        <ol className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {storyContent.mission.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[auto_1fr] gap-4 border-t border-black/15 pt-5 sm:gap-5"
            >
              <span
                aria-hidden="true"
                className="text-stroke-red font-display text-[3rem] leading-none sm:text-[3.5rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="max-w-sm text-[16px] font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-[14px]/[1.7] text-black/65">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        id="engineering"
        tone="black"
        label={storyPage.engineeringLabel}
        title={storyPage.engineeringHeading}
        intro={storyPage.engineeringBody}
      >
        <div className="grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-3">
          {[
            "Mechanical systems",
            "Electronics and software",
            "Data analysis",
          ].map((item) => (
            <p
              key={item}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/65"
            >
              {item}
            </p>
          ))}
        </div>
      </PageSection>

      <CtaSection
        id="join-cta"
        tone="garnet"
        label="Build with us"
        heading={
          <>
            Learn by doing.{" "}
            <span className="text-white/60">Join the team.</span>
          </>
        }
        body="Membership is open to University of South Carolina students and faculty."
      >
        <ArrowLink href="/join" variant="inverse">
          Join CCR
        </ArrowLink>
        <ArrowLink href="/team" variant="outline">
          Inside the team
        </ArrowLink>
      </CtaSection>
    </main>
  );
}
