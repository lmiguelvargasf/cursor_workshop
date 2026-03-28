"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Volume2, type LucideIcon } from "lucide-react";
import { landingContent } from "@/constants/content";

const iconMap: Record<string, LucideIcon> = {
  Volume2,
  Gauge,
  ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">
            Services
          </p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.services.title}
          </h2>
          <p className="mt-4 text-zinc-300">{landingContent.services.subtitle}</p>
        </motion.div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {landingContent.services.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Volume2;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="grid gap-5 py-7 md:grid-cols-[0.2fr_0.95fr_0.85fr] md:gap-8"
              >
                <div>
                  <Icon className="h-6 w-6 text-lime-300" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-2 text-zinc-300">{item.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-500" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
