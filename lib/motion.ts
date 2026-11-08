import type { CSSProperties } from "react";

/** Décale le début d'une animation d'ouverture (voir .hero-rise dans globals.css). */
export const after = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;
