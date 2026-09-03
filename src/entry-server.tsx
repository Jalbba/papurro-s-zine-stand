/* eslint-disable react-refresh/only-export-components -- entrada de build, no se usa en HMR */

/** Entrada de SSR usada sólo en el build para pre-renderizar cada ruta a HTML.
 *  Ver scripts/prerender.mjs. */
import { renderToString } from "react-dom/server";
import App from "./App";

export { ROUTES, NOT_FOUND } from "./routes";
export { renderHead } from "./seo";

export function render(path: string) {
  return renderToString(<App path={path} />);
}
