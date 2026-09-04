type DoodleProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Small hand-drawn pink squiggle used as a heading underline. */
export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 12"
      aria-hidden="true"
      className={`h-3 w-20 text-pink ${className ?? ""}`}
      {...base}
      strokeWidth={3}
    >
      <path d="M2 8c6-8 12 6 18-1s12 7 18 0 12 6 18-2" />
    </svg>
  );
}

/** Gear: automatización */
export function DoodleGear({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <circle cx="32" cy="32" r="9" />
      <path d="M32 8v7M32 49v7M8 32h7M49 32h7M15 15l5 5M44 44l5 5M49 15l-5 5M20 44l-5 5" />
      <circle cx="32" cy="32" r="20" strokeDasharray="3 8" />
    </svg>
  );
}

/** Lightbulb: IA aplicada */
export function DoodleSpark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M32 10c-9 0-16 7-16 15 0 5 3 8 5 11 1 2 2 3 2 5h18c0-2 1-3 2-5 2-3 5-6 5-11 0-8-7-15-16-15z" />
      <path d="M26 48h12M28 54h8" />
    </svg>
  );
}

/** Speech bubble: atención al cliente */
export function DoodleChat({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M10 18a6 6 0 016-6h32a6 6 0 016 6v18a6 6 0 01-6 6H28l-12 9 2-9h-2a6 6 0 01-6-6z" />
      <path d="M23 27h.01M32 27h.01M41 27h.01" strokeWidth={5} />
    </svg>
  );
}

/** Rocket / speed: optimización */
export function DoodleSpeed({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M34 38c12-4 20-14 20-28-14 0-24 8-28 20" />
      <path d="M26 30l8 8" />
      <path d="M22 38c-4 2-6 6-6 12 6 0 10-2 12-6" />
      <path d="M14 50l-4 4" />
    </svg>
  );
}

/** Envelope: contacto */
export function DoodleMail({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <rect x="8" y="16" width="48" height="32" rx="5" />
      <path d="M10 20l22 16 22-16" />
    </svg>
  );
}

/** Clock: tiempos de respuesta */
export function DoodleClock({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <circle cx="32" cy="32" r="22" />
      <path d="M32 18v14l10 6" />
    </svg>
  );
}

/** Burbuja de chat con tubo de teléfono: WhatsApp, dibujado a mano como el
 *  resto (no el glifo de marca, que desentonaría con los otros doodles). */
export function DoodleWhats({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...base}>
      <path d="M32 10c12 0 22 8.5 22 19s-10 19-22 19c-2.6 0-5.1-.4-7.4-1.1L12 51l3.6-9.3C12.1 38.3 10 34 10 29c0-10.5 10-19 22-19Z" />
      <path d="M25 24c1.5 5 5 8.5 10 10l3-3 5 3.5-2.5 4c-6.5.5-14.5-6.5-15.5-13l4-1.5Z" />
    </svg>
  );
}
