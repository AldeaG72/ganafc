import { Reveal } from "./Motion";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <Reveal className="container-x max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/60">Ultima actualizare: {updated}</p>
        </Reveal>
      </section>
      <section className="py-12 sm:py-16">
        <div className="container-x max-w-3xl space-y-5 leading-relaxed text-navy-700/90 [&_a]:font-medium [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:underline-offset-2 [&_h2]:pt-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-navy-900 [&_ul]:space-y-1.5">
          {children}
        </div>
      </section>
    </>
  );
}
