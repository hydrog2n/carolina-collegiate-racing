"use client";

import { useEffect, type ReactNode } from "react";

const revealSelector = [
  "main h1:not(.intro-rise):not(#hero-title)",
  "main h2:not(.intro-rise)",
  "main h3:not(.intro-rise)",
  "main p:not(.intro-rise)",
  "main figure",
  "main article",
  "main li",
  "main dl",
  "main a[href]",
  "main button",
  "main blockquote",
  "main form",
  "main table",
  "main .scroll-reveal-target",
].join(", ");

type ScrollRevealProps = {
  children: ReactNode;
};

export function ScrollReveal({ children }: ScrollRevealProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches) return;

    const pendingElements = new Set<HTMLElement>();
    const animatedElements = new WeakSet<HTMLElement>();
    let frame = 0;

    const observePageContent = () => {
      pendingElements.forEach((element) => {
        if (!element.isConnected) pendingElements.delete(element);
      });

      document.querySelectorAll<HTMLElement>("main").forEach((main) => {
        main.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
          if (element.closest("nav, aside, [aria-hidden='true']")) return;
          if (element.closest(".intro-rise")) return;
          if (element.parentElement?.closest(revealSelector)) return;
          if (animatedElements.has(element)) return;

          pendingElements.add(element);
        });
      });

      revealVisibleElements();
    };

    const revealVisibleElements = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        pendingElements.forEach((element) => {
          const bounds = element.getBoundingClientRect();
          if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

          pendingElements.delete(element);
          animatedElements.add(element);

          const animation = element.animate(
            [
              { opacity: 0, transform: "translate3d(0, 24px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration: 720,
              easing: "cubic-bezier(0.2, 0.65, 0.3, 1)",
              fill: "both",
            },
          );
          animation.onfinish = () => animation.cancel();
        });
      });
    };

    observePageContent();
    window.addEventListener("scroll", revealVisibleElements, {
      passive: true,
    });
    window.addEventListener("resize", revealVisibleElements);

    const mutationObserver = new MutationObserver(observePageContent);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", revealVisibleElements);
      window.removeEventListener("resize", revealVisibleElements);
      mutationObserver.disconnect();
    };
  }, []);

  return children;
}
