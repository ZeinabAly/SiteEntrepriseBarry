import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { byCategory } from "@/data/realisations";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoColumns } from "@/components/ui/PhotoColumns";
import { PipePair } from "@/components/ui/PipePair";
import { Reveal } from "@/components/ui/Reveal";
import { Words } from "@/components/ui/Words";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { after } from "@/lib/motion";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const photos = byCategory(s.slug);
  const others = services.filter((o) => o.slug !== s.slug);
  const name = s.name.toLowerCase();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="ambient" aria-hidden="true" />
        <Container className={`relative grid gap-12 py-12 lg:py-20 ${s.cover ? "lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-20" : ""}`}>
          <div>
            <PipePair draw className="mb-9" />
            <h1 className="text-[clamp(2.1rem,1.25rem+3vw,3.4rem)]">
              <Words text={s.heading} />
            </h1>
            <p className="hero-rise mt-6 max-w-xl text-lg text-ink-soft" style={after(0.9)}>
              {s.lead}
            </p>
            <div className="hero-rise mt-9 flex flex-wrap gap-3" style={after(1.1)}>
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink href={site.phone.href} variant="secondary">
                <Phone size={18} aria-hidden="true" />
                Appeler maintenant
              </ButtonLink>
            </div>
          </div>
          {s.cover && (
            <div className="hero-photo relative mx-auto aspect-[4/3] w-full max-w-[30rem] overflow-hidden rounded-md bg-line lg:aspect-[4/5] lg:max-w-none">
              <div className="parallax absolute inset-x-0 -top-[7%] h-[114%]">
                <Image
                  src={s.cover.src}
                  alt={s.coverAlt ?? s.cover.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <h2 className="text-[clamp(1.7rem,1.2rem+1.6vw,2.4rem)]">Prestations de {name}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {s.prestations.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 2) * 90 + Math.floor(i / 2) * 50} className="border-t border-line">
                <div className="-mx-3 rounded-md px-3 py-4 transition-colors duration-300 hover:bg-paper">
                  <span className="font-semibold">{p.title}</span>
                  {p.detail && <span className="block text-ink-soft">{p.detail}</span>}
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {photos.length > 0 && (
        <section className="py-20 lg:py-28">
          <Container>
            <Reveal>
              <h2 className="text-[clamp(1.7rem,1.2rem+1.6vw,2.4rem)]">Réalisations en {name}</h2>
            </Reveal>
            <div className="mt-10">
              <PhotoColumns items={photos} />
            </div>
          </Container>
        </section>
      )}

      <section className={`${photos.length > 0 ? "bg-white" : ""} py-16 lg:py-20`}>
        <Container>
          <Reveal>
            <h2 className="text-2xl">Nos autres services</h2>
          </Reveal>
          <ul className="mt-6 grid gap-x-12 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 100} className="border-t border-line">
                <Link href={`/services/${o.slug}`} className="-mx-3 block rounded-md px-3 py-4 transition-colors duration-300 hover:bg-paper hover:text-hot-deep">
                  <span className="font-display text-xl font-semibold">{o.name}</span>
                  <span className="mt-1 block text-[0.95rem] text-ink-soft">{o.summary}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaFinal />
    </>
  );
}
