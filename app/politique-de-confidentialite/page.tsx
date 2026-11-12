import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Todo } from "@/components/ui/Todo";
import { legal, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Politique de confidentialité (RGPD)",
    description: "Comment Entreprise BARRY traite les données personnelles collectées sur son site.",
    path: "/politique-de-confidentialite",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <PipePair className="mb-9" />
        <h1 className="big-title">Politique de confidentialité</h1>
        <div className="prose-legal mt-6">
          <p>
            Cette page décrit les données personnelles collectées par ce site et la manière dont elles sont utilisées, conformément au règlement général sur la protection des données (RGPD). 
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            {site.name}, {legal.legalForm}. Contact : <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Données collectées</h2>
          <p>Lorsque vous envoyez une demande de devis par le formulaire de contact, nous collectons :</p>
          <ul>
            <li>votre nom et prénom ;</li>
            <li>votre numéro de téléphone et votre adresse e-mail (au moins l’un des deux) ;</li>
            <li>votre commune, votre type de client et le type de prestation souhaité ;</li>
            <li>le message décrivant votre besoin.</li>
          </ul>
          <p>
            Si vous nous appelez, nous écrivez par e-mail ou par WhatsApp, les échanges sont soumis aux conditions de ces services.
          </p>

          <h2>Pourquoi ces données sont utilisées</h2>
          <p>
            Ces données servent uniquement à répondre à votre demande et à établir un devis. Elles ne sont ni vendues ni utilisées pour de la prospection sans votre accord. Base légale : votre consentement, donné en cochant la case du formulaire et les mesures précontractuelles prises à votre demande.
          </p>

          <h2>Qui reçoit ces données</h2>
          <p>
            Les données collectées par le formulaire sont transmises à Entreprise BARRY par l'intermédiaire du service Formspree, qui assure la réception et l'acheminement des formulaires. Selon la configuration du service, une notification est envoyée à l'adresse e-mail de l'entreprise.

            <br /> <br />Entreprise BARRY est responsable du traitement de vos données personnelles. Formspree intervient en qualité de sous-traitant technique.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données relatives aux demandes de devis qui n'aboutissent pas à une prestation sont conservées pendant une durée maximale de trois ans à compter de leur collecte ou du dernier contact émanant du prospect.

            <br /> <br /> Lorsqu'une prestation est réalisée, les documents nécessaires à la gestion de la relation commerciale et au respect des obligations légales peuvent être conservés pendant les durées prévues par la réglementation applicable.

            <br /> <br />Les données enregistrées dans Formspree sont également soumises aux modalités de conservation et de suppression de ce prestataire.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l’accès à vos données, leur rectification, leur effacement, la limitation ou l’opposition à leur traitement, ainsi que leur portabilité, en écrivant à <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez retirer votre consentement à tout moment. Vous avez aussi le droit d’introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">cnil.fr</a>).
          </p>

          <h2>Cookies et suivi</h2>
          <p>
            Ce site ne dépose aucun cookie publicitaire ni outil de mesure d’audience. Si de tels outils sont ajoutés plus tard, cette page sera mise à jour et votre consentement sera demandé.
          </p>

          <p>Dernière mise à jour : {legal.lastUpdate}</p>
        </div>
      </Container>
    </section>
  );
}
