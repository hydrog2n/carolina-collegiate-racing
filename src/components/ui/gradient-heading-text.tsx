import type { CSSProperties, ReactNode } from "react";

type GradientHeadingTextProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function GradientHeadingText({
  children,
  className = "",
  style,
}: GradientHeadingTextProps) {
  return (
    <span
      className={`heading-gradient-highlight ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
