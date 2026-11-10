import { ArrowLink } from "@/components/ui/arrow-link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { SectionLabel } from "@/components/ui/section-label";
import { programContent } from "@/content/home";
import { contact } from "@/content/site";

export function ProgramSection() {
  return (
    <section
      id="program"
      aria-labelledby="program-title"
      className="relative scroll-mt-24 overflow-hidden bg-black"
    >
      <div className="shell py-12 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel
              index={programContent.index}
              variant="rule"
              tone="dark"
            >
              {programContent.label}
            </SectionLabel>
            <h2
              id="program-title"
              className="heading-section mt-5 text-[clamp(2.2rem,5.4vw,4.75rem)] text-white"
            >
              {programContent.heading[0]}{" "}
              <span className="text-red">{programContent.heading[1]}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p className="max-w-xl text-[16px]/[1.7] text-white/70">
              {programContent.intro}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <PhotoPlaceholder
              label="Workshop / vehicle preparation"
              aspectClassName="aspect-[4/3] lg:aspect-[16/9]"
            />

            <div className="mt-8 grid gap-4 border-l-2 border-red pl-5 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8">
              <p className="heading-support text-[clamp(1.7rem,2.8vw,2.5rem)] text-white">
                {programContent.buildHeading}
              </p>
              <p className="text-[14px]/[1.7] text-white/65">
                {programContent.buildNote}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {programContent.disciplines.map((discipline, index) =>
                index === 0 ? (
                  <article key={discipline.name} className="bg-red p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-white">
                        {discipline.kicker}
                      </p>
                      <span
                        aria-hidden="true"
                        className="font-display text-[1.8rem] leading-none text-white/80"
                      >
                        {discipline.index}
                      </span>
                    </div>
                    <h3 className="heading-support mt-4 text-[clamp(2rem,4vw,3.25rem)] text-white">
                      {discipline.name}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px]/[1.7] text-white">
                      {discipline.detail}
                    </p>
                  </article>
                ) : (
                  <article
                    key={discipline.name}
                    className="border border-white/15 bg-graphite p-6 sm:p-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.17em] text-white/65">
                        {discipline.kicker}
                      </p>
                      <span
                        aria-hidden="true"
                        className="font-display text-[1.8rem] leading-none text-white/45"
                      >
                        {discipline.index}
                      </span>
                    </div>
                    <h3 className="heading-support mt-4 text-[clamp(2rem,4vw,3.25rem)] text-white">
                      {discipline.name}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px]/[1.7] text-white/65">
                      {discipline.detail}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="text-[12px] font-medium uppercase tracking-[0.17em] text-white/65">
                {programContent.roadAheadLabel}
              </p>
              <p className="mt-3 max-w-xs text-[13px]/[1.65] text-white/65">
                {programContent.roadAheadNote}
              </p>
            </div>

            <div className="lg:col-span-9">
              <ol className="grid gap-5 sm:grid-cols-3">
                {programContent.roadAhead.map((item, index) => (
                  <li
                    key={item.title}
                    className="border-t border-white/15 pt-4"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.7rem] leading-none text-red"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-[15px] font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px]/[1.6] text-white/65">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.13em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {programContent.instagramCta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <ArrowLink
                  href={programContent.joinCta.href}
                  variant="outline"
                >
                  {programContent.joinCta.label}
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
