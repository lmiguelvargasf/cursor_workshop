"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonialsSection } from "@/constants/content";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={testimonialsSection.id}
      aria-labelledby="testimonials-title"
      className="border-b border-zinc-200/90 bg-white py-24 sm:py-32"
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
            {testimonialsSection.eyebrow}
          </p>
          <h2
            id="testimonials-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {testimonialsSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {testimonialsSection.intro}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {testimonialsSection.items.map((item, i) => (
            <motion.blockquote
              key={item.name}
              className="border-l-2 border-zinc-900 pl-6 lg:pl-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-lg leading-relaxed text-zinc-800 sm:text-xl">
                “{item.quote}”
              </p>
              <footer className="mt-6 text-sm text-zinc-500">
                <cite className="not-italic font-semibold text-zinc-900">
                  {item.name}
                </cite>
                <span className="mt-1 block text-zinc-500">{item.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
