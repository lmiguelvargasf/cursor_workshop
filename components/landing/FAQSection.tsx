"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function FAQSection() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id={content.faq.id}
      aria-labelledby="faq-title"
      className="border-b border-zinc-200/90 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Questions
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {content.faq.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {content.faq.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 divide-y divide-zinc-200/90 dark:divide-zinc-800">
          {content.faq.items.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-btn-${index}`;
            const isOpen = open === index;
            return (
              <div key={item.question} className="py-2">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50 sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_SMOOTH }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
