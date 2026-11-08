/**
 * Le formulaire est envoyé à Formspree. L'identifiant du formulaire n'est pas
 * un secret (il apparaît dans toute requête du navigateur) : il se configure
 * avec NEXT_PUBLIC_FORMSPREE_ID, voir README.
 */
import type { QuoteValues } from "./validation";

const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export const formspreeEndpoint = id
  ? `https://formspree.io/f/${id}`
  : null;

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "network" | "rejected" };

export async function sendQuote(
  values: QuoteValues
): Promise<SendResult> {
  if (!formspreeEndpoint) {
    return { ok: false, reason: "not-configured" };
  }

  try {
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Demande de devis : ${values.service}`,
        "Nom et prénom": values.name,
        "Téléphone": values.phone,
        "Adresse e-mail": values.email,
        "Commune": values.city,
        "Type de client": values.audience,
        "Type de prestation": values.service,
        "Description du besoin": values.message,
        "Consentement": "Oui",
      }),
    });

    if (!res.ok) {
      return { ok: false, reason: "rejected" };
    }

    const response = await res.json();

    return response.ok === true
      ? { ok: true }
      : { ok: false, reason: "rejected" };
  } catch {
    return { ok: false, reason: "network" };
  }
}