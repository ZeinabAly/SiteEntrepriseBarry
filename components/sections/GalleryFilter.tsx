"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import type { Category, Realisation } from "@/data/realisations";

type Props = { items: Realisation[]; categories: { id: Category; label: string }[] };

export function GalleryFilter({ items, categories }: Props) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<Realisation | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? items : items.filter((p) => p.category === filter);
  const tabs = [{ id: "all" as const, label: "Toutes" }, ...categories];

  const open = (p: Realisation) => {
    setActive(p);
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <div role="group" aria-label="Filtrer par métier" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={filter === t.id}
            onClick={() => setFilter(t.id)}
            className={`h-11 rounded-full border-[1.5px] px-5 text-[0.95rem] font-semibold transition duration-200 motion-reduce:transition-none ${
              filter === t.id ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul key={filter} className="mt-10 columns-2 gap-4 md:columns-3 md:gap-6">
        {visible.map((p, i) => (
          <li key={p.src} className="gallery-item mb-4 break-inside-avoid md:mb-6" style={{ "--i": Math.min(i, 12) } as React.CSSProperties}>
            <figure className="group">
              <button type="button" onClick={() => open(p)} aria-label={`Agrandir la photo : ${p.caption}`} className="block w-full overflow-hidden rounded-[1.25rem] bg-line">
                <Image
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  sizes="(min-width: 1180px) 380px, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full cursor-zoom-in transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </button>
              <figcaption className="mt-2 text-sm leading-snug text-ink-soft">{p.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label="Photo agrandie"
        className="m-auto max-h-[92vh] max-w-[min(92vw,900px)] rounded-lg bg-white p-3 backdrop:bg-ink/80"
      >
        {active && (
          <figure>
            <Image
              src={active.src}
              width={active.width}
              height={active.height}
              alt={active.alt}
              sizes="92vw"
              className="mx-auto h-auto max-h-[78vh] w-auto max-w-full rounded-md"
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 px-1 text-sm text-ink-soft">
              {active.caption}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-line px-4 font-semibold text-ink hover:border-ink"
              >
                <X size={16} aria-hidden="true" /> Fermer
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
