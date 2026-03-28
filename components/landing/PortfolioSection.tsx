"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function PortfolioSection() {
  const { portfolio } = content;

  return (
    <section
      id={portfolio.id}
      aria-labelledby="portfolio-title"
      className="border-b border-zinc-200/90 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Case studies
          </p>
          <h2
            id="portfolio-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {portfolio.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {portfolio.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {portfolio.cases.map((item, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: EASE_SMOOTH,
                }}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  imageFirst ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-200 dark:bg-zinc-800 ${
                    imageFirst ? "" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out hover:scale-[1.02]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/10"
                    aria-hidden
                  />
                </div>
                <div className={imageFirst ? "" : "lg:order-1"}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
