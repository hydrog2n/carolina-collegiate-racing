import {
  sponsorshipBenefits,
  sponsorshipNotes,
  sponsorshipTiers,
} from "@/content/sponsorship";

function BenefitValue({ value }: { value: string }) {
  if (value === "—") {
    return (
      <>
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not included</span>
      </>
    );
  }

  return <>{value}</>;
}

export function SponsorshipTiers() {
  return (
    <>
      <div className="mb-12">
        <h3 className="heading-support mb-5 text-[2rem] text-white">
          Tier highlights
        </h3>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sponsorshipTiers.map((tier, tierIndex) => {
            const highlights = sponsorshipBenefits
              .map((benefit) => ({
                label: benefit.label,
                value: benefit.values[tierIndex],
              }))
              .filter((benefit) => benefit.value !== "—")
              .slice(0, 4);

            return (
              <article
                key={tier.name}
                className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border-2 border-graphite bg-graphite p-5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--tier-color)] hover:shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--tier-color)_35%,transparent)] motion-reduce:transition-none"
                style={{
                  "--tier-color": tier.color,
                  backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${tier.color} 16%, transparent) 0%, transparent 66%)`,
                } as React.CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: tier.color }}
                />
                <header className="border-b border-white/15 pb-4">
                  <span
                    className="mb-1 inline-flex rounded-[var(--radius-sm)] border-white/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      backgroundColor: tier.color,
                      color: tier.textColor,
                    }}
                  >
                    {tier.name}
                  </span>
                  <p className="mt-3 font-display text-[2.3rem] leading-none tracking-[0.02em] text-white">
                    {tier.price}
                  </p>
                </header>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Selected benefits
                </p>
                <ul className="mt-2">
                  {highlights.map((benefit) => (
                    <li
                      key={benefit.label}
                      className="flex gap-2 border-b border-white/10 py-2.5 last:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white"
                      />
                      <span className="text-[12px]/[1.45] text-white/70">
                        {benefit.label}
                        {benefit.value !== "Included" ? (
                          <span className="font-semibold text-white">
                            {" · "}
                            {benefit.value}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <h3 className="pt-4 heading-support mb-5 text-[1.5rem] text-white">
        Full benefits comparison
      </h3>
      <div className="table-scroll hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[46rem] border-separate border-spacing-x-0 text-left">
          <caption className="sr-only">
            2026–2027 Carolina Collegiate Racing sponsorship tiers and benefits
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[28%] pb-4 pr-6 align-bottom text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/60"
              >
                Benefit
              </th>
              {sponsorshipTiers.map((tier) => (
                <th
                  key={tier.name}
                  scope="col"
                  className="pr-3 pb-0 align-bottom"
                >
                  <div
                    className="rounded-t-[var(--radius-md)] px-4 py-3"
                    style={{
                      backgroundColor: tier.color,
                      backgroundImage: `linear-gradient(135deg, color-mix(in srgb, ${tier.color} 88%, white) 0%, color-mix(in srgb, ${tier.color} 98%, white) 50%, color-mix(in srgb, ${tier.color} 60%, black) 100%)`,
                      color: tier.textColor,
                    }}
                  >
                    <span className="block font-display text-[1.5rem] uppercase tracking-[0.005em]">
                      {tier.name}
                    </span>
                    <span className="mt-1 block text-[12px] font-medium opacity-80">
                      {tier.price}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sponsorshipBenefits.map((benefit, rowIndex) => {
              const rowBackground =
                rowIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.08]";
              const rowHover =
                "transition-colors duration-200 group-hover/benefit-row:bg-white/[0.16] motion-reduce:transition-none";

              const isFirst = rowIndex === 0;
              const isLast = rowIndex === sponsorshipBenefits.length - 1;

              return (
                <tr key={benefit.label} className="group/benefit-row">
                  <th
                    scope="row"
                    className={`${isFirst ? "rounded-tl-[var(--radius-md)]" : ""} ${isLast ? "rounded-bl-[var(--radius-md)]" : ""} ${rowBackground} ${rowHover} py-4 pl-4 pr-6 text-[13px] font-medium leading-snug text-white/80`}
                  >
                    {benefit.label}
                  </th>
                  {benefit.values.map((value, index) => (
                    <td
                      key={`${benefit.label}-${sponsorshipTiers[index].name}`}
                      className={`${index === benefit.values.length - 1 && isFirst ? "rounded-tr-[var(--radius-md)]" : ""} ${index === benefit.values.length - 1 && isLast ? "rounded-br-[var(--radius-md)]" : ""} ${rowBackground} ${rowHover} px-4 py-4 text-[13px] ${
                        value === "—"
                          ? "text-white/55"
                          : "font-medium text-white/80"
                      }`}
                    >
                      <BenefitValue value={value} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden">
        {sponsorshipTiers.map((tier, tierIndex) => (
          <details
            key={tier.name}
            open={tierIndex === 0}
            className="group border-t border-white/15"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className="rounded-[var(--radius-sm)] px-2 py-1 font-display text-[1.3rem] uppercase leading-none"
                  style={{
                    backgroundColor: tier.color,
                    color: tier.textColor,
                  }}
                >
                  {tier.name}
                </span>
                <span className="text-[12px] font-medium text-white/65">
                  {tier.price}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl leading-none text-red transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <dl className="pb-4">
              {sponsorshipBenefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex justify-between gap-6 border-t border-white/10 py-2.5 text-[13px]"
                >
                  <dt className="text-white/65">{benefit.label}</dt>
                  <dd className="shrink-0 text-right font-medium text-white/85">
                    <BenefitValue value={benefit.values[tierIndex]} />
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>

      <div className="mt-6 grid gap-2 border-t border-white/15 pt-5">
        {sponsorshipNotes.map((note) => (
          <p key={note} className="text-[12px]/[1.65] text-white/60">
            {note}
          </p>
        ))}
      </div>
    </>
  );
}
