import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PrimaryNav } from "@/components/layout/primary-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div aria-hidden="true" className="h-1 bg-red" />
      <div className="shell flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-5"
        >
          <CcrLogo
            variant="mark"
            preload
            sizes="200px"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden border-l border-white/15 pl-5 text-[11px] font-medium uppercase leading-relaxed tracking-[0.13em] text-white/60 md:block">
            Student-run motorsports
            <br />
            University of South Carolina
          </span>
        </Link>

        <PrimaryNav className="hidden items-center gap-6 xl:flex xl:gap-7" />

        <div className="hidden shrink-0 items-center xl:flex">
          <Link
            href="/join"
            className="group inline-flex min-h-11 items-center gap-3 bg-red px-5 py-3 text-[12px] font-medium uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Join CCR
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 bg-white transition-colors group-hover:bg-red"
            />
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
