import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-label";
import { teamContent } from "@/content/home";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="relative scroll-mt-24 overflow-hidden bg-garnet ambient-red-highlight text-white"
    >
      <div className="shell py-12 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionLabel
              index={teamContent.index}
              variant="rule"
              tone="red"
            >
              {teamContent.label}
            </SectionLabel>

            <h2
              id="team-title"
              className="heading-section mt-5 max-w-3xl text-[clamp(2.1rem,4.8vw,4.25rem)]"
            >
              <span className="block">{teamContent.heading[0]}</span>
              <span className="block text-white/60">
                {teamContent.heading[1]}
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[16px]/[1.7] text-white/80">
              {teamContent.intro}
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                <ArrowLink href={teamContent.cta.href} variant="inverse">
                  {teamContent.cta.label}
                </ArrowLink>
                <ArrowLink href={teamContent.pageCta.href} variant="outline">
                  {teamContent.pageCta.label}
                </ArrowLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PhotoPlaceholder
                label="Team portrait"
                aspectClassName="aspect-[16/10] lg:aspect-[4/3]"
              />
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-[12px] font-medium uppercase tracking-[0.17em] text-white/70">
                  {teamContent.areasLabel}
                </p>
                <p className=" text-[12px]/[1.55] text-white/65 sm:text-right">
                  {teamContent.areasNote}
                </p>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {teamContent.areas.map((area, index) => (
                  <div
                    key={area.title}
                    className="border-t border-white/20 pt-4"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.7rem] leading-none text-white"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-[15px] font-bold text-white">
                      {area.title}
                    </h3>
                    <p className="mt-1.5 text-[13px]/[1.65] text-white/70">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}
