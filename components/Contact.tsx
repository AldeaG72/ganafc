import Link from "next/link";
import Icon from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./Motion";
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
        <Reveal direction="right" distance={50}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Hai să discutăm despre afacerea ta</h2>
          <p className="mt-4 max-w-md text-white/70">
            Ne poți suna, ne poți scrie sau poți completa formularul de ofertă. Revenim cu un răspuns în cel
            mult o zi lucrătoare.
          </p>
          <Stagger className="mt-8 space-y-5">
            {items.map((i) => (
              <StaggerItem key={i.label} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold-400 transition duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950">
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
              </StaggerItem>
            ))}
          </Stagger>
          <Link href="/solicita-oferta" className="btn-gold mt-10">
            Solicită ofertă <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal direction="left" distance={50} delay={0.2} className="min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            title="Locația GANA F&A pe hartă"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            className="h-full min-h-[320px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
