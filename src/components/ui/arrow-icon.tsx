type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M3.5 10h12M10.5 4.5 16 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
