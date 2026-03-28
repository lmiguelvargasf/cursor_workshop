"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/constants/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              id="hero-title"
              className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-tight"
            >
              {hero.headlineBefore}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {hero.headlineGradient}
              </span>
              {hero.headlineAfter}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {hero.subheadline}
            </p>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:scale-[1.02] hover:bg-indigo-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-6 py-3 text-base font-medium text-zinc-800 shadow-sm backdrop-blur-sm transition hover:scale-[1.02] hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
