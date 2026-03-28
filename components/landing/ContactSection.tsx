"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

export function ContactSection() {
  const c = content.contact;
  const d = content.contactDetails;
  const mailto = `mailto:${d.email}?subject=${encodeURIComponent(d.emailSubject)}`;
  const waUrl = `https://wa.me/${d.whatsappE164}`;

  return (
    <section
      id={c.id}
      aria-labelledby="contact-title"
      className="border-b border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: EASE_SMOOTH }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            >
              {c.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {c.lead}
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              {c.responseNote}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-stretch lg:flex-col"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE_SMOOTH }}
          >
            <Link
              href={mailto}
              className="inline-flex flex-1 items-center gap-4 border border-zinc-200/90 bg-zinc-50 px-6 py-5 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <Mail className="h-5 w-5 text-emerald-700 dark:text-emerald-400" aria-hidden />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {c.emailCta}
                </span>
                <span className="mt-1 block text-base font-medium text-zinc-900 dark:text-zinc-50">
                  {d.email}
                </span>
              </span>
            </Link>
            <Link
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center gap-4 border border-zinc-200/90 bg-zinc-50 px-6 py-5 transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <MessageCircle
                className="h-5 w-5 text-emerald-700 dark:text-emerald-400"
                aria-hidden
              />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {c.whatsappCta}
                </span>
                <span className="mt-1 block text-base font-medium text-zinc-900 dark:text-zinc-50">
                  {d.whatsappLabel} · {d.whatsappE164}
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
