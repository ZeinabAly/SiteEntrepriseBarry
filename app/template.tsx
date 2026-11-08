import { RevealObserver } from "@/components/layout/RevealObserver";

/** Recréé à chaque navigation : fondu d'entrée de la page et relance des apparitions. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter">
      {children}
      <RevealObserver />
    </div>
  );
}
