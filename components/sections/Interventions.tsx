import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Reveal } from "@/components/ui/Reveal";

const rows = [
  { title: "Dépannage et réparation", text: "Fuite, panne de chauffage, climatiseur à l'arrêt : nous diagnostiquons et nous réparons." },
  { title: "Installation", text: "Sanitaires, chauffe-eau, chaudière, climatiseur : pose, mise en service et réglages." },
  { title: "Entretien et maintenance", text: "Un entretien régulier de vos équipements de chauffage et de climatisation, et de vos locaux." },
  { title: "Nettoyage après travaux", text: "Remise en état des logements, bureaux et commerces à la fin d'un chantier." },
];

/** Section sombre : titre collant à gauche, interventions qui défilent à droite. */
export function Interventions() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div aria-hidden="true" className="spin-slow pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full opacity-30 [background:conic-gradient(from_0deg,var(--color-hot),transparent_30%,var(--color-cold)_60%,transparent_85%)] blur-3xl" />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <PipePair reveal className="mb-8 max-w-[5rem]" />
          <h2 className="title-second font-bold tracking-[-0.03em] text-white">
            Ce que nous faisons <span className="outline-text text-white/90">pour vous</span>
          </h2>
          <p className="mt-5 max-w-sm text-white/70">Quatre types d’interventions, dans chacun de nos métiers.</p>
        </Reveal>
        <ol>
          {rows.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 110} className="group border-t border-white/15 last:border-b">
              <div className="relative grid gap-3 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                <span className="font-display text-4xl font-bold leading-none text-white transition-colors duration-500 group-hover:text-hot">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-2">{r.title}</h3>
                  <p className="mt-2 max-w-lg text-white/70">{r.text}</p>
                </div>
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-hot to-cold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
