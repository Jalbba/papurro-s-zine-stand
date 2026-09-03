/** Transparent 3D "P" brand mark. */
export const LOGO_SRC = "/papurro-p.png";

type LogoProps = {
  className?: string;
  /** Text size for the wordmark next to the mark. */
  placeholderClassName?: string;
};

/** Gradient "papurro" wordmark. */
export function Wordmark({ className }: { className?: string }) {
  return <span className={`wordmark ${className ?? ""}`}>papurro</span>;
}

/** Just the P mark. */
export function PMark({ className }: { className?: string }) {
  return <img src={LOGO_SRC} alt="Papurro" className={className} decoding="async" />;
}

/** P mark + wordmark lockup (navbar / footer). */
export function Logo({ className, placeholderClassName }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <PMark className={className ?? "h-9 w-auto"} />
      <Wordmark className={placeholderClassName ?? "text-2xl"} />
    </span>
  );
}
