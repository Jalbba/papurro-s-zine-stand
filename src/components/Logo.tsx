/** Transparent 3D "P" brand mark. */
export const LOGO_SRC = "/papurro-p.png";

/** Tamaño real del archivo: se declara para evitar saltos de layout (CLS). */
const LOGO_W = 1152;
const LOGO_H = 928;

type LogoProps = {
  className?: string;
  /** Text size for the wordmark next to the mark. */
  placeholderClassName?: string;
};

/** Gradient "papurro" wordmark. */
export function Wordmark({ className }: { className?: string }) {
  return <span className={`wordmark ${className ?? ""}`}>papurro</span>;
}

type PMarkProps = {
  className?: string;
  /** Texto alternativo. Vacío ("") cuando la imagen es decorativa. */
  alt?: string;
  /** La marca del hero es el LCP: se carga con prioridad y sin lazy. */
  priority?: boolean;
};

/** Just the P mark. */
export function PMark({ className, alt = "Papurro", priority = false }: PMarkProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={LOGO_W}
      height={LOGO_H}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}

/** P mark + wordmark lockup (navbar / footer). */
export function Logo({ className, placeholderClassName }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <PMark className={className ?? "h-9 w-auto"} alt="" priority />
      <Wordmark className={placeholderClassName ?? "text-2xl"} />
    </span>
  );
}
