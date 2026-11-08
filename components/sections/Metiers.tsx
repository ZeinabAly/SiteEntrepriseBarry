import Link from "next/link";
import { ArrowUpRight, Droplets, Flame, Snowflake, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

/** Chaque métier a sa « température » : c'est le fil conducteur du design. */
const meta: Record<string, { Icon: LucideIcon; tone: string; text: string; reading: string }> = {
  plomberie: { Icon: Droplets, tone: "var(--color-cold-deep)", text: "text-cold-deep", reading: "Eau · 38°" },
  chauffage: { Icon: Flame, tone: "var(--color-hot-deep)", text: "text-hot-deep", reading: "Chaud · 60°" },
  climatisation: { Icon: Snowflake, tone: "var(--color-cold)", text: "text-cold", reading: "Froid · 16°" },
  nettoyage: { Icon: Sparkles, tone: "var(--color-ink)", text: "text-ink", reading: "Net · 100%" },
};

export function Metiers() {
  return (
    <section className="bg-white pb-20 pt-16 lg:pb-28 lg:pt-20">
      <Marquee
        items={["Dépannage", "Chaudières", "Recherche de fuites", "Climatisation", "Chauffe-eau", "Salle de bain", "Nettoyage après travaux"]}
        className="mb-16 border-y border-line py-5 text-ink lg:mb-24"
      />
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Nos métiers</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,1.2rem+2.6vw,3.4rem)] font-bold tracking-[-0.03em]">
              Quatre métiers, <span className="text-thermal">un seul interlocuteur</span>
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Une fuite, un chauffage à entretenir, une climatisation à installer ou un local à remettre en état : un seul numéro suffit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const { Icon, tone, text, reading } = meta[s.slug];
            return (
              <Reveal
                as="article"
                key={s.slug}
                delay={i * 110}
                style={{ "--tone": tone } as React.CSSProperties}
                className="trade-card group flex min-h-[27rem] flex-col rounded-[1.5rem] border border-line bg-paper p-6"
              >
                <div className="flex items-start justify-between">
                  <span className={`trade-strong font-display text-xl font-bold tabular-nums ${text}`}>0{i + 1}</span>
                  {/* <span className="trade-dim rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-soft">{reading}</span> */}
                </div>
                <span className={`trade-strong mt-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110`}>
                  <Icon size={26} aria-hidden="true" className={`${text}`} />
                </span>
                <h3 className="trade-strong mt-6 text-[1.9rem] font-bold">{s.name}</h3>
                <p className="trade-dim mt-2 text-[0.95rem] text-ink-soft">{s.summary}</p>
                <ul className="mt-5 flex-1 text-[0.92rem]">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="trade-dim border-t border-line py-2 text-ink">
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="trade-strong mt-4 inline-flex items-center gap-2 self-start font-semibold after:absolute after:inset-0 after:content-['']"
                >
                  Voir les prestations<span className="sr-only"> de {s.name.toLowerCase()}</span>
                  <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
