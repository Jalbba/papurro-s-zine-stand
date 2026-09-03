import { Page } from "@/components/Layout";
import { Breadcrumbs } from "@/components/sections";
import { EMAIL, MAILTO } from "@/site";

/** Página simple y honesta: qué datos toca este sitio (spoiler: casi ninguno).
 *  Sirve para transparencia y para las políticas de las plataformas de ads. */
export default function Privacidad() {
  return (
    <Page>
      <section className="card p-5 sm:p-9">
        <Breadcrumbs
          items={[
            { name: "Papurro", href: "/" },
            { name: "Privacidad", href: "/privacidad/" },
          ]}
        />

        <h1 className="mt-6 text-4xl sm:text-5xl">
          privacidad, <span className="marker">en criollo</span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-6 text-sm leading-relaxed sm:text-base">
          <div>
            <h2 className="text-2xl">quién soy</h2>
            <p className="mt-2">
              Papurro es una persona física que trabaja desde Uruguay ayudando a tiendas Shopify de
              Uruguay, Argentina y Chile. El único canal de contacto es{" "}
              <a href={MAILTO} className="underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl">qué datos toma este sitio</h2>
            <p className="mt-2">
              Este sitio es una página estática: no tiene formularios, no pide registro y no guarda
              datos tuyos en ningún lado. Los enlaces de contacto abren tu programa de correo; nada
              se envía desde acá.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">qué pasa si me escribís</h2>
            <p className="mt-2">
              Tu mail queda en mi casilla de correo, como cualquier otro. Lo uso únicamente para
              responderte y, si trabajamos juntos, para llevar adelante el proyecto. No vendo ni
              cedo esa información a nadie, y no la uso para mandarte publicidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">borrar tus datos</h2>
            <p className="mt-2">
              Si querés que borre nuestra conversación y cualquier dato que me hayas pasado,
              escribime a{" "}
              <a href={MAILTO} className="underline underline-offset-4">
                {EMAIL}
              </a>{" "}
              y lo hago.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">servicios de terceros</h2>
            <p className="mt-2">
              El sitio carga tipografías desde Google Fonts y está alojado en GitHub Pages; como en
              cualquier sitio web, esos proveedores pueden registrar la solicitud técnica (por
              ejemplo tu dirección IP) para poder servir la página. No hay cookies de seguimiento ni
              perfiles publicitarios armados desde este sitio.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
