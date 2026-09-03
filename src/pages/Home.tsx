import { useEffect, useState } from "react";
import { PMark } from "@/components/Logo";
import {
  DoodleChat,
  DoodleClock,
  DoodleGear,
  DoodleMail,
  DoodleSpark,
  DoodleSpeed,
  Squiggle,
} from "@/components/Doodles";
import { Page } from "@/components/Layout";
import { CtaFinal, GrillaPaises, Preguntas, ResumenRapido } from "@/components/sections";
import { FAQ_HOME } from "@/content/home";
import { MAILTO, MAILTO_LONG, PAISES, SERVICIOS } from "@/site";

const ICONOS = {
  automatizacion: DoodleGear,
  ia: DoodleSpark,
  atencion: DoodleChat,
  optimizacion: DoodleSpeed,
} as const;

const TINTES = {
  automatizacion: "color-mix(in oklab, var(--grad-teal) 14%, white)",
  ia: "color-mix(in oklab, var(--grad-pink) 12%, white)",
  atencion: "color-mix(in oklab, var(--grad-yellow) 20%, white)",
  optimizacion: "color-mix(in oklab, var(--grad-purple) 12%, white)",
} as const;

const pasos = [
  {
    n: "01",
    titulo: "me escribís",
    Icon: DoodleMail,
    color: "var(--grad-teal)",
    texto: "Un mail contando qué te vuelve loco de tu operación. Sin formalidades.",
  },
  {
    n: "02",
    titulo: "miro tu setup",
    Icon: DoodleChat,
    color: "var(--grad-yellow)",
    texto: "Charlamos, reviso cómo laburás hoy y te digo qué se puede arreglar (y qué no).",
  },
  {
    n: "03",
    titulo: "lo hago",
    Icon: DoodleSpeed,
    color: "var(--grad-purple)",
    texto: "Presupuesto claro, lo construimos, lo dejo andando y te explico cómo funciona.",
  },
];

export default function Home() {
  const [paisIdx, setPaisIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPaisIdx((i) => (i + 1) % PAISES.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  const pais = PAISES[paisIdx]!;

  return (
    <Page>
      {/* Hero */}
      <section className="panel wash px-5 py-10 sm:px-10 sm:py-16" aria-labelledby="hero-title">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="pill px-3 py-1.5 text-xs sm:text-sm">
              Para tiendas Shopify en{" "}
              <span aria-live="polite">
                {pais.nombre} {pais.bandera}
              </span>
            </p>

            <h1
              id="hero-title"
              className="mt-5 text-[2.9rem] leading-[1.06] sm:text-6xl md:text-7xl"
            >
              hagamos que tu shopify <span className="marker">labure solo</span>.
            </h1>

            <p className="mt-5 max-w-md text-base font-semibold sm:text-lg">
              Automatización, IA aplicada y atención al cliente para tiendas Shopify de Uruguay,
              Argentina y Chile. No soy una agencia. Soy Papurro.
            </p>

            <a href={MAILTO_LONG} className="btn-press btn-ink mt-7 px-6 py-4 text-lg sm:text-xl">
              organicemos una call →
            </a>
          </div>

          <div className="mx-auto w-[15rem] sm:w-[21rem]">
            <PMark
              className="mascot-idle h-auto w-full drop-shadow-[0_30px_45px_rgba(10,17,40,0.25)]"
              alt="Papurro, la P del logo, saludando"
              priority
            />
          </div>
        </div>
      </section>

      {/* Respuesta corta: lo primero que levanta un buscador o un asistente de IA */}
      <section className="card p-5 sm:p-9" aria-labelledby="que-es-title">
        <h2 id="que-es-title" className="text-2xl sm:text-3xl">
          automatización, ia y soporte para tiendas <span className="marker">shopify</span>
        </h2>
        <div className="mt-5">
          <ResumenRapido>
            Papurro es una persona —no una agencia ni un bot— que ayuda a tiendas Shopify de
            Uruguay, Argentina y Chile con automatización, IA aplicada, atención al cliente y
            optimización. Presupuesto por proyecto, sin planes mensuales. Contacto:{" "}
            <a href={MAILTO} className="underline underline-offset-4">
              info@papurro.com
            </a>
            , con respuesta en 24 a 48 horas hábiles.
          </ResumenRapido>
        </div>
      </section>

      {/* Servicios */}
      <section className="card p-5 sm:p-9" aria-labelledby="servicios-title">
        <h2 id="servicios-title" className="text-3xl sm:text-5xl">
          ¿qué hacés, <span className="marker">papurro</span>?
        </h2>
        <Squiggle className="mt-3" />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {SERVICIOS.map(({ id, titulo, texto, tituloLargo }) => {
            const Icon = ICONOS[id];
            return (
              <li key={id} className="card card-hover border border-hairline p-5">
                <span className="chip h-14 w-14" style={{ background: TINTES[id] }}>
                  <Icon className="h-7 w-7 text-ink" />
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl">{titulo}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
                  {tituloLargo}
                </p>
                <p className="mt-2 text-sm leading-relaxed sm:text-base">{texto}</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-7 rounded-3xl bg-[color-mix(in_oklab,var(--grad-purple)_8%,white)] px-5 py-4 text-sm font-semibold sm:text-base">
          ✨ Todo pensado para que tu Shopify funcione mejor, venda más y te dé tu vida de vuelta.
        </p>
      </section>

      <GrillaPaises />

      {/* Quién es */}
      <section className="card p-5 sm:p-9" aria-labelledby="quien-title">
        <h2 id="quien-title" className="text-3xl sm:text-5xl">
          ¿quién es <span className="marker">papurro</span>?
        </h2>
        <Squiggle className="mt-3" />

        <p className="mt-6 text-lg font-extrabold text-ink sm:text-xl">
          Papurro no es una agencia. No es un equipo. No es un bot con nombre simpático.
        </p>
        <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed sm:text-base">
          <p>
            Es <span className="marker font-extrabold">una persona</span>. Una sola. Con una
            computadora y una paciencia rara para los detalles.
          </p>
          <p>
            Trabajo con pocas tiendas a la vez, porque prefiero hacer bien tres cosas que hacer mal
            treinta.
          </p>
          <p>
            Si me escribís, te contesto yo. Si algo no lo sé hacer, te lo digo. Y si no te sirvo, te
            lo digo también.
          </p>
        </div>

        <a href={MAILTO} className="btn-press btn-rainbow mt-7 px-6 py-3 text-base">
          escribime →
        </a>
      </section>

      {/* Precios */}
      <section className="card p-5 sm:p-9" aria-labelledby="precio-title">
        <h2 id="precio-title" className="text-3xl sm:text-5xl">
          ¿cuánto <span className="marker">sale</span>?
        </h2>
        <Squiggle className="mt-3" />

        <p className="mt-6 text-sm leading-relaxed sm:text-base">
          Cada tienda es un lío distinto, así que no vendo planes de $X por mes con estrellitas y
          letra chica.
        </p>
        <p className="mt-4 text-lg font-extrabold text-ink sm:text-xl">
          Me contás qué te duele → miro tu setup → te paso un número.
        </p>
        <p className="mt-4 text-sm leading-relaxed sm:text-base">
          Presupuesto por proyecto. Sin sorpresas y sin permanencia.
        </p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {["Sin planes mensuales", "Sin letra chica", "Sin vendedor encima"].map((t) => (
            <li key={t} className="pill px-4 py-2 text-xs sm:text-sm">
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Cómo laburamos */}
      <section className="card p-5 sm:p-9" aria-labelledby="pasos-title">
        <h2 id="pasos-title" className="text-3xl sm:text-5xl">
          cómo <span className="marker">laburamos</span>
        </h2>
        <Squiggle className="mt-3" />

        <ol className="mt-8 grid gap-5 sm:grid-cols-3">
          {pasos.map(({ n, titulo, texto, Icon, color }) => (
            <li key={n} className="card card-hover border border-hairline p-5">
              <span
                className="pill-grad h-11 w-11 font-display text-base"
                style={{ backgroundImage: "none", background: color }}
              >
                {n}
              </span>
              <Icon className="mt-5 h-9 w-9 text-ink" />
              <h3 className="mt-4 text-xl">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed">{texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-7 flex items-center gap-3 rounded-3xl bg-[color-mix(in_oklab,var(--grad-teal)_10%,white)] px-5 py-4 text-sm font-semibold">
          <DoodleClock className="h-6 w-6 shrink-0 text-ink" />
          Contesto en 24-48hs hábiles. Soy uno solo, tené paciencia 🐶
        </p>
      </section>

      <Preguntas faqs={FAQ_HOME} />

      <CtaFinal />
    </Page>
  );
}
