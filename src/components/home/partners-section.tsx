import { ArrowLink } from "@/components/ui/arrow-link";
import { GradientHeadingText } from "@/components/ui/gradient-heading-text";
import { SectionLabel } from "@/components/ui/section-label";
import { partnersContent } from "@/content/home";
import { contact, mailto, sponsorship } from "@/content/site";

export function PartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative scroll-mt-24 overflow-hidden bg-smoke text-black"
    >
      <div className="shell py-12 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel
              index={partnersContent.index}
              variant="rule"
              tone="light"
            >
              {partnersContent.label}
            </SectionLabel>

            <h2
              id="partners-title"
              className="heading-section mt-5 text-[clamp(2.4rem,6vw,5rem)]"
            >
              {partnersContent.heading[0]}{" "}
              <GradientHeadingText className="text-red">
                {partnersContent.heading[1]}
              </GradientHeadingText>
            </h2>

            <p className="mt-6 max-w-xl text-[16px]/[1.7] text-black/70">
              {partnersContent.intro}
            </p>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              {partnersContent.supportPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="border-t border-black/15 pt-5"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[2.5rem] leading-none text-red"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[16px] font-bold text-black">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[14px]/[1.7] text-black/65">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between rounded-[var(--radius-lg)] bg-ink p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:p-8">
              <div>
                <p className="pt-2 text-[11px] font-medium uppercase tracking-[0.17em] text-white/70">
                  {partnersContent.panelLabel}
                </p>
                <h3 className="heading-support mt-4 max-w-md text-[clamp(2rem,4vw,2.9rem)] text-white">
                  {partnersContent.panelHeading}
                </h3>
                <p className="mt-4 max-w-md text-[14px]/[1.7] text-white/70">
                  {partnersContent.panelBody}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-3">
                  <ArrowLink
                    href={sponsorship.packetPath}
                    variant="solid"
                    download
                  >
                    {partnersContent.downloadLabel}
                  </ArrowLink>
                  <ArrowLink
                    href="/partners#tiers"
                    variant="outline"
                  >
                    Sponsorship tiers
                  </ArrowLink>
                </div>
                <p className="mt-4 text-[12px]/[1.6] text-white/65">
                  {partnersContent.packetNote} · {sponsorship.packetSize} ·{" "}
                  <a
                    href={mailto(contact.sponsorshipSubject)}
                    className="font-medium text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
