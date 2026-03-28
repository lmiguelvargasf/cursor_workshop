"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqSection } from "@/constants/content";

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={faqSection.id}
      aria-labelledby="faq-title"
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
            {faqSection.eyebrow}
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {faqSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            {faqSection.intro}
          </p>
        </motion.div>

        <ul className="mx-auto mt-14 max-w-3xl divide-y divide-zinc-200/90">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <li key={item.question} className="py-2">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-zinc-900 transition hover:text-zinc-600 sm:text-lg"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-zinc-500 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen &&
                    (reduceMotion ? (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                      >
                        <p className="pb-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    ) : (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
