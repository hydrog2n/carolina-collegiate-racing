import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";

type ArrowLinkVariant = "solid" | "outline" | "light";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ArrowLinkVariant;
  className?: string;
};

const variants: Record<ArrowLinkVariant, string> = {
  solid:
    "bg-red text-white hover:bg-white hover:text-black focus-visible:outline-white",
  outline:
    "border border-white/25 text-white hover:border-white hover:bg-white hover:text-black focus-visible:outline-white",
  light:
    "border border-black/20 text-black hover:bg-black hover:text-white focus-visible:outline-black",
};

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className = "",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-4 px-6 py-3.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
