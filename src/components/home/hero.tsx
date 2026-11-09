import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark } from "@/components/brand/usc-mark";
import { ArrowLink } from "@/components/ui/arrow-link";
import { heroContent } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-black"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1 bg-garnet" />
        <div className="tech-grid absolute inset-y-0 right-0 hidden w-1/2 opacity-50 lg:block" />
        <div className="absolute right-0 top-0 hidden h-px w-1/2 bg-red lg:block" />
        <span className="absolute -left-10 top-24 select-none font-display text-[18rem] leading-none text-white/[0.025] sm:-left-16 sm:top-28 sm:text-[28rem]">
          01
        </span>
      </div>

      <div className="shell grid gap-16 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <div className="intro-rise flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span>{heroContent.eyebrow}</span>
            <span aria-hidden="true" className="h-1 w-1 bg-red" />
            <span className="text-white/55">{heroContent.affiliation}</span>
          </div>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[clamp(4.5rem,11.2vw,10.5rem)] uppercase leading-[0.81] tracking-[0.005em] text-white"
          >
            <span
              className="intro-rise block"
              style={{ animationDelay: "80ms" }}
            >
              {heroContent.heading[0]}
            </span>
            <span
              className="intro-rise block text-red"
              style={{ animationDelay: "160ms" }}
            >
              {heroContent.heading[1]}
            </span>
          </h1>

          <p
            className="intro-rise mt-8 max-w-xl text-base/7 text-white/65 sm:text-lg/8"
            style={{ animationDelay: "260ms" }}
          >
            {heroContent.description}
          </p>

          <div
            className="intro-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <ArrowLink href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </ArrowLink>
            <ArrowLink href={heroContent.secondaryCta.href} variant="outline">
              {heroContent.secondaryCta.label}
            </ArrowLink>
          </div>

          <dl
            className="intro-rise mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4"
            style={{ animationDelay: "420ms" }}
          >
            {heroContent.facts.map((fact) => (
              <div key={fact.label} className="bg-black px-4 py-4">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-white/85">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="intro-rise flex flex-col justify-center lg:col-span-5"
          style={{ animationDelay: "260ms" }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="checkers absolute -left-5 -top-5 h-16 w-16 text-red"
            />
            <div className="relative border border-white/15 bg-ink p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
                <span>{heroContent.panel.label}</span>
                <span className="flex items-center gap-2 text-white/60">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-red" />
                  {heroContent.panel.status}
                </span>
              </div>

              <div className="mt-5 border border-white/10 bg-black p-4 sm:p-6">
                <CcrLogo
                  variant="badge"
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 90vw"
                  className="h-auto w-full"
                />
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                {heroContent.panel.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-xs font-medium text-white/80 sm:text-sm">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 bg-red px-4 py-3">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                  {heroContent.panel.disciplines}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <UscMark className="h-9 w-8 shrink-0" />
            <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-white/55">
              {site.affiliation}
              <br />
              {site.university}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
