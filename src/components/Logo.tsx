/**
 * SINGLE SWAP POINT for the real logo artwork.
 * When the client's PNG lands (public/papurro-logo.png or a public URL),
 * set LOGO_SRC to that path/URL — navbar, hero and footer all update.
 * While it is null, a gradient-bordered wordmark placeholder is shown.
 */
export const LOGO_SRC: string | null = null; // e.g. "/papurro-logo.png"

type LogoProps = {
  className?: string;
  /** Text size for the placeholder wordmark. */
  placeholderClassName?: string;
};

/** Gradient-filled "papurro" wordmark with a dark outline, sticker style. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ""}`} data-text="papurro">
      papurro
    </span>
  );
}

export function Logo({ className, placeholderClassName }: LogoProps) {
  if (LOGO_SRC) {
    return <img src={LOGO_SRC} alt="Papurro" className={className} decoding="async" />;
  }

  return (
    <span className="grad-border inline-flex items-center justify-center bg-paper px-4 py-3">
      <Wordmark className={placeholderClassName ?? "text-2xl"} />
    </span>
  );
}
