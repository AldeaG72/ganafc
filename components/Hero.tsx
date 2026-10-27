import Link from "next/link";
import Icon from "./Icon";

const stats = [
  { value: "15+", label: "ani de experiență" },
  { value: "200+", label: "clienți activi" },
  { value: "100%", label: "termene respectate" },
];

export default function Hero() {
  return (
    <section id="acasa" className="relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Finance &amp; Accounting</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Cifre în ordine.
            <br />
            <span className="text-gold-400">Decizii sigure.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme care vor să crească
            fără griji administrative.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/solicita-oferta" className="btn-gold">
              Solicită ofertă <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/#servicii" className="btn-outline">
              Serviciile noastre
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <dl className="grid grid-cols-3 gap-4 border-b border-white/10 pb-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-gold-400">{s.value}</dd>
                <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            {[
              "Expert contabil autorizat CECCAR",
              "Consultant fiscal autorizat CCF",
              "Raportare digitală: SAF-T, e-Factura, D112",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
