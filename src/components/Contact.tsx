import { Download, Mail } from "lucide-react";
import { contact, profile } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { RichText } from "./RichText";

export function Contact({ hasCv }: { hasCv: boolean }) {
  const secondary =
    "inline-flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-3 font-medium transition hover:border-accent hover:text-accent";

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
        <h2 id="contact-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
          <RichText text={contact.body} />
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-white transition hover:opacity-90 dark:text-bg">
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={secondary}>
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          {hasCv && (
            <a href={profile.cvPath} download className={secondary}>
              <Download className="h-4 w-4" /> Download CV
            </a>
          )}
        </div>
        <p className="mt-6 text-sm text-muted">{profile.email}</p>
      </div>
    </section>
  );
}
