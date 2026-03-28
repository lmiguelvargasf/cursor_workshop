"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { finalCta } from "@/constants/content";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={finalCta.id}
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-96px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            {finalCta.eyebrow}
          </p>
          <h2
            id="final-cta-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {finalCta.subtitle}
          </p>
          <Link
            href={finalCta.buttonHref}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {finalCta.buttonLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
