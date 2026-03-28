"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/constants/content";

export function AboutMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-zinc-200/80 bg-zinc-50/80 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="about-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
          >
            {about.title}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>{about.lead}</p>
            <p>{about.body}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
