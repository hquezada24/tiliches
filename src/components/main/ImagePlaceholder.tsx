interface ImagePlaceholderProps {
  label: string;
  hint?: string;
  className?: string;
  height?: string;
}

export function ImagePlaceholder({
  label,
  hint = "Recommended: 800 × 680px",
  className = "",
  height = "h-[340px]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
        group relative flex flex-col items-center justify-center gap-3
        rounded-2xl border-2 border-dashed border-lime/30
        bg-forest-mid cursor-pointer overflow-hidden
        transition-all duration-200 hover:border-lime/70 hover:bg-[#2c4a2c]
        ${height} ${className}
      `}
    >
      {/* Subtle inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-lime/3 to-transparent" />

      {/* Camera icon */}
      <svg
        className="relative z-10 text-lime/60 group-hover:text-lime/90 transition-colors"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 48 48"
      >
        <rect
          x="4"
          y="10"
          width="40"
          height="30"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="17" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 34l10-8 7 6 9-10 14 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="relative z-10 text-lime/70 text-sm font-light">{label}</p>
      <p className="relative z-10 text-cream/30 text-xs font-light">{hint}</p>
    </div>
  );
}
