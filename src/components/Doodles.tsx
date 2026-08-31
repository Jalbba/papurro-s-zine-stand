type DoodleProps = { className?: string };

const base = {
  fill: "none",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Shared rainbow gradient def for the icon strokes. */
function RainbowDef({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--grad-teal)" />
        <stop offset="20%" stopColor="var(--grad-lime)" />
        <stop offset="40%" stopColor="var(--grad-yellow)" />
        <stop offset="60%" stopColor="var(--grad-orange)" />
        <stop offset="80%" stopColor="var(--grad-pink)" />
        <stop offset="100%" stopColor="var(--grad-purple)" />
      </linearGradient>
    </defs>
  );
}

/** Full-width rainbow section divider bar. */
export function Squiggle({ className }: DoodleProps) {
  return (
    <div
      aria-hidden="true"
      className={`rainbow-bar w-full border-y-[3px] border-ink ${className ?? ""}`}
    />
  );
}

/** Gears: automatización */
export function DoodleGear({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base} stroke="url(#g-gear)">
      <RainbowDef id="g-gear" />
      <path d="M25 10l4-5h9l3 6 6 2 6-3 5 7-4 6 1 6 6 4-3 8-7 0-4 5 1 7-8 3-5-6-6 1-4 5-7-5 2-7-4-5-7 1-2-8 6-4 1-6-5-5z" />
      <circle cx="31" cy="33" r="8" />
    </svg>
  );
}

/** Lightbulb spark: IA aplicada */
export function DoodleSpark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base} stroke="url(#g-spark)">
      <RainbowDef id="g-spark" />
      <path d="M31 8c-11 0-19 8-18 18 0 6 5 10 7 15h21c2-6 8-9 8-16 0-9-8-17-18-17z" />
      <path d="M22 47h20M25 54h14" />
      <path d="M8 14l-5-4M55 14l6-5" />
    </svg>
  );
}

/** Speech bubble: atención al cliente */
export function DoodleChat({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base} stroke="url(#g-chat)">
      <RainbowDef id="g-chat" />
      <path d="M8 14c0-4 3-7 8-7h34c5 0 8 4 7 8l-1 18c0 4-3 7-8 7H27l-13 10 2-11c-5-1-8-4-8-9z" />
      <path d="M19 20h26M19 29h17" />
    </svg>
  );
}

/** Speed gauge: optimización */
export function DoodleSpeed({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base} stroke="url(#g-speed)">
      <RainbowDef id="g-speed" />
      <path d="M6 44c-3-16 9-30 26-30 18 0 29 15 26 31" />
      <path d="M33 40l14-15" />
      <circle cx="32" cy="43" r="4" />
      <path d="M13 30l-5-3M32 16v-6M52 30l5-3" />
    </svg>
  );
}

/** Gradient tape strip. */
export function Tape({ className }: DoodleProps) {
  return (
    <span
      aria-hidden="true"
      className={`rainbow-bar pointer-events-none absolute h-6 w-20 border-[3px] border-ink opacity-90 ${className ?? ""}`}
    />
  );
}
