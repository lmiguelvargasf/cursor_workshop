import { Mail, MapPin, UserRound } from "lucide-react";
import { landingContent } from "@/constants/content";

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-lime-300/90">Contact</p>
          <h2 className="mt-3 font-syne text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Let&apos;s improve your audio workflow
          </h2>
          <p className="mt-4 text-zinc-300">
            Reach out if you want to contribute, request a feature, or discuss how Mac Mixer fits your setup.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <a
            href={`mailto:${landingContent.contact.email}`}
            className="flex items-center gap-3 border-t border-white/10 py-3 text-zinc-200 transition hover:text-zinc-50"
          >
            <Mail className="h-4 w-4 text-lime-300" aria-hidden />
            <span>{landingContent.contact.email}</span>
          </a>
          <a
            href={landingContent.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border-t border-white/10 py-3 text-zinc-200 transition hover:text-zinc-50"
          >
            <UserRound className="h-4 w-4 text-lime-300" aria-hidden />
            <span>LinkedIn profile</span>
          </a>
          <div className="flex items-center gap-3 border-t border-white/10 py-3 text-zinc-300">
            <MapPin className="h-4 w-4 text-lime-300" aria-hidden />
            <span>{landingContent.contact.location}</span>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 py-3 text-zinc-300">
            <span className="inline-block h-2 w-2 rounded-full bg-lime-300" aria-hidden />
            <span>{landingContent.contact.responseTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
