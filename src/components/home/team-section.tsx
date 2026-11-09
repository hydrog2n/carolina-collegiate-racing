import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { teamContent } from "@/content/home";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="relative scroll-mt-24 overflow-hidden bg-black"
    >
      <div className="shell py-20 sm:py-28">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-8">
          <Eyebrow index={teamContent.index}>{teamContent.label}</Eyebrow>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
            Student-run / USC
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2
              id="team-title"
              className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.85] tracking-[0.005em]"
            >
              <span className="block text-white">{teamContent.heading[0]}</span>
              <span className="block text-red">{teamContent.heading[1]}</span>
              <span className="block text-red">{teamContent.heading[2]}</span>
            </h2>
            <p className="mt-8 max-w-md text-base/7 text-white/60">
              {teamContent.intro}
            </p>
            <Link
              href={teamContent.cta.href}
              className="group mt-8 inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {teamContent.cta.label}
              <ArrowIcon className="text-red transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/10">
              {teamContent.areas.map((area, index) => (
                <div
                  key={area.title}
                  className="group border-b border-white/10 p-5 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:p-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl uppercase leading-none text-white transition-colors group-hover:text-red sm:text-3xl">
                      {area.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl pl-8 text-sm/6 text-white/50">
                    {area.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-red pl-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-red"
              />
              <p className="max-w-xl text-xs/6 text-white/55">
                {teamContent.rosterNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
