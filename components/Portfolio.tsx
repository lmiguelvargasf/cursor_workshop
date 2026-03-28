"use client";

import { motion } from "framer-motion";
import { landingContent } from "@/constants/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">
            Portfolio
          </p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.portfolio.title}
          </h2>
          <p className="mt-4 text-zinc-300">{landingContent.portfolio.subtitle}</p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {landingContent.portfolio.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="grid gap-5 border-t border-white/10 pt-7 md:grid-cols-[0.5fr_1fr_1fr]"
            >
              <h3 className="font-syne text-2xl font-semibold text-zinc-100">{item.title}</h3>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-500">Situation</p>
                <p className="mt-2 text-zinc-300">{item.situation}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-500">Result</p>
                <p className="mt-2 text-zinc-300">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
