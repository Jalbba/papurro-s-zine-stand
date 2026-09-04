/**
 * Datos duros del negocio. Fuente única de verdad para copy, JSON-LD,
 * sitemap y llms.txt: si algo cambia acá, cambia en todos lados.
 */

export const SITE_URL = "https://papurro.com";
export const SITE_NAME = "Papurro";
export const EMAIL = "info@papurro.com";
export const MAILTO = `mailto:${EMAIL}`;

export const MAILTO_LONG = `mailto:${EMAIL}?subject=Hola%20Papurro&body=Hola!%20Tengo%20una%20tienda%20Shopify%20y...`;

/** Mail con asunto por país, para saber de dónde llegó la consulta. */
export function mailtoPais(pais: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Hola Papurro (${pais})`,
  )}&body=${encodeURIComponent(
    `Hola! Tengo una tienda Shopify en ${pais} y necesito ayuda con...`,
  )}`;
}

/** Frase corta y citable: lo que un buscador o un LLM va a extraer. */
export const ONE_LINER =
  "Papurro es una persona —no una agencia— que ayuda a tiendas Shopify de Uruguay, " +
  "Argentina y Chile con automatización, IA aplicada, atención al cliente y optimización.";

export const RESPONSE_TIME = "24 a 48 horas hábiles";

/* ---------------- WhatsApp ---------------- */

/** Número real, en tres formatos: para mostrar, para wa.me (sólo dígitos)
 *  y en E.164 para el JSON-LD. */
export const WHATSAPP_DISPLAY = "+598 92 061 005";
export const WHATSAPP_DIGITS = "59892061005";
export const WHATSAPP_E164 = "+59892061005";

function waLink(texto: string) {
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(texto)}`;
}

export const WHATSAPP_URL = waLink(
  "Hola Papurro! Tengo una tienda Shopify y quiero el diagnóstico de 20 minutos.",
);

/** WhatsApp con el país ya escrito, para saber de dónde llegó la consulta. */
export function whatsappPais(pais: string) {
  return waLink(
    `Hola Papurro! Tengo una tienda Shopify en ${pais} y quiero el diagnóstico de 20 minutos.`,
  );
}

/* ---------------- Oferta de entrada ---------------- */

/** El diagnóstico es la puerta de entrada: corto, gratis y sin compromiso.
 *  Si cambia acá, cambia en el copy, en el JSON-LD y en llms.txt. */
export const DIAGNOSTICO = {
  minutos: 20,
  nombre: "Diagnóstico de 20 minutos",
  resumen:
    "Una llamada de 20 minutos, gratis y sin compromiso: me contás cómo laburás hoy y te digo " +
    "qué automatizaría primero. Salga o no un proyecto de ahí, te quedás con la lista.",
} as const;

/* ---------------- Formulario ---------------- */

export type Consulta = {
  nombre: string;
  tienda: string;
  mensaje: string;
  /** País de la landing desde la que se envía, si es una página por país. */
  pais?: string | undefined;
};

/** El formulario no tiene backend: arma un mailto con todo ya escrito y deja
 *  que el cliente de correo del visitante lo mande. */
export function mailtoConsulta({ nombre, tienda, mensaje, pais }: Consulta) {
  const quien = nombre.trim() || "una tienda Shopify";
  const asunto = pais
    ? `Diagnóstico de 20 min (${pais}) — ${quien}`
    : `Diagnóstico de 20 min — ${quien}`;

  const cuerpo = [
    "Hola Papurro!",
    "",
    `Nombre: ${nombre.trim()}`,
    `Tienda: ${tienda.trim()}`,
    pais ? `País: ${pais}` : null,
    "",
    "Qué me está haciendo perder tiempo:",
    mensaje.trim(),
    "",
    "—",
    "Enviado desde el formulario de papurro.com",
  ]
    .filter((linea) => linea !== null)
    .join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}

export const PRICING_MODEL =
  "Presupuesto por proyecto, sin planes mensuales ni permanencia: mirás tu caso, se cotiza y se hace.";

/** Países atendidos. El orden manda en menús, sitemap y JSON-LD. */
export const PAISES = [
  {
    slug: "uruguay",
    nombre: "Uruguay",
    gentilicio: "uruguayas",
    bandera: "🇺🇾",
    iso: "UY",
    hreflang: "es-UY",
    moneda: "UYU",
  },
  {
    slug: "argentina",
    nombre: "Argentina",
    gentilicio: "argentinas",
    bandera: "🇦🇷",
    iso: "AR",
    hreflang: "es-AR",
    moneda: "ARS",
  },
  {
    slug: "chile",
    nombre: "Chile",
    gentilicio: "chilenas",
    bandera: "🇨🇱",
    iso: "CL",
    hreflang: "es-CL",
    moneda: "CLP",
  },
] as const;

export type Pais = (typeof PAISES)[number];

export const SERVICIOS = [
  {
    id: "automatizacion",
    titulo: "automatización",
    tituloLargo: "Automatización para tiendas Shopify",
    texto:
      "Conecto tu tienda con las herramientas que ya usás para que las tareas repetitivas —cargar pedidos, actualizar stock, avisar despachos, generar reportes— pasen a hacerse solas.",
  },
  {
    id: "ia",
    titulo: "ideas que sirven",
    tituloLargo: "IA aplicada a la operación de tu tienda",
    texto:
      "Aplico IA a problemas concretos de tu operación: clasificar pedidos, redactar respuestas, resumir información, ordenar datos sueltos. Nada de demos que después nadie usa.",
  },
  {
    id: "atencion",
    titulo: "atención al cliente",
    tituloLargo: "Atención al cliente ordenada",
    texto:
      "Organizo tus canales de soporte —mail, WhatsApp, redes— para que las consultas se respondan más rápido y ningún ticket quede sin seguimiento.",
  },
  {
    id: "optimizacion",
    titulo: "optimización",
    tituloLargo: "Optimización de la tienda",
    texto:
      "Reviso velocidad de carga, checkout, catálogo e integraciones para detectar y corregir lo que le está costando ventas a tu tienda.",
  },
] as const;
