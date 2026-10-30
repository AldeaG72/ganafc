import Link from "next/link";
import Logo from "./Logo";
import { EmailLink, PhoneActions } from "./ContactLinks";
import { ceccar, legalBadges, site, social } from "@/lib/site";
import { services } from "@/lib/services";

const socialIcons: Record<(typeof social)[number]["name"], React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" />
    </>
  ),
  TikTok: (
    <path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6z" />
  ),
  LinkedIn: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
  ),
};

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
          <Logo light className="h-auto w-full max-w-[240px]" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Partenerul tău de încredere pentru contabilitate, fiscalitate, resurse umane și salarizare.
          </p>
          <ul className="mt-5 flex gap-3">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} pe ${s.name}`}
                  title={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/90 transition hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                    {socialIcons[s.name]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Servicii</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicii/${s.slug}`} className="hover:text-gold-300">
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
                <img src={b.image} loading="lazy" alt={`${b.label} – ANPC`} width={b.width} height={b.height} className="h-14 w-auto rounded-lg bg-white shadow-md shadow-black/20" />
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
              <img src={ceccar.image} loading="lazy" alt="CECCAR – Corpul Experților Contabili și Contabililor Autorizați din România" width={221} height={240} className="h-20 w-auto drop-shadow-lg" />
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
