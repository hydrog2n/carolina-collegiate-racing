import { Eyebrow } from "@/components/ui/eyebrow";
import { partnersContent } from "@/content/home";

export function PartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative scroll-mt-24 overflow-hidden bg-black"
    >
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow index={partnersContent.index}>
              {partnersContent.label}
            </Eyebrow>
            <h2
              id="partners-title"
              className="mt-8 font-display text-[clamp(3.8rem,8vw,8.5rem)] uppercase leading-[0.83] tracking-[0.005em]"
            >
              <span className="block text-white">
                {partnersContent.heading[0]}
              </span>
              <span className="block text-red">
                {partnersContent.heading[1]}
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg/8 text-white/60">
              {partnersContent.intro}
            </p>

            <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
              {partnersContent.supportPoints.map((point) => (
                <div key={point.title} className="bg-black py-5 pr-6 sm:py-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 bg-red"
                    />
                    <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm/6 text-white/50">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-ink">
              <div className="border-b border-white/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
                {partnersContent.statusPanel.label}
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-display text-3xl uppercase leading-none text-white sm:text-4xl">
                  {partnersContent.statusPanel.heading}
                </p>
                <p className="mt-4 text-sm/6 text-white/50">
                  {partnersContent.statusPanel.body}
                </p>

                <dl className="mt-7 border-t border-white/10">
                  {partnersContent.statusPanel.rows.map((row) => (
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
              </div>
              <div aria-hidden="true" className="checkers h-3 text-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
