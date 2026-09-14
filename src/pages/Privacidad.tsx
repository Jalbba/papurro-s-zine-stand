import { Page } from "@/components/Layout";
import { Breadcrumbs } from "@/components/sections";
import { EMAIL, MAILTO, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/site";

/** Página simple y honesta: qué datos toca este sitio (spoiler: casi ninguno,
 *  salvo la etiqueta de Google Ads, que acá se declara en criollo).
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
              Papurro es una persona física que trabaja desde Uruguay ayudando a tiendas de
              e-commerce de Uruguay, Argentina y Estados Unidos. Los canales de contacto son{" "}
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
              Este sitio es una página estática: no pide registro, no tiene servidor atrás y no
              guarda datos tuyos en ningún lado. Lo único que mira quién entra es la etiqueta de
              Google Ads que te cuento abajo, en servicios de terceros.
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
              ejemplo tu dirección IP) para poder servir la página.
            </p>
            <p className="mt-2">
              También cargo la etiqueta de Google Ads (gtag.js), y está para una sola cosa: saber
              qué avisos traen visitas y cuáles no. Para eso Google puede guardar cookies en tu
              navegador y usar esos datos para medir y personalizar publicidad, según{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                su propia política
              </a>
              . Lo que yo veo son números agregados —cuántas visitas, desde qué aviso—, nunca tu
              nombre ni tu correo.
            </p>
            <p className="mt-2">
              Si no querés nada de esto, cualquier bloqueador de publicidad lo frena, y en{" "}
              <a
                href="https://myadcenter.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                My Ad Center
              </a>{" "}
              podés ajustar qué hace Google con tus datos. El sitio funciona igual.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
