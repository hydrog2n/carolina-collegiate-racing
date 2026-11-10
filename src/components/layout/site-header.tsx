import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { PointerGlowLink } from "@/components/ui/pointer-glow-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div aria-hidden="true" className="h-1 bg-red" />
      <div className="shell mt-1 mb-1 flex h-16 items-center justify-between gap-3 sm:mt-1.5 sm:mb-1.5 sm:h-20 sm:gap-6">
        <Link
          href="/"
          aria-label="Home"
          className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <CcrLogo
            variant="extended"
            preload
            sizes="280px"
            className="h-7 w-auto shrink-0 sm:h-8 xl:h-9"
          />
        </Link>

        <PrimaryNav className="hidden items-center gap-6 xl:flex xl:gap-7" />

        <div className="hidden shrink-0 items-center xl:flex">
          <PointerGlowLink
            href="/join"
            glow
            className="group cursor-glow-link inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] border border-transparent bg-garnet px-5 py-3 text-[12px] font-medium uppercase tracking-[0.13em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(204,46,64,0.22),0_12px_24px_rgba(204,46,64,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="inline-flex items-center gap-3">
              Join CCR
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 bg-white transition-colors group-hover:bg-red"
              />
            </span>
          </PointerGlowLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
