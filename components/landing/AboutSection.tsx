"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
};

export function AboutSection() {
  return (
    <section
      id={content.about.id}
      aria-labelledby="about-title"
      className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Mission
          </p>
          <h2
            id="about-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {content.about.title}
          </h2>
        </motion.div>

        <motion.p
          className="mt-8 max-w-[var(--prose-max)] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          {content.about.lead}
        </motion.p>

        <motion.ul
          className="mt-14 divide-y divide-zinc-200/90 dark:divide-zinc-800"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {content.about.points.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="grid gap-4 py-10 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:gap-12 sm:py-12"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {item.title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
