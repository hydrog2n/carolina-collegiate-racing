"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
};

export function HeroParallaxImage({
  src,
  alt,
  sizes,
  className = "",
}: HeroParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches) return;

    let frame = 0;
    const updateParallax = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const distance = window.scrollY;
        const offset = Math.min(distance * 0.4, container.clientHeight * 0.4);
        container.style.setProperty("--hero-parallax-y", `${offset}px`);
      });
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes={sizes}
        className={`hero-parallax-image object-cover ${className}`}
      />
    </div>
  );
}
