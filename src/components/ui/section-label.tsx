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
  { text: string; index: string; rule: string }
> = {
  dark: {
    text: "text-white/65",
    index: "text-white/60",
    rule: "bg-red",
  },
  light: {
    text: "text-black/60",
    index: "text-black/60",
    rule: "bg-red",
  },
  red: {
    text: "text-white",
    index: "text-white",
    rule: "bg-white/60",
  },
};

export function SectionLabel({
  index,
  tone = "dark",
  variant = "plain",
  children,
  className = "",
}: SectionLabelProps) {
  if (variant === "block") {
    return (
      <div
        className={`inline-flex items-center gap-2 bg-red px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ${className}`}
      >
        {index ? (
          <span aria-hidden="true" className="text-white">
            {index}
          </span>
        ) : null}
        <span>{children}</span>
      </div>
    );
  }

  const styles = toneStyles[tone];

  return (
    <div
      className={`flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.17em] ${styles.text} ${className}`}
    >
      {variant === "rule" ? (
        <span aria-hidden="true" className={`h-px w-7 ${styles.rule}`} />
      ) : null}
      {index ? (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      ) : null}
      <span>{children}</span>
    </div>
  );
}
