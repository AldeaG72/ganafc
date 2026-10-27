const values = [
  { title: "Integritate", text: "Transparență totală în tot ce facem." },
  { title: "Precizie", text: "Fiecare cifră contează și este verificată." },
  { title: "Parteneriat", text: "Creștem împreună cu clienții noștri." },
];

export default function About() {
  return (
    <section id="despre" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 text-white shadow-xl">
            <div className="flex h-full flex-col justify-between">
              <span className="font-serif text-6xl text-gold-400">“</span>
              <p className="font-serif text-xl leading-relaxed sm:text-2xl">
                Credem că o contabilitate bună nu înseamnă doar conformitate, ci claritate pentru decizii mai bune.
              </p>
              <p className="text-sm text-white/60">— Echipa GANA F&amp;A</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-gold-500 px-6 py-4 text-navy-950 shadow-lg sm:block">
            <p className="font-serif text-3xl font-bold">15+</p>
            <p className="text-xs font-semibold uppercase tracking-wider">ani de experiență</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Despre noi</p>
          <h2 className="section-title">Experiență, rigoare și o abordare personală</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-navy-700/85">
            <p>
              GANA F&amp;A (Finance &amp; Accounting) este o firmă de contabilitate și consultanță fiscală care
              sprijină antreprenorii și companiile din România să își administreze corect și eficient finanțele.
            </p>
            <p>
              Echipa noastră reunește experți contabili, consultanți fiscali și specialiști în resurse umane care
              lucrează cu firme de toate dimensiunile — de la start-up-uri și PFA-uri până la companii cu zeci
              de angajați.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-navy-900/10 bg-white p-4">
                <p className="font-semibold text-navy-900">{v.title}</p>
                <p className="mt-1 text-sm text-navy-700/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
