import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { PointerGlowLink } from "@/components/ui/pointer-glow-link";

type ArrowLinkVariant = "solid" | "outline" | "light" | "inverse" | "dark";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ArrowLinkVariant;
  className?: string;
  download?: boolean | string;
};

const variants: Record<ArrowLinkVariant, string> = {
  solid:
    "cursor-glow-link rounded-[var(--radius-sm)] border-transparent bg-[var(--ccr-red)] text-white transition-all duration-300 hover:text-white hover:shadow-[0_0px_20px_rgba(255,55,71,0.4)] focus-visible:outline-white",
  outline:
    "rounded-[var(--radius-sm)] border-2 border-white/35 bg-transparent text-white transition-all duration-300 hover:border-white/80 hover:bg-white/5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.1)] focus-visible:outline-white",
  light:
    "rounded-[var(--radius-sm)] border-2 border-black bg-transparent text-black transition-all duration-300 hover:border-black/100 hover:bg-black hover:text-white focus-visible:outline-black",
  inverse:
    "rounded-[var(--radius-sm)] border-2 border-white bg-white text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_0px_20px_rgba(255,255,255,0.1)] focus-visible:outline-white",
  dark:
    "rounded-[var(--radius-sm)] border border-white/10 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)] focus-visible:outline-white",
};

const externalPattern = /^(https?:|mailto:|tel:)/;

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className = "",
  download,
}: ArrowLinkProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-4 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.10em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  const content = (
    <span className="inline-flex items-center gap-4">
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </span>
  );

  return (
    <PointerGlowLink
      href={href}
      className={classes}
      nativeAnchor={externalPattern.test(href)}
      external={href.startsWith("http")}
      download={download}
    >
      {content}
    </PointerGlowLink>
  );
}
