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
};

export function PointerGlowLink({
  href,
  children,
  className,
  nativeAnchor = false,
  external = false,
  download,
}: PointerGlowLinkProps) {
  const content = (
    <span className="relative z-10 inline-flex items-center whitespace-nowrap">
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
