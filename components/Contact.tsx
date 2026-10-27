import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

const items = [
  { icon: "phone", label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "pin", label: "Adresă", value: site.address },
  { icon: "clock", label: "Program", value: site.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Hai să discutăm despre afacerea ta</h2>
          <p className="mt-4 max-w-md text-white/70">
            Ne poți suna, ne poți scrie sau poți completa formularul de ofertă. Revenim cu un răspuns în cel
            mult o zi lucrătoare.
          </p>
          <ul className="mt-8 space-y-5">
            {items.map((i) => (
              <li key={i.label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold-400">
                  <Icon name={i.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">{i.label}</p>
                  {i.href ? (
                    <a href={i.href} className="font-medium hover:text-gold-300">{i.value}</a>
                  ) : (
                    <p className="font-medium">{i.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Link href="/solicita-oferta" className="btn-gold mt-10">
            Solicită ofertă <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            title="Locația GANA F&A pe hartă"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            className="h-full min-h-[320px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
