import { MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const towns = ["Particuliers", "Professionnels", "Collectivités", "Dépannage", "Installation", "Entretien"];

export function Zone() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Zone d’intervention</p>
          <h2 className="title-second mt-4 font-bold leading-[0.95] tracking-[-0.04em]">
            Montpellier <span className="text-thermal">et alentours</span>
          </h2>
          <p className="mt-6 max-w-lg text-ink-soft text-[1rem]">
            Vous n’êtes pas sûr que nous intervenions chez vous ? Appelez-nous ou indiquez votre commune dans le formulaire de contact, nous vous répondrons.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.phone.href} variant="secondary">
              <Phone size={18} aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
            <ButtonLink href={site.phone.whatsapp} variant="secondary" external>
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={150} className="relative mx-auto aspect-square w-full max-w-[28rem]" >
          <div aria-hidden="true" className="absolute inset-0 rounded-full border border-line" />
          <div aria-hidden="true" className="absolute inset-[16%] rounded-full border border-dashed border-line" />
          <div aria-hidden="true" className="absolute inset-[33%] rounded-full border border-line" />
          <div aria-hidden="true" className="radar absolute inset-0">
            <span />
            <span />
            <span />
          </div>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="pulse-dot flex h-14 w-14 items-center justify-center rounded-full bg-hot-deep text-white shadow-lg">
              <MapPin size={24} aria-hidden="true" />
            </span>
            <span className="mt-2 rounded-full bg-ink px-3 py-1 text-sm font-semibold text-white">Montpellier</span>
          </div>
          <ul aria-label="Pour qui et pour quoi">
            {towns.map((t, i) => {
              const angle = (i / towns.length) * Math.PI * 2 - Math.PI / 2;
              const r = i % 2 ? 40 : 30;
              return (
                <li
                  key={t}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink-soft shadow-sm"
                  style={{ left: `${50 + Math.cos(angle) * r}%`, top: `${50 + Math.sin(angle) * r}%` }}
                >
                  {t}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
