import Image from "next/image";

type UscMarkProps = {
  className?: string;
};

export function UscMark({ className }: UscMarkProps) {
  return (
    <Image
      src="/logos/gamecocklogolight.svg"
      alt="University of South Carolina Gamecocks"
      width={184}
      height={202}
      sizes="48px"
      unoptimized
      className={className}
    />
  );
}

export function UscMarkDark({ className }: UscMarkProps) {
  return (
    <Image
      src="/logos/gamecocklogodark.svg"
      alt="University of South Carolina Gamecocks"
      width={184}
      height={202}
      sizes="48px"
      unoptimized
      className={className}
    />
  );
}
