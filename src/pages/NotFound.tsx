import { Page } from "@/components/Layout";
import { GrillaPaises } from "@/components/sections";
import { MAILTO } from "@/site";

export default function NotFound() {
  return (
    <Page>
      <section className="panel wash px-5 py-14 text-center sm:px-10 sm:py-20">
        <p className="pill px-3 py-1.5 text-xs sm:text-sm">error 404</p>
        <h1 className="mt-5 text-4xl sm:text-6xl">
          esta página <span className="marker">no existe</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base font-semibold text-ink sm:text-lg">
          Se ve que algo quedó mal enlazado. Volvé al inicio o escribime y te oriento.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="btn-press btn-ink px-6 py-4 text-lg">
            volver al inicio →
          </a>
          <a href={MAILTO} className="btn-press btn-rainbow px-6 py-4 text-lg">
            escribime →
          </a>
        </div>
      </section>

      <GrillaPaises />
    </Page>
  );
}
