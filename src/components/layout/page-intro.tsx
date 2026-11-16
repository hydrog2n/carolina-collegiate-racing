import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/section-label";

type PageIntroTone = "ink" | "garnet";

type PageIntroProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro: string;
  meta?: readonly { label: string; value: string }[];
  actions?: ReactNode;
  tone?: PageIntroTone;
  compact?: boolean;
};

const toneStyles: Record<
  PageIntroTone,
  {
    background: string;
    labelTone: "dark" | "red";
    muted: string;
    border: string;
  }
> = {
  ink: {
    background: "bg-ink text-white ambient-gray-light",
    labelTone: "dark",
    muted: "text-white/70",
    border: "border-white/15",
  },
  garnet: {
    background: "bg-garnet text-white ambient-red-highlight",
    labelTone: "red",
    muted: "text-white/75",
    border: "border-white/20",
  },
};

export function PageIntro({
  index,
  label,
  title,
  intro,
  meta,
  actions,
  tone = "ink",
  compact = false,
}: PageIntroProps) {
  const styles = toneStyles[tone];

  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className={`relative scroll-mt-24 overflow-hidden ${styles.background}`}
    >
      <div
        className={`shell ${
          compact ? "py-8 sm:py-10 lg:py-8" : "py-14 sm:py-18 lg:py-10"
        }`}
      >
        <div className={`grid gap-8 lg:grid-cols-12 ${compact ? "lg:gap-8" : "lg:gap-12"}`}>
          <div className="lg:col-span-8">
            <SectionLabel
              index={index}
              variant="rule"
              tone={styles.labelTone}
            >
              {label}
            </SectionLabel>
            <h1
              id="page-title"
              className={`heading-section ${
                compact ? "mt-4 text-[clamp(2.3rem,5vw,4.5rem)]" : "mt-5 text-[clamp(2.6rem,5.8vw,5rem)]"
              } max-w-4xl`}
            >
              {title}
            </h1>
          </div>

          <div
            className={`lg:col-span-4 ${
              compact ? "lg:pt-4" : "lg:pt-8 lg:pb-4"
            }`}
          >
            <p
              className={`max-w-xl text-[16px]/[1.7] ${styles.muted} lg:text-[17px]/[1.7]`}
            >
              {intro}
            </p>

            {actions ? (
              <div
                className={`${
                  compact
                    ? "mt-4 flex flex-wrap gap-2"
                    : "mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-start"
                }`}
              >
                {actions}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {meta && meta.length > 0 ? (
        <div className={`border-t ${styles.border}`}>
          <dl
            className={`shell grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 ${
              compact ? "py-4" : "py-5"
            }`}
          >
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/55">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[13px] font-medium leading-snug text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </section>
  );
}
