import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  /** rise : monte en fondu. fade : fondu seul. draw : pour les conduites (PipePair). */
  variant?: "rise" | "fade" | "draw";
  /** Décalage en millisecondes, pour faire arriver des éléments en cascade. */
  delay?: number;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

/**
 * Fait apparaître son contenu quand il entre dans l'écran. Le comportement est
 * assuré par RevealObserver (un seul observateur pour toute la page).
 */
export function Reveal({ as: Tag = "div", variant = "rise", delay = 0, className, children, style }: Props) {
  return (
    <Tag data-reveal={variant} className={className} style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
