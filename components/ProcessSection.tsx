"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSection } from "@/constants/content";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={processSection.id}
      aria-labelledby="process-title"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-96px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {processSection.eyebrow}
          </p>
          <h2
            id="process-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {processSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {processSection.intro}
          </p>
        </motion.div>

        <ol className="relative mt-16 max-w-3xl space-y-0 border-l border-zinc-300/90 pl-8 sm:pl-10">
          {processSection.steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative pb-14 last:pb-0"
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="absolute -left-8 top-1.5 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-zinc-300 bg-zinc-50 text-xs font-semibold text-zinc-800 sm:-left-10">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
