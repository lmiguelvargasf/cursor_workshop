"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.85], [0.2, 1]);

  return (
    <section
      ref={ref}
      id={content.process.id}
      aria-labelledby="process-title"
      className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Process
          </p>
          <h2
            id="process-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {content.process.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {content.process.subtitle}
          </p>
        </motion.div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="absolute left-[7px] top-3 hidden h-[calc(100%-1.5rem)] w-px origin-top bg-zinc-200 dark:bg-zinc-800 lg:left-3 lg:block"
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent"
              style={{ scaleY: lineScale }}
            />
          </div>
          <ol className="space-y-14 lg:space-y-16 lg:pl-16">
            {content.process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: EASE_SMOOTH,
                }}
                className="relative grid gap-3 sm:grid-cols-[minmax(0,140px)_minmax(0,1fr)] sm:gap-10"
              >
                <div className="flex items-start gap-3 sm:block">
                  <span
                    className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-600 shadow-[0_0_0_6px_rgba(255,255,255,1)] ring-1 ring-emerald-600/30 dark:bg-emerald-400 dark:shadow-[0_0_0_6px_rgba(9,9,11,1)] dark:ring-emerald-400/30 lg:absolute lg:-left-[2.125rem] lg:mt-2"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {step.label}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
