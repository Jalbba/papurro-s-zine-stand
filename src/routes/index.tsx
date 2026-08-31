import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Logo, Wordmark } from "@/components/Logo";
import {
  DoodleChat,
  DoodleGear,
  DoodleSpark,
  DoodleSpeed,
  Squiggle,
  Tape,
} from "@/components/Doodles";

const MAILTO = "mailto:info@papurro.com";
const MAILTO_LONG =
  "mailto:info@papurro.com?subject=Hola%20Papurro&body=Hola!%20Tengo%20una%20tienda%20Shopify%20y...";

const TITLE = "Papurro · Automatización e IA para tiendas Shopify en Uruguay";
const DESCRIPTION =
  "Soy una persona (una sola) que ayuda a tiendas Shopify uruguayas con automatización, IA aplicada, atención al cliente y optimización. Escribime a info@papurro.com.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_UY" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const servicios = [
  {
    titulo: "Automatización",
    Icon: DoodleGear,
    texto:
      "Esas cosas que hacés a mano 40 veces por día. Que las haga una máquina y vos andá a tomar un mate.",
  },
  {
    titulo: "IA aplicada",
    Icon: DoodleSpark,
    texto:
      "IA que resuelve cosas, no IA de folleto. Clasificar pedidos, redactar respuestas, resumir quilombos. Lo que te ahorre horas de verdad.",
  },
  {
    titulo: "Atención al cliente",
    Icon: DoodleChat,
    texto:
      "Tickets ordenados, respuestas rápidas, menos «che, dónde está mi pedido». Tu cliente contento y vos durmiendo.",
  },
  {
    titulo: "Optimización",
    Icon: DoodleSpeed,
    texto:
      "Tu tienda anda. Bárbaro. ¿Pero anda bien? Velocidad, checkout, catálogo, integraciones que no se rompan un viernes a las 7.",
  },
];

const pasos = [
  {
    n: "01",
    titulo: "Me escribís",
    texto: "Un mail contando qué te vuelve loco de tu operación. Sin formalidades.",
  },
  {
    n: "02",
    titulo: "Miro tu setup",
    texto:
      "Charlamos, reviso cómo laburás hoy y te digo qué se puede arreglar (y qué no).",
  },
  {
    n: "03",
    titulo: "Lo hago",
    texto:
      "Presupuesto claro, lo construimos, lo dejo andando y te explico cómo funciona.",
  },
];

function Index() {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText("info@papurro.com");
    } catch {
      /* si el navegador no deja, el mail está igual a la vista */
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* 1. Sticky top bar */}
      <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2" aria-label="papurro, inicio">
            {/* LOGO SLOT · navbar */}
            <Logo className="h-10 w-auto" placeholderClassName="text-xl" />
          </a>
          <a href={MAILTO} className="btn-press btn-rainbow px-5 py-3 text-lg">
            escribime
          </a>
        </div>
        <div className="rainbow-bar h-1.5 w-full" aria-hidden="true" />
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section
          className="rainbow-bg border-b-[3px] border-ink px-4 pt-10 pb-14"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto max-w-5xl">
            <p className="card inline-block px-3 py-2 text-sm font-extrabold">
              Para tiendas Shopify en Uruguay 🇺🇾
            </p>

            <div className="card mt-6 p-5 sm:p-8">
              <h1
                id="hero-title"
                className="text-[3rem] leading-[1.1] sm:text-6xl md:text-7xl"
              >
                hago que tu shopify <span className="marker">labure solo</span>.
              </h1>

              <p className="mt-6 max-w-xl text-lg font-semibold sm:text-xl">
                Automatización, IA que sirve y atención al cliente ordenada. No soy una
                agencia: soy una persona con una computadora.
              </p>

              <div className="mt-7">
                <a
                  href={MAILTO_LONG}
                  className="btn-press btn-rainbow px-6 py-4 text-2xl sm:text-3xl"
                >
                  contame tu quilombo →
                </a>
              </div>
            </div>

            {/* LOGO SLOT · hero centerpiece */}
            <div className="relative mx-auto mt-14 w-[16rem] sm:w-[20rem]">
              <div className="card card-hover mascot-idle flex items-center justify-center p-5">
                <Logo
                  className="mascot-idle h-auto w-full"
                  placeholderClassName="text-4xl sm:text-5xl"
                />
              </div>
              <Tape className="-top-3 -left-5 -rotate-[24deg]" />
              <Tape className="-right-5 -bottom-3 -rotate-[12deg]" />
            </div>
          </div>
        </section>

        <Squiggle className="h-3" />

        {/* 3. Servicios */}
        <section className="bg-paper px-4 py-14" aria-labelledby="servicios-title">
          <div className="mx-auto max-w-5xl">
            <h2 id="servicios-title" className="grad-text text-4xl sm:text-6xl">
              ¿qué hacés, papurro?
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {servicios.map(({ titulo, texto, Icon }) => (
                <li key={titulo} className="card card-hover overflow-hidden">
                  <div className="rainbow-bar h-3 w-full" aria-hidden="true" />
                  <div className="p-5">
                    <Icon className="h-14 w-14" />
                    <h3 className="mt-4 text-2xl sm:text-3xl">{titulo}</h3>
                    <p className="mt-3 text-base font-medium">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Squiggle className="h-3" />

        {/* 4. Quién es */}
        <section className="rainbow-bg px-4 py-16" aria-labelledby="quien-title">
          <div className="mx-auto max-w-5xl">
            <div className="card p-5 sm:p-8">
              <h2 id="quien-title" className="grad-text text-4xl sm:text-6xl">
                ¿quién carajo es papurro?
              </h2>
              <p className="mt-6 text-lg font-extrabold sm:text-2xl">
                Papurro no es una agencia. No es un equipo. No es un bot con nombre
                simpático.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Es <span className="marker">una persona</span>. Una sola. Con una
                computadora y una paciencia rara para los detalles.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Trabajo con pocas tiendas a la vez, porque prefiero hacer bien tres cosas
                que hacer mal treinta.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Si me escribís, te contesto yo. Si algo no lo sé hacer, te lo digo. Y si
                no te sirvo, te lo digo también.
              </p>
            </div>
          </div>
        </section>

        <Squiggle className="h-3" />

        {/* 5. Precios */}
        <section className="bg-paper px-4 py-16" aria-labelledby="precio-title">
          <div className="mx-auto max-w-5xl">
            <h2 id="precio-title" className="grad-text text-4xl sm:text-6xl">
              ¿cuánto sale?
            </h2>
            <div className="card mt-8 p-5 sm:p-8">
              <p className="text-base font-medium sm:text-lg">
                Cada tienda es un quilombo distinto, así que no vendo planes de $X por mes
                con estrellitas y letra chica.
              </p>
              <p className="mt-4 text-lg font-extrabold sm:text-2xl">
                Me contás qué te duele → miro tu setup → te paso un número.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Presupuesto por proyecto. Sin sorpresas y sin permanencia.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-4">
              {["Sin planes mensuales", "Sin letra chica", "Sin vendedor encima"].map(
                (t) => (
                  <li key={t} className="pill px-4 py-2 text-sm">
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* 6. Cómo laburamos */}
        <section
          className="border-t-[3px] border-ink bg-paper px-4 py-16"
          aria-labelledby="pasos-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="pasos-title" className="grad-text text-4xl sm:text-6xl">
              cómo laburamos
            </h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {pasos.map(({ n, titulo, texto }) => (
                <li key={n} className="flex gap-4 sm:block">
                  <span className="pill flex h-20 w-20 shrink-0 items-center justify-center font-display text-2xl">
                    {n}
                  </span>
                  <div className="sm:mt-5">
                    <h3 className="text-2xl">{titulo}</h3>
                    <p className="mt-2 text-base font-medium">{texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Squiggle className="h-3" />

        {/* 7. CTA final */}
        <section className="rainbow-bg px-4 py-16" aria-labelledby="cta-title">
          <div className="mx-auto max-w-5xl">
            <div className="card p-5 sm:p-8">
              <h2 id="cta-title" className="grad-text text-5xl sm:text-7xl">
                ¿arrancamos?
              </h2>
              <p className="mt-6 max-w-xl text-lg font-extrabold sm:text-2xl">
                Escribime a info@papurro.com y contame qué te está haciendo perder tiempo.
              </p>

              <a
                href={MAILTO_LONG}
                className="btn-press btn-ink mt-8 block px-5 py-5 text-center text-2xl sm:inline-block sm:text-4xl"
              >
                info@papurro.com
              </a>

              <div className="relative mt-6 flex items-center gap-4">
                <button
                  type="button"
                  onClick={copiar}
                  className="btn-press bg-paper px-5 py-3 text-base"
                >
                  copiar el mail
                </button>
                {copiado && (
                  <span role="status" className="pill px-3 py-2 font-display text-base">
                    ¡copiado!
                  </span>
                )}
              </div>

              <p className="mt-8 text-sm font-extrabold">
                Contesto en 24-48hs hábiles. Soy uno solo, tené paciencia 🐶
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="border-t-[3px] border-ink bg-ink px-4 py-10 text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center">
          {/* LOGO SLOT · footer */}
          <span className="grad-border inline-flex shrink-0 items-center p-2">
            <Logo className="h-12 w-auto" placeholderClassName="text-lg" />
          </span>
          <p className="text-sm font-medium">
            <Wordmark className="text-lg" /> · Shopify, automatización e IA para tiendas
            uruguayas ·{" "}
            <a href={MAILTO} className="underline decoration-[3px] underline-offset-4">
              info@papurro.com
            </a>{" "}
            · Hecho en Uruguay 🧉 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
