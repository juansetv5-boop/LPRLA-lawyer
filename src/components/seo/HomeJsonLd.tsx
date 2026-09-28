import { JsonLd } from './JsonLd';

export function HomeJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": "https://rlpcompliance.com/#organization",
    "name": "RLP.sas — Representación Legal Popayán",
    "alternateName": ["RLP.sas", "Representación Legal Popayán"],
    "url": "https://rlpcompliance.com",
    "telephone": "+573168505478",
    "email": "robinsonluna@rlpcompliance.com",
    "description": "Firma de abogados en Popayán especializada en defensa penal, disciplinaria, responsabilidad fiscal y compliance corporativo. Atención inmediata 24/7.",
    "priceRange": "$$",
    "image": "https://rlpcompliance.com/logo-divider.png",
    "logo": "https://rlpcompliance.com/logo-divider.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Centro Histórico",
      "addressLocality": "Popayán",
      "addressRegion": "Cauca",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 2.4419,
      "longitude": -76.6063
    },
    "areaServed": [
      { "@type": "City", "name": "Popayán" },
      { "@type": "State", "name": "Cauca" },
      { "@type": "Country", "name": "Colombia" }
    ],
    "knowsLanguage": "es",
    "founder": {
      "@type": "Person",
      "name": "Robinson Luna",
      "jobTitle": "Director"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Legales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Defensa Penal Estratégica",
            "description": "Control inmediato de imputaciones y movimientos tempranos ante la Fiscalía."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Defensa Disciplinaria",
            "description": "Actuación técnica frente a investigaciones que cuestan el cargo y la reputación."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsabilidad Fiscal",
            "description": "Blindaje patrimonial ante hallazgos de entes de control territorial y nacional."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Compliance y Defensa Preventiva",
            "description": "Estructuras de cumplimiento y estrategias preventivas que reducen exposición penal y sancionatoria."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": []
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rlpcompliance.com/#website",
    "url": "https://rlpcompliance.com",
    "name": "RLP.sas — Abogados en Popayán",
    "description": "Firma de abogados en Popayán especializada en defensa penal, compliance y asesoría legal.",
    "publisher": { "@id": "https://rlpcompliance.com/#organization" },
    "inLanguage": "es"
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://rlpcompliance.com/#webpage",
    "url": "https://rlpcompliance.com",
    "name": "Abogados en Popayán | Defensa Penal, Disciplinaria y Compliance | RLP.sas",
    "description": "Abogados penalistas en Popayán, Cauca. Defensa penal estratégica, procesos disciplinarios, responsabilidad fiscal y compliance corporativo.",
    "isPartOf": { "@id": "https://rlpcompliance.com/#website" },
    "about": { "@id": "https://rlpcompliance.com/#organization" },
    "inLanguage": "es",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".gold-text-gradient", "[aria-label]"]
    },
    "lastReviewed": new Date().toISOString().split('T')[0],
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://rlpcompliance.com"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué hacer si me notifican una investigación penal en Popayán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lo primero es contactar a un abogado penalista de inmediato. En RLP.sas respondemos en menos de 60 minutos. Es crítico no rendir declaraciones sin asesoría técnica y asegurar que sus derechos estén protegidos desde el primer momento procesal."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta un abogado penal en Popayán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los honorarios varían según la complejidad del caso. En RLP.sas realizamos una evaluación estratégica inicial para determinar el alcance de la defensa. Contáctenos al +57 316 850 5478 para una consulta confidencial."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es compliance y por qué lo necesita mi empresa en Colombia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compliance es un sistema de cumplimiento normativo que previene riesgos legales, penales y sancionatorios. En Colombia, es esencial para empresas y entidades públicas que buscan blindar sus operaciones frente a investigaciones de entes de control."
        }
      },
      {
        "@type": "Question",
        "name": "¿RLP.sas atiende casos fuera de Popayán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Aunque nuestra sede está en el Centro Histórico de Popayán, atendemos casos en todo el departamento del Cauca y a nivel nacional en Colombia. Ofrecemos atención remota a través de WhatsApp y videoconferencia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de casos maneja RLP.sas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos especializamos en defensa penal estratégica, procesos disciplinarios, responsabilidad fiscal ante entes de control, y compliance corporativo. Atendemos funcionarios públicos, empresas privadas y particulares bajo investigación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el mejor abogado penal en Popayán?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RLP.sas, dirigida por Robinson Luna, es una firma reconocida en Popayán especializada exclusivamente en defensa penal, disciplinaria y compliance. Su metodología de defensa estratégica en 4 fases y atención 24/7 la distinguen en el Cauca."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito un abogado si me citan a declarar ante la Fiscalía en Colombia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Cualquier citación de la Fiscalía puede derivar en una imputación formal. Es fundamental contar con un abogado penalista antes de rendir cualquier declaración. En RLP.sas ofrecemos acompañamiento inmediato desde el primer contacto con la autoridad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la responsabilidad fiscal y cómo me afecta como funcionario público?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La responsabilidad fiscal es el proceso mediante el cual la Contraloría busca el resarcimiento de daños al patrimonio público. Si usted es funcionario o exfuncionario público, puede enfrentar investigaciones que comprometan su patrimonio personal. En RLP.sas ofrecemos blindaje patrimonial especializado."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={organizationData} />
      <JsonLd data={webSiteData} />
      <JsonLd data={webPageData} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />
    </>
  );
}
