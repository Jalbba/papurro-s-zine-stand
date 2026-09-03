/**
 * Capa de SEO/GEO: un objeto `HeadData` por ruta y un renderer a HTML plano.
 *
 * El HTML lo escribe el script de prerender (scripts/prerender.mjs) dentro de
 * index.html, así que buscadores y crawlers de IA (que en general NO ejecutan
 * JavaScript) reciben título, descripción, canonical, hreflang y JSON-LD ya
 * servidos en el HTML inicial.
 */

import { EMAIL, ONE_LINER, PAISES, RESPONSE_TIME, SITE_NAME, SITE_URL } from "./site";

export type Faq = { q: string; a: string };

export type HeadData = {
  /** Ruta canónica, siempre con barra final salvo la home ("/"). */
  path: string;
  title: string;
  description: string;
  /** Atributo lang del <html>. */
  lang: string;
  /** og:locale, formato es_UY. */
  ogLocale: string;
  /** Si la página entra en el cluster de hreflang por país. */
  cluster?: boolean;
  robots?: string;
  jsonLd?: Record<string, unknown>[];
};

export const OG_IMAGE = `${SITE_URL}/og.png`;
const OG_IMAGE_ALT = "Papurro: automatización, IA y atención al cliente para tiendas Shopify";

export function absUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------------- Bloques JSON-LD reutilizables ---------------- */

const ORG_ID = `${SITE_URL}/#papurro`;
const PERSON_ID = `${SITE_URL}/#persona`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** El negocio: una persona que atiende Uruguay, Argentina y Chile, en remoto. */
export function professionalServiceLd(): Record<string, unknown> {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Papurro · Shopify",
    url: `${SITE_URL}/`,
    email: EMAIL,
    description: ONE_LINER,
    image: OG_IMAGE,
    logo: `${SITE_URL}/favicon.png`,
    slogan: "Hagamos que tu Shopify labure solo",
    knowsLanguage: ["es", "en"],
    founder: { "@id": PERSON_ID },
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
    address: { "@type": "PostalAddress", addressCountry: "UY" },
    areaServed: PAISES.map((p) => ({ "@type": "Country", name: p.nombre, identifier: p.iso })),
    availableLanguage: [
      { "@type": "Language", name: "Español", alternateName: "es" },
      { "@type": "Language", name: "Inglés", alternateName: "en" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["es", "en"],
      areaServed: PAISES.map((p) => p.iso),
    },
    knowsAbout: [
      "Shopify",
      "Automatización de e-commerce",
      "Inteligencia artificial aplicada",
      "Atención al cliente",
      "Optimización de tiendas online",
      "Integraciones de e-commerce",
    ],
    makesOffer: [
      "Automatización de tareas de la tienda",
      "IA aplicada a la operación",
      "Puesta a punto de atención al cliente",
      "Optimización de velocidad, checkout y catálogo",
    ].map((n) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: n, provider: { "@id": ORG_ID } },
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Presupuesto por proyecto, sin planes mensuales ni permanencia.",
      },
    })),
  };
}

export function personLd(): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Papurro",
    description:
      "La persona detrás de Papurro. Trabaja con pocas tiendas Shopify a la vez y contesta " +
      `los mails en ${RESPONSE_TIME}.`,
    email: EMAIL,
    url: `${SITE_URL}/`,
    worksFor: { "@id": ORG_ID },
    knowsLanguage: ["es", "en"],
  };
}

export function websiteLd(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "es",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageLd(head: HeadData, extra: Record<string, unknown> = {}) {
  return {
    "@type": "WebPage",
    "@id": `${absUrl(head.path)}#webpage`,
    url: absUrl(head.path),
    name: head.title,
    description: head.description,
    inLanguage: head.lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: OG_IMAGE,
    ...extra,
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

/** El FAQPage debe reflejar preguntas que están visibles en la página. */
export function faqLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  areaIso: string[];
  areaNames: string[];
  path: string;
}) {
  return {
    "@type": "Service",
    "@id": `${absUrl(opts.path)}#servicio`,
    name: opts.name,
    description: opts.description,
    serviceType: "Automatización y optimización de tiendas Shopify",
    provider: { "@id": ORG_ID },
    areaServed: opts.areaNames.map((name, i) => ({
      "@type": "Country",
      name,
      identifier: opts.areaIso[i],
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absUrl(opts.path),
      availableLanguage: ["es", "en"],
    },
  };
}

/* ---------------- Render del <head> ---------------- */

/** Cluster hreflang: home genérica + una página por país. */
const CLUSTER = [
  { href: `${SITE_URL}/`, hreflang: "es" },
  ...PAISES.map((p) => ({ href: `${SITE_URL}/${p.slug}/`, hreflang: p.hreflang })),
  { href: `${SITE_URL}/`, hreflang: "x-default" },
];

export function renderHead(head: HeadData, buildDate: string) {
  const url = absUrl(head.path);
  const title = escapeHtml(head.title);
  const description = escapeHtml(head.description);
  // dateModified sólo tiene sentido en los tipos que derivan de CreativeWork.
  const conFecha = new Set(["WebPage", "WebSite", "FAQPage"]);
  const graph = [professionalServiceLd(), personLd(), websiteLd(), ...(head.jsonLd ?? [])].map(
    (node) => (conFecha.has(String(node["@type"])) ? { ...node, dateModified: buildDate } : node),
  );

  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${head.robots ?? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" />`,
    `<meta name="author" content="Papurro" />`,
    `<meta name="theme-color" content="#fe3d7c" />`,
    `<meta name="format-detection" content="telephone=no" />`,
    // Señales de geografía y idioma para buscadores y para los ads.
    `<meta name="language" content="${head.lang}" />`,
    `<meta name="geo.region" content="UY" />`,
    `<meta name="geo.placename" content="Montevideo" />`,
    // Open Graph
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Papurro" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${head.ogLocale}" />`,
    ...PAISES.filter((p) => `es_${p.iso}` !== head.ogLocale).map(
      (p) => `<meta property="og:locale:alternate" content="es_${p.iso}" />`,
    ),
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}" />`,
    // Twitter / X
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}" />`,
  ];

  if (head.cluster !== false) {
    for (const alt of CLUSTER) {
      tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
    }
  }

  tags.push(`<script type="application/ld+json">${jsonLd}</script>`);

  return tags.join("\n    ");
}
