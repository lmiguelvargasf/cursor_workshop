"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/constants/content";

export function AboutMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-12 md:grid-cols-12 md:items-start md:gap-10 lg:gap-16"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-96px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {about.eyebrow}
            </p>
            <h2
              id="about-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              {about.title}
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7">
            <p className="text-lg leading-relaxed text-zinc-700 sm:text-xl">
              {about.lead}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              {about.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
