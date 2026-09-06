/**
 * Datos duros del negocio. Fuente única de verdad para copy, JSON-LD,
 * sitemap y llms.txt: si algo cambia acá, cambia en todos lados.
 */

export const SITE_URL = "https://papurro.com";
export const SITE_NAME = "Papurro";
export const EMAIL = "info@papurro.com";
export const MAILTO = `mailto:${EMAIL}`;

export const MAILTO_LONG = `mailto:${EMAIL}?subject=Hola%20Papurro&body=Hola!%20Tengo%20una%20tienda%20de%20e-commerce%20y...`;

/** Mail con asunto por país, para saber de dónde llegó la consulta. */
export function mailtoPais(pais: string, idioma: Idioma = "es") {
  if (idioma === "en") {
    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Hi Papurro (${pais})`,
    )}&body=${encodeURIComponent(
      `Hi! I run an e-commerce store in ${pais} and need help with...`,
    )}`;
  }
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Hola Papurro (${pais})`,
  )}&body=${encodeURIComponent(
    `Hola! Tengo una tienda de e-commerce en ${pais} y necesito ayuda con...`,
  )}`;
}

/** Frase corta y citable: lo que un buscador o un LLM va a extraer. */
export const ONE_LINER =
  "Papurro es una persona —no una agencia— que ayuda a tiendas de e-commerce de Uruguay, " +
  "Argentina y Estados Unidos con automatización, IA aplicada, atención al cliente y optimización.";

export const RESPONSE_TIME = "24 a 48 horas hábiles";
export const RESPONSE_TIME_EN = "24 to 48 business hours";

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
  "Hola Papurro! Tengo una tienda de e-commerce y quiero el diagnóstico de 20 minutos.",
);

export const WHATSAPP_URL_EN = waLink(
  "Hi Papurro! I run an e-commerce store and I'd like the 20-minute diagnostic.",
);

/** WhatsApp con el país ya escrito, para saber de dónde llegó la consulta. */
export function whatsappPais(pais: string, idioma: Idioma = "es") {
  if (idioma === "en") {
    return waLink(
      `Hi Papurro! I run an e-commerce store in ${pais} and I'd like the 20-minute diagnostic.`,
    );
  }
  return waLink(
    `Hola Papurro! Tengo una tienda de e-commerce en ${pais} y quiero el diagnóstico de 20 minutos.`,
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

export const DIAGNOSTICO_EN = {
  minutos: 20,
  nombre: "20-minute diagnostic",
  resumen:
    "A free, no-strings-attached 20-minute call: you tell me how things work today and I tell you " +
    "what I'd automate first. Whether or not it turns into a project, you keep the list.",
} as const;

/* ---------------- Formulario ---------------- */

export type Consulta = {
  nombre: string;
  tienda: string;
  mensaje: string;
  /** País de la landing desde la que se envía, si es una página por país. */
  pais?: string | undefined;
  idioma?: Idioma | undefined;
};

/** El formulario no tiene backend: arma un mailto con todo ya escrito y deja
 *  que el cliente de correo del visitante lo mande. */
export function mailtoConsulta({ nombre, tienda, mensaje, pais, idioma = "es" }: Consulta) {
  if (idioma === "en") {
    const quien = nombre.trim() || "an e-commerce store";
    const asunto = pais ? `20-min diagnostic (${pais}) — ${quien}` : `20-min diagnostic — ${quien}`;

    const cuerpo = [
      "Hi Papurro!",
      "",
      `Name: ${nombre.trim()}`,
      `Store: ${tienda.trim()}`,
      pais ? `Country: ${pais}` : null,
      "",
      "What's wasting my time:",
      mensaje.trim(),
      "",
      "—",
      "Sent from the form on papurro.com",
    ]
      .filter((linea) => linea !== null)
      .join("\n");

    return `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  }

  const quien = nombre.trim() || "una tienda de e-commerce";
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

/** Idioma en el que se muestra la página de un país. */
export type Idioma = "es" | "en";

/** Países atendidos. El orden manda en menús, sitemap y JSON-LD. */
export const PAISES = [
  {
    slug: "uruguay",
    nombre: "Uruguay",
    nombreEs: "Uruguay",
    gentilicio: "uruguayas",
    bandera: "🇺🇾",
    iso: "UY",
    hreflang: "es-UY",
    ogLocale: "es_UY",
    moneda: "UYU",
    idioma: "es",
  },
  {
    slug: "argentina",
    nombre: "Argentina",
    nombreEs: "Argentina",
    gentilicio: "argentinas",
    bandera: "🇦🇷",
    iso: "AR",
    hreflang: "es-AR",
    ogLocale: "es_AR",
    moneda: "ARS",
    idioma: "es",
  },
  {
    slug: "usa",
    nombre: "United States",
    /** Cómo se muestra este país cuando la UI que lo rodea está en castellano. */
    nombreEs: "Estados Unidos",
    gentilicio: "American",
    bandera: "🇺🇸",
    iso: "US",
    hreflang: "en-US",
    ogLocale: "en_US",
    moneda: "USD",
    idioma: "en",
  },
] as const;

export type Pais = (typeof PAISES)[number];

/** Nombre de un país tal como se muestra en una UI en el idioma dado
 *  (la navegación, el pie de página, la grilla de países). */
export function nombrePais(p: Pais, idioma: Idioma) {
  return idioma === "es" ? p.nombreEs : p.nombre;
}

export type Servicio = {
  id: "automatizacion" | "ia" | "atencion" | "optimizacion";
  titulo: string;
  tituloLargo: string;
  texto: string;
};

export const SERVICIOS: readonly Servicio[] = [
  {
    id: "automatizacion",
    titulo: "automatización",
    tituloLargo: "Automatización para tiendas de e-commerce",
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

/** Misma info que SERVICIOS, en inglés, para las páginas cuyo idioma es "en". */
export const SERVICIOS_EN: readonly Servicio[] = [
  {
    id: "automatizacion",
    titulo: "automation",
    tituloLargo: "Automation for e-commerce stores",
    texto:
      "I connect your store to the tools you already use so repetitive tasks — loading orders, updating stock, notifying shipments, generating reports — start happening on their own.",
  },
  {
    id: "ia",
    titulo: "ideas that work",
    tituloLargo: "AI applied to your store's operations",
    texto:
      "I apply AI to concrete problems in your operation: classifying orders, drafting replies, summarizing information, sorting loose data. No demos nobody ends up using.",
  },
  {
    id: "atencion",
    titulo: "customer support",
    tituloLargo: "Customer support, organized",
    texto:
      "I organize your support channels — email, WhatsApp, social — so inquiries get answered faster and no ticket falls through the cracks.",
  },
  {
    id: "optimizacion",
    titulo: "optimization",
    tituloLargo: "Store optimization",
    texto:
      "I review load speed, checkout, catalog and integrations to find and fix what's costing your store sales.",
  },
];
