import { PMark } from "@/components/Logo";
import { DoodleChat, DoodleGear, DoodleSpark, DoodleSpeed, Squiggle } from "@/components/Doodles";
import { Page } from "@/components/Layout";
import {
  Breadcrumbs,
  CtaFinal,
  GrillaPaises,
  Preguntas,
  ResumenRapido,
} from "@/components/sections";
import type { PaisContenido } from "@/content/countries";
import { SERVICIOS, mailtoPais } from "@/site";

const ICONOS = {
  automatizacion: DoodleGear,
  ia: DoodleSpark,
  atencion: DoodleChat,
  optimizacion: DoodleSpeed,
} as const;

export default function CountryPage({ pais }: { pais: PaisContenido }) {
  const mailto = mailtoPais(pais.nombre);

  return (
    <Page activeSlug={pais.slug}>
      {/* Hero */}
      <section className="panel wash px-5 py-10 sm:px-10 sm:py-16" aria-labelledby="hero-title">
        <Breadcrumbs
          items={[
            { name: "Papurro", href: "/" },
            { name: pais.nombre, href: `/${pais.slug}/` },
          ]}
        />

        <div className="mt-6 grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="pill px-3 py-1.5 text-xs sm:text-sm">
              Tiendas Shopify en {pais.nombre} {pais.bandera}
            </p>

            <h1
              id="hero-title"
              className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl md:text-6xl"
            >
              {pais.h1} <span className="marker">{pais.h1Marker}</span>.
            </h1>

            <p className="mt-5 max-w-lg text-base font-semibold sm:text-lg">
              Automatización, IA aplicada, atención al cliente y optimización para tiendas Shopify{" "}
              {pais.gentilicio}. Una persona, no una agencia.
            </p>

            <a href={mailto} className="btn-press btn-ink mt-7 px-6 py-4 text-lg sm:text-xl">
              contame tu caso →
            </a>
          </div>

          <div className="mx-auto w-[12rem] sm:w-[17rem]">
            <PMark
              className="mascot-idle h-auto w-full drop-shadow-[0_30px_45px_rgba(10,17,40,0.25)]"
              alt={`Papurro, automatización de Shopify para ${pais.nombre}`}
              priority
            />
          </div>
        </div>
      </section>

      {/* Resumen citable + intro */}
      <section className="card p-5 sm:p-9" aria-labelledby="resumen-title">
        <h2 id="resumen-title" className="text-2xl sm:text-3xl">
          shopify en {pais.nombre.toLowerCase()}: <span className="marker">qué hago</span>
        </h2>
        <div className="mt-5">
          <ResumenRapido>{pais.resumen}</ResumenRapido>
        </div>
        <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed sm:text-base">
          {pais.intro.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
      </section>

      {/* Contexto local */}
      <section className="card p-5 sm:p-9" aria-labelledby="contexto-title">
        <h2 id="contexto-title" className="text-3xl sm:text-5xl">
          cómo es vender en <span className="marker">{pais.nombre.toLowerCase()}</span>
        </h2>
        <Squiggle className="mt-3" />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {pais.contexto.map((b) => (
            <li key={b.titulo} className="card card-hover border border-hairline p-5">
              <h3 className="text-xl sm:text-2xl">{b.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{b.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Ejemplos concretos */}
      <section className="card p-5 sm:p-9" aria-labelledby="ejemplos-title">
        <h2 id="ejemplos-title" className="text-3xl sm:text-5xl">
          qué se puede <span className="marker">automatizar</span>
        </h2>
        <Squiggle className="mt-3" />

        <ul className="mt-8 space-y-3">
          {pais.ejemplos.map((e) => (
            <li
              key={e}
              className="flex gap-3 rounded-3xl border border-hairline bg-[color-mix(in_oklab,var(--grad-yellow)_8%,white)] px-5 py-4 text-sm leading-relaxed sm:text-base"
            >
              <span aria-hidden="true" className="font-display text-ink">
                →
              </span>
              <span className="font-semibold text-ink">{e}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed sm:text-base">
          Ninguna de estas es una lista cerrada: si tu quilombo es otro, contámelo y te digo si lo
          puedo resolver o no.
        </p>
      </section>

      {/* Servicios */}
      <section className="card p-5 sm:p-9" aria-labelledby="servicios-title">
        <h2 id="servicios-title" className="text-3xl sm:text-5xl">
          los <span className="marker">cuatro</span> frentes
        </h2>
        <Squiggle className="mt-3" />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {SERVICIOS.map(({ id, tituloLargo, texto }) => {
            const Icon = ICONOS[id];
            return (
              <li key={id} className="card card-hover border border-hairline p-5">
                <Icon className="h-9 w-9 text-ink" />
                <h3 className="mt-4 text-lg normal-case sm:text-xl">{tituloLargo}</h3>
                <p className="mt-2 text-sm leading-relaxed sm:text-base">{texto}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <Preguntas
        faqs={pais.faqs}
        titulo="preguntas frecuentes de"
        resalte={pais.nombre.toLowerCase()}
      />

      <GrillaPaises excluir={pais.slug} />

      <CtaFinal href={mailto} />
    </Page>
  );
}
