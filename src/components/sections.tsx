import { useState } from "react";
import {
  DoodleChat,
  DoodleClock,
  DoodleMail,
  DoodleSpark,
  DoodleWhats,
  Squiggle,
} from "@/components/Doodles";
import { Formulario } from "@/components/Formulario";
import { GlFondo } from "@/components/GlFondo";
import type { Faq } from "@/seo";
import {
  DIAGNOSTICO,
  DIAGNOSTICO_EN,
  EMAIL,
  MAILTO_LONG,
  PAISES,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  nombrePais,
  whatsappPais,
  type Idioma,
} from "@/site";

/** Bloque de respuesta directa: texto corto, factual y fácil de citar.
 *  Es lo que buscan los buscadores con IA cuando resumen "qué es Papurro". */
export function ResumenRapido({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-3xl border border-hairline bg-[color-mix(in_oklab,var(--grad-teal)_8%,white)] px-5 py-4 text-sm font-semibold leading-relaxed text-ink sm:text-base">
      {children}
    </p>
  );
}

export function Breadcrumbs({
  items,
  idioma = "es",
}: {
  items: { name: string; href: string }[];
  idioma?: Idioma | undefined;
}) {
  return (
    <nav
      aria-label={idioma === "en" ? "Breadcrumbs" : "Migas de pan"}
      className="text-xs font-semibold text-ink-soft sm:text-sm"
    >
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

const GRILLA_TXT = {
  es: {
    titulo: "dónde",
    resalte: "trabajo",
    intro:
      "Trabajo en remoto con tiendas de e-commerce de Uruguay, Argentina y Estados Unidos. Cada " +
      "país tiene sus propias formas de cobrar, despachar y facturar: entrá al tuyo y te cuento " +
      "cómo encaro cada caso.",
    ecommerceEn: (n: string) => `E-commerce en ${n} →`,
  },
  en: {
    titulo: "where I",
    resalte: "work",
    intro:
      "I work remotely with e-commerce stores in Uruguay, Argentina and the United States. Each " +
      "country has its own way of charging, shipping and invoicing: go to yours and I'll walk you " +
      "through how I handle it.",
    ecommerceEn: (n: string) => `E-commerce in ${n} →`,
  },
} as const;

/** Enlaces internos a las páginas por país. */
export function GrillaPaises({
  excluir,
  idioma = "es",
}: {
  excluir?: string;
  idioma?: Idioma | undefined;
}) {
  const lista = PAISES.filter((p) => p.slug !== excluir);
  const t = GRILLA_TXT[idioma];
  return (
    <section className="card p-5 sm:p-9" aria-labelledby="paises-title">
      <h2 id="paises-title" className="text-3xl sm:text-5xl">
        {t.titulo} <span className="marker">{t.resalte}</span>
      </h2>
      <Squiggle className="mt-3" />

      <p className="mt-6 max-w-2xl text-sm leading-relaxed sm:text-base">{t.intro}</p>

      <ul className="mt-7 grid gap-4 sm:grid-cols-3">
        {lista.map((p) => {
          const nombre = nombrePais(p, idioma);
          return (
            <li key={p.slug}>
              <a
                href={`/${p.slug}/`}
                className="card card-hover flex items-center justify-between gap-3 border border-hairline p-5"
              >
                <span>
                  <span className="font-display text-xl lowercase">{nombre}</span>
                  <span className="mt-1 block text-xs text-ink-soft">{t.ecommerceEn(nombre)}</span>
                </span>
                <span aria-hidden="true" className="text-3xl">
                  {p.bandera}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const DIAGNOSTICO_TXT = {
  es: {
    pill: "Gratis · sin compromiso",
    h2: (min: number) => (
      <>
        el diagnóstico de <span className="marker">{min} minutos</span>
      </>
    ),
    puntos: [
      {
        Icon: DoodleClock,
        titulo: "20 minutos, no dos horas",
        texto:
          "Una llamada corta y concreta. Me mostrás cómo laburás hoy y vamos derecho a dónde se te va el tiempo.",
      },
      {
        Icon: DoodleChat,
        titulo: "gratis y sin compromiso",
        texto:
          "No es una llamada de venta. Si no te puedo ayudar, te lo digo ahí mismo y listo, sin vueltas.",
      },
      {
        Icon: DoodleSpark,
        titulo: "te llevás algo igual",
        texto:
          "Salís con una idea clara de qué conviene automatizar primero, lo terminemos haciendo juntos o no.",
      },
    ],
    intro: (wa: string) => (
      <>
        Contame en dos renglones qué te está haciendo perder tiempo y coordinamos la llamada. Si
        preferís el atajo, mandame un WhatsApp al {wa} y listo.
      </>
    ),
    whatsapp: (n: string) => `WhatsApp ${n}`,
  },
  en: {
    pill: "Free · no strings attached",
    h2: (min: number) => (
      <>
        the <span className="marker">{min}-minute diagnostic</span>
      </>
    ),
    puntos: [
      {
        Icon: DoodleClock,
        titulo: "20 minutes, not two hours",
        texto:
          "A short, concrete call. You show me how things run today and we go straight to where your time is going.",
      },
      {
        Icon: DoodleChat,
        titulo: "free and no strings attached",
        texto: "It's not a sales call. If I can't help you, I'll say so right there, no runaround.",
      },
      {
        Icon: DoodleSpark,
        titulo: "you walk away with something either way",
        texto:
          "You leave with a clear idea of what's worth automating first, whether we end up working together or not.",
      },
    ],
    intro: (wa: string) => (
      <>
        Tell me in a couple lines what's wasting your time and we'll set up the call. If you'd
        rather skip ahead, send me a WhatsApp at {wa} and that's it.
      </>
    ),
    whatsapp: (n: string) => `WhatsApp ${n}`,
  },
} as const;

/** Oferta de entrada: la llamada corta y gratis. Es el ancla de todos los CTA
 *  de la página (`#diagnostico`) y la que lleva el formulario. */
export function Diagnostico({
  pais,
  idioma = "es",
}: {
  pais?: string | undefined;
  idioma?: Idioma | undefined;
}) {
  const wa = pais ? whatsappPais(pais, idioma) : WHATSAPP_URL;
  const t = DIAGNOSTICO_TXT[idioma];
  const diag = idioma === "en" ? DIAGNOSTICO_EN : DIAGNOSTICO;

  return (
    <section
      id="diagnostico"
      className="panel wash scroll-mt-24 px-5 py-10 sm:px-10 sm:py-14"
      aria-labelledby="diagnostico-title"
    >
      <p className="pill px-3 py-1.5 text-xs sm:text-sm">{t.pill}</p>

      <h2 id="diagnostico-title" className="mt-5 text-3xl sm:text-5xl">
        {t.h2(diag.minutos)}
      </h2>
      <Squiggle className="mt-3" />

      <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed sm:text-lg">
        {diag.resumen}
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-3">
        {t.puntos.map(({ Icon, titulo, texto }) => (
          <li key={titulo} className="card border border-hairline p-5">
            <Icon className="h-8 w-8 text-ink" />
            <h3 className="mt-4 text-lg normal-case sm:text-xl">{titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed">{texto}</p>
          </li>
        ))}
      </ul>

      <div className="card mt-8 border border-hairline p-5 sm:p-7">
        <p className="text-sm font-semibold leading-relaxed sm:text-base">
          {t.intro(WHATSAPP_DISPLAY)}
        </p>
        <Formulario pais={pais} idioma={idioma} />
      </div>

      <p className="mt-6 flex items-center gap-3 text-sm font-semibold text-ink">
        <DoodleWhats className="h-6 w-6 shrink-0" />
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          {t.whatsapp(WHATSAPP_DISPLAY)}
        </a>
      </p>
    </section>
  );
}

const CTA_TXT = {
  es: {
    titulo: "¿arrancamos",
    resumen: (mins: number) =>
      `Pedime el diagnóstico de ${mins} minutos, escribime a ${EMAIL} o mandame un ` +
      "WhatsApp. Contesto yo, en 24 a 48 horas hábiles.",
    cta: "quiero el diagnóstico gratis →",
    copiar: "copiar el mail",
    copiado: "¡copiado!",
  },
  en: {
    titulo: "shall we start",
    resumen: (mins: number) =>
      `Ask me for the ${mins}-minute diagnostic, email me at ${EMAIL} or send me a ` +
      "WhatsApp. I reply myself, within 24 to 48 business hours.",
    cta: "I want the free diagnostic →",
    copiar: "copy email",
    copiado: "copied!",
  },
} as const;

/** CTA final con los canales de contacto directos. */
export function CtaFinal({
  href = MAILTO_LONG,
  titulo,
  pais,
  idioma = "es",
}: {
  href?: string;
  titulo?: string;
  /** País de la landing, para prellenar el WhatsApp. */
  pais?: string | undefined;
  idioma?: Idioma | undefined;
}) {
  const wa = pais ? whatsappPais(pais, idioma) : WHATSAPP_URL;
  const [copiado, setCopiado] = useState(false);
  const t = CTA_TXT[idioma];
  const diag = idioma === "en" ? DIAGNOSTICO_EN : DIAGNOSTICO;

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
      className="panel wash relative px-5 py-12 text-center sm:px-10 sm:py-16"
      aria-labelledby="cta-title"
    >
      <GlFondo preset="cta" />

      <div className="relative">
        <h2 id="cta-title" className="text-4xl sm:text-6xl">
          {titulo ?? t.titulo}
          <span className="marker">?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-base font-semibold text-ink sm:text-lg">
          {t.resumen(diag.minutos)}
        </p>

        <a href="#diagnostico" className="btn-press btn-rainbow mt-7 px-6 py-4 text-lg sm:text-xl">
          {t.cta}
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={href}
            className="btn-press btn-ink w-full px-6 py-5 text-lg sm:w-auto sm:text-2xl"
          >
            <DoodleMail className="h-7 w-7" />
            {EMAIL}
          </a>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press w-full bg-paper px-6 py-5 text-lg shadow-soft ring-1 ring-hairline sm:w-auto sm:text-2xl"
          >
            <DoodleWhats className="h-7 w-7" />
            {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={copiar}
            className="btn-press bg-paper px-5 py-2.5 text-sm shadow-soft"
          >
            {t.copiar}
          </button>
          {copiado && (
            <span role="status" className="pill-grad px-3 py-2 font-display text-sm">
              {t.copiado}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
