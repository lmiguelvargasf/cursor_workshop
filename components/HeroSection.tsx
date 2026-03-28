"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brand, hero } from "@/constants/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate w-full min-h-[calc(100svh-4rem)]"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/78 to-zinc-900/55"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] w-full flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
              {brand.descriptor}
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-balance font-semibold tracking-tight text-white"
            >
              <span className="block text-2xl text-white/95 sm:text-3xl">
                {brand.name}
              </span>
              <span className="mt-4 block max-w-3xl text-3xl leading-[1.12] sm:text-5xl sm:leading-[1.08]">
                {hero.headlineBefore}
                <span className="bg-gradient-to-r from-amber-200 via-white to-indigo-200 bg-clip-text text-transparent">
                  {hero.headlineGradient}
                </span>
                {hero.headlineAfter}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-200 sm:text-lg">
              {hero.subheadline}
            </p>
            {hero.stackBadges.length > 0 && (
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Primary technical focus"
              >
                {hero.stackBadges.map((badge) => (
                  <li key={badge}>
                    <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/95 backdrop-blur-sm">
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
          <motion.div
            className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:scale-[1.02] hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
