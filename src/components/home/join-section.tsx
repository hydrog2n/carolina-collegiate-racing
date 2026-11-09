import { Eyebrow } from "@/components/ui/eyebrow";
import { joinContent } from "@/content/home";

export function JoinSection() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="relative scroll-mt-24 overflow-hidden bg-red text-white"
    >
      <div
        aria-hidden="true"
        className="checkers absolute inset-x-0 top-0 h-3 text-black/15"
      />
      <div className="shell relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow index={joinContent.index} tone="red">
              {joinContent.label}
            </Eyebrow>
            <h2
              id="join-title"
              className="mt-8 font-display text-[clamp(3.8rem,8vw,8.5rem)] uppercase leading-[0.83] tracking-[0.005em]"
            >
              <span className="block text-white">{joinContent.heading[0]}</span>
              <span className="block text-black">{joinContent.heading[1]}</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg/8 text-white">
              {joinContent.intro}
            </p>
            <div className="mt-10 flex items-center gap-3 border-t border-white/30 pt-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-white" />
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                Applications / Details pending
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-black/30 bg-black p-5 sm:p-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
                {joinContent.statusPanel.label}
              </p>
              <p className="mt-5 font-display text-3xl uppercase leading-none text-white sm:text-4xl">
                {joinContent.statusPanel.heading}
              </p>
              <p className="mt-4 text-sm/6 text-white/55">
                {joinContent.statusPanel.body}
              </p>

              <dl className="mt-7 border-t border-white/10">
                {joinContent.statusPanel.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3.5"
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                      {row.label}
                    </dt>
                    <dd className="text-right text-xs font-medium text-white/75">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-red" />
                Application details not yet published
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
