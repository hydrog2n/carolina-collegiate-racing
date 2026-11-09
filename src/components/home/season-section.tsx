import { Eyebrow } from "@/components/ui/eyebrow";
import { seasonContent } from "@/content/home";

export function SeasonSection() {
  return (
    <section
      id="season"
      aria-labelledby="season-title"
      className="relative scroll-mt-24 overflow-hidden bg-red text-white"
    >
      <div
        aria-hidden="true"
        className="checkers absolute inset-x-0 top-0 h-3 text-black/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 bottom-0 h-full w-1/3 opacity-[0.05] checkers text-black"
      />

      <div className="shell relative py-20 sm:py-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/30 pb-6">
          <Eyebrow index={seasonContent.index} tone="red">
            {seasonContent.label}
          </Eyebrow>
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
            Pre-competition
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h2
              id="season-title"
              className="font-display text-[clamp(3.8rem,9vw,9.5rem)] uppercase leading-[0.82] tracking-[0.005em]"
            >
              <span className="block text-white">{seasonContent.heading[0]}</span>
              <span className="block text-black">{seasonContent.heading[1]}</span>
            </h2>
            <p className="mt-9 max-w-2xl text-lg/8 text-white">
              {seasonContent.intro}
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <div className="border-t border-white/45">
              {seasonContent.statuses.map((status) => (
                <div
                  key={status.label}
                  className="flex items-baseline justify-between gap-5 border-b border-white/30 py-4"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                    {status.label}
                  </span>
                  <span className="text-right text-sm font-semibold text-white">
                    {status.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-2xl border-t border-white/30 pt-5 text-xs/6 text-white">
          {seasonContent.note}
        </p>
      </div>
    </section>
  );
}
