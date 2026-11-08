export type Category = "plomberie" | "chauffage" | "climatisation" | "nettoyage";

export type Realisation = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: Category;
};

export const categoryLabels: Record<Category, string> = {
  plomberie: "Plomberie",
  chauffage: "Chauffage",
  climatisation: "Climatisation",
  nettoyage: "Nettoyage",
};

/**
 * Seules des photos réellement fournies par l'entreprise figurent ici.
 * Pour ajouter une réalisation : déposez l'image dans public/realisations
 * puis ajoutez une ligne. Une catégorie sans photo n'est pas affichée.
 */
const r = (
  category: Category,
  file: string,
  width: number,
  height: number,
  caption: string,
  alt = caption,
): Realisation => ({ category, src: `/realisations/${file}.jpg`, width, height, caption, alt });

export const realisations: Realisation[] = [
  r("chauffage", "chauffage-station-hydraulique", 1125, 1500, "Station hydraulique et vase d'expansion", "Station hydraulique murale avec deux manomètres, rouge et bleu, et vase d'expansion blanc"),
  r("plomberie", "plomberie-vannes-laiton", 844, 1500, "Vannes en laiton et tuyauterie multicouche"),
  r("chauffage", "chauffage-module-mural", 1125, 1500, "Module mural avec commande et manomètre"),
  r("climatisation", "climatisation-split-mural", 1500, 1125, "Unité intérieure murale"),
  r("chauffage", "chauffage-station-ballon", 1125, 1500, "Station hydraulique raccordée à un ballon"),
  r("climatisation", "climatisation-unite-exterieure", 1125, 1500, "Unité extérieure fixée au mur"),
  r("plomberie", "plomberie-wc", 1125, 1500, "WC avec réservoir et flexible d'alimentation"),
  r("chauffage", "chauffage-radiateur", 1125, 1500, "Radiateur mural"),
  r("plomberie", "plomberie-raccords-ballon", 844, 1500, "Raccordements hydrauliques d'un ballon"),
  r("climatisation", "climatisation-split-ouvert", 1500, 1125, "Unité intérieure, façade ouverte"),
  r("chauffage", "chauffage-collecteur-filtre", 1125, 1500, "Collecteur laiton avec filtre et vannes"),
  r("plomberie", "plomberie-groupe-securite", 1125, 1500, "Groupe de sécurité et siphon d'un chauffe-eau"),
  r("chauffage", "chauffage-module-raccords", 1125, 1500, "Tuyauterie isolée sous un module mural"),
  r("climatisation", "climatisation-raccordement", 1125, 1500, "Raccordement électrique d'une unité extérieure"),
  r("plomberie", "plomberie-colonne-cuivre", 844, 1500, "Colonne cuivre et filtre"),
  r("chauffage", "chauffage-ballon-regulation", 845, 1500, "Ballon et module de régulation"),
];

export const heroPhoto = realisations[0];

export const byCategory = (category: Category) => realisations.filter((p) => p.category === category);

export const availableCategories = (Object.keys(categoryLabels) as Category[]).filter(
  (c) => byCategory(c).length > 0,
);

/** Sélection affichée sur la page d'accueil (un mélange des trois métiers). */
export const homeSelection = [1, 2, 3, 4, 5, 6, 9].map((i) => realisations[i]);
