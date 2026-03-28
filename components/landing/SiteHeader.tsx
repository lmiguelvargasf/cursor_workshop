"use client";

import Link from "next/link";
import { content } from "@/constants/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-zinc-200/80 bg-white/80 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-full max-w-[var(--content-max)] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`#${content.hero.id}`}
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-base"
        >
          {content.brand}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto md:flex"
        >
          {content.nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={content.nav.ctaHref}
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-zinc-950"
        >
          {content.nav.ctaLabel}
        </Link>
      </div>
    </header>
  );
}
