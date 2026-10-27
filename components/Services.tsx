import Link from "next/link";
import Icon from "./Icon";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicii" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Servicii</p>
          <h2 className="section-title">Tot ce ține de cifre și oameni, într-un singur loc</h2>
          <p className="mt-4 text-navy-700/80">
            Alege un serviciu individual sau pachetul integrat complet — noi ne ocupăm de restul.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={s.icon} />
                </span>
                <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-4 text-navy-700/80">{s.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`/solicita-oferta?serviciu=${s.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy-900 hover:text-gold-600"
              >
                Cere ofertă pentru {s.title.split(" (")[0]}
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-navy-900 p-7 text-white sm:flex-row sm:items-center">
          <div>
            <h3 className="font-serif text-xl font-semibold">Pachet integrat complet</h3>
            <p className="mt-1 text-sm text-white/70">
              Contabilitate, fiscalitate, HR și salarizare, cu un singur partener și un preț lunar clar.
            </p>
          </div>
          <Link href="/solicita-oferta?serviciu=pachet-complet" className="btn-gold shrink-0">
            Cere ofertă
          </Link>
        </div>
      </div>
    </section>
  );
}
