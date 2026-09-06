import type { Faq } from "@/seo";
import type { Idioma } from "@/site";

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
  /** Idioma en el que está escrito el copy de esta página. */
  idioma: Idioma;
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
    idioma: "es",
    title: "Automatización e-commerce en Uruguay · Papurro",
    description:
      "Ayudo a tiendas de e-commerce uruguayas con automatización, IA aplicada, atención al cliente y optimización. Una persona, no una agencia. Escribime a info@papurro.com.",
    h1: "automatización de e-commerce en",
    h1Marker: "Uruguay",
    resumen:
      "Papurro trabaja con tiendas de e-commerce que operan en Uruguay: automatiza tareas repetitivas, " +
      "aplica IA donde realmente sirve, ordena la atención al cliente y optimiza la tienda. " +
      "Es una sola persona, cotiza por proyecto y contesta los mails en 24 a 48 horas hábiles.",
    intro: [
      "Si tenés una tienda de e-commerce en Uruguay, seguro conocés la escena: pedidos que se copian a mano a una planilla, stock que se actualiza cuando alguien se acuerda, y consultas por mail, Instagram y WhatsApp al mismo tiempo.",
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
      "Stock sincronizado entre tu e-commerce y lo que vendés por fuera (local, Instagram, mayorista).",
      "Consultas de mail y WhatsApp ordenadas en un solo lugar, con respuestas listas para las preguntas de siempre.",
      "Reporte semanal de ventas, productos que se mueven y quiebres de stock, servido en tu correo.",
    ],
    faqs: [
      {
        q: "¿Qué es el diagnóstico de 20 minutos?",
        a: "Una llamada corta, gratis y sin compromiso. Me contás cómo funciona hoy tu tienda en Uruguay, miro dónde se te va el tiempo y te digo qué automatizaría primero. Si de ahí sale un proyecto se cotiza, y si no, te quedás igual con la lista de qué conviene arreglar. Lo pedís por el formulario de esta página o por WhatsApp al +598 92 061 005.",
      },
      {
        q: "¿Trabajás con tiendas de e-commerce uruguayas?",
        a: "Sí. Papurro está en Uruguay y trabaja con tiendas de e-commerce que operan acá, en castellano y en horario uruguayo. También atiende, en remoto, tiendas de Argentina (en castellano) y de Estados Unidos (en inglés).",
      },
      {
        q: "¿Qué se puede automatizar en una tienda de e-commerce en Uruguay?",
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
    idioma: "es",
    title: "Automatización e-commerce en Argentina · Papurro",
    description:
      "Automatización, IA aplicada, atención al cliente y optimización para tiendas de e-commerce en Argentina. Una persona, presupuesto por proyecto. info@papurro.com.",
    h1: "automatización de e-commerce en",
    h1Marker: "Argentina",
    resumen:
      "Papurro trabaja con tiendas de e-commerce que venden en Argentina: automatiza tareas repetitivas, " +
      "aplica IA donde realmente sirve, ordena la atención al cliente y optimiza la tienda. " +
      "Es una sola persona, cotiza por proyecto y contesta los mails en 24 a 48 horas hábiles.",
    intro: [
      "Vender en Argentina tiene un deporte extra: todo cambia. Precios, costos, promociones bancarias, cuotas. Y cada cambio, si lo hacés a mano, son horas de planilla y errores que aparecen en el peor momento.",
      "Trabajo remoto con tiendas de e-commerce argentinas para sacar ese trabajo manual del medio, empezando por lo que más tiempo te come hoy.",
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
        q: "¿Trabajás con tiendas de e-commerce de Argentina?",
        a: "Sí, en remoto y en castellano. Papurro está en Uruguay y trabaja con tiendas de e-commerce de Argentina y Uruguay en castellano, y de Estados Unidos en inglés. Todo se coordina por mail y videollamada.",
      },
      {
        q: "¿Se pueden automatizar las actualizaciones de precios en tu e-commerce?",
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
    slug: "usa",
    nombre: "United States",
    gentilicio: "American",
    bandera: "🇺🇸",
    iso: "US",
    hreflang: "en-US",
    ogLocale: "en_US",
    moneda: "USD",
    idioma: "en",
    title: "E-commerce Automation in the United States · Papurro",
    description:
      "Automation, applied AI, customer support and optimization for e-commerce stores in the United States. One person, project-based pricing. info@papurro.com.",
    h1: "e-commerce automation in the",
    h1Marker: "United States",
    resumen:
      "Papurro works with e-commerce stores that sell in the United States: automating repetitive tasks, " +
      "applying AI where it actually helps, cleaning up customer support and optimizing the store. " +
      "It's one person, quotes by project, and replies to emails within 24 to 48 business hours.",
    intro: [
      "If you run an e-commerce store in the United States, the bottleneck is almost never the store itself: it's everything that happens after checkout. Orders copied by hand into a spreadsheet, shipping notices sent out one by one, questions scattered across email, Instagram and WhatsApp.",
      "I work remotely with US stores to take that manual work out of the picture, starting with whatever is costing you the most time right now.",
    ],
    contexto: [
      {
        titulo: "payments and checkout",
        texto:
          "Stripe, Shopify Payments, PayPal: each one leaves the data in a different format. What can be cleaned up is everything that comes after the charge, so reconciling isn't a separate job in itself.",
      },
      {
        titulo: "shipping and fulfillment",
        texto:
          "UPS, USPS, FedEx, or a 3PL: as long as someone is copying tracking numbers by hand, orders will slip through and customers will keep asking the same question. That flow can be automated end to end.",
      },
      {
        titulo: "sales tax and back office",
        texto:
          "Sales tax across states is handled by your accountant or a tool like Avalara or TaxJar; what can be cleaned up is the bridge, so order data reaches it complete and without retyping anything.",
      },
      {
        titulo: "peak seasons that break support, not the store",
        texto:
          "Black Friday, Cyber Monday and the holiday rush rarely take the store down: they take down customer support. Organized support and answers prepared ahead of time are the difference between selling more and serving customers worse.",
      },
    ],
    ejemplos: [
      "Paid order → automatic entry into your spreadsheet or order management system.",
      "Automatic shipping notification, with the right carrier's tracking number attached.",
      "Stock synced between your e-commerce store and your other sales channels.",
      "Ready-to-send answers for the recurring questions: shipping times, returns, sizing.",
      "Weekly report on sales and stockouts, delivered straight to your inbox.",
    ],
    faqs: [
      {
        q: "What is the 20-minute diagnostic?",
        a: "A short, free, no-strings-attached call. You tell me how your US store runs today, I look at where your time is going, and I tell you what I'd automate first. If a project comes out of it, it gets quoted; if not, you keep the list of what's worth fixing. Book it through the form on this page or on WhatsApp at +598 92 061 005.",
      },
      {
        q: "Do you work with e-commerce stores in the United States?",
        a: "Yes, remotely and in English. Papurro is based in Uruguay and also works with e-commerce stores in Argentina and Uruguay, in Spanish. Everything is coordinated by email and video call.",
      },
      {
        q: "What can be automated in a US e-commerce store?",
        a: "The repetitive stuff: pushing orders into your management system, sending shipping notices with carrier tracking, syncing stock across channels, sending reports, and pulling email and WhatsApp inquiries into one place.",
      },
      {
        q: "How much does it cost?",
        a: "It's quoted per project, not a monthly plan. You tell me what's hurting, I review your setup, and I give you a number. No lock-in, no fine print.",
      },
      {
        q: "Are you an agency?",
        a: "No. Papurro is one person. The same person who replies to you is the one who does the work, within 24 to 48 business hours.",
      },
    ],
  },
];

export const porSlug = (slug: string) => CONTENIDO_PAISES.find((p) => p.slug === slug);
