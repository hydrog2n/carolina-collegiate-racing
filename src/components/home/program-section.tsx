import { Eyebrow } from "@/components/ui/eyebrow";
import { StatusChip } from "@/components/ui/status-chip";
import { programContent } from "@/content/home";

export function ProgramSection() {
  return (
    <section
      id="program"
      aria-labelledby="program-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-ink"
    >
      <div className="shell relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow index={programContent.index}>{programContent.label}</Eyebrow>
            <h2
              id="program-title"
              className="mt-8 font-display text-[clamp(3.4rem,6.5vw,6.75rem)] uppercase leading-[0.84] tracking-[0.005em]"
            >
              <span className="block text-white">
                {programContent.heading[0]}
              </span>
              <span className="block text-red">{programContent.heading[1]}</span>
              <span className="block text-white">
                {programContent.heading[2]}
              </span>
            </h2>
            <p className="mt-8 max-w-md text-base/7 text-white/60">
              {programContent.intro}
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-5">
              <div
                aria-hidden="true"
                className="checkers h-10 w-20 shrink-0 text-red"
              />
              <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/55">
                Vehicle focus
                <br />
                Mazda Miata
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/15 bg-black">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
                <span>Program snapshot</span>
                <span>CCR / 001</span>
              </div>

              <dl>
                {programContent.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 px-5 py-4 last:border-b-0"
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                      {spec.label}
                    </dt>
                    <dd className="flex flex-wrap items-center justify-end gap-3 text-right text-sm font-medium text-white/85">
                      {spec.value}
                      <StatusChip status={spec.status} />
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="border-t border-white/10 bg-white/[0.03] px-5 py-4 text-xs/5 text-white/55">
                {programContent.note}
              </p>
            </div>

            <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">
              {programContent.disciplines.map((discipline) => (
                <div key={discipline.name} className="bg-ink p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl uppercase leading-none text-white">
                      {discipline.name}
                    </h3>
                    <StatusChip status={discipline.status} />
                  </div>
                  <p className="mt-4 text-xs/6 text-white/50">
                    {discipline.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
