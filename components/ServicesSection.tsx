"use client";

import type { LucideIcon } from "lucide-react";
import { Boxes, Cloud, Layers } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  services,
  servicesSection,
  type ServiceIconKey,
} from "@/constants/content";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  Cloud,
  Layers,
  Boxes,
};

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={servicesSection.id}
      aria-labelledby="services-title"
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
            {servicesSection.eyebrow}
          </p>
          <h2
            id="services-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {servicesSection.intro}
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-12 border-t border-zinc-200/90 pt-16 md:grid-cols-3 md:gap-10 md:pt-20 lg:gap-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.07,
              },
            },
          }}
        >
          {services.map((item, index) => {
            const Icon = SERVICE_ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: reduceMotion ? {} : { opacity: 0, y: 18 },
                  show: reduceMotion ? {} : { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={index > 0 ? "md:border-l md:border-zinc-200/90 md:pl-10 lg:pl-14" : ""}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className="mt-1 size-5 shrink-0 text-zinc-900"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
