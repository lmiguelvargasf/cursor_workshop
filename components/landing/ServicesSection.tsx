"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { content, type ServiceIconName } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

const icons: Record<ServiceIconName, LucideIcon> = {
  Code2,
  Layers,
  Rocket,
};

export function ServicesSection() {
  return (
    <section
      id={content.services.id}
      aria-labelledby="services-title"
      className="border-b border-zinc-200/90 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Capabilities
          </p>
          <h2
            id="services-title"
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {content.services.title}
          </h2>
        </motion.div>

        <ul className="mt-14 divide-y divide-zinc-200/90 dark:divide-zinc-800">
          {content.services.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: EASE_SMOOTH,
                }}
                className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10 sm:py-12"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
