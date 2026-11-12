import type { ReactNode } from "react";

type SectionLabelTone = "dark" | "light" | "red";
type SectionLabelVariant = "plain" | "rule" | "block";

type SectionLabelProps = {
  index?: string;
  tone?: SectionLabelTone;
  variant?: SectionLabelVariant;
  children: ReactNode;
  className?: string;
};

const toneStyles: Record<
  SectionLabelTone,
  { text: string; rule: string }
> = {
  dark: {
    text: "text-white/65",
    rule: "bg-red",
  },
  light: {
    text: "text-black/60",
    rule: "bg-red",
  },
  red: {
    text: "text-white",
    rule: "bg-white/60",
  },
};

export function SectionLabel({
  tone = "dark",
  children,
  className = "",
}: SectionLabelProps) {
  const styles = toneStyles[tone];

  return (
    <div
      className={`scroll-reveal-target flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.17em] ${styles.text} ${className}`}
    >
      <span aria-hidden="true" className={`h-px w-7 ${styles.rule}`} />
      <span>{children}</span>
    </div>
  );
}
