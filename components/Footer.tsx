import { MustacheMark } from "@/components/MustacheMark";
import { landingContent } from "@/constants/content";

export function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-zinc-300">
          <MustacheMark className="h-4 w-6 text-lime-300" />
          <span className="font-medium">{landingContent.brand.name}</span>
          <span className="text-zinc-500">-</span>
          <span className="text-sm text-zinc-400">{landingContent.brand.tag}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {landingContent.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {landingContent.footer.copyright}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
