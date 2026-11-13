"use client";

import { useEffect, useRef, useState } from "react";

type ScrollspyItem = {
  id: string;
  label: string;
};

type SectionScrollspyProps = {
  items: readonly ScrollspyItem[];
};

const ACTIVATION_OFFSET = 132;

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
      className="section-scrollspy scale-96 hover:scale-100 fixed left-4 hover:left-5.5 top-1/2 z-40 max-h-[calc(100dvh-3rem)] transition-all -translate-y-1/2 overflow-y-auto duration-300 ease-in-out"
    >
      <div className="group/scrollspy relative w-10 hover:w-max focus-within:w-max [interpolate-size:allow-keywords] overflow-hidden rounded-lg bg-black/85 py-1.5 pr-4 backdrop-blur-sm transition-[width] duration-300 ease-in-out">
        {/* Background progress line */}
        <span
          aria-hidden="true"
          className="absolute bottom-[1.875rem] left-[1.15rem] top-[1.875rem] w-0.5 bg-white/40"
        />

        {/* Active progress line */}
        <span
          aria-hidden="true"
          className="absolute left-[1.15rem] top-[1.875rem] w-0.5 bg-[#CC2E40] transition-[height] duration-300 ease-out"
          style={{
            height: `calc((100% - 3.75rem) * ${progress / 100})`,
          }}
        />

        <ol className="w-max">
          {items.map((item) => {
            const active = item.id === activeId;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  aria-label={item.label}
                  className="group flex min-h-10 items-center gap-3 px-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {/* Marker */}
                  <span
                    aria-hidden="true"
                    className={`relative z-10 h-2.5 w-1.5 shrink-0 rounded-full border-2 transition-all duration-200 group-hover:scale-125 ${
                      active
                        ? "scale-x-125 scale-y-180 border-[#CC2E40] bg-[#CC2E40]"
                        : "border-[#828282] bg-[#828282] group-hover:border-white group-hover:bg-white"
                    }`}
                  />

                  {/* Label: stationary, revealed by clipping */}
                  <span
                    className={`shrink-0 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] opacity-0 transition-[opacity,color,text-shadow] duration-300 ease-out group-hover/scrollspy:opacity-100 group-focus-within/scrollspy:opacity-100 ${
                      active
                        ? "text-[#CC2E40] [text-shadow:0_0_10px_#CC2E40]"
                        : "text-white/40 group-hover:text-white group-hover:[text-shadow:0_0_12px_white]"
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
