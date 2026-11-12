import Image from "next/image";

type Props = { tone?: "dark" | "light"; compact?: boolean; priority?: boolean };

/** Logo d'Entreprise BARRY (flamme et flocon) suivi du nom de l'entreprise. */
export function Logo({
  tone = "dark",
  compact = false,
  priority = false,
}: Props) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/brand/logo.png"
        alt="Logo Entreprise BARRY"
        width={42}
        height={42}
        priority
        className="object-contain h-10 w-10"
      />

      <span className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold tracking-wide text-base text-${tone}`}
        >
          ENTREPRISE <span className="text-hot-deep">BARRY</span>
        </span>
        <span className="mt-0.5 font-medium tracking-wide text-muted text-[0.68rem]">
          Notre expertise, votre confort
        </span>
      </span>
    </span>
  );
}
