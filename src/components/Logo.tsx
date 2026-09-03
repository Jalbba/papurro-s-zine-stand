import logoAsset from "@/assets/papurro-logo.png.asset.json";

/**
 * SINGLE SWAP POINT for the real logo artwork.
 * Points at the client's PNG on the CDN; navbar, hero and footer all use it.
 */
export const LOGO_SRC: string | null = logoAsset.url;

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
    <span className="card inline-flex items-center justify-center px-4 py-3">
      <Wordmark className={placeholderClassName ?? "text-2xl"} />
    </span>
  );

}
