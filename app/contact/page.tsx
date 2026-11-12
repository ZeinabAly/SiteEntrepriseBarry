import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { PipePair } from "@/components/ui/PipePair";
import { Reveal } from "@/components/ui/Reveal";
import { Words } from "@/components/ui/Words";
import { after } from "@/lib/motion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact et demande de devis à Montpellier",
  description:
    "Contactez Entreprise BARRY par téléphone, WhatsApp, e-mail ou formulaire pour un devis gratuit en plomberie, chauffage, climatisation ou nettoyage à Montpellier.",
  path: "/contact",
});

const row = "flex items-start gap-3 border-t border-line py-4 transition-colors duration-300 hover:text-hot-deep";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <div className="ambient" aria-hidden="true" />
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div>
          <PipePair draw className="mb-9" />
          <h1 className="big-title">
            <Words text="Contact et demande de devis" />
          </h1>
          <p className="hero-rise mt-6 max-w-md text-lg text-ink-soft" style={after(0.9)}>
            Appelez-nous, écrivez-nous ou remplissez le formulaire. Le devis est gratuit.
          </p>
          <ul className="mt-10">
            <li>
              <a href={site.phone.href} className={row}>
                <Phone size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Téléphone</span>
                  {site.phone.display}
                </span>
              </a>
            </li>
            <li>
              <a href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer" className={row}>
                <MessageCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  Écrire sur WhatsApp
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={row}>
                <Mail size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">E-mail</span>
                  <span className="break-all">{site.email}</span>
                </span>
              </a>
            </li>
            <li className={`${row} border-b hover:text-ink`}>
              <MapPin size={20} className="mt-1 shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Zone d’intervention</span>
                {site.zone}
              </span>
            </li>
          </ul>
        </div>
        <Reveal delay={200}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
