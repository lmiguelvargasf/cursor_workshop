import { landingContent } from "@/constants/content";

export function CtaSection() {
  return (
    <section className="border-b border-white/10 bg-zinc-50 py-16 text-zinc-950 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-syne text-3xl font-semibold tracking-tight sm:text-4xl">
            {landingContent.cta.title}
          </h2>
          <p className="mt-4 text-zinc-700">{landingContent.cta.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={landingContent.repository.releasesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800"
          >
            {landingContent.cta.primaryButtonLabel}
          </a>
          <a
            href={landingContent.repository.issuesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            {landingContent.cta.secondaryButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
