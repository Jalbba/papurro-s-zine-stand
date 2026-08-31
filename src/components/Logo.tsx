import { useState } from "react";

/**
 * Single swap point for the real logo artwork.
 * Drop the client's PNG at public/papurro-logo.png and everything updates.
 */
export const LOGO_SRC = "/papurro-logo.png";

type LogoProps = {
  className?: string;
  /** Fallback wordmark size while the real PNG isn't in place. */
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

/**
 * Renders the logo image; if the asset isn't uploaded yet it degrades to a
 * gradient-bordered placeholder with the gradient wordmark so nothing breaks.
 */
export function Logo({ className, placeholderClassName }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`grad-border inline-flex items-center justify-center bg-paper px-3 py-2 ${className ?? ""}`}
      >
        <Wordmark className={placeholderClassName ?? "text-2xl"} />
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Papurro"
      className={className}
      onError={() => setFailed(true)}
      loading="eager"
      decoding="async"
    />
  );
}
