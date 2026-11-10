"use client";

import { useEffect, useRef, useState } from "react";

type ScrollspyItem = {
  id: string;
  label: string;
};

type SectionScrollspyProps = {
  items: readonly ScrollspyItem[];
};

const ACTIVATION_OFFSET = 100;

export function SectionScrollspy({ items }: SectionScrollspyProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const frameRef = useRef(0);

  useEffect(() => {
    const update = () => {
      frameRef.current = 0;

      const sections = items
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(
          (
            entry,
          ): entry is {
            id: string;
            element: HTMLElement;
          } => entry.element !== null,
        );

      if (sections.length === 0) return;

      const atPageEnd =
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight - 2;

      if (atPageEnd) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let nextId = sections[0].id;

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
          nextId = section.id;
        }
      }

      setActiveId((currentId) =>
        currentId === nextId ? currentId : nextId,
      );
    };

    const scheduleUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("popstate", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);

    scheduleUpdate();
    const initialFrame = window.requestAnimationFrame(scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.removeEventListener("popstate", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      window.cancelAnimationFrame(initialFrame);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [items]);

  if (items.length === 0) return null;

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const progress =
    items.length > 1 ? (activeIndex / (items.length - 1)) * 100 : 100;

  return (
    <nav
      aria-label="On this page"
      className="section-scrollspy fixed right-5 top-1/2 z-40 max-h-[calc(100dvh-3rem)] -translate-y-1/2 overflow-y-auto"
    >
      <div className="relative bg-black/80 px-3 py-4 ring-1 ring-white/10 backdrop-blur-sm">
        <span
          aria-hidden="true"
          className="absolute bottom-9 left-[0.9375rem] top-9 w-px bg-white/20"
        />
        <span
          aria-hidden="true"
          className="absolute left-[0.9375rem] top-9 w-px bg-red transition-[height] duration-300 ease-out"
          style={{ height: `calc((100% - 4.5rem) * ${progress / 100})` }}
        />

        <ol>
          {items.map((item) => {
            const active = item.id === activeId;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className="group flex min-h-10 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span
                    aria-hidden="true"
                    className={`relative z-10 h-1.5 w-1.5 shrink-0 rounded-full border transition-all duration-200 group-hover:scale-125 ${
                      active
                        ? "scale-125 border-red bg-red"
                        : "border-white/45 bg-black"
                    }`}
                  />
                  <span
                    className={`whitespace-nowrap text-[10px] uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "font-medium text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
