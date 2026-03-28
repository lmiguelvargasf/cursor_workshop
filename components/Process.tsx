"use client";

import { motion } from "framer-motion";
import { landingContent } from "@/constants/content";

export function Process() {
  return (
    <section id="process" className="border-b border-white/10 bg-zinc-900/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">
            How it works
          </p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.process.title}
          </h2>
          <p className="mt-4 text-zinc-300">{landingContent.process.subtitle}</p>
        </motion.div>

        <ol className="mt-12 space-y-6">
          {landingContent.process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[0.35fr_1fr]"
            >
              <div className="text-sm font-medium text-zinc-400">
                Step {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-zinc-300">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
