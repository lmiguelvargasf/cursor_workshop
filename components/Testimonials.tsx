"use client";

import { motion } from "framer-motion";
import { landingContent } from "@/constants/content";

export function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-zinc-900/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">
            Social proof
          </p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.testimonials.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {landingContent.testimonials.items.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border-l border-lime-300/60 pl-4"
            >
              <p className="text-zinc-200">
                <span aria-hidden>&ldquo;</span>
                {item.quote}
                <span aria-hidden>&rdquo;</span>
              </p>
              <footer className="mt-4">
                <p className="font-semibold text-zinc-100">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
