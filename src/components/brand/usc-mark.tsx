import Image from "next/image";

type UscMarkProps = {
  className?: string;
};

export function UscMark({ className }: UscMarkProps) {
  return (
    <Image
      src="/logos/South_Carolina_Gamecocks_logo.svg"
      alt="University of South Carolina Gamecocks"
      width={184}
      height={202}
      sizes="48px"
      unoptimized
      className={className}
    />
  );
}
