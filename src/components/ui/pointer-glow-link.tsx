"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type PointerGlowLinkProps = {
  href: string;
  children: ReactNode;
  className: string;
  nativeAnchor?: boolean;
  external?: boolean;
  download?: boolean | string;
  wrap?: boolean;
};

export function PointerGlowLink({
  href,
  children,
  className,
  nativeAnchor = false,
  external = false,
  download,
  wrap = false,
}: PointerGlowLinkProps) {
  const content = (
    <span
      className={`relative z-10 inline-flex items-center ${
        wrap ? "min-w-0 max-w-full whitespace-normal" : "whitespace-nowrap"
      }`}
    >
      {children}
    </span>
  );

  if (nativeAnchor || download) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download === true ? "" : download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {content}
    </Link>
  );
}
