import Image from "next/image";
import { realisations } from "@/data/realisations";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const photo = realisations.find((p) => p.src.includes("plomberie-colonne-cuivre")) ?? realisations[0];

export function Presentation() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal variant="fade" className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <div className="scale-on-view relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-line">
            <div className="parallax-view absolute inset-x-0 -top-[6%] h-[112%]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
            </div>
          </div>
          <div aria-hidden="true" className="spin-slow absolute -right-8 -top-8 flex h-28 w-28 items-center justify-center rounded-full bg-ink text-white">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <defs>
                <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-white text-[10.5px] font-semibold uppercase tracking-[0.2em]">
                <textPath href="#circle">Montpellier · Devis gratuit · </textPath>
              </text>
            </svg>
            <span className="h-3 w-3 rounded-full bg-hot" />
          </div>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Qui sommes-nous</p>
          <h2 className="title-second mt-4 font-bold tracking-[-0.03em]">Une entreprise au service de votre confort</h2>
          <p className="mt-6 max-w-xl text-[1rem] text-ink-soft">
            Entreprise Barry intervient à Montpellier et dans ses environs pour la plomberie, le chauffage, la climatisation et le nettoyage. Nous accompagnons les {site.audiences.join(", ")}, du dépannage à l’installation complète.
          </p>
          <blockquote className="mt-10 rounded-[1.25rem] bg-paper p-7">
            <p className="font-display text-[clamp(1.6rem,1.1rem+1.6vw,2.4rem)] font-bold leading-tight tracking-tight">
              <span className="text-thermal text-thermal-anim">{site.signature}</span>
            </p>
            <footer className="mt-3 text-sm font-semibold text-ink-soft">- {site.name}</footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
