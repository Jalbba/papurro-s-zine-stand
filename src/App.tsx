import { useEffect, useState } from "react";
import { matchRoute, normalizePath, ROUTES } from "@/routes";
import { absUrl, type HeadData } from "@/seo";

/** Router mínimo: el sitio son pocas páginas estáticas y cada una se
 *  pre-renderiza en el build, así que no hace falta traer una librería.
 *  Los enlaces siguen siendo <a href> reales (los crawlers los siguen);
 *  acá sólo se intercepta el click para no recargar la página. */

function esNavegacionInterna(e: MouseEvent) {
  return !(
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  );
}

/** Mantiene <head> en sintonía al navegar del lado del cliente. */
function aplicarHead(head: HeadData) {
  document.title = head.title;
  document.documentElement.lang = head.lang;

  const set = (selector: string, attr: string, value: string) => {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  set('meta[name="description"]', "content", head.description);
  set('link[rel="canonical"]', "href", absUrl(head.path));
  set('meta[property="og:title"]', "content", head.title);
  set('meta[property="og:description"]', "content", head.description);
  set('meta[property="og:url"]', "content", absUrl(head.path));
  set('meta[property="og:locale"]', "content", head.ogLocale);
  set('meta[name="twitter:title"]', "content", head.title);
  set('meta[name="twitter:description"]', "content", head.description);
}

export default function App({ path: pathInicial }: { path?: string }) {
  const [path, setPath] = useState(
    () => pathInicial ?? (typeof window === "undefined" ? "/" : window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);

    const onClick = (e: MouseEvent) => {
      if (!esNavegacionInterna(e)) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const destino = normalizePath(url.pathname);
      if (!(destino in ROUTES)) return;

      e.preventDefault();
      if (destino !== normalizePath(window.location.pathname)) {
        window.history.pushState({}, "", destino);
        setPath(destino);
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const route = matchRoute(path);

  useEffect(() => {
    aplicarHead(route.head);
  }, [route.head]);

  return route.element;
}
