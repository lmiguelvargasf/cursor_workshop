import Link from "next/link";
import { Github, Mail, MessageCircle } from "lucide-react";
import { siteFooter } from "@/constants/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold text-white">
              {siteFooter.copyrightOwner}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              {siteFooter.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:col-span-7 md:justify-end lg:grid-cols-2">
            {siteFooter.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <a
              href={siteFooter.contact.email.href}
              className="inline-flex items-center gap-2 text-sm transition hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-zinc-500" aria-hidden />
              <span>
                <span className="sr-only">{siteFooter.contact.email.label}: </span>
                {siteFooter.contact.email.display}
              </span>
            </a>
            <a
              href={siteFooter.contact.whatsapp.waMeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition hover:text-white"
            >
              <MessageCircle
                className="size-4 shrink-0 text-zinc-500"
                aria-hidden
              />
              <span>
                <span className="sr-only">
                  {siteFooter.contact.whatsapp.label}:{" "}
                </span>
                {siteFooter.contact.whatsapp.display}
              </span>
            </a>
            <a
              href={siteFooter.social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition hover:text-white"
            >
              <Github className="size-4 shrink-0 text-zinc-500" aria-hidden />
              <span>
                <span className="sr-only">{siteFooter.social.label}: </span>
                {siteFooter.social.handle}
              </span>
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            {siteFooter.copyrightPrefix} {year} {siteFooter.copyrightOwner}
          </p>
        </div>
      </div>
    </footer>
  );
}
