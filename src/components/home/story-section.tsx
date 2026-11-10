import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { SectionLabel } from "@/components/ui/section-label";
import { UscMark } from "@/components/brand/usc-mark";
import { storyContent } from "@/content/home";
import { site } from "@/content/site";

export function StorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative scroll-mt-24 overflow-hidden bg-smoke text-black"
    >
      <div className="shell py-12 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <SectionLabel index={storyContent.index} tone="light">
              {storyContent.label}
            </SectionLabel>

            <h2
              id="story-title"
              className="heading-section mt-5 text-[clamp(2.2rem,6.8vw,6.25rem)]"
            >
              <span className="block">{storyContent.heading[0]}</span>
              <span className="block text-red">
                {storyContent.heading[1]}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-12 xl:col-span-4">
            <p className="max-w-xl text-[17px]/[1.7] text-black/80">
              {storyContent.intro}
            </p>
            <div className="mt-8 flex items-start gap-4 border-l-2 border-garnet pl-4">
              <UscMark className="h-10 w-9 shrink-0" />
              <p className="text-[11px] font-medium uppercase leading-[1.55] tracking-[0.12em] text-black/65">
                {site.affiliation}
                <br />
                {site.university}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/15 pt-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.17em] text-black/65">
              {storyContent.missionLabel}
            </p>
          </div>

          <div className="lg:col-span-9">
            <ol className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
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
                    <p className="mt-2 max-w-sm text-[14px]/[1.65] text-black/65">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ArrowLink
                href={storyContent.cta.href}
                variant="light"
              >
                {storyContent.cta.label}
              </ArrowLink>
              <Link
                href={storyContent.sponsorCta.href}
                className="group inline-flex min-h-11 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-black/65 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                {storyContent.sponsorCta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
