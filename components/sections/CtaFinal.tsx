import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-md bg-ink px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="float-slow pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-hot/40 blur-3xl" />
          <div aria-hidden="true" className="float-slow pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-cold/40 blur-3xl [animation-delay:-3s]" />
          <div className="relative">
            <p className="eyebrow text-white/70">Devis gratuit</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,1.2rem+2.6vw,3.4rem)] font-bold tracking-[-0.03em] text-white">Parlez-nous de votre projet</h2>
            <p className="mt-4 max-w-lg text-white/75">Décrivez votre besoin, nous vous répondons avec un devis gratuit.</p>

            <a
              href={site.phone.href}
              className="group mt-10 inline-flex items-center gap-4 font-display text-[clamp(1.2rem,1rem+5vw,3.5rem)] font-bold leading-none tracking-[-0.04em]"
            >
              <span className="text-thermal text-thermal-anim">{site.phone.display}</span>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={24} aria-hidden="true" />
              </span>
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink href={site.phone.whatsapp} variant="secondary-light" external>
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
