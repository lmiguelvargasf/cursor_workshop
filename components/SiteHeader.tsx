import Link from "next/link";
import { brand, nav } from "@/constants/content";

const ctaClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:contents">
          <Link
            href="/"
            className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 sm:text-base"
          >
            {brand.name}
          </Link>
          <Link href={nav.primaryCta.href} className={`${ctaClassName} sm:hidden`}>
            {nav.primaryCta.label}
          </Link>
        </div>
        <nav
          aria-label="Page sections"
          className="scrollbar-none flex min-w-0 items-center gap-1 overflow-x-auto pb-0.5 sm:flex-1 sm:justify-center sm:gap-1 sm:pb-0 sm:pl-2 md:gap-2"
        >
          {nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href={nav.primaryCta.href} className={`${ctaClassName} hidden sm:inline-flex`}>
          {nav.primaryCta.label}
        </Link>
      </div>
    </header>
  );
}
