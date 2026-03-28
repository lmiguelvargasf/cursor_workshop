"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { hero } = content;

  return (
    <section
      id={hero.id}
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100svh-var(--header-h))] w-full overflow-hidden border-b border-zinc-200/80 bg-zinc-950 dark:border-zinc-800"
    >
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/20"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(16,185,129,0.12),transparent_55%)]" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] w-full max-w-[var(--content-max)] flex-col justify-end px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="max-w-[var(--prose-max)]">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_SMOOTH }}
          >
            {hero.kicker}
          </motion.p>
          <motion.h1
            id="hero-title"
            className="mt-4 font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.06] lg:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.04, ease: EASE_SMOOTH }}
          >
            {hero.headlineParts.map((part, i) =>
              part.emphasized ? (
                <span
                  key={`h-${i}-${part.text.slice(0, 8)}`}
                  className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200 bg-clip-text text-transparent"
                >
                  {part.text}
                </span>
              ) : (
                <span key={`h-${i}-${part.text.slice(0, 8)}`}>{part.text}</span>
              ),
            )}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.1, ease: EASE_SMOOTH }}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.14, ease: EASE_SMOOTH }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-zinc-950 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
