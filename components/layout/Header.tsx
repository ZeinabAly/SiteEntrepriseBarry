
"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { nav, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { usePathname } from "next/navigation";

// Détection du défilement
const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

const isScrolled = () => window.scrollY > 12;
const notScrolled = () => false;



export function Header() {
  const [open, setOpen] = useState(false);
  //Pour colorer le lien de navigation actif 
  const pathname = usePathname();
  
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    isScrolled,
    notScrolled
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  // Adresse e-mail : A modifier
  const email = "barry010601@gmail.com";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line/70 bg-paper/80 shadow-[0_10px_30px_-18px_rgba(15,35,66,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-paper"
      }`}
    >
      {/* Barre supérieure de contact */}
      <div
        aria-hidden={scrolled}
        className={`overflow-hidden bg-ink text-white transition-all duration-300 ease-in-out ${
          scrolled
            ? "pointer-events-none h-0 opacity-0"
            : "h-9 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-[1180px] items-center justify-between gap-4 px-5 text-[13px] sm:px-8">
          <div className="flex items-center gap-2 whitespace-nowrap text-white/90">
            <MapPin size={16} className="shrink-0 text-hot" />
            <span>Montpellier et alentours</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-hot"
            >
              <Phone size={16} />
              <span>{site.phone.display}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="hidden items-center gap-1.5 whitespace-nowrap transition-colors hover:text-hot sm:inline-flex"
            >
              <Mail size={16} />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 ${
          scrolled ? "h-[64px]" : "h-[78px]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Entreprise Barry, retour à l'accueil"
          className="shrink-0"
          onClick={close}
        >
          <Logo compact={scrolled} priority />
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7"
        >
          {nav.map((item) => (
           <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[15px] font-semibold transition-colors xl:text-[0.95rem] ${
                pathname === item.href
                  ? "text-hot-deep"
                  : "text-ink hover:text-hot-deep"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-hot-deep xl:inline-flex"
          >
            <Phone size={17} aria-hidden="true" />
            {site.phone.display}
          </a>

          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="sm">
              Demander un devis
            </ButtonLink>
          </div>

          {/* Menu mobile/tablette */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white transition-colors hover:border-hot-deep lg:hidden"
          >
            {open ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Fond assombri*/}
      <div
        onClick={close}
        aria-hidden="true"
        className={`absolute inset-x-0 top-full z-0 h-[100dvh] bg-ink/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }
        `}
      />

      {/* Menu mobile/tablette */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open}
        className={`absolute z-10 inset-x-0 top-full grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-line bg-paper px-5 pb-8 pt-2 sm:px-8">
            <nav aria-label="Menu mobile">
              <ul>
                {nav.map((item, i) => (
                  <li
                    key={item.href}
                    className="border-b border-line transition-all duration-500"
                    style={{
                      transitionDelay: open ? `${140 + i * 60}ms` : "0ms",
                      opacity: open ? 1 : 0,
                      transform: open ? "translateY(0)" : "translateY(-12px)",
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-4 font-display text-[15px] font-semibold text-ink transition-colors hover:text-hot-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Coordonnées dans le menu mobile */}
            <div className="mt-6 space-y-4 rounded-xl bg-paper-soft py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                Nous contacter
              </p>

              <div className="flex items-center gap-3 text-sm text-ink">
                <MapPin size={17} className="shrink-0 text-hot-deep" />
                <span>Montpellier et alentours</span>
              </div>

              <a
                href={site.phone.href}
                className="flex items-center gap-3 text-sm font-semibold text-ink hover:text-hot-deep"
              >
                <Phone size={17} className="shrink-0 text-hot-deep" />
                {site.phone.display}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 break-all text-sm text-ink hover:text-hot-deep"
              >
                <Mail size={17} className="shrink-0 text-hot-deep" />
                {email}
              </a>
            </div>

            <div className="mt-6 grid gap-3">
              <ButtonLink href="/contact" className="w-full">
                Demander un devis
              </ButtonLink>

              <div className="grid grid-cols-2 gap-3">
                <ButtonLink href={site.phone.href} variant="secondary">
                  <Phone size={18} aria-hidden="true" />
                  Appeler
                </ButtonLink>

                <ButtonLink
                  href={site.phone.whatsapp}
                  variant="secondary"
                  external
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span aria-hidden="true" className="scroll-progress" />
    </header>
  );
}
