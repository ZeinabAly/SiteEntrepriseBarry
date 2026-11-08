"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import { ArrowDownRight, Phone } from "lucide-react";
import { heroPhoto, realisations } from "@/data/realisations";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Words } from "@/components/ui/Words";

const after = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;
const second = realisations.find((p) => p.src.includes("climatisation-split-mural")) ?? realisations[3];

/**
 * Hero « thermostat » : la lueur suit le pointeur. À gauche il fait chaud
 * (chauffage), à droite il fait froid (climatisation). Le cadran affiche la
 * température correspondante.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [t, setT] = useState(0.3);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--t", x.toFixed(3));
    setT(x);
  };

  const temp = Math.round(60 - t * 44); // 60 °C → 16 °C
  const mode = t < 0.45 ? "Chauffage" : t > 0.6 ? "Climatisation" : "Plomberie";

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden border-b border-line"
      style={{ "--t": 0.3 } as CSSProperties}
    >
      <div className="grid-lines" aria-hidden="true" />
      <div className="thermal-field" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <p className="hero-rise eyebrow" style={after(0.1)}>
            Disponible à {site.zone}
          </p>
          <h1 className="big-title mt-7 font-bold leading-[0.98] tracking-[-0.035em]">
            <Words text="Plomberie, chauffage," />{" "}
            <Words text="climatisation" start={3} className="text-thermal text-thermal-anim" />{" "}
            <Words text="et nettoyage à Montpellier" start={4} />
          </h1>
          <p className="hero-rise mt-7 max-w-[33rem] text-lg text-ink-soft" style={after(1.1)}>
            Une seule entreprise pour dépanner, installer et entretenir. Pour les particuliers, les professionnels et les collectivités.
          </p>
          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={after(1.3)}>
            <ButtonLink href="/contact">
              Demander un devis gratuit
              <ArrowDownRight size={18} aria-hidden="true" className="-rotate-90" />
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary">
              <Phone size={18} aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
          </div>

          <dl className="hero-rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6" style={after(1.5)}>
            {[
              ["4", "métiers réunis"],
              ["1", "seul numéro"],
              ["0 €", "pour le devis"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight">{n}</dd>
                <dd className="mt-1 text-sm text-ink-soft">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Composition photo + cadran */}
        <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
          <div className="hero-photo relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-line shadow-[0_40px_80px_-40px_rgba(15,35,66,0.55)]">
            <div className="parallax absolute inset-x-0 -top-[7%] h-[114%]">
              <Image src={heroPhoto.src} alt={heroPhoto.alt} fill priority sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/90">{heroPhoto.caption}</p>
          </div>

          <div className="hero-rise float-slow absolute -left-6 top-10 hidden w-36 overflow-hidden rounded-2xl border-4 border-paper bg-line shadow-xl sm:block lg:-left-14" style={after(1.6)}>
            <Image src={second.src} alt="" width={second.width} height={second.height} sizes="144px" className="h-auto w-full" />
          </div>

          {/* Thermostat */}
          <div
            className="hero-rise absolute -bottom-8 -right-3 w-44 rounded-[1.5rem] border border-line bg-white/90 p-4 shadow-[0_24px_50px_-24px_rgba(15,35,66,0.5)] backdrop-blur sm:-right-8"
            style={after(1.8)}
            aria-hidden="true"
          >
            <div className="relative mx-auto aspect-square w-28">
              <div className="dial-ring absolute inset-0 rounded-full" />
              <div className="dial-needle absolute inset-3 rounded-full">
                <span className="absolute left-1/2 top-0 h-3 w-1 -translate-x-1/2 rounded-full bg-ink" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-3xl font-bold tabular-nums tracking-tight">{temp}°</span>
              </div>
            </div>
            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{mode}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
