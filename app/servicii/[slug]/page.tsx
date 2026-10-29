import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { PhoneActions } from "@/components/ContactLinks";
import { services } from "@/lib/services";
import { getServicePage, servicePages, workSteps } from "@/lib/service-pages";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getServicePage((await params).slug);
  if (!page) return {};
  const path = `/servicii/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${page.seoTitle} | ${site.name}`, description: page.metaDescription },
  };
}

export default async function ServicePage({ params }: Props) {
  const page = getServicePage((await params).slug);
  const service = services.find((s) => s.slug === page?.slug);
  if (!page || !service) notFound();

  const url = `${site.url}/servicii/${page.slug}`;
  const shortTitle = service.title.split(" (")[0];
  const others = services.filter((s) => s.slug !== page.slug);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: shortTitle,
      description: page.metaDescription,
      url,
      provider: { "@type": "AccountingService", name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "București" },
        { "@type": "Country", name: "România" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: site.url },
        { "@type": "ListItem", position: 2, name: "Servicii", item: `${site.url}/#servicii` },
        { "@type": "ListItem", position: 3, name: shortTitle, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden bg-navy-900 py-14 text-white sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />
        <div className="container-x relative">
          <nav aria-label="Navigare ierarhică" className="text-xs text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-gold-300">Acasă</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#servicii" className="hover:text-gold-300">Servicii</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">{shortTitle}</li>
            </ol>
          </nav>

          <div className="fade-up mt-8 flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-500 text-navy-950">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{site.name}</p>
          </div>
          <h1 className="fade-up mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">{page.h1}</h1>
          <div className="fade-up mt-5 max-w-2xl space-y-3 text-lg leading-relaxed text-white/75" style={{ animationDelay: "0.15s" }}>
            {page.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Link href={`/solicita-oferta?serviciu=${page.slug}`} className="btn-gold btn-shine group">
              Cere ofertă pentru {shortTitle.toLowerCase()}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#contact" className="btn-outline">
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="eyebrow">Ce include</p>
            <h2 className="section-title">Ce facem pentru firma ta</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {page.included.map((group) => (
                <div key={group.title} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-navy-900">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-navy-700/90">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-navy-900 p-6 text-white lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-semibold text-gold-400">Pentru cine este</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {page.forWho.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm">
              <p className="text-white/70">Ai întrebări? Scrie-ne sau sună-ne:</p>
              <div className="mt-3">
                <PhoneActions />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <p className="eyebrow">Cum lucrăm</p>
          <h2 className="section-title">De la prima discuție la colaborarea lunară</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-cream p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500 text-sm font-bold text-navy-950">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Întrebări frecvente</p>
          <h2 className="section-title">Răspunsuri la cele mai des întâlnite întrebări</h2>
          <div className="mt-8 divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
            {page.faq.map((item) => (
              <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy-900">
                  {item.q}
                  <span className="mt-0.5 text-gold-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-navy-700/85">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold">Hai să discutăm despre firma ta</h2>
              <p className="mt-2 text-sm text-white/70">
                Spune-ne de ce ai nevoie și primești o ofertă personalizată în cel mult o zi lucrătoare.
              </p>
            </div>
            <Link href={`/solicita-oferta?serviciu=${page.slug}`} className="btn-gold shrink-0">
              Solicită ofertă
            </Link>
          </div>

          <h2 className="mt-14 font-serif text-xl font-semibold text-navy-900">Alte servicii</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicii/${s.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 transition hover:border-gold-500/60 hover:shadow-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-navy-900">{s.title}</span>
                  <Icon name="arrow" className="ml-auto h-4 w-4 text-gold-600 transition group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
