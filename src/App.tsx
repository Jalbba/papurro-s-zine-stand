import { useEffect, useState } from "react";
import { Logo, PMark } from "@/components/Logo";
import {
  DoodleChat,
  DoodleClock,
  DoodleGear,
  DoodleMail,
  DoodleSpark,
  DoodleSpeed,
  Squiggle,
} from "@/components/Doodles";

const MAILTO = "mailto:info@papurro.com";
const MAILTO_LONG =
  "mailto:info@papurro.com?subject=Hola%20Papurro&body=Hola!%20Tengo%20una%20tienda%20Shopify%20y...";

const paises = [
  { nombre: "Uruguay", bandera: "🇺🇾" },
  { nombre: "Argentina", bandera: "🇦🇷" },
  { nombre: "Chile", bandera: "🇨🇱" },
  { nombre: "USA", bandera: "🇺🇸" },
];

const servicios = [
  {
    titulo: "automatización",
    Icon: DoodleGear,
    tint: "color-mix(in oklab, var(--grad-teal) 14%, white)",
    texto:
      "Conecto tu tienda con las herramientas que ya usás para que tareas repetitivas —cargar pedidos, actualizar stock, generar reportes— pasen a hacerse solas.",
  },
  {
    titulo: "ideas que sirven",
    Icon: DoodleSpark,
    tint: "color-mix(in oklab, var(--grad-pink) 12%, white)",
    texto:
      "Aplico IA a problemas concretos de tu operación: clasificar pedidos, redactar respuestas, resumir información. Nada de demos que no se usan.",
  },
  {
    titulo: "atención al cliente",
    Icon: DoodleChat,
    tint: "color-mix(in oklab, var(--grad-yellow) 20%, white)",
    texto:
      "Organizo tus canales de soporte para que las consultas se respondan más rápido y ningún ticket quede sin seguimiento.",
  },
  {
    titulo: "optimización",
    Icon: DoodleSpeed,
    tint: "color-mix(in oklab, var(--grad-purple) 12%, white)",
    texto:
      "Reviso velocidad de carga, checkout, catálogo e integraciones para detectar y corregir lo que le está costando ventas a tu tienda.",
  },
];

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

export default function App() {
  const [copiado, setCopiado] = useState(false);
  const [paisIdx, setPaisIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPaisIdx((i) => (i + 1) % paises.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText("info@papurro.com");
    } catch {
      /* si el navegador no deja, el mail está igual a la vista */
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  };

  const pais = paises[paisIdx]!;

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* 1. Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="papurro, inicio">
            <Logo className="h-11 w-auto" placeholderClassName="text-xl" />
          </a>
          <a href={MAILTO} className="btn-press btn-rainbow px-5 py-2.5 text-base">
            escribime →
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-10">
        {/* 2. Hero */}
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
                Automatización, implementación IA y atención al cliente. No soy una
                agencia. Soy Papurro.
              </p>

              <a
                href={MAILTO_LONG}
                className="btn-press btn-ink mt-7 px-6 py-4 text-lg sm:text-xl"
              >
                organicemos una call →
              </a>
            </div>

            <div className="mx-auto w-[15rem] sm:w-[21rem]">
              <PMark className="mascot-idle h-auto w-full drop-shadow-[0_30px_45px_rgba(10,17,40,0.25)]" />
            </div>

          </div>
        </section>

        {/* 3. Servicios */}
        <section className="card p-5 sm:p-9" aria-labelledby="servicios-title">
          <h2 id="servicios-title" className="text-3xl sm:text-5xl">
            ¿qué hacés, <span className="marker">papurro</span>?
          </h2>
          <Squiggle className="mt-3" />

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {servicios.map(({ titulo, texto, Icon, tint }) => (
              <li
                key={titulo}
                className="card card-hover border border-hairline p-5"
              >
                <span className="chip h-14 w-14" style={{ background: tint }}>
                  <Icon className="h-7 w-7 text-ink" />
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed sm:text-base">{texto}</p>
              </li>
            ))}
          </ul>

          <p className="mt-7 rounded-3xl bg-[color-mix(in_oklab,var(--grad-purple)_8%,white)] px-5 py-4 text-sm font-semibold sm:text-base">
            ✨ Todo pensado para que tu Shopify funcione mejor, venda más y te dé tu vida
            de vuelta.
          </p>
        </section>

        {/* 4. Quién es */}
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
              Es <span className="marker font-extrabold">una persona</span>. Una sola. Con
              una computadora y una paciencia rara para los detalles.
            </p>
            <p>
              Trabajo con pocas tiendas a la vez, porque prefiero hacer bien tres cosas que
              hacer mal treinta.
            </p>
            <p>
              Si me escribís, te contesto yo. Si algo no lo sé hacer, te lo digo. Y si no
              te sirvo, te lo digo también.
            </p>
          </div>

          <a href={MAILTO} className="btn-press btn-rainbow mt-7 px-6 py-3 text-base">
            escribime →
          </a>
        </section>

        {/* 5. Precios */}
        <section className="card p-5 sm:p-9" aria-labelledby="precio-title">
          <h2 id="precio-title" className="text-3xl sm:text-5xl">
            ¿cuánto <span className="marker">sale</span>?
          </h2>
          <Squiggle className="mt-3" />

          <p className="mt-6 text-sm leading-relaxed sm:text-base">
            Cada tienda es un lío distinto, así que no vendo planes de $X por mes con
            estrellitas y letra chica.
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

        {/* 6. Cómo laburamos */}
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

        {/* 7. CTA final */}
        <section
          className="panel wash px-5 py-12 text-center sm:px-10 sm:py-16"
          aria-labelledby="cta-title"
        >
          <h2 id="cta-title" className="text-4xl sm:text-6xl">
            ¿arrancamos<span className="marker">?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base font-semibold text-ink sm:text-lg">
            Escribime a info@papurro.com y contame qué te está haciendo perder tiempo.
          </p>

          <a
            href={MAILTO_LONG}
            className="btn-press btn-ink mt-8 w-full px-6 py-5 text-xl sm:w-auto sm:text-3xl"
          >
            <DoodleMail className="h-7 w-7" />
            info@papurro.com
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
      </main>

      {/* 8. Footer */}
      <footer className="mt-6 bg-ink px-4 py-10 text-paper sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="h-9 w-auto shrink-0" placeholderClassName="text-2xl" />
          <p className="text-xs font-medium text-paper/70 sm:text-sm">
            Shopify, automatización e IA para tiendas uruguayas ·{" "}

            <a href={MAILTO} className="underline underline-offset-4">
              info@papurro.com
            </a>{" "}
            · Hecho en Uruguay 🧉 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
