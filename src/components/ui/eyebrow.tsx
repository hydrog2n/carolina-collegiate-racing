import type { ReactNode } from "react";

type EyebrowTone = "dark" | "light" | "red";

type EyebrowProps = {
  index?: string;
  tone?: EyebrowTone;
  children: ReactNode;
  className?: string;
};

const toneStyles: Record<
  EyebrowTone,
  { rule: string; index: string; label: string }
> = {
  dark: {
    rule: "bg-red",
    index: "text-white/60",
    label: "text-white/65",
  },
  light: {
    rule: "bg-red",
    index: "text-red",
    label: "text-black/55",
  },
  red: {
    rule: "bg-white/60",
    index: "text-white",
    label: "text-white",
  },
};

export function Eyebrow({
  index,
  tone = "dark",
  children,
  className = "",
}: EyebrowProps) {
  const styles = toneStyles[tone];

  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] ${className}`}
    >
      <span aria-hidden="true" className={`h-px w-8 ${styles.rule}`} />
      {index ? (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
    </div>
  );
}
