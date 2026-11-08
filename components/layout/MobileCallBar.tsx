import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold";

/** Barre d'actions fixe sur téléphone : appeler, écrire sur WhatsApp, demander un devis. */
export function MobileCallBar() {
  return (
    <div className="callbar fixed inset-x-0 bottom-0 z-30 flex border-t border-white/10 bg-ink text-white md:hidden">
      <a href={site.phone.href} className={item}>
        <Phone size={16} aria-hidden="true" />
        Appeler
      </a>
      <a href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`}>
        <MessageCircle size={16} aria-hidden="true" />
        WhatsApp
      </a>
      <Link href="/contact" className={`${item} bg-hot-deep`}>
        <FileText size={16} aria-hidden="true" />
        Devis
      </Link>
    </div>
  );
}
