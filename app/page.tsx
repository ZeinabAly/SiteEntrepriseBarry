import { CtaFinal } from "@/components/sections/CtaFinal";
import { GaleriePreview } from "@/components/sections/GaleriePreview";
import { Hero } from "@/components/sections/Hero";
import { Interventions } from "@/components/sections/Interventions";
import { Metiers } from "@/components/sections/Metiers";
import { Pourquoi } from "@/components/sections/Pourquoi";
import { Presentation } from "@/components/sections/Presentation";
import { Zone } from "@/components/sections/Zone";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plombier, chauffage, climatisation et nettoyage à Montpellier",
  description:
    "Entreprise BARRY : dépannage plomberie, chauffage, installation de climatisation et nettoyage professionnel à Montpellier et alentours. Devis gratuit.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Metiers />
      <Interventions />
      <Pourquoi />
      <GaleriePreview />
      <Presentation />
      <Zone />
      <CtaFinal />
    </>
  );
}
