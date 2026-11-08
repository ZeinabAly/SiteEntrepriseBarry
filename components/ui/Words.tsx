import { Fragment, type CSSProperties } from "react";

/** Découpe un titre en mots qui arrivent l'un après l'autre (voir .word dans globals.css). */
export function Words({ text, start = 0, className = "" }: { text: string; start?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className={`word ${className}`} style={{ "--i": i + start } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
