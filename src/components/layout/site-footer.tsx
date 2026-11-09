import Link from "next/link";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark } from "@/components/brand/usc-mark";
import { contact, destinations, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div aria-hidden="true" className="h-1 bg-red" />

      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Carolina Collegiate Racing home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <CcrLogo
                variant="extended"
                sizes="(min-width: 640px) 320px, 260px"
                className="h-auto w-[260px] sm:w-[320px]"
              />
            </Link>
            <p className="mt-7 max-w-sm text-sm/6 text-white/55">
              A student-run motorsports team building a competitive program at
              the University of South Carolina.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <UscMark className="h-11 w-10 shrink-0" />
              <div className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/55">
                <p>{site.affiliation}</p>
                <p>{site.university}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {destinations.map((destination) => (
                <li key={destination.label}>
                  {destination.href ? (
                    <Link
                      href={destination.href}
                      aria-current={
                        destination.status === "current" ? "page" : undefined
                      }
                      title={destination.note}
                      className="group flex items-center justify-between gap-3 border-b border-white/[0.07] py-2.5 text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <span>{destination.label}</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-4 bg-white/15 transition-all group-hover:w-6 group-hover:bg-red"
                      />
                    </Link>
                  ) : (
                    <span
                      title={destination.note}
                      className="flex items-center justify-between gap-3 border-b border-white/[0.07] py-2.5 text-sm text-white/50"
                    >
                      <span>{destination.label}</span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/50">
                        Pending
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div id="contact" className="scroll-mt-28 lg:col-span-3">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
              {contact.heading}
            </h2>
            <p className="mt-5 text-sm/6 text-white/55">{contact.body}</p>
            <div className="mt-6 flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-red" />
              {contact.status}
            </div>
            <p className="mt-6 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-white/50">
              Preparing to compete.
              <br />
              Details will be published when confirmed.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 text-[10px] uppercase tracking-[0.14em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p className="font-mono">Homepage preview · Additional pages in development</p>
        </div>
      </div>
    </footer>
  );
}
