import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Todo } from "@/components/ui/Todo";
import { legal, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Mentions légales",
    description: "Mentions légales du site d'Entreprise BARRY.",
    path: "/mentions-legales",
  }),
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <PipePair className="mb-9" />
        <h1 className="big-title">Mentions légales</h1>
        <div className="prose-legal mt-6">
          <p>
            Les présentes mentions légales précisent les informations relatives à l'éditeur du site Entreprise BARRY, conformément à la réglementation en vigueur.

Les informations concernant l'entreprise sont présentées dans les différentes rubriques ci-dessous.
          </p>

          <h2>Éditeur du site</h2>
          <ul>
            <li>Nom commercial : {site.name}</li>
            <li>Forme juridique : {legal.legalForm}</li>
            <li>Numéro SIRET : {legal.siret}</li>
            <li>Directeur de la publication : {legal.publicationDirector}</li>
            <li>Téléphone : <a href={site.phone.href}>{site.phone.display}</a></li>
            <li>E-mail : <a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>

          <h2>Hébergement</h2>
          <p>Hébergeur du site : <Todo>{legal.host}</Todo> (nom, adresse et contact de l’hébergeur).</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, photographies et éléments graphiques de ce site sont la propriété d’{site.name}, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            {site.name} s’efforce de fournir des informations exactes sur ce site. Elles sont données à titre indicatif et peuvent être modifiées sans préavis. Les devis sont établis après échange sur le besoin.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données personnelles est décrit dans la <a href="/politique-de-confidentialite">politique de confidentialité</a>.
          </p>

          <p>Dernière mise à jour : {legal.lastUpdate}</p>
        </div>
      </Container>
    </section>
  );
}
