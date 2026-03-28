"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { content } from "@/constants/content";
import { EASE_SMOOTH } from "@/constants/motion";

function XIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={props.className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FinalCtaFooter() {
  const year = new Date().getFullYear();
  const d = content.contactDetails;
  const mailto = `mailto:${d.email}?subject=${encodeURIComponent(d.emailSubject)}`;
  const waUrl = `https://wa.me/${d.whatsappE164}`;

  const socials = [
    { href: content.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: content.social.x, label: "X", Icon: XIcon },
    { href: content.social.instagram, label: "Instagram", Icon: Instagram },
  ].filter((s) => s.href && s.href.length > 0);

  return (
    <>
      <section
        id={content.finalCta.id}
        aria-labelledby="final-cta-title"
        className="relative overflow-hidden bg-zinc-900 text-zinc-50 dark:bg-black"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(16,185,129,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[var(--content-max)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH }}
          >
            <h2
              id="final-cta-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {content.finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              {content.finalCta.subtitle}
            </p>
            <Link
              href={mailto}
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-zinc-900 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {content.finalCta.buttonLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-[var(--content-max)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))] lg:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-semibold text-white">
                {content.brand}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed">
                {content.footer.blurb}
              </p>
            </div>
            {content.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-8 border-t border-zinc-900 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
              <Link
                href={mailto}
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {d.email}
              </Link>
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {d.whatsappLabel} · {d.whatsappE164}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 px-4 py-6 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-[var(--content-max)] text-xs text-zinc-500">
            © {year} {content.footer.copyright}. {content.footer.rightsSuffix}
          </p>
        </div>
      </footer>
    </>
  );
}
