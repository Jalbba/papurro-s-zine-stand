# Papurro's Zine Stand

Build a mobile-first one-page marketing site for **papurro.com**, entirely in **Rioplatense Spanish (voseo, Uruguayan)**. Tone: quirky, funny, self-deprecating, but competent and productive.

## WHAT THE BUSINESS IS
Papurro is ONE person (not an agency, not a team, not a bot) who helps Shopify stores operating in Uruguay with: automation, applied AI, customer care setup, and store optimization.

## CRITICAL HONESTY RULES — DO NOT VIOLATE
- NEVER invent testimonials, client names, client logos, star ratings, "trusted by" bars, case studies, or made-up metrics ("+300% ventas", "50 clientes felices"). Zero fake social proof. If a section would need proof we don't have, cut the section.
- NEVER imply it's a team, agency, or AI-powered bot service. The site must explicitly say it's one real human being.
- No "24/7 support", no fake phone numbers, no fake address, no fake years of experience.
- Only real contact channel: the email **info@papurro.com**.

## VISUAL DIRECTION — THIS IS THE MOST IMPORTANT PART
Go **neo-brutalist / riso-print zine / sticker-book**. Loud, colorful, handmade, a little crooked. It must NOT look like a generic AI-generated SaaS landing page.

BANNED (do not use any of these):
- Purple→blue gradients, gradient mesh blobs, aurora backgrounds
- Glassmorphism, frosted glass cards, backdrop-blur
- Dark navy hero with glowing particles
- Floating 3D cards, isometric illustrations, "AI brain" or circuit-board imagery
- Soft rounded shadows (`shadow-lg`, `shadow-xl`), soft pastel gradients
- Generic centered hero with two ghost buttons
- Inter/Roboto as the display font
- Emoji used as icons everywhere

REQUIRED:
- Riso/screen-print palette on warm paper. Use exactly these CSS variables:
  - paper: `#FFF6E5` (page background)
  - ink: `#141110` (all text + all borders)
  - pink: `#FF4E88`
  - yellow: `#FFD029`
  - cyan: `#37D5D6`
  - lime: `#B6E549`
  - orange: `#FF7A2F`
  Alternate section backgrounds between these bright flats so scrolling feels like flipping a zine. Never a gradient — flat color blocks only.
- Every card/button/badge: `border: 3px solid #141110` + hard offset shadow `box-shadow: 6px 6px 0 #141110`. No blur, ever.
- Cards slightly rotated (`rotate-[-1.5deg]`, `rotate-[1deg]`, etc.) like taped-on stickers. Straighten on hover.
- Buttons press down on click (translate 3px right/down, shadow shrinks to 0).
- Display font: **Archivo Black** (or Bricolage Grotesque ExtraBold) — huge, tight tracking, some words in a highlighter-marker box. Body: **Space Grotesk**. Load from Google Fonts.
- A repeating subtle paper-grain / halftone dot texture over the page via CSS (SVG data-URI, very low opacity). No image files.
- Thick wobbly hand-drawn divider between sections (inline SVG squiggle, ink-colored, 4px stroke, `stroke-linecap:round`).
- Mobile-first: design 375px up. Big tap targets, one column, generous spacing. Desktop is just a wider version, max-w-5xl, still chunky.

## LOGO / MASCOT (inline SVG, no image files)
Draw a hand-drawn-feeling mascot: a lopsided scruffy **dog-potato** — a chunky blob head with two floppy uneven ears, one eye bigger than the other, a big goofy tongue hanging out sideways, three scraggly hairs on top. Thick 4px `#141110` strokes, flat fills in yellow/pink, deliberately imperfect and asymmetric (NOT geometric or perfectly centered). It should look drawn with a marker by hand, not vector-perfect.
Wordmark next to it: "papurro" in Archivo Black lowercase, with a small pink underline scribble.
Give the mascot a tiny idle animation (a slow 2s wiggle rotate ±2deg, and blink every ~5s). Respect `prefers-reduced-motion`.
Use the same mascot as the favicon.

## PAGE STRUCTURE + COPY (use this copy, polish it, keep the voseo)

**1. Sticky top bar** — mascot + "papurro" left, one button right: "Escribime" (yellow, hard shadow) → `mailto:info@papurro.com`.

**2. Hero** (paper background)
- Small rotated badge sticker: "Para tiendas Shopify en Uruguay 🇺🇾"
- H1 huge: "Hago que tu Shopify labure solo." — with "labure solo" inside a pink highlighter box.
- Sub: "Automatización, IA que sirve y atención al cliente ordenada. No soy una agencia: soy una persona, con una computadora y mucho café."
- Big pink button: "Contame tu quilombo →" → mailto.
- Small text under: "Respondo yo. En serio. No hay bot."
- The mascot large, rotated, taped with two little "cinta scotch" rectangles.

**3. "¿Qué hacés, papurro?"** — 4 sticker cards, each a different flat color, each rotated slightly, each with a simple hand-drawn inline SVG icon (not lucide defaults — crooked doodles):
- **Automatización** — "Esas cosas que hacés a mano 40 veces por día. Que las haga una máquina y vos andá a tomar un mate."
- **IA aplicada** — "IA que resuelve cosas, no IA de folleto. Clasificar pedidos, redactar respuestas, resumir quilombos. Lo que te ahorre horas de verdad."
- **Atención al cliente** — "Tickets ordenados, respuestas rápidas, menos 'che, dónde está mi pedido'. Tu cliente contento y vos durmiendo."
- **Optimización** — "Tu tienda anda. Bárbaro. ¿Pero anda bien? Velocidad, checkout, catálogo, integraciones que no se rompan un viernes a las 7."

**4. "¿Quién carajo es Papurro?"** (cyan section, honesty block — this section is the heart of the site)
"Papurro no es una agencia. No es un equipo. No es un bot con nombre simpático.
Es una persona. Una sola. Con una computadora, buen café y una paciencia rara para los detalles.
Trabajo con pocas tiendas a la vez, porque prefiero hacer bien tres cosas que hacer mal treinta.
Si me escribís, te contesto yo. Si algo no lo sé hacer, te lo digo. Y si no te sirvo, te lo digo también."

**5. "¿Cuánto sale?"** (yellow section)
"Cada tienda es un quilombo distinto, así que no vendo planes de $X por mes con estrellitas y letra chica.
Me contás qué te duele → miro tu setup → te paso un número.
Presupuesto por proyecto. Sin sorpresas y sin permanencia."
Below, three small rotated tags: "Sin planes mensuales" · "Sin letra chica" · "Sin vendedor encima"

**6. "Cómo laburamos"** — 3 numbered steps in big chunky circles (01/02/03):
- "Me escribís" — "Un mail contando qué te vuelve loco de tu operación. Sin formalidades."
- "Miro tu setup" — "Charlamos, reviso cómo laburás hoy y te digo qué se puede arreglar (y qué no)."
- "Lo hago" — "Presupuesto claro, lo construimos, lo dejo andando y te explico cómo funciona."

**7. Final CTA** (pink section, big)
"¿Arrancamos?"
"Escribime a **info@papurro.com** y contame qué te está haciendo perder tiempo."
Giant black button "info@papurro.com" → `mailto:info@papurro.com?subject=Hola%20Papurro&body=Hola!%20Tengo%20una%20tienda%20Shopify%20y...`
Plus a small ghost button "Copiar el mail" that copies to clipboard and shows a rotated "¡copiado!" sticker.
Small line: "Contesto en 24-48hs hábiles. Soy uno solo, tené paciencia 🐶"

**8. Footer** (ink background, paper text) — mascot mini + "papurro · Shopify, automatización e IA para tiendas uruguayas · info@papurro.com · Hecho en Uruguay 🧉". Current year dynamic.

## TECH
- Single page, React + Tailwind + TypeScript. No backend, no database, no auth, no forms — only `mailto:` links and a clipboard copy.
- Semantic HTML, real `<section>`s, accessible contrast (ink on all those brights), `alt`/`aria-label` on the SVGs.
- SEO: `<title>` "Papurro · Automatización e IA para tiendas Shopify en Uruguay", meta description in Spanish, `lang="es-UY"`, Open Graph tags.
- Smooth scroll to sections from the top bar.
- Fast: no heavy libs, no image assets, everything inline SVG + CSS.

Make it feel like a photocopied zine someone taped to a wall — loud, warm, human, and clearly made by a person with a sense of humor.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d43cb134-fa74-4dab-87f8-dfad47673710).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
