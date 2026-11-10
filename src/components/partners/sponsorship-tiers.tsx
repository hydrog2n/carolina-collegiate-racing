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
      <div className="table-scroll hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[46rem] border-collapse text-left">
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
                  className="border-t-2 border-red px-4 pb-4 pt-3 align-bottom"
                >
                  <span className="block text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                    {tier.name}
                  </span>
                  <span className="mt-1 block text-[12px] font-medium text-white/65">
                    {tier.price}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sponsorshipBenefits.map((benefit) => (
              <tr key={benefit.label} className="border-t border-white/15">
                <th
                  scope="row"
                  className="py-4 pr-6 text-[13px] font-medium leading-snug text-white/80"
                >
                  {benefit.label}
                </th>
                {benefit.values.map((value, index) => (
                  <td
                    key={`${benefit.label}-${sponsorshipTiers[index].name}`}
                    className={`px-4 py-4 text-[13px] ${
                      value === "—"
                        ? "text-white/55"
                        : "font-medium text-white/80"
                    }`}
                  >
                    <BenefitValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
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
                <span className="font-display text-[1.6rem] uppercase leading-none text-white">
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
