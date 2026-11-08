import Image from "next/image";
import type { Realisation } from "@/data/realisations";
import { Reveal } from "./Reveal";

/** Photos en colonnes : chaque image garde ses proportions, sans recadrage. */
export function PhotoColumns({ items }: { items: Realisation[] }) {
  return (
    <ul className="columns-2 gap-4 md:columns-3 md:gap-6">
      {items.map((p, i) => (
        <Reveal as="li" key={p.src} delay={(i % 3) * 100} className="mb-4 break-inside-avoid md:mb-6">
          <figure className="group">
            <div className="overflow-hidden rounded-[1.25rem] bg-line">
              <Image
                src={p.src}
                width={p.width}
                height={p.height}
                alt={p.alt}
                sizes="(min-width: 1180px) 380px, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-snug text-ink-soft">{p.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
