import { useState } from "react";
import { DoodleMail, DoodleWhats } from "@/components/Doodles";
import { EMAIL, WHATSAPP_URL, mailtoConsulta, whatsappPais } from "@/site";

/** Campos del formulario, vacíos. */
const VACIO = { nombre: "", tienda: "", mensaje: "" };

type Campo = keyof typeof VACIO;

const CAMPO_CLASS =
  "mt-2 w-full rounded-2xl border border-hairline bg-white px-4 py-3 text-base text-ink " +
  "shadow-[0_1px_0_var(--hairline)] outline-none transition-shadow placeholder:text-ink-soft/60 " +
  "focus:border-transparent focus:ring-2 focus:ring-[color-mix(in_oklab,var(--grad-purple)_55%,white)]";

/**
 * Formulario sin backend: junta los datos y arma un `mailto:` ya escrito, que
 * abre el cliente de correo del visitante. No hay servidor ni servicio externo,
 * así que anda tal cual sobre GitHub Pages.
 *
 * Contrapartida: si la persona no tiene cliente de correo configurado no pasa
 * nada visible, y por eso después de enviar siempre se muestran los canales
 * directos (mail y WhatsApp) como salida alternativa.
 */
export function Formulario({ pais }: { pais?: string | undefined }) {
  const [datos, setDatos] = useState(VACIO);
  const [enviado, setEnviado] = useState(false);

  const wa = pais ? whatsappPais(pais) : WHATSAPP_URL;

  const set = (campo: Campo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoConsulta({ ...datos, pais });
    setEnviado(true);
  };

  return (
    <form onSubmit={enviar} className="mt-7 grid gap-5" aria-labelledby="form-title">
      <h3 id="form-title" className="sr-only">
        Pedir el diagnóstico de 20 minutos
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-sm lowercase text-ink">cómo te llamás</span>
          <input
            type="text"
            name="nombre"
            required
            maxLength={80}
            autoComplete="name"
            value={datos.nombre}
            onChange={set("nombre")}
            placeholder="Tu nombre"
            className={CAMPO_CLASS}
          />
        </label>

        <label className="block">
          <span className="font-display text-sm lowercase text-ink">tu tienda</span>
          <input
            type="text"
            name="tienda"
            required
            maxLength={120}
            autoComplete="url"
            value={datos.tienda}
            onChange={set("tienda")}
            placeholder="mitienda.com"
            className={CAMPO_CLASS}
          />
        </label>
      </div>

      <label className="block">
        <span className="font-display text-sm lowercase text-ink">
          ¿qué te está haciendo perder tiempo?
        </span>
        <textarea
          name="mensaje"
          required
          rows={4}
          maxLength={1200}
          value={datos.mensaje}
          onChange={set("mensaje")}
          placeholder="Copio los pedidos a mano a una planilla, aviso los despachos uno por uno, y las consultas me llegan por tres lados distintos…"
          className={`${CAMPO_CLASS} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-press btn-ink px-6 py-4 text-lg">
          <DoodleMail className="h-6 w-6" />
          pedir el diagnóstico
        </button>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press bg-paper px-6 py-4 text-lg shadow-soft ring-1 ring-hairline"
        >
          <DoodleWhats className="h-6 w-6" />o mandame un whatsapp
        </a>
      </div>

      <p className="text-xs leading-relaxed text-ink-soft">
        El botón abre tu programa de correo con el mail ya escrito: revisalo y dale enviar. No hay
        servidor atrás, así que tus datos no se guardan en ningún lado.
      </p>

      {enviado && (
        <p
          role="status"
          className="rounded-3xl bg-[color-mix(in_oklab,var(--grad-teal)_12%,white)] px-5 py-4 text-sm font-semibold leading-relaxed text-ink"
        >
          ¿No se abrió nada? Puede ser que no tengas un cliente de correo configurado. Escribime
          directo a{" "}
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
            {EMAIL}
          </a>{" "}
          o{" "}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            por WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
