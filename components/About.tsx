"use client";

import { motion } from "framer-motion";
import { landingContent } from "@/constants/content";

export function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-zinc-950/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-14 lg:px-8 lg:py-24"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">
            About
          </p>
          <h2 className="font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.about.title}
          </h2>
          <p className="max-w-md text-zinc-300">{landingContent.about.subtitle}</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-5 text-base leading-relaxed text-zinc-300">
            {landingContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {landingContent.about.stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/15 pt-4">
                <p className="text-lg font-semibold text-zinc-50">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
