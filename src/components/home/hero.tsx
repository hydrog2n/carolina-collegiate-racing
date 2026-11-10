import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { heroContent } from "@/content/home";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-black lg:flex lg:min-h-[min(54rem,calc(100svh-5rem))] lg:flex-col"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
        <Image
          src="/images/miata_background.png"
          alt="Illustrative image of a Mazda Miata race car on a racetrack."
          fill
          preload
          sizes="100vw"
          className="object-cover object-[62%_58%] lg:object-[64%_64%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.32)_62%,rgba(0,0,0,0.04)_100%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,transparent_28%,transparent_70%,rgba(0,0,0,0.45)_100%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.72)_100%)] lg:hidden"
        />
        <p className="absolute right-4 top-4 bg-black/40 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 sm:right-6 sm:top-6">
          {heroContent.imageNote}
        </p>
      </div>

      <div className="shell relative flex flex-1 flex-col pb-10 pt-8 sm:pb-12 lg:pb-10 lg:pt-20 xl:pt-24">
        <div className="max-w-[46rem]">
          <p className="intro-rise flex flex-col gap-1.5">
            <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-white">
              {heroContent.name}
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/65">
              {heroContent.affiliation}
            </span>
          </p>

          <h1
            id="hero-title"
            className="heading-hero mt-6 text-[clamp(4rem,9.2vw,9rem)] text-white sm:mt-8"
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
            className="intro-rise mt-6 max-w-[34rem] text-[17px]/[1.7] text-white/80 sm:mt-8 sm:text-[18px]/[1.65] lg:max-w-[32rem]"
            style={{ animationDelay: "260ms" }}
          >
            {heroContent.description}
          </p>

          <div
            className="intro-rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "340ms" }}
          >
            <ArrowLink href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </ArrowLink>
            <ArrowLink href={heroContent.secondaryCta.href} variant="outline">
              {heroContent.secondaryCta.label}
            </ArrowLink>
            <Link
              href={heroContent.tertiaryCta.href}
              className="inline-flex min-h-11 items-center gap-2 px-1 text-[12px] font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {heroContent.tertiaryCta.label}
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/20 pt-5 sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-auto lg:pt-6">
          {heroContent.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/65">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[12px] font-medium leading-snug text-white sm:text-[13px]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div aria-hidden="true" className="relative h-1.5 bg-red">
        <div className="checkers absolute inset-y-0 right-0 w-24 text-black/25" />
      </div>
    </section>
  );
}
