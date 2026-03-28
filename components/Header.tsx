import { landingContent } from "@/constants/content";
import { MustacheMark } from "@/components/MustacheMark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <MustacheMark className="h-5 w-7 text-lime-300" />
          <p className="font-syne text-lg font-semibold tracking-tight text-zinc-50">
            {landingContent.brand.name}
          </p>
          <span className="hidden text-xs text-zinc-500 sm:inline">|</span>
          <p className="hidden text-xs text-zinc-400 sm:block">
            {landingContent.brand.tag}
          </p>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {landingContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={landingContent.repository.releasesUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-lime-300"
        >
          {landingContent.cta.primaryButtonLabel}
        </a>
      </div>
    </header>
  );
}
