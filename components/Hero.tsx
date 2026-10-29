"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Icon from "./Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  "Ofertă personalizată, fără costuri ascunse",
  "Un consultant dedicat pentru firma ta",
  "Răspuns la solicitări în cel mult o zi lucrătoare",
  "Raportare digitală: SAF-T, e-Factura, D112",
];

const lines = [
  { text: "Cifre în ordine.", className: "" },
  { text: "Decizii sigure.", className: "text-gold-400" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  let wordIndex = 0;

  return (
    <section ref={ref} id="acasa" className="relative overflow-hidden bg-navy-900 text-white">
      {/* Grilă care se deplasează lent */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Lumini aurii în mișcare */}
      <motion.div aria-hidden="true" style={{ y: glowY }} className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold-500/20 blur-3xl"
          animate={{ x: [0, -60, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-navy-700/70 blur-3xl"
          animate={{ x: [0, 80, -30, 0], y: [0, -30, 30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl"
          animate={{ x: [0, 120, -80, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-x relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
        <motion.div style={{ y: contentY, opacity: fade }}>
          <h1 className="track-in text-xs font-semibold uppercase leading-relaxed tracking-[0.25em] text-gold-400">
            Contabilitate și consultanță fiscală pentru firme
          </h1>

          <p className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {lines.map((line) => (
              <span key={line.text} className={`block ${line.className}`}>
                {line.text.split(" ").map((word) => {
                  const i = wordIndex++;
                  return (
                    <span key={word + i} className="inline-block overflow-hidden pb-1 align-bottom">
                      <span className="word-rise" style={{ animationDelay: `${0.25 + i * 0.12}s` }}>
                        {word}
                      </span>
                      {" "}
                    </span>
                  );
                })}
              </span>
            ))}
          </p>

          {/* Linie aurie care se desenează sub titlu */}
          <motion.div
            aria-hidden="true"
            className="mt-6 h-px w-40 origin-left bg-gradient-to-r from-gold-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
          />

          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/75" style={{ animationDelay: "1s" }}>
            Contabilitate, consultanță fiscală, resurse umane și salarizare pentru firme care vor să crească
            fără griji administrative.
          </p>

          <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "1.2s" }}>
            <Link href="/solicita-oferta" className="btn-gold btn-shine group">
              Solicită ofertă
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#servicii" className="btn-outline">
              Serviciile noastre
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ y: cardY }}>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-navy-950/40 backdrop-blur sm:p-8"
            initial={{ opacity: 0, x: 60, rotateY: -12 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
            style={{ transformPerspective: 1000 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <p className="font-serif text-xl font-semibold text-gold-400">Ce primești de la noi</p>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {benefits.map((t, i) => (
                  <motion.li
                    key={t}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + i * 0.15, ease: EASE }}
                  >
                    <motion.span
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/20 text-gold-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15, delay: 1.25 + i * 0.15 }}
                    >
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </motion.span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicator de derulare */}
      <motion.a
        href="/#servicii"
        aria-label="Derulează la servicii"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 hover:text-gold-300 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2">
          <motion.span
            className="block h-2 w-1 rounded-full bg-current"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
