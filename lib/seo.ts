import type { Metadata } from "next";

type Input = { title: string; description: string; path: string };

const ogImage = { url: "/og.png", width: 1200, height: 630, alt: "Entreprise Barry, plomberie, chauffage, climatisation et nettoyage" };

/** Métadonnées d'une page : titre, description, URL canonique et Open Graph. */
export function pageMetadata({ title, description, path }: Input): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "fr_FR", siteName: "Entreprise Barry", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
