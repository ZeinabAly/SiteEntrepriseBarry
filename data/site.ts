/**
 * Informations communes du site. Modifiez ce fichier pour changer les
 * coordonnées, la navigation ou la zone d'intervention partout à la fois.
 */

export const TODO = "[À compléter]";

export const site = {
  name: "Entreprise Barry",
  signature: "Notre expertise, votre confort !",
  description:
    "Plomberie, chauffage, climatisation et nettoyage à Montpellier et alentours, pour les particuliers, les professionnels et les collectivités.",
  // Renseignez NEXT_PUBLIC_SITE_URL avant la mise en ligne (voir README).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  phone: {
    display: "07 65 54 98 01",
    href: "tel:+33765549801",
    whatsapp: "https://wa.me/33765549801",
  },
  email: "barry010601@gmail.com",
  zone: "Montpellier et alentours",
  audiences: ["particuliers", "professionnels", "collectivités"],
} as const;

export const nav = [
  { label: "Plomberie", href: "/services/plomberie" },
  { label: "Chauffage", href: "/services/chauffage" },
  { label: "Climatisation", href: "/services/climatisation" },
  { label: "Nettoyage", href: "/services/nettoyage" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
] as const;

/** Informations légales : à remplir avec les données officielles de l'entreprise. */
export const legal = {
  legalForm: "Entrepreneur individuel",
  siret: "949 706 766 00019",
  headOffice: TODO,
  publicationDirector: "Mamadou BARRY",
  host: TODO,
  retention: TODO,
  lastUpdate: "8 novembre 2026.",
} as const;
