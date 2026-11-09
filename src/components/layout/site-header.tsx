import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { primaryNav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div aria-hidden="true" className="h-1 bg-red" />
      <div className="shell flex h-20 items-center justify-between gap-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <CcrLogo
            variant="mark"
            priority
            sizes="180px"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden border-l border-white/15 pl-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-white/55 md:block">
            Student-run motorsports
            <br />
            University of South Carolina
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-red after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            href="/#join"
            className="group inline-flex min-h-10 items-center gap-3 bg-red px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
