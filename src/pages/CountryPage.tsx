import { PMark } from "@/components/Logo";
import { DoodleChat, DoodleGear, DoodleSpark, DoodleSpeed, Squiggle } from "@/components/Doodles";
import { GlFondo } from "@/components/GlFondo";
import { Page } from "@/components/Layout";
import {
  Breadcrumbs,
  CtaFinal,
  Diagnostico,
  GrillaPaises,
  Preguntas,
  ResumenRapido,
} from "@/components/sections";
import type { PaisContenido } from "@/content/countries";
import { DIAGNOSTICO, DIAGNOSTICO_EN, SERVICIOS, SERVICIOS_EN, mailtoPais } from "@/site";

const ICONOS = {
  automatizacion: DoodleGear,
  ia: DoodleSpark,
  atencion: DoodleChat,
  optimizacion: DoodleSpeed,
} as const;

const TXT = {
  es: {
    pill: (nombre: string, bandera: string) => `Tiendas de e-commerce en ${nombre} ${bandera}`,
    subtitulo: (nombre: string) =>
      `Automatización, IA aplicada, atención al cliente y optimización para tiendas de e-commerce en ${nombre}. Una persona, no una agencia.`,
    ctaHero: (min: number) => `diagnóstico gratis de ${min} min →`,
    sinCompromiso: "Sin compromiso. Contesto yo, no un bot.",
    altMascota: (nombre: string) => `Papurro, automatización de e-commerce para ${nombre}`,
    resumenTitulo: (nombre: string) => (
      <>
        e-commerce en {nombre.toLowerCase()}: <span className="marker">qué hago</span>
      </>
    ),
    contextoTitulo: (nombre: string) => (
      <>
        cómo es vender en <span className="marker">{nombre.toLowerCase()}</span>
      </>
    ),
    ejemplosTitulo: (
      <>
        qué se puede <span className="marker">automatizar</span>
      </>
    ),
    ejemplosCierre:
      "Ninguna de estas es una lista cerrada: si tu quilombo es otro, contámelo y te digo si lo puedo resolver o no.",
    serviciosTitulo: (
      <>
        los <span className="marker">cuatro</span> frentes
      </>
    ),
    preguntasTitulo: "preguntas frecuentes de",
  },
  en: {
    pill: (nombre: string, bandera: string) => `E-commerce stores in ${nombre} ${bandera}`,
    subtitulo: (nombre: string) =>
      `Automation, applied AI, customer support and optimization for e-commerce stores in ${nombre}. One person, not an agency.`,
    ctaHero: (min: number) => `free ${min}-min diagnostic →`,
    sinCompromiso: "No strings attached. I reply myself, not a bot.",
    altMascota: (nombre: string) => `Papurro, e-commerce automation for ${nombre}`,
    resumenTitulo: (nombre: string) => (
      <>
        e-commerce in {nombre.toLowerCase()}: <span className="marker">what I do</span>
      </>
    ),
    contextoTitulo: (nombre: string) => (
      <>
        what selling in <span className="marker">{nombre.toLowerCase()}</span> looks like
      </>
    ),
    ejemplosTitulo: (
      <>
        what can be <span className="marker">automated</span>
      </>
    ),
    ejemplosCierre:
      "This isn't a closed list: tell me what's actually slowing you down and I'll tell you if I can fix it.",
    serviciosTitulo: (
      <>
        the <span className="marker">four</span> fronts
      </>
    ),
    preguntasTitulo: "frequently asked questions about",
  },
} as const;

export default function CountryPage({ pais }: { pais: PaisContenido }) {
  const mailto = mailtoPais(pais.nombre, pais.idioma);
  const t = TXT[pais.idioma];
  const diag = pais.idioma === "en" ? DIAGNOSTICO_EN : DIAGNOSTICO;
  const servicios = pais.idioma === "en" ? SERVICIOS_EN : SERVICIOS;

  return (
    <Page activeSlug={pais.slug} ctaHref="#diagnostico" pais={pais.nombre} idioma={pais.idioma}>
      {/* Hero */}
      <section
        className="panel wash relative px-5 py-10 sm:px-10 sm:py-16"
        aria-labelledby="hero-title"
      >
        <GlFondo preset="hero" />

        <div className="relative">
          <Breadcrumbs
            idioma={pais.idioma}
            items={[
              { name: "Papurro", href: "/" },
              { name: pais.nombre, href: `/${pais.slug}/` },
            ]}
          />
        </div>

        <div className="relative mt-6 grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="pill px-3 py-1.5 text-xs sm:text-sm">
              {t.pill(pais.nombre, pais.bandera)}
            </p>

            <h1
              id="hero-title"
              className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl md:text-6xl"
            >
              {pais.h1} <span className="marker">{pais.h1Marker}</span>.
            </h1>

            <p className="mt-5 max-w-lg text-base font-semibold sm:text-lg">
              {t.subtitulo(pais.nombre)}
            </p>

            <a href="#diagnostico" className="btn-press btn-ink mt-7 px-6 py-4 text-lg sm:text-xl">
              {t.ctaHero(diag.minutos)}
            </a>

            <p className="mt-3 text-xs font-semibold text-ink-soft">{t.sinCompromiso}</p>
          </div>

          <div className="mx-auto w-[12rem] sm:w-[17rem]">
            <PMark
              className="mascot-idle h-auto w-full drop-shadow-[0_30px_45px_rgba(10,17,40,0.25)]"
              alt={t.altMascota(pais.nombre)}
              priority
            />
          </div>
        </div>
      </section>

      {/* Resumen citable + intro */}
      <section className="card p-5 sm:p-9" aria-labelledby="resumen-title">
        <h2 id="resumen-title" className="text-2xl sm:text-3xl">
          {t.resumenTitulo(pais.nombre)}
        </h2>
        <div className="mt-5">
          <ResumenRapido>{pais.resumen}</ResumenRapido>
        </div>
        <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed sm:text-base">
          {pais.intro.map((texto) => (
            <p key={texto.slice(0, 24)}>{texto}</p>
          ))}
        </div>
      </section>

      {/* Contexto local */}
      <section className="card p-5 sm:p-9" aria-labelledby="contexto-title">
        <h2 id="contexto-title" className="text-3xl sm:text-5xl">
          {t.contextoTitulo(pais.nombre)}
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
          {t.ejemplosTitulo}
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

        <p className="mt-6 text-sm leading-relaxed sm:text-base">{t.ejemplosCierre}</p>
      </section>

      {/* Servicios */}
      <section className="card p-5 sm:p-9" aria-labelledby="servicios-title">
        <h2 id="servicios-title" className="text-3xl sm:text-5xl">
          {t.serviciosTitulo}
        </h2>
        <Squiggle className="mt-3" />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {servicios.map(({ id, tituloLargo, texto }) => {
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

      <Diagnostico pais={pais.nombre} idioma={pais.idioma} />

      <Preguntas faqs={pais.faqs} titulo={t.preguntasTitulo} resalte={pais.nombre.toLowerCase()} />

      <GrillaPaises excluir={pais.slug} idioma={pais.idioma} />

      <CtaFinal href={mailto} pais={pais.nombre} idioma={pais.idioma} />
    </Page>
  );
}
