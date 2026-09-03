import { useState } from "react";
import { DoodleMail, Squiggle } from "@/components/Doodles";
import type { Faq } from "@/seo";
import { EMAIL, MAILTO_LONG, PAISES } from "@/site";

/** Bloque de respuesta directa: texto corto, factual y fácil de citar.
 *  Es lo que buscan los buscadores con IA cuando resumen "qué es Papurro". */
export function ResumenRapido({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-3xl border border-hairline bg-[color-mix(in_oklab,var(--grad-teal)_8%,white)] px-5 py-4 text-sm font-semibold leading-relaxed text-ink sm:text-base">
      {children}
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs font-semibold text-ink-soft sm:text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <a href={item.href} className="underline underline-offset-4">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Preguntas frecuentes visibles (el JSON-LD de FAQPage refleja estas mismas). */
export function Preguntas({
  faqs,
  titulo = "preguntas",
  resalte = "frecuentes",
}: {
  faqs: Faq[];
  /** Primera parte del encabezado. */
  titulo?: string;
  /** Parte resaltada con el degradado. */
  resalte?: string;
}) {
  return (
    <section className="card p-5 sm:p-9" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl sm:text-5xl">
        {titulo} <span className="marker">{resalte}</span>
      </h2>
      <Squiggle className="mt-3" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="card border border-hairline p-5">
            <h3 className="text-lg normal-case sm:text-xl">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed sm:text-base">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Enlaces internos a las páginas por país. */
export function GrillaPaises({ excluir }: { excluir?: string }) {
  const lista = PAISES.filter((p) => p.slug !== excluir);
  return (
    <section className="card p-5 sm:p-9" aria-labelledby="paises-title">
      <h2 id="paises-title" className="text-3xl sm:text-5xl">
        dónde <span className="marker">trabajo</span>
      </h2>
      <Squiggle className="mt-3" />

      <p className="mt-6 max-w-2xl text-sm leading-relaxed sm:text-base">
        Trabajo en remoto con tiendas Shopify de Uruguay, Argentina y Chile. Cada país tiene sus
        propias formas de cobrar, despachar y facturar: entrá al tuyo y te cuento cómo encaro cada
        caso.
      </p>

      <ul className="mt-7 grid gap-4 sm:grid-cols-3">
        {lista.map((p) => (
          <li key={p.slug}>
            <a
              href={`/${p.slug}/`}
              className="card card-hover flex items-center justify-between gap-3 border border-hairline p-5"
            >
              <span>
                <span className="font-display text-xl lowercase">{p.nombre}</span>
                <span className="mt-1 block text-xs text-ink-soft">Shopify en {p.nombre} →</span>
              </span>
              <span aria-hidden="true" className="text-3xl">
                {p.bandera}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** CTA final con el único canal real de contacto. */
export function CtaFinal({ href = MAILTO_LONG, titulo }: { href?: string; titulo?: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* si el navegador no deja, el mail está igual a la vista */
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <section
      className="panel wash px-5 py-12 text-center sm:px-10 sm:py-16"
      aria-labelledby="cta-title"
    >
      <h2 id="cta-title" className="text-4xl sm:text-6xl">
        {titulo ?? "¿arrancamos"}
        <span className="marker">?</span>
      </h2>

      <p className="mx-auto mt-5 max-w-md text-base font-semibold text-ink sm:text-lg">
        Escribime a {EMAIL} y contame qué te está haciendo perder tiempo. Contesto yo, en 24 a 48
        horas hábiles.
      </p>

      <a
        href={href}
        className="btn-press btn-ink mt-8 w-full px-6 py-5 text-xl sm:w-auto sm:text-3xl"
      >
        <DoodleMail className="h-7 w-7" />
        {EMAIL}
      </a>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={copiar}
          className="btn-press bg-paper px-5 py-2.5 text-sm shadow-soft"
        >
          copiar el mail
        </button>
        {copiado && (
          <span role="status" className="pill-grad px-3 py-2 font-display text-sm">
            ¡copiado!
          </span>
        )}
      </div>
    </section>
  );
}
