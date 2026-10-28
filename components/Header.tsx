"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/#acasa", label: "Acasă" },
  { href: "/#servicii", label: "Servicii" },
  { href: "/#despre", label: "Despre noi" },
  { href: "/#echipa", label: "Echipa" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy-900/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-lg shadow-navy-950/20" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/#acasa" aria-label="GANA F&A — Acasă" onClick={() => setOpen(false)}>
          <Logo light />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigare principală">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition hover:text-gold-300">
              {l.label}
            </Link>
          ))}
          <Link href="/solicita-oferta" className="btn-gold !py-2.5">
            Solicită ofertă
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-white md:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 md:hidden" aria-label="Navigare mobil">
          <div className="container-x flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white/85 hover:text-gold-300"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/solicita-oferta" onClick={() => setOpen(false)} className="btn-gold mt-3">
              Solicită ofertă
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
