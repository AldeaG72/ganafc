import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { EmailLink, PhoneActions } from "@/components/ContactLinks";
import { quoteOptions, services, type QuoteOption } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/solicita-oferta" },
  title: "Solicită ofertă",
  description: "Solicită o ofertă personalizată pentru servicii de contabilitate, fiscalitate, HR și salarizare.",
};

function resolveService(slug?: string): QuoteOption | undefined {
  if (!slug) return undefined;
  if (slug === "pachet-complet") return "Pachet integrat complet";
  if (slug === "informatii") return "Informații generale";
  const match = services.find((s) => s.slug === slug)?.quoteOption;
  return match && quoteOptions.includes(match) ? match : undefined;
}

export default async function SolicitaOferta({
  searchParams,
}: {
  searchParams: Promise<{ serviciu?: string }>;
}) {
  const { serviciu } = await searchParams;

  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <Reveal className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Solicită ofertă</p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold sm:text-5xl">
            Primește o ofertă personalizată
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Completează formularul și te contactăm în cel mult o zi lucrătoare cu o propunere adaptată firmei tale.
          </p>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_300px]">
          <Reveal delay={0.15}>
            <QuoteForm key={serviciu} defaultService={resolveService(serviciu)} />
          </Reveal>

          <Reveal direction="left" delay={0.3} className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/10">
              <h2 className="font-semibold">Ce urmează?</h2>
              <ol className="mt-4 space-y-4 text-sm text-navy-700/85">
                {[
                  "Primești pe email confirmarea solicitării.",
                  "Un consultant analizează nevoile firmei tale.",
                  "Te contactăm cu o ofertă clară, fără costuri ascunse.",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-xs font-bold text-navy-950">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <h2 className="font-semibold">Preferi să vorbim direct?</h2>
              <div className="mt-4 flex items-start gap-3 text-sm">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <PhoneActions />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-gold-400" />
                <EmailLink className="hover:text-gold-300" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
