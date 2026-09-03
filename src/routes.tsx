import type { ReactElement } from "react";
import Home from "@/pages/Home";
import CountryPage from "@/pages/CountryPage";
import Privacidad from "@/pages/Privacidad";
import NotFound from "@/pages/NotFound";
import { CONTENIDO_PAISES } from "@/content/countries";
import { FAQ_HOME } from "@/content/home";
import { breadcrumbLd, faqLd, serviceLd, webPageLd, type HeadData } from "@/seo";
import { ONE_LINER, PAISES } from "@/site";

export type Route = {
  head: HeadData;
  element: ReactElement;
  /** Peso en el sitemap. `false` = fuera del sitemap (404). */
  sitemap: number | false;
};

const homeHead: HeadData = {
  path: "/",
  title: "Automatización Shopify en Uruguay, Argentina y Chile · Papurro",
  description:
    "Una persona (no una agencia) que automatiza tiendas Shopify en Uruguay, Argentina y Chile: IA aplicada, atención al cliente y optimización. info@papurro.com",
  lang: "es",
  ogLocale: "es_UY",
};

homeHead.jsonLd = [
  webPageLd(homeHead),
  faqLd(FAQ_HOME),
  serviceLd({
    name: "Automatización, IA y soporte para tiendas Shopify",
    description: ONE_LINER,
    areaIso: PAISES.map((p) => p.iso),
    areaNames: PAISES.map((p) => p.nombre),
    path: "/",
  }),
];

const privacidadHead: HeadData = {
  path: "/privacidad/",
  title: "Privacidad · Papurro",
  description:
    "Qué datos toca este sitio (casi ninguno) y qué pasa con tu mail si escribís a info@papurro.com.",
  lang: "es",
  ogLocale: "es_UY",
  cluster: false,
};
privacidadHead.jsonLd = [
  webPageLd(privacidadHead),
  breadcrumbLd([
    { name: "Papurro", path: "/" },
    { name: "Privacidad", path: "/privacidad/" },
  ]),
];

const notFoundHead: HeadData = {
  path: "/404.html",
  title: "Página no encontrada · Papurro",
  description: "Esta página no existe. Volvé al inicio de papurro.com.",
  lang: "es",
  ogLocale: "es_UY",
  cluster: false,
  robots: "noindex, follow",
};

function paisRoute(pais: (typeof CONTENIDO_PAISES)[number]): Route {
  const head: HeadData = {
    path: `/${pais.slug}/`,
    title: pais.title,
    description: pais.description,
    lang: pais.hreflang,
    ogLocale: pais.ogLocale,
  };

  head.jsonLd = [
    webPageLd(head),
    breadcrumbLd([
      { name: "Papurro", path: "/" },
      { name: pais.nombre, path: `/${pais.slug}/` },
    ]),
    faqLd(pais.faqs),
    serviceLd({
      name: `Automatización de Shopify para tiendas en ${pais.nombre}`,
      description: pais.resumen,
      areaIso: [pais.iso],
      areaNames: [pais.nombre],
      path: `/${pais.slug}/`,
    }),
  ];

  return { head, element: <CountryPage pais={pais} />, sitemap: 0.9 };
}

/** Tabla de rutas: la usa el router del cliente y el prerender del build. */
export const ROUTES: Record<string, Route> = {
  "/": { head: homeHead, element: <Home />, sitemap: 1 },
  ...Object.fromEntries(CONTENIDO_PAISES.map((p) => [`/${p.slug}/`, paisRoute(p)])),
  "/privacidad/": { head: privacidadHead, element: <Privacidad />, sitemap: 0.3 },
};

export const NOT_FOUND: Route = {
  head: notFoundHead,
  element: <NotFound />,
  sitemap: false,
};

/** Normaliza a la forma canónica: barra final salvo la home. */
export function normalizePath(raw: string) {
  let path = raw.split("?")[0]!.split("#")[0]!;
  if (!path.startsWith("/")) path = `/${path}`;
  path = path.replace(/\/index\.html$/, "/");
  if (path !== "/" && !path.endsWith("/")) path = `${path}/`;
  return path;
}

export function matchRoute(raw: string): Route {
  return ROUTES[normalizePath(raw)] ?? NOT_FOUND;
}
