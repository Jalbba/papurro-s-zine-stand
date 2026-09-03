import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { MAILTO, PAISES } from "@/site";

/** Barra superior: marca, países (desktop) y el único CTA real. */
export function Header({ activeSlug }: { activeSlug?: string | undefined }) {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Papurro, inicio">
          <Logo className="h-11 w-auto" placeholderClassName="text-xl" />
        </a>

        <nav aria-label="Países" className="hidden items-center gap-1 md:flex">
          {PAISES.map((p) => (
            <a
              key={p.slug}
              href={`/${p.slug}/`}
              aria-current={activeSlug === p.slug ? "page" : undefined}
              className={`rounded-full px-3 py-2 font-display text-sm lowercase transition-colors hover:bg-[color-mix(in_oklab,var(--ink)_6%,white)] ${
                activeSlug === p.slug ? "bg-[color-mix(in_oklab,var(--ink)_7%,white)]" : ""
              }`}
            >
              {p.nombre.toLowerCase()}
            </a>
          ))}
        </nav>

        <a href={MAILTO} className="btn-press btn-rainbow px-5 py-2.5 text-base">
          escribime →
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-6 bg-ink px-4 py-10 text-paper sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="/" aria-label="Papurro, inicio">
            <Logo className="h-9 w-auto shrink-0" placeholderClassName="text-2xl" />
          </a>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-paper/70 sm:text-sm">
            Automatización, IA aplicada, atención al cliente y optimización para tiendas Shopify de
            Uruguay, Argentina y Chile. Una persona, no una agencia.
          </p>
        </div>

        <nav aria-label="Países atendidos">
          <h2 className="font-display text-sm text-paper">dónde trabajo</h2>
          <ul className="mt-3 space-y-2 text-xs text-paper/70 sm:text-sm">
            {PAISES.map((p) => (
              <li key={p.slug}>
                <a href={`/${p.slug}/`} className="underline underline-offset-4 hover:text-paper">
                  Shopify en {p.nombre} {p.bandera}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contacto y legales">
          <h2 className="font-display text-sm text-paper">contacto</h2>
          <ul className="mt-3 space-y-2 text-xs text-paper/70 sm:text-sm">
            <li>
              <a href={MAILTO} className="underline underline-offset-4 hover:text-paper">
                info@papurro.com
              </a>
            </li>
            <li>
              <a href="/privacidad/" className="underline underline-offset-4 hover:text-paper">
                Privacidad
              </a>
            </li>
            <li className="text-paper/60">Respondo en 24-48 h hábiles</li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-xs text-paper/60">
        Hecho en Uruguay 🧉 · © {new Date().getFullYear()} Papurro
      </p>
    </footer>
  );
}

export function Page({
  children,
  activeSlug,
}: {
  children: ReactNode;
  activeSlug?: string | undefined;
}) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header activeSlug={activeSlug} />
      <main id="top" className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
