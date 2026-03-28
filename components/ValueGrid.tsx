"use client";

import type { LucideIcon } from "lucide-react";
import { Code2, MessageSquare, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  services,
  servicesSection,
  type ServiceIconKey,
} from "@/constants/content";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  Sparkles,
  Code2,
  MessageSquare,
};

export function ValueGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-title"
      className="border-b border-zinc-200/80 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="services-title"
          className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {servicesSection.title}
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-base text-zinc-600 sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {servicesSection.intro}
        </motion.p>
        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
        >
          {services.map((item) => {
            const Icon = SERVICE_ICONS[item.icon];
            return (
              <motion.li
                key={item.title}
                variants={{
                  hidden: reduceMotion
                    ? {}
                    : { opacity: 0, y: 20 },
                  show: reduceMotion
                    ? {}
                    : { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="group relative h-full rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-xl bg-white p-2.5 text-indigo-600 ring-1 ring-zinc-200/80 transition group-hover:ring-indigo-200">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {item.description}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
