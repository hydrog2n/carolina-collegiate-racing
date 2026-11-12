import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark, UscMarkDark } from "@/components/brand/usc-mark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { PointerGlowLink } from "@/components/ui/pointer-glow-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div aria-hidden="true" className="h-1 bg-red" />
      <div className="pb-0.5 shell mt-1 mb-1 flex h-16 items-center justify-between gap-3 sm:mt-1.5 sm:mb-1.5 sm:h-20 sm:gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Home"
            className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <CcrLogo
              variant="extended"
              preload
              sizes="240px"
              className="pt-0.5 h-5 w-auto shrink-0 sm:h-8 xl:h-9"
            />
          </Link>

          <span aria-hidden="true" className="h-8 w-px bg-white/20" />

          <div className="flex items-center gap-3">
            <Link
              href="https://garnetgate.sa.sc.edu/organization/ccr"
              aria-label="Home"
              className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <UscMarkDark className="h-8.5 w-auto shrink-0" />
            </Link>
            <p className="pt-0.5 text-[11px] font-medium uppercase leading-snug tracking-[0.13em]  text-white/40">
              Student Organization
              <br />
              University of South Carolina
            </p>
          </div>
        </div>

        <div className="hidden shrink-0 items-center xl:flex gap-8">
          <div className="hidden items-center gap-6 xl:flex">
            <PrimaryNav className="flex items-center gap-2" />
          </div>
          <PointerGlowLink
            href="/join"
            className="group cursor-glow-link inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] border-transparent bg-[var(--ccr-red)] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] text-white transition-all duration-300 hover:text-white hover:shadow-[0_0px_20px_rgba(255,55,71,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="inline-flex items-center gap-3">
              Join CCR
              <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </PointerGlowLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
