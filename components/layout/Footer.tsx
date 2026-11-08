import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

const linkCls = "hover:text-white hover:underline underline-offset-4";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-28 pt-20 text-white/80 md:pb-10">
      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-hot via-hot-deep to-cold absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs font-display text-lg text-white">{site.signature}</p>
          <p className="mt-3 max-w-xs text-[0.95rem]">
            Plomberie, chauffage, climatisation et nettoyage à {site.zone}.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold tracking-normal text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li>
              <a href={site.phone.href} className={`inline-flex items-center gap-2.5 ${linkCls}`}>
                <Phone size={16} aria-hidden="true" /> {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2.5 ${linkCls}`}>
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`inline-flex items-center gap-2.5 break-all ${linkCls}`}>
                <Mail size={16} aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <MapPin size={16} aria-hidden="true" /> {site.zone}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold tracking-normal text-white">Services</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            {nav.slice(0, 4).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkCls}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold tracking-normal text-white">Informations</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li><Link href="/realisations" className={linkCls}>Réalisations</Link></li>
            <li><Link href="/a-propos" className={linkCls}>À propos</Link></li>
            <li><Link href="/contact" className={linkCls}>Contact et devis</Link></li>
            <li><Link href="/mentions-legales" className={linkCls}>Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite" className={linkCls}>Politique de confidentialité (RGPD)</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1180px] px-5 sm:px-8">
        <p className="border-t border-white/15 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
