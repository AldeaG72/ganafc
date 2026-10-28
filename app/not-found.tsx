import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = { title: "Pagina nu a fost găsită" };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <Reveal className="container-x relative max-w-2xl text-center">
        <p className="font-serif text-7xl font-semibold text-gold-400 sm:text-8xl">404</p>
        <h1 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl">Pagina nu a fost găsită</h1>
        <p className="mt-4 text-white/70">
          Pagina pe care o căutați nu există sau a fost mutată. Verificați adresa sau continuați de pe pagina
          principală.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            Înapoi la pagina principală
          </Link>
          <Link href="/solicita-oferta" className="btn-outline">
            Solicită ofertă <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
