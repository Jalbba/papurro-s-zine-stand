type DoodleProps = { className?: string };

const base = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Wobbly hand-drawn section divider. */
export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      {...base}
    >
      <path d="M0 14c40-12 80 8 120-2s80-14 120-2 80 16 120 4 80-16 120-4 80 16 120 4 80-14 120-2 80 12 120 2 80-14 120-4 80 12 120 2" />
    </svg>
  );
}

/** Gears-ish crooked doodle: automatización */
export function DoodleGear({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M25 10l4-5h9l3 6 6 2 6-3 5 7-4 6 1 6 6 4-3 8-7 0-4 5 1 7-8 3-5-6-6 1-4 5-7-5 2-7-4-5-7 1-2-8 6-4 1-6-5-5z" />
      <circle cx="31" cy="33" r="8" />
    </svg>
  );
}

/** Lightbulb-ish spark: IA aplicada */
export function DoodleSpark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M31 8c-11 0-19 8-18 18 0 6 5 10 7 15h21c2-6 8-9 8-16 0-9-8-17-18-17z" />
      <path d="M22 47h20M25 54h14" />
      <path d="M8 14l-5-4M55 14l6-5M32 2v-2" />
    </svg>
  );
}

/** Speech bubble: atención al cliente */
export function DoodleChat({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M8 14c0-4 3-7 8-7h34c5 0 8 4 7 8l-1 18c0 4-3 7-8 7H27l-13 10 2-11c-5-1-8-4-8-9z" />
      <path d="M19 20h26M19 29h17" />
    </svg>
  );
}

/** Speed gauge / rocket-ish: optimización */
export function DoodleSpeed({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M6 44c-3-16 9-30 26-30 18 0 29 15 26 31" />
      <path d="M33 40l14-15" />
      <circle cx="32" cy="43" r="4" />
      <path d="M13 30l-5-3M32 16v-6M52 30l5-3" />
    </svg>
  );
}

/** Scotch tape rectangle. */
export function Tape({ className }: DoodleProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-20 border-[3px] border-ink bg-cyan/70 ${className ?? ""}`}
    />
  );
}
