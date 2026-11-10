"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

type PointerGlowLinkProps = {
  href: string;
  children: ReactNode;
  className: string;
  nativeAnchor?: boolean;
  external?: boolean;
  download?: boolean | string;
  glow?: boolean;
};

export function PointerGlowLink({
  href,
  children,
  className,
  nativeAnchor = false,
  external = false,
  download,
  glow = false,
}: PointerGlowLinkProps) {
  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!glow || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${event.clientY - bounds.top}px`,
    );
  };

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
        onPointerMove={glow ? handlePointerMove : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onPointerMove={glow ? handlePointerMove : undefined}
    >
      {content}
    </Link>
  );
}
