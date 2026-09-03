/**
 * Regenera public/og.png (1200x630), la imagen que se ve al compartir el sitio
 * en WhatsApp, X, LinkedIn, Slack, etc.
 *
 * No corre en el build: se ejecuta a mano cuando cambia el mensaje o la marca.
 *
 *   CHROME=/ruta/a/chrome node scripts/og-image.mjs
 *
 * Necesita un Chrome/Chromium headless y salida a internet (baja las fuentes
 * de Google Fonts para incrustarlas).
 */

import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME ?? process.env.CHROME_PATH ?? "/usr/bin/chromium";

const FUENTES =
  "https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&family=Nunito:wght@700&display=swap";

/** Baja el subset latino de cada familia y lo devuelve como data URI. */
async function fuentesEmbebidas() {
  const css = await (
    await fetch(FUENTES, {
      headers: { "user-agent": "Mozilla/5.0 (X11; Linux x86_64) Chrome/120 Safari/537.36" },
    })
  ).text();

  const caras = [];
  for (const bloque of css.split("@font-face")) {
    const rango = /unicode-range: (.+?);/.exec(bloque);
    if (!rango || !rango[1].startsWith("U+0000-00FF")) continue; // sólo latin básico
    const familia = /font-family: '([^']+)'/.exec(bloque)[1];
    const url = /url\((https[^)]+)\)/.exec(bloque)[1];
    const peso = /font-weight: (\d+)/.exec(bloque)[1];
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    caras.push(
      `@font-face{font-family:'${familia}';font-weight:${peso};` +
        `src:url(data:font/woff2;base64,${buf.toString("base64")}) format('woff2');}`,
    );
  }
  return caras.join("\n");
}

const marca = (await readFile(path.join(root, "public/papurro-p.png"))).toString("base64");
const rainbow = "linear-gradient(90deg,#01c8d1,#9eca2f,#ffd008,#ff930e,#fe3d7c,#9953d9)";

const html = `<!doctype html><meta charset="utf-8"><style>
${await fuentesEmbebidas()}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden;background:#fff}
.stage{position:absolute;inset:0;width:1200px;height:630px;background:
  radial-gradient(120% 90% at 6% 10%, color-mix(in oklab,#01c8d1 26%,white) 0%, transparent 55%),
  radial-gradient(110% 80% at 95% 6%, color-mix(in oklab,#ffd008 32%,white) 0%, transparent 55%),
  radial-gradient(120% 100% at 88% 100%, color-mix(in oklab,#9953d9 26%,white) 0%, transparent 60%),
  radial-gradient(100% 90% at 8% 100%, color-mix(in oklab,#fe3d7c 22%,white) 0%, transparent 60%),
  #fff;
  color:#0a1128;font-family:'Nunito',sans-serif;
  display:flex;align-items:center;gap:24px;padding:52px 64px;overflow:hidden}
body{margin:0;position:relative}
.rainbow{position:absolute;left:0;right:0;bottom:0;height:14px;background:${rainbow}}
.left{flex:1.15}
.mark{font-family:'Baloo 2';font-weight:800;font-size:36px;letter-spacing:-.02em;
  background:${rainbow};-webkit-background-clip:text;background-clip:text;color:transparent}
h1{font-family:'Baloo 2';font-weight:800;font-size:66px;line-height:1.02;letter-spacing:-.03em;
  margin-top:18px;text-transform:lowercase}
h1 .mk{background:${rainbow};-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{margin-top:20px;font-size:26px;font-weight:700;color:#3a4460;line-height:1.35}
.mail{margin-top:26px;display:inline-block;background:#0a1128;color:#fff;font-family:'Baloo 2';
  font-weight:800;font-size:27px;padding:12px 26px;border-radius:999px}
.right{flex:.85;display:flex;justify-content:center}
.right img{width:100%;max-width:360px;height:auto;filter:drop-shadow(0 26px 40px rgba(10,17,40,.25))}
</style>
<div class="stage">
  <div class="left">
    <div class="mark">papurro</div>
    <h1>hagamos que tu shopify <span class="mk">labure solo</span>.</h1>
    <div class="sub">Automatización, IA y atención al cliente<br>para tiendas Shopify de Uruguay, Argentina y Chile.</div>
    <div class="mail">info@papurro.com</div>
  </div>
  <div class="right"><img src="data:image/png;base64,${marca}"></div>
  <div class="rainbow"></div>
</div>`;

const dir = await mkdtemp(path.join(tmpdir(), "papurro-og-"));
const fuente = path.join(dir, "og.html");
await writeFile(fuente, html, "utf8");

// Ojo: el viewport tiene que medir exactamente 1200x630. El binario
// headless_shell respeta --window-size; `chrome --headless` le descuenta la
// barra de ventana y recorta la parte de abajo.
execFileSync(
  CHROME,
  [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    `--screenshot=${path.join(root, "public/og.png")}`,
    `file://${fuente}`,
  ],
  { stdio: "inherit" },
);

console.log("og-image: public/og.png actualizado");
