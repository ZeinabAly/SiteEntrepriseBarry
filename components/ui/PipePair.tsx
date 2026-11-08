type Props = { className?: string; draw?: boolean; reveal?: boolean; delay?: number };

/** draw : se trace à l'ouverture de la page. reveal : se trace en entrant dans l'écran. */
export function PipePair({ className = "", draw = false, reveal = false, delay = 0 }: Props) {
  const extra = draw
    ? { "data-draw": "" }
    : reveal
      ? { "data-reveal": "draw", style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties }
      : {};
  return <span aria-hidden="true" className={`pipes ${className}`} {...extra} />;
}
