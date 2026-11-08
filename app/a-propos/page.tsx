import Image from "next/image";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Reveal } from "@/components/ui/Reveal";
import { Words } from "@/components/ui/Words";
import { after } from "@/lib/motion";
import { realisations } from "@/data/realisations";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À propos d'Entreprise Barry",
  description:
    "Entreprise Barry intervient à Montpellier et alentours en plomberie, chauffage, climatisation et nettoyage, pour les particuliers, les professionnels et les collectivités.",
  path: "/a-propos",
});

const photo = realisations.find((p) => p.src.includes("chauffage-module-raccords")) ?? realisations[0];

// Textes d'approche rédigés à partir de la fiche de l'entreprise : à valider par le propriétaire.
const approach = [
  { title: "Comprendre le besoin", text: "Nous commençons par écouter ce qui ne va pas ou ce que vous souhaitez installer." },
  { title: "Expliquer simplement", text: "Nous vous disons ce que nous allons faire et pourquoi, avant d'intervenir." },
  { title: "Intervenir avec soin", text: "Nous travaillons proprement et nous laissons les lieux en ordre." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="ambient" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-20">
          <div>
            <PipePair draw className="mb-9" />
            <h1 className="big-title">
              <Words text="À propos d’Entreprise Barry" />
            </h1>
            <p className="hero-rise mt-6 max-w-xl text-lg text-ink-soft" style={after(0.9)}>
              Entreprise Barry est une entreprise de services qui intervient à {site.zone} pour la plomberie, le chauffage, la climatisation et le nettoyage.
            </p>
            <p className="hero-rise mt-4 max-w-xl text-ink-soft" style={after(1.1)}>
              Nous travaillons pour les {site.audiences.join(", ")}, du dépannage à l’installation complète, avec un seul interlocuteur pour tous ces besoins.
            </p>
          </div>
          <div className="hero-photo relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-md bg-line lg:max-w-none">
            <div className="parallax absolute inset-x-0 -top-[7%] h-[114%]">
              <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <h2 className="title-second">Notre façon de travailler</h2>
          </Reveal>
          <ul className="grid gap-10 sm:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 120}>
                <h3 className="text-xl">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <h2 className="title-second">Nos métiers</h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 2) * 100} className="border-t border-line">
                <a href={`/services/${s.slug}`} className="-mx-3 block rounded-md px-3 py-5 transition-colors duration-300 hover:bg-white hover:text-hot-deep">
                  <span className="font-display text-xl font-semibold">{s.name}</span>
                  <span className="mt-1 block text-ink-soft">{s.summary}</span>
                </a>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-12 max-w-md border-l-2 border-hot pl-5 font-display text-2xl font-medium leading-snug">{site.signature}</p>
          </Reveal>
        </Container>
      </section>

      <CtaFinal />
    </>
  );
}
