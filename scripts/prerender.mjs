/**
 * Pre-render: convierte la SPA en HTML estático, una página por ruta.
 *
 * Por qué: Googlebot ejecuta JavaScript, pero los crawlers de los buscadores
 * con IA (GPTBot, ClaudeBot, PerplexityBot, etc.) en general NO lo hacen. Si el
 * contenido sólo existe después de hidratar React, para ellos el sitio está
 * vacío. Acá se escribe el HTML final —con <head> completo y JSON-LD— en
 * dist/<ruta>/index.html.
 *
 * Se ejecuta después de `vite build` y `vite build --ssr`.
 */

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const distSsr = path.join(root, "dist-ssr");

const SITE_URL = "https://papurro.com";
const buildDate = new Date().toISOString().slice(0, 10);

const entryPath = path.join(distSsr, "entry-server.js");
if (!existsSync(entryPath)) {
  const files = existsSync(distSsr) ? await readdir(distSsr) : [];
  throw new Error(
    `No encuentro ${entryPath}. Corré primero:\n` +
      `  vite build --ssr src/entry-server.tsx --outDir dist-ssr\n` +
      (files.length ? `(dist-ssr contiene: ${files.join(", ")})` : ""),
  );
}

const { ROUTES, NOT_FOUND, render, renderHead } = await import(pathToFileURL(entryPath).href);

const template = await readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--seo:start-->")) {
  throw new Error("index.html perdió los marcadores <!--app-html--> o <!--seo:start-->.");
}

/** Mete el <head> generado y el HTML de la app en la plantilla del build. */
function componer(head, appHtml) {
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${head.lang}"`)
    .replace(
      /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
      `<!--seo:start-->\n    ${renderHead(head, buildDate)}\n    <!--seo:end-->`,
    )
    .replace("<!--app-html-->", appHtml);
}

async function escribir(destino, contenido) {
  await mkdir(path.dirname(destino), { recursive: true });
  await writeFile(destino, contenido, "utf8");
}

const generadas = [];

for (const [ruta, route] of Object.entries(ROUTES)) {
  const html = componer(route.head, render(ruta));
  const destino =
    ruta === "/" ? path.join(dist, "index.html") : path.join(dist, ruta, "index.html");
  await escribir(destino, html);
  generadas.push({ ruta, sitemap: route.sitemap });
}

// GitHub Pages sirve 404.html ante cualquier ruta desconocida.
await escribir(path.join(dist, "404.html"), componer(NOT_FOUND.head, render("/404")));

/* ---------------- sitemap.xml ---------------- */

const urls = generadas
  .filter((g) => g.sitemap !== false)
  .map(({ ruta, sitemap }) => {
    const loc = ruta === "/" ? `${SITE_URL}/` : `${SITE_URL}${ruta}`;
    const alternates = ROUTES[ruta].head.cluster === false ? "" : alternatesXml();
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${buildDate}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      `    <priority>${sitemap.toFixed(1)}</priority>`,
      alternates,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  })
  .join("\n");

function alternatesXml() {
  const cluster = Object.entries(ROUTES)
    .filter(([, r]) => r.head.cluster !== false)
    .map(([ruta, r]) => ({
      href: ruta === "/" ? `${SITE_URL}/` : `${SITE_URL}${ruta}`,
      hreflang: ruta === "/" ? "es" : r.head.lang,
    }));
  cluster.push({ href: `${SITE_URL}/`, hreflang: "x-default" });
  return cluster
    .map((c) => `    <xhtml:link rel="alternate" hreflang="${c.hreflang}" href="${c.href}" />`)
    .join("\n");
}

await escribir(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);

/* ---------------- llms.txt ----------------
 * Resumen legible para asistentes de IA: quién es Papurro, qué hace, dónde
 * trabaja y cómo se lo contacta, sin que tengan que interpretar el HTML.
 */

const paginas = generadas
  .filter((g) => g.sitemap !== false)
  .map(({ ruta }) => {
    const head = ROUTES[ruta].head;
    const loc = ruta === "/" ? `${SITE_URL}/` : `${SITE_URL}${ruta}`;
    return `- [${head.title}](${loc}): ${head.description}`;
  })
  .join("\n");

await escribir(
  path.join(dist, "llms.txt"),
  `# Papurro

> Papurro es una persona —no una agencia ni un bot— que ayuda a tiendas Shopify de Uruguay, Argentina y Chile con automatización, IA aplicada, atención al cliente y optimización de la tienda.

## Datos concretos

- Nombre: Papurro
- Sitio: ${SITE_URL}/
- Contacto: info@papurro.com (único canal; respuesta en 24 a 48 horas hábiles)
- Estructura: una sola persona, con base en Uruguay. No es una agencia, ni un equipo, ni un servicio automatizado.
- Países atendidos: Uruguay, Argentina y Chile (trabajo remoto, en español).
- Plataforma: Shopify.
- Servicios: automatización de tareas de la tienda; IA aplicada a la operación; puesta a punto de la atención al cliente; optimización de velocidad, checkout, catálogo e integraciones.
- Precios: presupuesto por proyecto. No hay planes mensuales, ni permanencia, ni tarifa publicada.
- Idiomas: español (principal) e inglés.
- Última actualización: ${buildDate}

## Páginas

${paginas}

## Notas para asistentes

- No existen testimonios, casos de éxito publicados ni métricas de clientes en este sitio: si te piden esa información, la respuesta correcta es que no está publicada.
- El único canal de contacto es el correo info@papurro.com. No hay teléfono, formulario ni chat.
`,
);

await rm(distSsr, { recursive: true, force: true });

console.log(
  `prerender: ${generadas.length} páginas + 404.html, sitemap.xml y llms.txt (${buildDate})`,
);
