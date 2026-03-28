"use client";

import Link from "next/link";
import { Github, Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { footer } from "@/constants/content";

export function FinalCtaFooter() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <div>
      <section
        aria-labelledby="final-cta-title"
        className="bg-zinc-950 text-zinc-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="final-cta-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {footer.finalCta.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              {footer.finalCta.subtitle}
            </p>
            <Link
              href={footer.finalCta.buttonHref}
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-950/40 transition hover:scale-[1.02] hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              {footer.finalCta.buttonLabel}
            </Link>
          </motion.div>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            <a
              href={footer.contact.email.href}
              className="inline-flex items-center gap-2 text-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <Mail className="size-4 shrink-0 text-zinc-500" aria-hidden />
              <span>
                <span className="sr-only">{footer.contact.email.label}: </span>
                {footer.contact.email.display}
              </span>
            </a>
            <a
              href={footer.contact.whatsapp.waMeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <MessageCircle
                className="size-4 shrink-0 text-zinc-500"
                aria-hidden
              />
              <span>
                <span className="sr-only">
                  {footer.contact.whatsapp.label}:{" "}
                </span>
                {footer.contact.whatsapp.display}
              </span>
            </a>
            <a
              href={footer.social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              <Github className="size-4 shrink-0 text-zinc-500" aria-hidden />
              <span>
                <span className="sr-only">{footer.social.label}: </span>
                {footer.social.handle}
              </span>
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            {footer.copyrightPrefix} {year} {footer.copyrightOwner}
          </p>
        </div>
      </footer>
    </div>
  );
}
