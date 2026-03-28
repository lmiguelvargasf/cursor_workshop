"use client";

import { motion } from "framer-motion";
import { landingContent } from "@/constants/content";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/92 to-zinc-950/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(163,230,53,0.2),transparent_40%)]"
        aria-hidden
      />

      <div className="mx-auto grid min-h-[calc(100svh-64px)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="space-y-7"
        >
          <p className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs font-medium tracking-wide text-lime-200">
            {landingContent.hero.eyebrow}
          </p>
          <h1 className="max-w-2xl font-syne text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            {landingContent.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            {landingContent.hero.description}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <a
              href={landingContent.repository.releasesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-lime-300"
            >
              {landingContent.hero.primaryCtaLabel}
            </a>
            <a
              href={landingContent.repository.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              {landingContent.hero.secondaryCtaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="space-y-6 border-l border-white/20 pl-6 sm:pl-8"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-400">
            Open-source project
          </p>
          <p className="text-2xl font-semibold text-zinc-50">
            {landingContent.repository.owner}/{landingContent.repository.name}
          </p>
          <ul className="space-y-4 text-sm text-zinc-200">
            {landingContent.hero.proofPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-zinc-400">
            Active branch:{" "}
            <span className="font-medium text-zinc-200">
              {landingContent.repository.defaultBranch}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
