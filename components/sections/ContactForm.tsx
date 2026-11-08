"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { sendQuote } from "@/lib/formspree";
import { type QuoteErrors, type QuoteValues, validateQuote } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1.5 w-full rounded-xl border-[1.5px] border-line bg-white px-3.5 py-3 text-[1rem] text-ink placeholder:text-ink-soft/70 transition-[border-color,box-shadow] duration-200 focus:border-cold focus:shadow-[0_0_0_4px_rgba(31,122,224,0.15)] focus:outline-none aria-[invalid=true]:border-hot-deep";
const label = "block text-[0.95rem] font-semibold";

const services = ["Plomberie", "Chauffage", "Climatisation", "Nettoyage", "Autre besoin"];
const audiences = ["Particulier", "Professionnel", "Collectivité"];

export function ContactForm() {
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Champ piège : invisible pour une personne, rempli par les robots.
    if (data.get("website")) {
      setStatus("success");
      return;
    }
    const get = (k: string) => String(data.get(k) ?? "");
    const values: QuoteValues = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      city: get("city"),
      audience: get("audience"),
      service: get("service"),
      message: get("message"),
      consent: data.get("consent") === "on",
    };
    const found = validateQuote(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      const first = Object.keys(found)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    const result = await sendQuote(values);
    if (result.ok) {
      setStatus("success");
      return;
    }
    setFailure(
      result.reason === "not-configured"
        ? "L'envoi par formulaire n'est pas encore activé sur ce site."
        : result.reason === "network"
          ? "La connexion a échoué, votre message n'a pas été envoyé."
          : "Votre message n'a pas pu être envoyé.",
    );
    setStatus("error");
  }

  if (status === "success") {
    return (
      <div role="status" className="pop rounded-lg border border-line bg-white p-8">
        <svg viewBox="0 0 52 52" className="h-14 w-14 text-cold-deep" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle className="check-circle" cx="26" cy="26" r="23" pathLength={1} />
          <path className="check-mark" d="M15 27l8 8 14-16" pathLength={1} />
        </svg>
        <h2 className="mt-4 text-2xl">Votre demande est bien envoyée</h2>
        <p className="mt-3 text-ink-soft">Merci. Nous reviendrons vers vous à partir des coordonnées que vous avez indiquées.</p>
      </div>
    );
  }

  const err = (k: keyof QuoteValues) => errors[k];
  const aria = (k: keyof QuoteValues) => ({ "aria-invalid": err(k) ? true : undefined, "aria-describedby": err(k) ? `${k}-err` : undefined });
  const errMsg = (k: keyof QuoteValues) =>
    err(k) ? (
      <p id={`${k}-err`} className="msg-in mt-1.5 text-sm font-medium text-hot-deeper">
        {err(k)}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(15,35,66,0.4)] sm:p-10">
      <div>
        <label htmlFor="name" className={label}>Nom et prénom</label>
        <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
        {errMsg("name")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>Téléphone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={field} {...aria("phone")} />
          {errMsg("phone")}
        </div>
        <div>
          <label htmlFor="email" className={label}>E-mail</label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={field} {...aria("email")} />
          {errMsg("email")}
        </div>
      </div>
      <p className="-mt-2 text-sm text-ink-soft">Indiquez au moins un numéro de téléphone ou une adresse e-mail.</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={label}>Type de prestation</label>
          <select id="service" name="service" defaultValue="" className={field} {...aria("service")}>
            <option value="" disabled>Choisir…</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
          {errMsg("service")}
        </div>
        <div>
          <label htmlFor="audience" className={label}>Vous êtes</label>
          <select id="audience" name="audience" defaultValue={audiences[0]} className={field}>
            {audiences.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="city" className={label}>Commune</label>
        <input id="city" name="city" autoComplete="address-level2" placeholder="Montpellier" className={field} />
      </div>

      <div>
        <label htmlFor="message" className={label}>Votre besoin</label>
        <textarea id="message" name="message" rows={5} className={field} placeholder="Décrivez brièvement ce dont vous avez besoin." {...aria("message")} />
        {errMsg("message")}
      </div>

      {/* Champ piège anti-spam */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Ne pas remplir<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-[0.95rem]">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-[#175fb0]" {...aria("consent")} />
          <span>
            J’accepte que ces informations soient utilisées pour répondre à ma demande. Voir la{" "}
            <a href="/politique-de-confidentialite" className="font-semibold underline underline-offset-4">politique de confidentialité</a>.
          </span>
        </label>
        {errMsg("consent")}
      </div>

      {status === "error" && (
        <div role="alert" className="msg-in rounded-md border border-hot-deep bg-[#fff1e6] p-4 text-[0.95rem]">
          <p className="font-semibold">{failure}</p>
          <p className="mt-1">
            Contactez-nous directement : <a className="font-semibold underline" href={site.phone.href}>{site.phone.display}</a> ou{" "}
            <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex btn-shine h-14 items-center justify-center gap-2 rounded-full bg-hot-deep px-6 font-semibold text-white transition-colors hover:bg-hot-deeper disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Envoi en cours</>) : "Envoyer ma demande"}
      </button>
    </form>
  );
}
