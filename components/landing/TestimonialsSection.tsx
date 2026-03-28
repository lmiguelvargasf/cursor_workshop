"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function TestimonialsSection() {
  return (
    <section
      id={content.testimonials.id}
      aria-labelledby="testimonials-title"
      className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.h2
          id="testimonials-title"
          className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          {content.testimonials.title}
        </motion.h2>

        <ul className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">
          {content.testimonials.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: EASE_SMOOTH,
              }}
              className="grid gap-8 border-t border-zinc-200/90 pt-12 first:border-t-0 first:pt-0 dark:border-zinc-800 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-16 lg:pt-16"
            >
              <blockquote className="text-xl font-medium leading-snug text-zinc-900 dark:text-zinc-100 sm:text-2xl sm:leading-snug">
                <span className="text-emerald-600 dark:text-emerald-400">“</span>
                {item.quote}
                <span className="text-emerald-600 dark:text-emerald-400">”</span>
              </blockquote>
              <div className="lg:text-right">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                  {item.org}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
