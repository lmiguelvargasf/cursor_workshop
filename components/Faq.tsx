import { landingContent } from "@/constants/content";

export function Faq() {
  return (
    <section id="faq" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">FAQ</p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {landingContent.faq.title}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {landingContent.faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-100 marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-zinc-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
