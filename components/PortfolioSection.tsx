"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioSection } from "@/constants/content";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={portfolioSection.id}
      aria-labelledby="portfolio-title"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-32"
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
            {portfolioSection.eyebrow}
          </p>
          <h2
            id="portfolio-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {portfolioSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {portfolioSection.intro}
          </p>
        </motion.div>

        <ul className="mt-16 space-y-16 sm:space-y-20">
          {portfolioSection.projects.map((project, i) => (
            <motion.li
              key={project.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-10 lg:gap-14"
              >
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-7">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
                <div className="md:col-span-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900">
                    {project.name}
                    <ArrowUpRight
                      className="size-5 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-900"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
