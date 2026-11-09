import Image from "next/image";

const logos = {
  mark: {
    src: "/logos/Logo_Dark_Digital.png",
    width: 2296,
    height: 466,
    alt: "Carolina Collegiate Racing",
  },
  extended: {
    src: "/logos/Logo_Dark_Digital_Extended.png",
    width: 3386,
    height: 486,
    alt: "Carolina Collegiate Racing",
  },
  badge: {
    src: "/logos/Badge_Dark_Transparent.png",
    width: 2513,
    height: 616,
    alt: "Carolina Collegiate Racing badge",
  },
  light: {
    src: "/logos/Logo_Light.png",
    width: 2296,
    height: 466,
    alt: "Carolina Collegiate Racing",
  },
} as const;

type LogoVariant = keyof typeof logos;

type CcrLogoProps = {
  variant?: LogoVariant;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CcrLogo({
  variant = "mark",
  className,
  sizes,
  priority = false,
}: CcrLogoProps) {
  const logo = logos[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
