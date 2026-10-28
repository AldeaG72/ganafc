"use client";

import Link from "next/link";
import { useState } from "react";
import { quoteOptions, type QuoteOption } from "@/lib/services";
import { quoteSchema } from "@/lib/schema";
import Icon from "./Icon";

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "mt-1.5 block w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-700/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 aria-[invalid=true]:border-red-500";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-900">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ defaultService }: { defaultService?: QuoteOption }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(fd), gdpr: fd.get("gdpr") === "on" };

    const parsed = quoteSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        errs[key] ??= issue.message;
      }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/oferta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error(json.message || "A apărut o eroare. Vă rugăm încercați din nou.");
      }
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "A apărut o eroare.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-500/40 bg-white p-8 text-center shadow-sm sm:p-12" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-500/15 text-gold-600">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-serif text-2xl font-semibold sm:text-3xl">Mulțumim! Solicitarea a fost trimisă.</h2>
        <p className="mx-auto mt-3 max-w-md text-navy-700/80">
          V-am trimis un email de confirmare. Un consultant GANA F&amp;A vă va contacta în cel mult o zi lucrătoare.
        </p>
        <Link href="/" className="btn-gold mt-8">
          Înapoi la pagina principală
        </Link>
      </div>
    );
  }

  const err = (k: string) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nume" label="Nume" required error={errors.nume}>
          <input id="nume" name="nume" autoComplete="family-name" className={inputCls} {...err("nume")} />
        </Field>
        <Field id="prenume" label="Prenume" required error={errors.prenume}>
          <input id="prenume" name="prenume" autoComplete="given-name" className={inputCls} {...err("prenume")} />
        </Field>
        <Field id="telefon" label="Număr de telefon" required error={errors.telefon}>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" placeholder="07xx xxx xxx" className={inputCls} {...err("telefon")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="nume@firma.ro" className={inputCls} {...err("email")} />
        </Field>
        <Field id="companie" label="Nume firmă" error={errors.companie}>
          <input id="companie" name="companie" autoComplete="organization" placeholder="Ex.: Firma Mea SRL" className={inputCls} {...err("companie")} />
        </Field>
        <Field id="cui" label="CUI firmă" error={errors.cui}>
          <input id="cui" name="cui" inputMode="text" autoComplete="off" placeholder="Ex.: RO12345678" className={inputCls} {...err("cui")} />
        </Field>
        <div className="sm:col-span-2">
        <Field id="serviciu" label="Serviciul dorit" required error={errors.serviciu}>
          <select id="serviciu" name="serviciu" defaultValue={defaultService ?? ""} className={inputCls} {...err("serviciu")}>
            <option value="" disabled>
              Alegeți serviciul
            </option>
            {quoteOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="mesaj" label="Mesajul dumneavoastră" required error={errors.mesaj}>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={6}
              placeholder="Descrieți pe scurt activitatea firmei, numărul de angajați, volumul aproximativ de documente lunar…"
              className={inputCls}
              {...err("mesaj")}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot anti-spam — ascuns pentru oameni */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Nu completați acest câmp</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-navy-700/85">
          <input
            id="gdpr"
            name="gdpr"
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy-900/30 accent-gold-500"
            {...err("gdpr")}
          />
          <span>
            Sunt de acord cu prelucrarea datelor personale în scopul ofertării, conform{" "}
            <Link href="/politica-confidentialitate" target="_blank" className="font-medium text-navy-900 underline decoration-gold-500 underline-offset-2">
              Politicii de confidențialitate
            </Link>
            . <span className="text-gold-600">*</span>
          </span>
        </label>
        {errors.gdpr && (
          <p id="gdpr-error" className="mt-1.5 text-sm text-red-600">
            {errors.gdpr}
          </p>
        )}
      </div>

      {serverError && (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {serverError}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-gold mt-8 w-full !py-4 text-base disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Se trimite…" : "Trimite solicitarea"}
        {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
      </button>
    </form>
  );
}
