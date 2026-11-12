import { type Category, byCategory, realisations } from "./realisations";

export type Prestation = { title: string; detail?: string };

export type Service = {
  slug: Category;
  name: string;
  /** Une phrase pour les cartes et la page d'accueil. */
  summary: string;
  /** Titre de la page (h1). */
  heading: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  prestations: Prestation[];
  /** Quelques prestations affichées sur la page d'accueil. */
  highlights: string[];
  cover?: (typeof realisations)[number];
  coverAlt?: string;
};

const cover = (src: string) => realisations.find((p) => p.src.includes(src));

/** Source des prestations : fiche de l'entreprise */
export const services: Service[] = [
  {
    slug: "plomberie",
    name: "Plomberie",
    summary: "Dépannage, réparation et installation, du robinet à la salle de bain complète.",
    heading: "Plombier à Montpellier",
    lead: "Fuite, engorgement, robinetterie ou salle de bain à refaire : Entreprise BARRY dépanne, répare et installe à Montpellier et alentours.",
    metaTitle: "Plombier à Montpellier : dépannage, installation, sanitaires",
    metaDescription:
      "Dépannage plomberie à Montpellier : fuites, débouchage, chauffe-eau, sanitaires, salle de bain et cuisine. Demandez votre devis à Entreprise BARRY.",
    prestations: [
      { title: "Sanitaire", detail: "lavabo, évier, WC" },
      { title: "Dépannage", detail: "fuites, engorgements" },
      { title: "Tuyauterie", detail: "PVC, PER, cuivre, multicouche" },
      { title: "Chasse d'eau", detail: "réparation et remplacement" },
      { title: "Mitigeurs et robinetterie", detail: "installation et réparation" },
      { title: "Chauffe-eau", detail: "installation, entretien, dépannage" },
      { title: "Baignoire et receveur de douche", detail: "installation et réparation" },
      { title: "Recherche de fuites", detail: "recherche et réparation" },
      { title: "Débouchage de canalisations" },
      { title: "Salle de bain et cuisine", detail: "rénovation et installation complète" },
    ],
    highlights: ["Dépannage et recherche de fuites", "Chauffe-eau", "Sanitaires et robinetterie", "Salle de bain et cuisine"],
    cover: cover("plomberie-vannes-laiton"),
    coverAlt: "Vannes en laiton et tuyauterie multicouche",
  },
  {
    slug: "chauffage",
    name: "Chauffage",
    summary: "Installation, entretien et dépannage de chaudières et d'équipements de chauffage.",
    heading: "Chauffage à Montpellier",
    lead: "Chaudière, chauffe-eau, équipements de chauffage : installation, entretien et dépannage à Montpellier et alentours.",
    metaTitle: "Chauffage à Montpellier : installation, entretien, dépannage",
    metaDescription:
      "Chauffage à Montpellier : installation de chaudières, chauffe-eau, entretien, maintenance et dépannage. Demandez votre devis à Entreprise BARRY.",
    prestations: [
      { title: "Chaudières", detail: "installation, toutes marques" },
      { title: "Chauffe-eau et équipements de chauffage", detail: "installation, entretien, dépannage" },
      { title: "Entretien et maintenance" },
      { title: "Dépannage", detail: "toutes marques" },
      { title: "Mise en service et réglages" },
      { title: "Optimisation des performances" },
      { title: "Conseils personnalisés" },
    ],
    highlights: ["Installation de chaudières", "Entretien et maintenance", "Dépannage toutes marques", "Mise en service et réglages"],
    cover: cover("chauffage-station-ballon"),
    coverAlt: "Station hydraulique murale raccordée à un ballon",
  },
  {
    slug: "climatisation",
    name: "Climatisation",
    summary: "Installation de climatiseurs split, multisplit et gainables, entretien et dépannage.",
    heading: "Climatisation à Montpellier",
    lead: "Installation, mise en service, entretien et dépannage de climatiseurs split, multisplit et gainables à Montpellier et alentours.",
    metaTitle: "Installation de climatisation à Montpellier : split, multisplit, gainable",
    metaDescription:
      "Installation de climatisation à Montpellier : split, multisplit, gainable. Entretien, recharge de gaz et dépannage. Demandez votre devis à Entreprise BARRY.",
    prestations: [
      { title: "Climatiseurs", detail: "installation split, multisplit, gainable" },
      { title: "Entretien et maintenance" },
      { title: "Dépannage", detail: "toutes marques" },
      { title: "Mise en service et réglages" },
      { title: "Recharge de gaz" },
      { title: "Optimisation des performances" },
      { title: "Conseils personnalisés" },
    ],
    highlights: ["Installation split, multisplit, gainable", "Entretien et recharge de gaz", "Dépannage toutes marques", "Mise en service et réglages"],
    cover: cover("climatisation-split-mural"),
    coverAlt: "Unité intérieure de climatisation murale",
  },
  {
    slug: "nettoyage",
    name: "Nettoyage",
    summary: "Logements, bureaux, commerces et locaux professionnels, y compris après travaux.",
    heading: "Nettoyage professionnel à Montpellier",
    lead: "Nettoyage de logements, bureaux, commerces et locaux professionnels, régulier ou ponctuel, et remise en état après travaux.",
    metaTitle: "Nettoyage professionnel à Montpellier : logements, bureaux, commerces",
    metaDescription:
      "Nettoyage professionnel à Montpellier : logements, bureaux, commerces, copropriétés, fin de chantier et remise en état après travaux. Devis à Entreprise BARRY.",
    prestations: [
      { title: "Nettoyage pour particuliers", detail: "logements" },
      { title: "Nettoyage professionnel", detail: "bureaux, commerces, locaux" },
      { title: "Remise en état après travaux" },
      { title: "Nettoyage de fin de chantier" },
      { title: "Entretien", detail: "régulier ou ponctuel" },
      { title: "Nettoyage de vitres" },
      { title: "Nettoyage de copropriétés" },
      { title: "Désinfection et assainissement" },
    ],
    highlights: ["Logements et bureaux", "Commerces et locaux professionnels", "Après travaux et fin de chantier", "Désinfection et assainissement"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const hasPhotos = (slug: Category) => byCategory(slug).length > 0;
