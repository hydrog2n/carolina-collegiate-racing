"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark } from "@/components/brand/usc-mark";
import { contact, mailto, mobileNav, site } from "@/content/site";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) {
      triggerRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const header = triggerRef.current?.closest("header");
    const background = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== header,
    );
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => {
      element.inert = true;
    });

    const focusFrame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? "mobile-navigation" : undefined}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-3 sm:px-4 sm:text-[12px]"
      >
        Menu
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
      </button>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
          className="mobile-nav-enter fixed inset-0 z-[70] overflow-y-auto bg-ink text-white"
        >
          <div className="min-h-full">
            <div aria-hidden="true" className="h-1 bg-red" />
            <div className="shell flex h-16 items-center justify-between border-b border-white/10 sm:h-20">
              <Link
                href="/"
                aria-label="Carolina Collegiate Racing home"
                onClick={() => closeMenu()}
                className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <CcrLogo
                  variant="mark"
                  sizes="190px"
                  className="h-8 w-auto sm:h-9"
                />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={() => closeMenu()}
                className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-3 sm:px-4 sm:text-[12px]"
              >
                Close
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="shell py-8 sm:py-9">
              <h2 id="mobile-navigation-title" className="sr-only">
                Site navigation
              </h2>
              <nav aria-label="Mobile">
                <ul className="border-t border-white/10">
                  {mobileNav.map((item, index) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                      <li key={item.href} className="border-b border-white/10">
                        <Link
                          href={item.href}
                          onClick={() => closeMenu()}
                          aria-current={active ? "page" : undefined}
                          className={`group flex items-center justify-between gap-4 py-4 font-display text-[clamp(1.8rem,8.5vw,3.25rem)] uppercase leading-[1.05] transition-colors hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                            active ? "text-red" : "text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            aria-hidden="true"
                            className="text-[11px] font-medium tracking-[0.16em] text-white/55"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-9 grid gap-6">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
                    Contact
                  </p>
                  <a
                    href={mailto()}
                    onClick={() => closeMenu()}
                    className="mt-2 block text-[14px] font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => closeMenu()}
                    className="mt-2 block text-[14px] text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Instagram {contact.instagramHandle}
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <UscMark className="h-10 w-9 shrink-0" />
                  <div className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.13em] text-white/65">
                    <p>{site.affiliation}</p>
                    <p>{site.university}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
