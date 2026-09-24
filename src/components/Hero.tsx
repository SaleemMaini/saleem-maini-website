import { ArrowRight, Download, MapPin } from "lucide-react";
import { hero, profile } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Hero({ hasCv }: { hasCv: boolean }) {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28">
      <div className="reveal">
        <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.availability}
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </p>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-2xl font-semibold text-muted sm:text-3xl">
          {profile.role}, <span className="text-accent">{profile.specialty}</span>
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white transition hover:opacity-90 dark:text-bg"
          >
            View my work <ArrowRight className="h-4 w-4" />
          </a>
          {hasCv ? (
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          )}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent hover:text-accent">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent hover:text-accent">
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
