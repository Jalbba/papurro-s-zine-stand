/**
 * Escena de Three.js que va detrás de los paneles con `wash`: burbujas,
 * gemas y aros flotando en los colores del degradado de la marca.
 *
 * Este módulo se importa de forma dinámica (ver `GlFondo`), así que Three
 * queda en su propio chunk y nunca entra en la carga inicial de la página.
 * Todo lo que hay acá corre sólo en el navegador.
 */

import {
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  TorusGeometry,
  WebGLRenderer,
  type BufferGeometry,
} from "three";

export type Preset = "hero" | "cta";

/** Los seis colores del degradado, leídos del CSS para no duplicarlos acá. */
const FALLBACK = ["#01c8d1", "#9eca2f", "#ffd008", "#ff930e", "#fe3d7c", "#9953d9"];

function paleta(): Color[] {
  const nombres = [
    "--grad-teal",
    "--grad-lime",
    "--grad-yellow",
    "--grad-orange",
    "--grad-pink",
    "--grad-purple",
  ];
  const raiz = typeof document === "undefined" ? null : getComputedStyle(document.documentElement);
  return nombres.map((n, i) => {
    const valor = raiz?.getPropertyValue(n).trim();
    try {
      return new Color(valor || FALLBACK[i]!);
    } catch {
      return new Color(FALLBACK[i]!);
    }
  });
}

type Tipo = "bola" | "gema" | "aro";

/** Composición a mano: `u`/`v` son la posición dentro del panel (-1 a 1),
 *  `z` la profundidad y `mini` marca las que sobreviven en pantalla chica. */
type Semilla = {
  u: number;
  v: number;
  z: number;
  r: number;
  color: number;
  tipo: Tipo;
  mini?: boolean;
};

const PRESETS: Record<Preset, { formas: Semilla[]; ritmo: number; opacidad: number }> = {
  hero: {
    ritmo: 1,
    opacidad: 0.5,
    formas: [
      { u: -0.95, v: 0.72, z: -3, r: 0.75, color: 0, tipo: "gema", mini: true },
      { u: -1.04, v: -0.7, z: -2.5, r: 0.42, color: 5, tipo: "aro" },
      { u: -1.05, v: -0.25, z: -5, r: 1.0, color: 4, tipo: "bola", mini: true },
      { u: -0.1, v: 1.05, z: -4.5, r: 0.55, color: 2, tipo: "bola" },
      { u: 0.5, v: -1.02, z: -2, r: 0.4, color: 1, tipo: "gema", mini: true },
      { u: 0.9, v: 0.78, z: -3, r: 0.62, color: 3, tipo: "aro" },
      { u: 1.06, v: -0.45, z: -4, r: 0.9, color: 0, tipo: "bola", mini: true },
      { u: 0.72, v: 0.12, z: -9, r: 1.25, color: 5, tipo: "gema" },
      { u: -0.45, v: 1.02, z: -5.5, r: 0.6, color: 4, tipo: "aro", mini: true },
      { u: -0.22, v: -1.02, z: -3.5, r: 0.48, color: 2, tipo: "gema" },
      { u: 0.34, v: -0.82, z: -9, r: 1.3, color: 1, tipo: "bola" },
    ],
  },
  cta: {
    ritmo: 0.7,
    opacidad: 0.42,
    formas: [
      { u: -1.0, v: 0.62, z: -4, r: 0.9, color: 5, tipo: "bola", mini: true },
      { u: -0.55, v: -1.05, z: -2.5, r: 0.45, color: 2, tipo: "aro" },
      { u: -0.05, v: 1.1, z: -6, r: 1.0, color: 0, tipo: "gema", mini: true },
      { u: 0.62, v: -0.95, z: -3, r: 0.55, color: 4, tipo: "bola" },
      { u: 1.05, v: 0.4, z: -4.5, r: 0.8, color: 3, tipo: "aro", mini: true },
      { u: -0.85, v: -0.35, z: -7, r: 1.15, color: 1, tipo: "gema" },
      { u: 0.9, v: -0.3, z: -9, r: 1.3, color: 4, tipo: "bola", mini: true },
    ],
  },
};

/** Ruido determinista: la composición se ve igual en cada carga. */
function azar(semilla: number) {
  let s = (semilla * 2654435761) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Flotante = {
  malla: Mesh;
  u: number;
  v: number;
  z: number;
  /** Centro del vaivén, recalculado en cada `medir`. */
  base: { x: number; y: number };
  /** Fase y velocidad del vaivén, amplitud y giro propio en cada eje. */
  fase: number;
  vaiven: number;
  deriva: number;
  giro: [number, number, number];
  inicial: [number, number, number];
};

export type Escena = {
  /** Ajusta el tamaño del lienzo y recoloca las formas al nuevo encuadre. */
  medir: (ancho: number, alto: number) => void;
  /** Dibuja un cuadro. `t` en segundos, `puntero`/`parallax` en -1..1. */
  dibujar: (t: number, puntero: { x: number; y: number }, parallax: number) => void;
  liberar: () => void;
};

export function crearEscena(canvas: HTMLCanvasElement, preset: Preset): Escena {
  const compacto = window.innerWidth < 640;
  const config = PRESETS[preset];

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !compacto,
    powerPreference: "low-power",
  });
  renderer.setClearAlpha(0);
  // Más de 1.75x no se nota y cuesta el doble de píxeles.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compacto ? 1.5 : 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 12;

  scene.add(new HemisphereLight(0xffffff, 0xd7c6ff, 2.4));

  const principal = new DirectionalLight(0xffffff, 1.7);
  principal.position.set(4, 6, 8);
  scene.add(principal);

  // Relleno rosado: le da el brillo acaramelado del logo.
  const relleno = new DirectionalLight(0xffc2d8, 1.1);
  relleno.position.set(-6, -3, 4);
  scene.add(relleno);

  const grupo = new Group();
  scene.add(grupo);

  const colores = paleta();
  const geometrias: Record<Tipo, BufferGeometry> = {
    bola: new IcosahedronGeometry(1, compacto ? 2 : 3),
    gema: new IcosahedronGeometry(1, 0),
    aro: new TorusGeometry(0.78, 0.3, compacto ? 10 : 14, compacto ? 32 : 48),
  };

  // Un material por color y acabado; las formas los comparten.
  const materiales = new Map<string, MeshStandardMaterial>();
  const materialDe = (indice: number, facetado: boolean) => {
    const clave = `${indice}:${facetado}`;
    let mat = materiales.get(clave);
    if (!mat) {
      const color = colores[indice]!;
      mat = new MeshStandardMaterial({
        color,
        roughness: facetado ? 0.42 : 0.24,
        metalness: 0.04,
        flatShading: facetado,
        emissive: color,
        emissiveIntensity: 0.08,
        transparent: true,
        opacity: config.opacidad,
      });
      materiales.set(clave, mat);
    }
    return mat;
  };

  const rnd = azar(preset === "hero" ? 7 : 23);
  const semillas = config.formas.filter((f) => !compacto || f.mini);

  const flotantes: Flotante[] = semillas.map((s) => {
    const malla = new Mesh(geometrias[s.tipo], materialDe(s.color, s.tipo === "gema"));
    malla.scale.setScalar(s.r * (compacto ? 0.85 : 1));
    const inicial: [number, number, number] = [rnd() * Math.PI, rnd() * Math.PI, rnd() * Math.PI];
    malla.rotation.set(...inicial);
    grupo.add(malla);

    return {
      malla,
      u: s.u,
      v: s.v,
      z: s.z,
      base: { x: 0, y: 0 },
      fase: rnd() * Math.PI * 2,
      vaiven: (0.28 + rnd() * 0.45) * config.ritmo,
      deriva: (0.35 + rnd() * 0.55) * config.ritmo,
      giro: [
        (rnd() - 0.5) * 0.22 * config.ritmo,
        (rnd() - 0.5) * 0.26 * config.ritmo,
        (rnd() - 0.5) * 0.16 * config.ritmo,
      ],
      inicial,
    };
  });

  /** Alto visible del encuadre a una profundidad dada. */
  const altoEn = (z: number) =>
    2 * Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);

  function medir(ancho: number, alto: number) {
    if (ancho <= 0 || alto <= 0) return;
    camera.aspect = ancho / alto;
    camera.updateProjectionMatrix();
    renderer.setSize(ancho, alto, false);

    for (const f of flotantes) {
      const h = altoEn(f.z);
      // El margen deja que asomen por el borde en vez de quedar recortadas.
      f.base.x = h * camera.aspect * 0.54 * f.u;
      f.base.y = h * 0.46 * f.v;
      f.malla.position.set(f.base.x, f.base.y, f.z);
    }
  }

  const objetivo = { x: 0, y: 0 };

  function dibujar(t: number, puntero: { x: number; y: number }, parallax: number) {
    // Todo se deriva del tiempo absoluto: no acumula ni depende de los FPS.
    for (const f of flotantes) {
      const s = t * f.vaiven + f.fase;
      f.malla.position.x = f.base.x + Math.cos(s * 0.7) * 0.34 * f.deriva;
      f.malla.position.y = f.base.y + Math.sin(s) * 0.55 * f.deriva;
      f.malla.rotation.x = f.inicial[0] + t * f.giro[0];
      f.malla.rotation.y = f.inicial[1] + t * f.giro[1];
      f.malla.rotation.z = f.inicial[2] + t * f.giro[2];
    }

    // El grupo se inclina hacia el puntero y se desplaza con el scroll.
    objetivo.x += (puntero.x - objetivo.x) * 0.045;
    objetivo.y += (puntero.y - objetivo.y) * 0.045;
    grupo.rotation.y = objetivo.x * 0.16;
    grupo.rotation.x = -objetivo.y * 0.12;
    grupo.position.x = objetivo.x * 0.5;
    grupo.position.y = -objetivo.y * 0.35 + parallax * 1.1;

    renderer.render(scene, camera);
  }

  function liberar() {
    for (const g of Object.values(geometrias)) g.dispose();
    for (const m of materiales.values()) m.dispose();
    renderer.dispose();
  }

  return { medir, dibujar, liberar };
}
