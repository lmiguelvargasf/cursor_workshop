"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { contactSection, nav } from "@/constants/content";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={contactSection.id}
      aria-labelledby="contact-title"
      className="border-b border-zinc-200/90 bg-zinc-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <motion.div
            className="lg:col-span-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-96px" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {contactSection.eyebrow}
            </p>
            <h2
              id="contact-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              {contactSection.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              {contactSection.intro}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 lg:col-span-6 lg:items-end"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-96px" }}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={contactSection.emailCta.href}
              className="group flex w-full max-w-md items-center justify-between gap-4 rounded-2xl border border-zinc-200/90 bg-white px-5 py-4 transition hover:border-zinc-300 lg:w-full"
            >
              <span className="flex items-center gap-3">
                <Mail
                  className="size-5 text-zinc-900"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="font-medium text-zinc-900">
                  {contactSection.emailCta.label}
                </span>
              </span>
              <span className="text-sm text-zinc-500 transition group-hover:text-zinc-800">
                {contactSection.emailCta.hint}
              </span>
            </Link>
            <Link
              href={contactSection.whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-md items-center justify-between gap-4 rounded-2xl border border-zinc-200/90 bg-white px-5 py-4 transition hover:border-zinc-300 lg:w-full"
            >
              <span className="flex items-center gap-3">
                <MessageCircle
                  className="size-5 text-zinc-900"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="font-medium text-zinc-900">
                  {contactSection.whatsappCta.label}
                </span>
              </span>
              <span className="text-sm text-zinc-500 transition group-hover:text-zinc-800">
                {contactSection.whatsappCta.hint}
              </span>
            </Link>
            <Link
              href={nav.primaryCta.href}
              className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 lg:w-full"
            >
              {nav.primaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
