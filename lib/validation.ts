export type QuoteValues = {
  name: string;
  phone: string;
  email: string;
  city: string;
  audience: string;
  service: string;
  message: string;
  consent: boolean;
};

export type QuoteErrors = Partial<Record<keyof QuoteValues, string>>;

const PHONE = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateQuote(v: QuoteValues): QuoteErrors {
  const errors: QuoteErrors = {};
  if (v.name.trim().length < 2) errors.name = "Indiquez votre nom.";
  if (!v.phone.trim() && !v.email.trim()) {
    errors.phone = "Indiquez un numéro de téléphone ou une adresse e-mail.";
    errors.email = "Indiquez une adresse e-mail ou un numéro de téléphone.";
  }
  if (v.phone.trim() && !PHONE.test(v.phone.trim())) errors.phone = "Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78.";
  if (v.email.trim() && !EMAIL.test(v.email.trim())) errors.email = "Cette adresse e-mail ne semble pas valide.";
  if (!v.service) errors.service = "Choisissez un type de prestation.";
  if (v.message.trim().length < 10) errors.message = "Décrivez votre besoin en quelques mots (10 caractères minimum).";
  if (!v.consent) errors.consent = "Cochez la case pour que nous puissions traiter votre demande.";
  return errors;
}
