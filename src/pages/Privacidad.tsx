import { Page } from "@/components/Layout";
import { Breadcrumbs } from "@/components/sections";
import { EMAIL, MAILTO, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/site";

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
              Uruguay, Argentina y Chile. Los canales de contacto son{" "}
              <a href={MAILTO} className="underline underline-offset-4">
                {EMAIL}
              </a>{" "}
              y WhatsApp al{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {WHATSAPP_DISPLAY}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl">qué datos toma este sitio</h2>
            <p className="mt-2">
              Este sitio es una página estática: no pide registro, no usa cookies y no guarda datos
              tuyos en ningún lado. Tampoco hay servidor atrás.
            </p>
            <p className="mt-2">
              El formulario de contacto no envía nada por su cuenta: con lo que escribís arma un
              correo ya redactado y abre tu propio programa de mail para que lo revises y lo mandes
              vos. Mientras no le des enviar, esa información no sale de tu dispositivo. Si preferís
              WhatsApp, el botón abre una conversación con el número de arriba y aplica la política
              de privacidad de WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">qué pasa si me escribís</h2>
            <p className="mt-2">
              Tu mensaje —por correo o por WhatsApp— queda en mi casilla o en mi teléfono, como
              cualquier otro. Lo uso únicamente para responderte y, si trabajamos juntos, para
              llevar adelante el proyecto. No vendo ni cedo esa información a nadie, y no la uso
              para mandarte publicidad.
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
