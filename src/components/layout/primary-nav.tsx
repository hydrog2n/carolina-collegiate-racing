"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content/site";

type PrimaryNavProps = {
  className?: string;
};

export function PrimaryNav({ className = "" }: PrimaryNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={className}>
      {primaryNav.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative flex min-h-11 items-center whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.11em] transition-colors after:absolute after:inset-x-0 after:bottom-2 after:h-px after:bg-red after:transition-all after:duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
              active
                ? "text-white after:w-full"
                : "text-white/75 after:w-0 hover:after:w-full"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
