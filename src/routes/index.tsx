import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mascot } from "@/components/Mascot";
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
    color: "bg-lime",
    rot: "-rotate-[1.5deg]",
    Icon: DoodleGear,
    texto:
      "Esas cosas que hacés a mano 40 veces por día. Que las haga una máquina y vos andá a tomar un mate.",
  },
  {
    titulo: "IA aplicada",
    color: "bg-cyan",
    rot: "rotate-[1deg]",
    Icon: DoodleSpark,
    texto:
      "IA que resuelve cosas, no IA de folleto. Clasificar pedidos, redactar respuestas, resumir quilombos. Lo que te ahorre horas de verdad.",
  },
  {
    titulo: "Atención al cliente",
    color: "bg-yellow",
    rot: "rotate-[-2deg]",
    Icon: DoodleChat,
    texto:
      "Tickets ordenados, respuestas rápidas, menos «che, dónde está mi pedido». Tu cliente contento y vos durmiendo.",
  },
  {
    titulo: "Optimización",
    color: "bg-orange",
    rot: "rotate-[1.5deg]",
    Icon: DoodleSpeed,
    texto:
      "Tu tienda anda. Bárbaro. ¿Pero anda bien? Velocidad, checkout, catálogo, integraciones que no se rompan un viernes a las 7.",
  },
];

const pasos = [
  {
    n: "01",
    color: "bg-pink",
    titulo: "Me escribís",
    texto: "Un mail contando qué te vuelve loco de tu operación. Sin formalidades.",
  },
  {
    n: "02",
    color: "bg-cyan",
    titulo: "Miro tu setup",
    texto:
      "Charlamos, reviso cómo laburás hoy y te digo qué se puede arreglar (y qué no).",
  },
  {
    n: "03",
    color: "bg-lime",
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
            <Mascot className="mascot-idle h-11 w-11 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl lowercase tracking-tight">
                papurro
              </span>
              <svg
                viewBox="0 0 100 8"
                className="h-2 w-[92px]"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M2 5c14-4 26 3 40-1s30 4 56-1"
                  stroke="var(--pink)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
          <a href={MAILTO} className="btn-press bg-yellow px-4 py-3 text-lg">
            escribime
          </a>
        </div>
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section className="bg-paper px-4 pt-10 pb-14" aria-labelledby="hero-title">
          <div className="mx-auto max-w-5xl">
            <p className="sticker inline-block -rotate-[2deg] bg-cyan px-3 py-2 text-sm font-bold">
              Para tiendas Shopify en Uruguay 🇺🇾
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-[3.25rem] leading-[1.18] sm:text-7xl md:text-8xl"
            >
              hago que tu shopify <span className="marker">labure solo</span>.
            </h1>


            <p className="mt-8 max-w-xl text-lg font-medium sm:text-xl">
              Automatización, IA que sirve y atención al cliente ordenada. No soy una
              agencia: soy una persona, con una computadora y mucho café.
            </p>

            <div className="mt-8">
              <a
                href={MAILTO_LONG}
                className="btn-press inline-block bg-pink px-6 py-5 text-2xl sm:text-3xl"
              >
                contame tu quilombo →
              </a>
              <p className="mt-3 text-sm font-bold">Respondo yo. En serio. No hay bot.</p>
            </div>

            <div className="relative mx-auto mt-14 w-[16rem] sm:w-[20rem]">
              <div className="sticker sticker-hover rotate-[-4deg] bg-paper p-4">
                <Mascot className="mascot-idle h-auto w-full" />
              </div>
              <Tape className="-top-3 -left-5 -rotate-[24deg]" />
              <Tape className="-right-5 -bottom-3 -rotate-[12deg]" />
            </div>
          </div>
        </section>

        <Squiggle className="h-6 w-full" />

        {/* 3. Servicios */}
        <section className="bg-paper px-4 py-14" aria-labelledby="servicios-title">
          <div className="mx-auto max-w-5xl">
            <h2 id="servicios-title" className="text-4xl sm:text-6xl">
              ¿qué hacés, papurro?
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {servicios.map(({ titulo, texto, color, rot, Icon }) => (
                <li
                  key={titulo}
                  className={`sticker sticker-hover ${color} ${rot} p-5`}
                >
                  <Icon className="h-14 w-14" />
                  <h3 className="mt-4 text-2xl sm:text-3xl">{titulo}</h3>
                  <p className="mt-3 text-base font-medium">{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Squiggle className="h-6 w-full" />

        {/* 4. Quién es */}
        <section
          className="border-y-[3px] border-ink bg-cyan px-4 py-16"
          aria-labelledby="quien-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="quien-title" className="text-4xl sm:text-6xl">
              ¿quién carajo es papurro?
            </h2>
            <div className="sticker mt-8 rotate-[-1deg] bg-paper p-5 sm:p-8">
              <p className="text-lg font-bold sm:text-2xl">
                Papurro no es una agencia. No es un equipo. No es un bot con nombre
                simpático.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Es <span className="marker">una persona</span>. Una sola. Con una
                computadora, buen café y una paciencia rara para los detalles.
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

        {/* 5. Precios */}
        <section
          className="border-b-[3px] border-ink bg-yellow px-4 py-16"
          aria-labelledby="precio-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="precio-title" className="text-4xl sm:text-6xl">
              ¿cuánto sale?
            </h2>
            <div className="sticker mt-8 rotate-[1deg] bg-paper p-5 sm:p-8">
              <p className="text-base font-medium sm:text-lg">
                Cada tienda es un quilombo distinto, así que no vendo planes de $X por mes
                con estrellitas y letra chica.
              </p>
              <p className="mt-4 text-lg font-bold sm:text-2xl">
                Me contás qué te duele → miro tu setup → te paso un número.
              </p>
              <p className="mt-4 text-base font-medium sm:text-lg">
                Presupuesto por proyecto. Sin sorpresas y sin permanencia.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-4">
              {[
                ["Sin planes mensuales", "bg-pink", "-rotate-[2deg]"],
                ["Sin letra chica", "bg-lime", "rotate-[1.5deg]"],
                ["Sin vendedor encima", "bg-cyan", "-rotate-[1deg]"],
              ].map(([t, color, rot]) => (
                <li key={t} className={`sticker sticker-hover ${color} ${rot} px-3 py-2 text-sm font-bold`}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Cómo laburamos */}
        <section className="bg-paper px-4 py-16" aria-labelledby="pasos-title">
          <div className="mx-auto max-w-5xl">
            <h2 id="pasos-title" className="text-4xl sm:text-6xl">
              cómo laburamos
            </h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {pasos.map(({ n, titulo, texto, color }) => (
                <li key={n} className="flex gap-4 sm:block">
                  <span
                    className={`sticker ${color} flex h-20 w-20 shrink-0 items-center justify-center rounded-full -rotate-[3deg] font-display text-2xl`}
                  >
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

        <Squiggle className="h-6 w-full" />

        {/* 7. CTA final */}
        <section
          className="border-y-[3px] border-ink bg-pink px-4 py-16"
          aria-labelledby="cta-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="cta-title" className="text-5xl sm:text-7xl">
              ¿arrancamos?
            </h2>
            <p className="mt-6 max-w-xl text-lg font-bold sm:text-2xl">
              Escribime a info@papurro.com y contame qué te está haciendo perder tiempo.
            </p>

            <a
              href={MAILTO_LONG}
              className="btn-press mt-8 block bg-ink px-5 py-6 text-center text-2xl text-paper sm:inline-block sm:text-4xl"
            >
              info@papurro.com
            </a>

            <div className="relative mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={copiar}
                className="btn-press bg-paper px-4 py-3 text-base"
              >
                copiar el mail
              </button>
              {copiado && (
                <span
                  role="status"
                  className="sticker rotate-[-6deg] bg-yellow px-3 py-2 font-display text-base"
                >
                  ¡copiado!
                </span>
              )}
            </div>

            <p className="mt-8 text-sm font-bold">
              Contesto en 24-48hs hábiles. Soy uno solo, tené paciencia 🐶
            </p>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="bg-ink px-4 py-10 text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Mascot className="h-14 w-14 shrink-0" title="Papurro, el perro-papa (mini)" />
          <p className="text-sm font-medium">
            <span className="font-display text-lg">papurro</span> · Shopify,
            automatización e IA para tiendas uruguayas ·{" "}
            <a href={MAILTO} className="underline decoration-pink decoration-4">
              info@papurro.com
            </a>{" "}
            · Hecho en Uruguay 🧉 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
