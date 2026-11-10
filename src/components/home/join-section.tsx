import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { SectionLabel } from "@/components/ui/section-label";
import { joinContent } from "@/content/home";
import { contact, mailto } from "@/content/site";

export function JoinSection() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="relative scroll-mt-24 overflow-hidden bg-red text-white"
    >
      <div className="shell py-12 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel index={joinContent.index} tone="red">
              {joinContent.label}
            </SectionLabel>
            <h2
              id="join-title"
              className="heading-hero mt-5 text-[clamp(3.8rem,10vw,9rem)]"
            >
              <span className="block text-white">
                {joinContent.heading[0]}
              </span>
              <span className="block text-black">
                {joinContent.heading[1]}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-[17px]/[1.7] text-white">
              {joinContent.intro}
            </p>
            <p className="mt-4 max-w-md text-[15px]/[1.7] text-white">
              {joinContent.body}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ArrowLink href={mailto(contact.joinSubject)} variant="inverse">
                {joinContent.emailCtaLabel}
              </ArrowLink>
              <ArrowLink href={contact.instagramUrl} variant="outline">
                {joinContent.instagramCtaLabel}
              </ArrowLink>
            </div>

            <div className="mt-6">
              <Link
                href={joinContent.pageCta.href}
                className="group inline-flex min-h-11 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {joinContent.pageCta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative h-2 bg-black/15">
        <div className="checkers absolute inset-0 text-black/20" />
      </div>
    </section>
  );
}
