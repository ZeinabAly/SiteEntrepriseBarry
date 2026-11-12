import { GalleryFilter } from "@/components/sections/GalleryFilter";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Words } from "@/components/ui/Words";
import { after } from "@/lib/motion";
import { availableCategories, categoryLabels, realisations } from "@/data/realisations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Réalisations : plomberie, chauffage, climatisation à Montpellier",
  description:
    "Photos de chantiers et d'équipements d'Entreprise BARRY à Montpellier et alentours : plomberie, chauffage et climatisation.",
  path: "/realisations",
});

export default function RealisationsPage() {
  const categories = availableCategories.map((id) => ({ id, label: categoryLabels[id] }));
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="ambient" aria-hidden="true" />
        <Container className="relative py-12 lg:py-20">
          <PipePair draw className="mb-9" />
          <h1 className="big-title">
            <Words text="Réalisations" />
          </h1>
          <p className="hero-rise mt-6 max-w-xl text-lg text-ink-soft" style={after(0.6)}>
            Des photos de nos interventions à Montpellier et alentours. Cliquez sur une photo pour l’agrandir.
          </p>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <GalleryFilter items={realisations} categories={categories} />
        </Container>
      </section>
      <CtaFinal />
    </>
  );
}
