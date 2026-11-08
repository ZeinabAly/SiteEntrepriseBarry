import { Building2, FileText, Handshake, PhoneCall, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const reasons: { title: string; text: string; Icon: LucideIcon; cls: string }[] = [
  { Icon: Handshake, title: "Un seul interlocuteur", text: "Plomberie, chauffage, climatisation et nettoyage : vous appelez le même numéro, quel que soit le besoin.", cls: "lg:col-span-2 bg-hot-deep text-white" },
  { Icon: Building2, title: "Tous types de clients", text: "Particuliers, professionnels et collectivités : logement, bureau, commerce ou bâtiment public.", cls: "bg-paper" },
  { Icon: FileText, title: "Un devis gratuit", text: "Décrivez votre besoin par téléphone, par WhatsApp ou avec le formulaire de contact.", cls: "bg-paper" },
  { Icon: PhoneCall, title: "Un contact direct", text: "Téléphone, WhatsApp ou e-mail : vous choisissez le moyen qui vous convient.", cls: "lg:col-span-2 bg-ink text-white" },
];

export function Pourquoi() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="eyebrow">Pourquoi nous</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,1.2rem+2.6vw,3.4rem)] font-bold tracking-[-0.03em]">Pourquoi choisir Entreprise Barry ?</h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, text, cls }, i) => {
            const colored = cls.includes("text-white");
            return (
              <Reveal as="li" key={title} delay={i * 100} className={`group relative overflow-hidden rounded-[1.5rem] p-8 transition-transform duration-500 hover:-translate-y-1 ${cls}`}>
                <Icon
                  aria-hidden="true"
                  size={160}
                  strokeWidth={1}
                  className={`pointer-events-none absolute -bottom-8 -right-6 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110 ${colored ? "text-white/15" : "text-ink/[0.06]"}`}
                />
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${colored ? "bg-white/15" : "bg-white text-ink shadow-sm"}`}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className={`mt-10 text-2xl font-bold ${colored ? "text-white" : ""}`}>{title}</h3>
                <p className={`relative mt-2 max-w-md ${colored ? "text-white/85" : "text-ink-soft"}`}>{text}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
