"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "./Icon";
import { site } from "@/lib/site";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.46 9.48-9.46 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.45-9.46 9.45zm8.05-17.5A11.31 11.31 0 0 0 12.04.67C5.77.67.67 5.77.67 12.03c0 2 .52 3.96 1.52 5.68L.57 23.33l5.75-1.51a11.35 11.35 0 0 0 5.72 1.46h.01c6.27 0 11.37-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04z" />
    </svg>
  );
}

const pill =
  "inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950";

// Numărul de telefon cu două acțiuni: WhatsApp (cu mesaj de început) și apel telefonic.
export function PhoneActions({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col gap-2">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:text-gold-300"
        title="Scrie-ne pe WhatsApp"
      >
        {site.phone}
      </a>
      <span className="flex flex-wrap gap-2">
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={pill} aria-label={`WhatsApp ${site.phone}`}>
          <WhatsAppIcon className="h-3.5 w-3.5" />
          {!compact && "WhatsApp"}
          {compact && <span className="sr-only">WhatsApp</span>}
        </a>
        <a href={site.phoneHref} className={pill} aria-label={`Sună la ${site.phone}`}>
          <Icon name="phone" className="h-3.5 w-3.5" />
          {!compact && "Sună"}
          {compact && <span className="sr-only">Sună</span>}
        </a>
      </span>
    </span>
  );
}

const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;
const outlookHref = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(site.email)}`;

// Pe telefon deschide direct aplicația de email; pe calculator afișează un meniu cu opțiuni.
export function EmailLink({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function onClick(e: React.MouseEvent) {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch) return; // telefon/tabletă: lăsăm mailto să deschidă aplicația de email
    e.preventDefault();
    setOpen((v) => !v);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1200);
    } catch {
      setOpen(false);
    }
  }

  const item =
    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-navy-900 transition hover:bg-gold-500/15";

  return (
    <span ref={ref} className="relative inline-block">
      <a
        href={`mailto:${site.email}`}
        onClick={onClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className={className}
      >
        {children ?? site.email}
      </a>
      <AnimatePresence>
        {open && (
          <motion.span
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 mt-2 block w-60 rounded-xl bg-white p-1.5 shadow-2xl shadow-navy-950/40 ring-1 ring-navy-900/10"
          >
            <span className="block px-3 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy-700/60">
              Scrie-ne prin
            </span>
            <a role="menuitem" href={gmailHref} target="_blank" rel="noopener noreferrer" className={item} onClick={() => setOpen(false)}>
              <Icon name="mail" className="h-4 w-4 text-gold-600" /> Gmail
            </a>
            <a role="menuitem" href={outlookHref} target="_blank" rel="noopener noreferrer" className={item} onClick={() => setOpen(false)}>
              <Icon name="mail" className="h-4 w-4 text-gold-600" /> Outlook
            </a>
            <a role="menuitem" href={`mailto:${site.email}`} className={item} onClick={() => setOpen(false)}>
              <Icon name="digital" className="h-4 w-4 text-gold-600" /> Aplicația de email
            </a>
            <button role="menuitem" type="button" onClick={copy} className={item}>
              <Icon name="check" className="h-4 w-4 text-gold-600" /> {copied ? "Adresă copiată!" : "Copiază adresa"}
            </button>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
