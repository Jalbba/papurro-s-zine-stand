import { useEffect, useRef, useState } from "react";
// `import type` se borra en el build: no arrastra Three al bundle inicial.
import type { Escena, Preset } from "@/components/gl/escena";

/**
 * Lienzo decorativo con las burbujas de Three.js.
 *
 * Reglas de la casa, en este orden:
 *  1. El HTML pre-renderizado sale sin nada de esto: acá sólo hay un <canvas>
 *     vacío, y el fondo `wash` de CSS sigue siendo el que se ve primero.
 *  2. Three se importa de forma dinámica —queda en su propio chunk— y recién
 *     cuando el panel está por entrar en pantalla y el navegador está ocioso.
 *  3. Si hay `prefers-reduced-motion`, ahorro de datos o no hay WebGL, no se
 *     descarga nada y la página queda exactamente como antes.
 *  4. El bucle se frena cuando el panel sale de pantalla o la pestaña se oculta.
 */
export function GlFondo({ preset, className }: { preset: Preset; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    const contenedor = canvas?.parentElement;
    if (!canvas || !contenedor) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const conexion = (navigator as { connection?: { saveData?: boolean } }).connection;
    if (conexion?.saveData) return;

    let vivo = true;
    let escena: Escena | null = null;
    let raf = 0;
    let enPantalla = false;
    let cargando = false;
    let topeDoc = 0;

    const puntero = { x: 0, y: 0 };
    let parallax = 0;

    const alPerderContexto = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(raf);
      raf = 0;
    };
    canvas.addEventListener("webglcontextlost", alPerderContexto);

    const observadorTamano = new ResizeObserver(() => medir());

    const medir = () => {
      if (!escena) return;
      const caja = contenedor.getBoundingClientRect();
      topeDoc = caja.top + window.scrollY + caja.height / 2;
      escena.medir(Math.round(caja.width), Math.round(caja.height));
    };

    const cuadro = (ms: number) => {
      raf = 0;
      if (!escena || !vivo) return;
      // Desplazamiento del panel respecto del centro de la ventana, en -1..1.
      const centro = (topeDoc - window.scrollY - window.innerHeight / 2) / window.innerHeight;
      parallax = Math.max(-1, Math.min(1, centro));
      escena.dibujar(ms / 1000, puntero, parallax);
      if (enPantalla && !document.hidden) raf = requestAnimationFrame(cuadro);
    };

    const seguir = () => {
      if (!raf && escena && enPantalla && !document.hidden && vivo) {
        raf = requestAnimationFrame(cuadro);
      }
    };

    const cargar = () => {
      if (cargando || escena) return;
      cargando = true;
      import("@/components/gl/escena")
        .then(({ crearEscena }) => {
          if (!vivo) return;
          escena = crearEscena(canvas, preset);
          medir();
          observadorTamano.observe(contenedor);
          setListo(true);
          seguir();
        })
        .catch(() => {
          /* sin WebGL o chunk caído: se queda el fondo de CSS */
        });
    };

    /** Espera a que el navegador esté ocioso; si no existe la API, un timeout. */
    const ocioso = (fn: () => void) => {
      const idle = (window as Window & typeof globalThis).requestIdleCallback;
      if (idle) idle(fn, { timeout: 1200 });
      else window.setTimeout(fn, 300);
    };

    const observadorVista = new IntersectionObserver(
      ([entrada]) => {
        enPantalla = !!entrada?.isIntersecting;
        if (enPantalla) {
          if (!escena) ocioso(cargar);
          else seguir();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: "200px" },
    );
    observadorVista.observe(contenedor);

    const alMover = (e: PointerEvent) => {
      puntero.x = (e.clientX / window.innerWidth) * 2 - 1;
      puntero.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const alCambiarVisibilidad = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else {
        seguir();
      }
    };

    window.addEventListener("pointermove", alMover, { passive: true });
    window.addEventListener("resize", medir, { passive: true });
    document.addEventListener("visibilitychange", alCambiarVisibilidad);

    return () => {
      vivo = false;
      cancelAnimationFrame(raf);
      observadorVista.disconnect();
      observadorTamano.disconnect();
      canvas.removeEventListener("webglcontextlost", alPerderContexto);
      window.removeEventListener("pointermove", alMover);
      window.removeEventListener("resize", medir);
      document.removeEventListener("visibilitychange", alCambiarVisibilidad);
      escena?.liberar();
      escena = null;
    };
  }, [preset]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-700 ${
        listo ? "opacity-100" : "opacity-0"
      } ${className ?? ""}`}
    />
  );
}
