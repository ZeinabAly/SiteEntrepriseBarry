import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <PipePair className="mb-9 max-w-xs" />
        <h1 className="big-titble">Cette page n’existe pas</h1>
        <p className="mt-6 max-w-md text-lg text-ink-soft">Le lien est peut-être incorrect ou la page a été déplacée.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Nous contacter</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
