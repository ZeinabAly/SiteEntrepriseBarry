import { Fragment } from "react";

/** Bandeau qui défile en continu (s'arrête au survol et si l'animation est réduite). */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const track = (hidden: boolean) => (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap font-display text-[clamp(1.6rem,1rem+1.4vw,3rem)] font-semibold tracking-tight">{it}</span>
          <span className={`self-center text-2xl ${i % 2 ? "text-cold" : "text-hot"}`} aria-hidden="true">
            ✻
          </span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${className}`}>
      {track(false)}
      {track(true)}
    </div>
  );
}
