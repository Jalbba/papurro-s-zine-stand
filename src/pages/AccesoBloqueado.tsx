import { useEffect, useState } from "react";
import { Page } from "@/components/Layout";
import { MAILTO, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/site";

/** Etiquetas legibles para los parámetros más comunes que Cloudflare Gateway
 *  agrega a la URL de redirección de la página de bloqueo. No dependemos de
 *  saber la lista exacta: cualquier parámetro no reconocido igual se muestra,
 *  con su propio nombre como etiqueta. */
const PARAM_LABELS: Record<string, string> = {
  user_email: "cuenta",
  host: "sitio",
  sni: "sitio",
  url: "url",
  action: "acción",
  reason: "motivo",
  rule_name: "regla",
  ruleset_name: "conjunto de reglas",
  category: "categoría",
  application: "aplicación",
};

function readBlockParams(): [string, string][] {
  if (typeof window === "undefined") return [];
  const params = new URLSearchParams(window.location.search);
  return [...params.entries()].filter(([, value]) => value.trim().length > 0);
}

/** Página de bloqueo de Cloudflare Account Gateway: se configura como el
 *  "redirect URI" del block page en Zero Trust, para que en vez del cartel
 *  genérico de Cloudflare el usuario vea algo con la marca de Papurro. Los
 *  detalles técnicos (si Cloudflare los manda por query string) se leen recién
 *  en el cliente porque esta página también se prerenderiza a HTML estático. */
export default function AccesoBloqueado() {
  const [params, setParams] = useState<[string, string][]>([]);

  useEffect(() => {
    setParams(readBlockParams());
  }, []);

  return (
    <Page>
      <section className="panel wash px-5 py-14 text-center sm:px-10 sm:py-20">
        <p className="pill px-3 py-1.5 text-xs sm:text-sm">acceso bloqueado</p>
        <h1 className="mt-5 text-4xl sm:text-6xl">
          esta solicitud <span className="marker">fue bloqueada</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base font-semibold text-ink sm:text-lg">
          La política de seguridad de Papurro (Cloudflare Gateway) no dejó pasar esta conexión.
        </p>

        {params.length > 0 && (
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-hairline bg-paper/70 p-5 text-left text-sm">
            <p className="font-display text-xs tracking-wide text-ink-soft uppercase">detalle</p>
            <dl className="mt-3 space-y-2">
              {params.map(([key, value]) => (
                <div key={key} className="flex items-baseline justify-between gap-4">
                  <dt className="shrink-0 text-ink-soft">{PARAM_LABELS[key] ?? key}</dt>
                  <dd className="truncate text-right font-semibold" title={value}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className="mx-auto mt-8 max-w-md text-sm text-ink-soft">
          Si te parece que esto es un error, escribime y lo reviso.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href={MAILTO} className="btn-press btn-ink px-6 py-4 text-lg">
            escribime →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press btn-rainbow px-6 py-4 text-lg"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>
      </section>
    </Page>
  );
}
