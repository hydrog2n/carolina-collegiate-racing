import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark } from "@/components/brand/usc-mark";
import {
  contact,
  footerNav,
  mailto,
  site,
  sponsorship,
} from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-ink"
    >
      <div aria-hidden="true" className="h-1 bg-red" />

      <div className="shell py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Carolina Collegiate Racing home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <CcrLogo
                variant="extended"
                sizes="(min-width: 640px) 340px, 280px"
                className="h-auto w-[260px] sm:w-[340px]"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[14px]/[1.7] text-white/65">
              A student-run motorsports team building a Miata-based race
              program at the University of South Carolina.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <UscMark className="h-11 w-10 shrink-0" />
              <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.13em] text-white/65">
                {site.affiliation}
                <br />
                {site.university}
              </p>
            </div>
          </div>

          <nav aria-labelledby="footer-nav-title" className="lg:col-span-3">
            <h2
              id="footer-nav-title"
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-red" />
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-8">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-3 border-b border-white/10 py-2.5 text-[14px] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className="h-px w-4 bg-white/20 transition-all group-hover:w-6 group-hover:bg-red"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-red" />
              Contact
            </h2>
            <p className="mt-5 max-w-sm text-[14px]/[1.7] text-white/65">
              {contact.body}
            </p>

            <a
              href={mailto()}
              className="mt-4 inline-block text-[16px] font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {contact.email}
            </a>

            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-[14px] text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Instagram {contact.instagramHandle}
            </a>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact page
              <span aria-hidden="true">→</span>
            </Link>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
                Sponsorship
              </p>
              <a
                href={sponsorship.packetPath}
                download=""
                className="mt-2 flex items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Sponsorship packet
                <span className="text-[11px] text-white/50">
                  PDF · {sponsorship.packetSize}
                </span>
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={mailto(contact.sponsorshipSubject)}
                className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Email about sponsorship
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 text-[11px] font-medium uppercase tracking-[0.13em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p>Student-run motorsports · University of South Carolina</p>
          <a
            href="#main-content"
            className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
