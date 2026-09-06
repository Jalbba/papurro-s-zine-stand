import { useState } from "react";
import { DoodleMail, DoodleWhats } from "@/components/Doodles";
import { EMAIL, WHATSAPP_URL, mailtoConsulta, whatsappPais, type Idioma } from "@/site";

/** Campos del formulario, vacíos. */
const VACIO = { nombre: "", tienda: "", mensaje: "" };

type Campo = keyof typeof VACIO;

const CAMPO_CLASS =
  "mt-2 w-full rounded-2xl border border-hairline bg-white px-4 py-3 text-base text-ink " +
  "shadow-[0_1px_0_var(--hairline)] outline-none transition-shadow placeholder:text-ink-soft/60 " +
  "focus:border-transparent focus:ring-2 focus:ring-[color-mix(in_oklab,var(--grad-purple)_55%,white)]";

const FORM_TXT = {
  es: {
    srTitle: "Pedir el diagnóstico de 20 minutos",
    nombreLabel: "cómo te llamás",
    nombrePlaceholder: "Tu nombre",
    tiendaLabel: "tu tienda",
    tiendaPlaceholder: "mitienda.com",
    mensajeLabel: "¿qué te está haciendo perder tiempo?",
    mensajePlaceholder:
      "Copio los pedidos a mano a una planilla, aviso los despachos uno por uno, y las consultas me llegan por tres lados distintos…",
    submit: "pedir el diagnóstico",
    whatsapp: "o mandame un whatsapp",
    disclaimer:
      "El botón abre tu programa de correo con el mail ya escrito: revisalo y dale enviar. No hay " +
      "servidor atrás, así que tus datos no se guardan en ningún lado.",
    enviadoPre:
      "¿No se abrió nada? Puede ser que no tengas un cliente de correo configurado. Escribime directo a",
    enviadoPost: "por WhatsApp",
  },
  en: {
    srTitle: "Request the 20-minute diagnostic",
    nombreLabel: "your name",
    nombrePlaceholder: "Your name",
    tiendaLabel: "your store",
    tiendaPlaceholder: "mystore.com",
    mensajeLabel: "what's wasting your time?",
    mensajePlaceholder:
      "I copy orders by hand into a spreadsheet, I notify shipments one by one, and inquiries come in from three different places…",
    submit: "request the diagnostic",
    whatsapp: "or message me on WhatsApp",
    disclaimer:
      "The button opens your email app with the message already written: check it and hit send. There's no " +
      "server behind this, so your data isn't stored anywhere.",
    enviadoPre:
      "Nothing opened? You might not have an email client set up. Write to me directly at",
    enviadoPost: "on WhatsApp",
  },
} as const;

/**
 * Formulario sin backend: junta los datos y arma un `mailto:` ya escrito, que
 * abre el cliente de correo del visitante. No hay servidor ni servicio externo,
 * así que anda tal cual sobre GitHub Pages.
 *
 * Contrapartida: si la persona no tiene cliente de correo configurado no pasa
 * nada visible, y por eso después de enviar siempre se muestran los canales
 * directos (mail y WhatsApp) como salida alternativa.
 */
export function Formulario({
  pais,
  idioma = "es",
}: {
  pais?: string | undefined;
  idioma?: Idioma | undefined;
}) {
  const [datos, setDatos] = useState(VACIO);
  const [enviado, setEnviado] = useState(false);
  const t = FORM_TXT[idioma];

  const wa = pais ? whatsappPais(pais, idioma) : WHATSAPP_URL;

  const set = (campo: Campo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoConsulta({ ...datos, pais, idioma });
    setEnviado(true);
  };

  return (
    <form onSubmit={enviar} className="mt-7 grid gap-5" aria-labelledby="form-title">
      <h3 id="form-title" className="sr-only">
        {t.srTitle}
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-sm lowercase text-ink">{t.nombreLabel}</span>
          <input
            type="text"
            name="nombre"
            required
            maxLength={80}
            autoComplete="name"
            value={datos.nombre}
            onChange={set("nombre")}
            placeholder={t.nombrePlaceholder}
            className={CAMPO_CLASS}
          />
        </label>

        <label className="block">
          <span className="font-display text-sm lowercase text-ink">{t.tiendaLabel}</span>
          <input
            type="text"
            name="tienda"
            required
            maxLength={120}
            autoComplete="url"
            value={datos.tienda}
            onChange={set("tienda")}
            placeholder={t.tiendaPlaceholder}
            className={CAMPO_CLASS}
          />
        </label>
      </div>

      <label className="block">
        <span className="font-display text-sm lowercase text-ink">{t.mensajeLabel}</span>
        <textarea
          name="mensaje"
          required
          rows={4}
          maxLength={1200}
          value={datos.mensaje}
          onChange={set("mensaje")}
          placeholder={t.mensajePlaceholder}
          className={`${CAMPO_CLASS} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-press btn-ink px-6 py-4 text-lg">
          <DoodleMail className="h-6 w-6" />
          {t.submit}
        </button>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press bg-paper px-6 py-4 text-lg shadow-soft ring-1 ring-hairline"
        >
          <DoodleWhats className="h-6 w-6" />
          {t.whatsapp}
        </a>
      </div>

      <p className="text-xs leading-relaxed text-ink-soft">{t.disclaimer}</p>

      {enviado && (
        <p
          role="status"
          className="rounded-3xl bg-[color-mix(in_oklab,var(--grad-teal)_12%,white)] px-5 py-4 text-sm font-semibold leading-relaxed text-ink"
        >
          {t.enviadoPre}{" "}
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
            {EMAIL}
          </a>{" "}
          {idioma === "en" ? "or" : "o"}{" "}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {t.enviadoPost}
          </a>
          .
        </p>
      )}
    </form>
  );
}
