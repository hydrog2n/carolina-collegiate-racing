type PhotoPlaceholderProps = {
  label: string;
  caption?: string;
  aspectClassName?: string;
  className?: string;
};

export function PhotoPlaceholder({
  label,
  caption,
  aspectClassName = "aspect-[4/3]",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={`${label} placeholder`}
        className={`relative isolate overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-graphite ${aspectClassName}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.07),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-4 rounded-[var(--radius-sm)] border border-white/[0.06]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.55)_100%)] px-5 pb-5 pt-16 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          <span aria-hidden="true" className="h-1 w-5 shrink-0 bg-red" />
          {label}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-sm text-[12px]/[1.55] text-white/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
