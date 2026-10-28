import Link from "next/link";
import Logo from "./Logo";
import { EmailLink, PhoneActions } from "./ContactLinks";
import { ceccar, legalBadges, site } from "@/lib/site";
import { services } from "@/lib/services";

const legalLinks = [
  { href: "/politica-confidentialitate", label: "Politica de confidențialitate" },
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
  { href: "https://anpc.ro/", label: "ANPC", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Partenerul tău de încredere pentru contabilitate, fiscalitate, resurse umane și salarizare.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Servicii</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/#servicii" className="hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <PhoneActions compact />
            </li>
            <li>
              <EmailLink className="hover:text-gold-300" />
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Informații legale</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="hover:text-gold-300">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Soluționarea litigiilor (ANPC) și CECCAR */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center gap-4 py-8 sm:flex-row sm:flex-wrap sm:justify-center">
          {legalBadges.map((b) => (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${b.label} – ANPC`}
              className="block transition hover:opacity-80"
            >
              {b.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={b.image} alt={`${b.label} – ANPC`} width={b.width} height={b.height} className="h-14 w-auto rounded-lg bg-white shadow-md shadow-black/20" />
              ) : (
                <span className="flex h-[50px] w-[250px] items-center gap-3 rounded-md bg-white px-3 text-left text-navy-900">
                  <span className="font-serif text-lg font-bold text-navy-700">ANPC</span>
                  <span className="text-[10px] font-semibold uppercase leading-tight">{b.label}</span>
                </span>
              )}
            </a>
          ))}
          <a
            href={ceccar.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CECCAR – Corpul Experților Contabili și Contabililor Autorizați din România"
            className="block transition hover:opacity-80"
          >
            {ceccar.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={ceccar.image} alt="CECCAR – Corpul Experților Contabili și Contabililor Autorizați din România" width={221} height={240} className="h-20 w-auto drop-shadow-lg" />
            ) : (
              <span className="flex h-[50px] items-center rounded-md bg-white px-4 font-serif text-lg font-bold tracking-wider text-navy-900">
                CECCAR
              </span>
            )}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legal}</p>
          <p className="flex gap-4">
            <Link href="/politica-confidentialitate" className="hover:text-gold-300">
              Confidențialitate
            </Link>
            <Link href="/termeni-si-conditii" className="hover:text-gold-300">
              Termeni și condiții
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
