import { services } from "@/data/services";
import { site } from "@/data/site";

/**
 * Données structurées Schema.org. Aucune adresse postale n'est déclarée tant
 * qu'elle n'a pas été confirmée : ajoutez la propriété "address" ici une fois
 * les informations officielles connues.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#entreprise`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: "+33765549801",
    email: site.email,
    logo: `${site.url}/brand/logo.png`,
    areaServed: { "@type": "City", name: "Montpellier" },
    slogan: site.signature,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/services/${s.slug}`, areaServed: "Montpellier" },
      })),
    },
  };
}
