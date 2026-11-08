import Image from "next/image";
import { homeSelection } from "@/data/realisations";
import { categoryLabels } from "@/data/realisations";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Bande de photos qui glisse horizontalement pendant le défilement de la page. */
export function GaleriePreview() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Sur le terrain</p>
            <h2 className="title-second mt-4 font-bold tracking-[-0.03em]">Quelques réalisations</h2>
            <p className="mt-4 max-w-xl text-ink-soft text-[1rem]">Des photos de nos interventions, prises sur le terrain.</p>
          </div>
          <ButtonLink href="/realisations" variant="secondary">
            Voir toutes les réalisations
          </ButtonLink>
        </Reveal>
        
      </Container>

      <div className="strip mt-12 overflow-x-auto px-5 sm:px-8 mx-5 cursor-grab">
        <ul className="slide-on-view flex w-max gap-5 lg:pl-[max(2rem,calc((100vw-1180px)/2))]">
          {homeSelection.map((p, i) => (
            <li key={p.src} className={`group relative w-[16rem] shrink-0 sm:w-[19rem] ${i % 2 ? "lg:mt-16" : ""}`}>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-line">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="304px"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 motion-reduce:transition-none"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {categoryLabels[p.category]}
                  </span>
                </div>
                <figcaption className="mt-3 text-sm leading-snug text-ink-soft">{p.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
