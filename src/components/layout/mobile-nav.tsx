"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CcrLogo } from "@/components/brand/ccr-logo";
import { UscMark } from "@/components/brand/usc-mark";
import { mobileNav, site } from "@/content/site";

export function MobileNav() {
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
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center gap-3 border border-white/20 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
          className="mobile-nav-enter fixed inset-0 z-[70] overflow-y-auto bg-black text-white"
        >
          <div className="min-h-full">
            <div className="shell flex h-20 items-center justify-between border-b border-white/10">
              <Link
                href="/"
                aria-label="Carolina Collegiate Racing home"
                onClick={() => closeMenu(false)}
                className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <CcrLogo
                  variant="mark"
                  sizes="170px"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={() => closeMenu()}
                className="inline-flex min-h-11 items-center gap-3 border border-white/20 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Close
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="shell py-10">
              <h2 id="mobile-navigation-title" className="sr-only">
                Site navigation
              </h2>
              <nav aria-label="Mobile">
                <ul className="border-t border-white/10">
                  {mobileNav.map((item, index) => (
                    <li key={item.href} className="border-b border-white/10">
                      <Link
                        href={item.href}
                        onClick={() => closeMenu(false)}
                        className="group flex items-center justify-between gap-4 py-5 font-display text-[clamp(2rem,9vw,3.5rem)] uppercase leading-none text-white transition-colors hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className="font-mono text-[9px] tracking-[0.18em] text-white/55"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                <UscMark className="h-10 w-9 shrink-0" />
                <div className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/50">
                  <p>{site.affiliation}</p>
                  <p>{site.university}</p>
                </div>
              </div>
              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                Preparing to compete.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
