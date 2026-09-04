import type { Faq } from "@/seo";

export type Bloque = { titulo: string; texto: string };

export type PaisContenido = {
  slug: string;
  nombre: string;
  gentilicio: string;
  bandera: string;
  iso: string;
  hreflang: string;
  ogLocale: string;
  moneda: string;
  /** <title> de la página. */
  title: string;
  /** meta description. */
  description: string;
  h1: string;
  h1Marker: string;
  /** Párrafo corto y citable: lo primero que va a levantar un buscador o un LLM. */
  resumen: string;
  intro: string[];
  /** Realidades locales: cobros, envíos, facturación, equipo. */
  contexto: Bloque[];
  /** Automatizaciones concretas y creíbles para ese mercado. */
  ejemplos: string[];
  faqs: Faq[];
};

export const CONTENIDO_PAISES: PaisContenido[] = [
  {
    slug: "uruguay",
    nombre: "Uruguay",
    gentilicio: "uruguayas",
    bandera: "🇺🇾",
    iso: "UY",
    hreflang: "es-UY",
    ogLocale: "es_UY",
    moneda: "UYU",
    title: "Automatización Shopify en Uruguay · Papurro",
    description:
      "Ayudo a tiendas Shopify uruguayas con automatización, IA aplicada, atención al cliente y optimización. Una persona, no una agencia. Escribime a info@papurro.com.",
    h1: "automatización de shopify en",
    h1Marker: "Uruguay",
    resumen:
      "Papurro trabaja con tiendas Shopify que operan en Uruguay: automatiza tareas repetitivas, " +
      "aplica IA donde realmente sirve, ordena la atención al cliente y optimiza la tienda. " +
      "Es una sola persona, cotiza por proyecto y contesta los mails en 24 a 48 horas hábiles.",
    intro: [
      "Si tenés una tienda Shopify en Uruguay, seguro conocés la escena: pedidos que se copian a mano a una planilla, stock que se actualiza cuando alguien se acuerda, y consultas por mail, Instagram y WhatsApp al mismo tiempo.",
      "Eso se arregla. No con una plataforma nueva ni con un equipo de diez personas: sacando los pasos manuales del medio, de a uno, empezando por el que más te duele.",
    ],
    contexto: [
      {
        titulo: "cobros y checkout",
        texto:
          "Si tu tienda cobra con Mercado Pago, dLocal Go o alguna pasarela local, y además tenés transferencias, Abitab o Redpagos por afuera, la parte fea no es cobrar: es conciliar. Ahí es donde se va el tiempo y ahí es donde más rinde automatizar.",
      },
      {
        titulo: "envíos dentro y fuera de Montevideo",
        texto:
          "Despachar con DAC, UES, Correo Uruguayo o cadetería propia significa números de seguimiento en tres lugares distintos. Se puede unificar el paso de pedido pago → etiqueta → aviso al cliente para que no dependa de que alguien lo recuerde.",
      },
      {
        titulo: "tiendas chicas con mucho a cuestas",
        texto:
          "La mayoría de las tiendas uruguayas las lleva una o dos personas que además compran, fotografían, publican y atienden. La automatización no es un lujo de tienda grande: es lo que te devuelve la tarde del viernes.",
      },
    ],
    ejemplos: [
      "Pedido pagado → alta en tu planilla o sistema de gestión, sin copiar y pegar.",
      "Aviso automático al cliente cuando el pedido sale a despacho, con el número de seguimiento que corresponda.",
      "Stock sincronizado entre Shopify y lo que vendés por fuera (local, Instagram, mayorista).",
      "Consultas de mail y WhatsApp ordenadas en un solo lugar, con respuestas listas para las preguntas de siempre.",
      "Reporte semanal de ventas, productos que se mueven y quiebres de stock, servido en tu correo.",
    ],
    faqs: [
      {
        q: "¿Qué es el diagnóstico de 20 minutos?",
        a: "Una llamada corta, gratis y sin compromiso. Me contás cómo funciona hoy tu tienda en Uruguay, miro dónde se te va el tiempo y te digo qué automatizaría primero. Si de ahí sale un proyecto se cotiza, y si no, te quedás igual con la lista de qué conviene arreglar. Lo pedís por el formulario de esta página o por WhatsApp al +598 92 061 005.",
      },
      {
        q: "¿Trabajás con tiendas Shopify uruguayas?",
        a: "Sí. Papurro está en Uruguay y trabaja con tiendas Shopify que operan acá, en español y en horario uruguayo. También atiende tiendas de Argentina y Chile, en remoto.",
      },
      {
        q: "¿Qué se puede automatizar en una tienda Shopify en Uruguay?",
        a: "Lo repetitivo: pasar pedidos a tu planilla o sistema de gestión, avisar despachos, sincronizar stock entre canales, mandar reportes de ventas y ordenar las consultas de mail y WhatsApp en un solo lugar.",
      },
      {
        q: "¿Cuánto sale automatizar mi tienda?",
        a: "Se cotiza por proyecto, no por plan mensual. Me contás qué te duele, miro tu setup y te paso un número. Sin permanencia y sin letra chica.",
      },
      {
        q: "¿Sos una agencia?",
        a: "No. Papurro es una sola persona. Si escribís a info@papurro.com, te contesta la misma persona que después hace el trabajo, en 24 a 48 horas hábiles.",
      },
    ],
  },
  {
    slug: "argentina",
    nombre: "Argentina",
    gentilicio: "argentinas",
    bandera: "🇦🇷",
    iso: "AR",
    hreflang: "es-AR",
    ogLocale: "es_AR",
    moneda: "ARS",
    title: "Automatización Shopify en Argentina · Papurro",
    description:
      "Automatización, IA aplicada, atención al cliente y optimización para tiendas Shopify en Argentina. Una persona, presupuesto por proyecto. info@papurro.com.",
    h1: "automatización de shopify en",
    h1Marker: "Argentina",
    resumen:
      "Papurro trabaja con tiendas Shopify que venden en Argentina: automatiza tareas repetitivas, " +
      "aplica IA donde realmente sirve, ordena la atención al cliente y optimiza la tienda. " +
      "Es una sola persona, cotiza por proyecto y contesta los mails en 24 a 48 horas hábiles.",
    intro: [
      "Vender en Argentina tiene un deporte extra: todo cambia. Precios, costos, promociones bancarias, cuotas. Y cada cambio, si lo hacés a mano, son horas de planilla y errores que aparecen en el peor momento.",
      "Trabajo remoto con tiendas Shopify argentinas para sacar ese trabajo manual del medio, empezando por lo que más tiempo te come hoy.",
    ],
    contexto: [
      {
        titulo: "listas de precios que se mueven",
        texto:
          "Actualizar precios producto por producto no escala. Se puede automatizar la actualización masiva desde tu lista de costos, con reglas por categoría o por proveedor, y dejarte el control de cuándo se aplica.",
      },
      {
        titulo: "cobros, cuotas y conciliación",
        texto:
          "Entre Mercado Pago, transferencia, cuotas y promociones bancarias, saber cuánto entró de verdad por cada pedido es un laburo aparte. Se puede armar el reporte solo, en vez de reconstruirlo a fin de mes.",
      },
      {
        titulo: "envíos y despachos",
        texto:
          "Andreani, OCA, Correo Argentino, moto propia en CABA y GBA: cada uno con su formato. El objetivo es el mismo: que del pedido pago al aviso con seguimiento no haya nadie copiando datos a mano.",
      },
      {
        titulo: "facturación y administración",
        texto:
          "La parte fiscal la lleva tu contador o tu sistema de facturación electrónica; lo que se puede ordenar es el puente: que los datos del pedido lleguen limpios y completos a donde tienen que llegar.",
      },
    ],
    ejemplos: [
      "Actualización masiva de precios desde tu lista de costos, con reglas por categoría.",
      "Pedido pagado → datos limpios en tu sistema de gestión o facturación, sin recargar la planilla.",
      "Aviso automático de despacho con seguimiento, sea el correo que sea.",
      "Preguntas frecuentes (talles, tiempos de envío, cambios) respondidas en el momento, con revisión humana.",
      "Reporte diario o semanal de ventas y márgenes, sin abrir cinco pestañas.",
    ],
    faqs: [
      {
        q: "¿Qué es el diagnóstico de 20 minutos?",
        a: "Una llamada corta, gratis y sin compromiso. Me contás cómo funciona hoy tu tienda en Argentina, miro dónde se te va el tiempo y te digo qué automatizaría primero. Si de ahí sale un proyecto se cotiza, y si no, te quedás igual con la lista de qué conviene arreglar. Lo pedís por el formulario de esta página o por WhatsApp al +598 92 061 005.",
      },
      {
        q: "¿Trabajás con tiendas Shopify de Argentina?",
        a: "Sí, en remoto y en español. Papurro está en Uruguay y trabaja con tiendas Shopify de Argentina, Chile y Uruguay. Todo se coordina por mail y videollamada.",
      },
      {
        q: "¿Se pueden automatizar las actualizaciones de precios en Shopify?",
        a: "Sí. Se puede actualizar el catálogo de forma masiva a partir de tu lista de costos, con reglas por categoría o proveedor, y dejar en tus manos el momento de aplicarlas.",
      },
      {
        q: "¿Cómo cobrás si estoy en Argentina?",
        a: "Se cotiza por proyecto y se acuerda la forma de pago antes de arrancar, sin permanencia ni planes mensuales. Escribime a info@papurro.com y lo vemos.",
      },
      {
        q: "¿Sos una agencia?",
        a: "No. Papurro es una sola persona. Te contesta y te hace el trabajo la misma persona, en 24 a 48 horas hábiles.",
      },
    ],
  },
  {
    slug: "chile",
    nombre: "Chile",
    gentilicio: "chilenas",
    bandera: "🇨🇱",
    iso: "CL",
    hreflang: "es-CL",
    ogLocale: "es_CL",
    moneda: "CLP",
    title: "Automatización Shopify en Chile · Papurro",
    description:
      "Automatización, IA aplicada, atención al cliente y optimización para tiendas Shopify en Chile. Una persona, presupuesto por proyecto. info@papurro.com.",
    h1: "automatización de shopify en",
    h1Marker: "Chile",
    resumen:
      "Papurro trabaja con tiendas Shopify que venden en Chile: automatiza tareas repetitivas, " +
      "aplica IA donde realmente sirve, ordena la atención al cliente y optimiza la tienda. " +
      "Es una sola persona, cotiza por proyecto y responde los correos en 24 a 48 horas hábiles.",
    intro: [
      "Si tienes una tienda Shopify en Chile, el cuello de botella casi nunca es la tienda: es todo lo que pasa después de la compra. Pedidos que se copian a mano, despachos que se avisan uno por uno, consultas repartidas entre correo, Instagram y WhatsApp.",
      "Trabajo remoto con tiendas chilenas para sacar ese trabajo manual del medio, partiendo por lo que más tiempo te quita hoy.",
    ],
    contexto: [
      {
        titulo: "cobros y checkout",
        texto:
          "Webpay, Mercado Pago, transferencia: cada medio deja los datos en un formato distinto. Lo que se puede ordenar es lo que viene después del pago, para que conciliar no sea un trabajo aparte.",
      },
      {
        titulo: "despachos a regiones",
        texto:
          "Chilexpress, Starken, Correos de Chile o retiro en tienda: mientras alguien copie números de seguimiento a mano, se van a perder pedidos y se van a repetir las mismas preguntas. Ese flujo se automatiza completo.",
      },
      {
        titulo: "documentos y administración",
        texto:
          "La boleta o factura electrónica la emite tu sistema; lo que se puede ordenar es el puente: que los datos del pedido lleguen completos y sin retipear.",
      },
      {
        titulo: "temporadas que revientan la operación",
        texto:
          "CyberDay, Black Friday y Navidad no rompen la tienda: rompen la atención al cliente. Un soporte ordenado y respuestas preparadas antes de la fecha es la diferencia entre vender más y atender peor.",
      },
    ],
    ejemplos: [
      "Pedido pagado → alta automática en tu planilla o sistema de gestión.",
      "Correo o mensaje de despacho automático, con el seguimiento del courier que corresponda.",
      "Stock sincronizado entre Shopify y tus otros canales de venta.",
      "Respuestas listas para las preguntas de siempre: plazos de despacho a regiones, cambios, tallas.",
      "Reporte semanal de ventas y quiebres de stock, en tu correo.",
    ],
    faqs: [
      {
        q: "¿Qué es el diagnóstico de 20 minutos?",
        a: "Una llamada corta, gratis y sin compromiso. Me contás cómo funciona hoy tu tienda en Chile, miro dónde se te va el tiempo y te digo qué automatizaría primero. Si de ahí sale un proyecto se cotiza, y si no, te quedás igual con la lista de qué conviene arreglar. Lo pedís por el formulario de esta página o por WhatsApp al +598 92 061 005.",
      },
      {
        q: "¿Trabajas con tiendas Shopify de Chile?",
        a: "Sí, en remoto y en español. Papurro está en Uruguay y trabaja con tiendas Shopify de Chile, Argentina y Uruguay. Todo se coordina por correo y videollamada.",
      },
      {
        q: "¿Qué se puede automatizar en una tienda Shopify en Chile?",
        a: "Lo repetitivo: pasar pedidos a tu sistema de gestión, avisar despachos con el seguimiento del courier, sincronizar stock entre canales, mandar reportes y ordenar las consultas de correo y WhatsApp en un solo lugar.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Se cotiza por proyecto, no por plan mensual. Me cuentas qué te duele, reviso tu setup y te paso un número. Sin permanencia y sin letra chica.",
      },
      {
        q: "¿Eres una agencia?",
        a: "No. Papurro es una sola persona. Te responde y te hace el trabajo la misma persona, en 24 a 48 horas hábiles.",
      },
    ],
  },
];

export const porSlug = (slug: string) => CONTENIDO_PAISES.find((p) => p.slug === slug);
