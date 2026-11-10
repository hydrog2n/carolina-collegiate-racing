import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";

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
    "bg-red text-white hover:bg-white hover:text-black focus-visible:outline-white",
  outline:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-black focus-visible:outline-white",
  light:
    "border border-black/25 text-black hover:bg-black hover:text-white focus-visible:outline-black",
  inverse:
    "bg-white text-black hover:bg-black hover:text-white focus-visible:outline-white",
  dark: "bg-black text-white hover:bg-white hover:text-black focus-visible:outline-white",
};

const externalPattern = /^(https?:|mailto:|tel:)/;

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className = "",
  download,
}: ArrowLinkProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-4 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (externalPattern.test(href) || download) {
    const isWebLink = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        target={isWebLink ? "_blank" : undefined}
        rel={isWebLink ? "noreferrer" : undefined}
        download={download === true ? "" : download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
