import { Briefcase, TrendingUp } from "lucide-react";
import { experience } from "@/content/site";
import { RichText } from "./RichText";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've made an impact">
      <ol className="relative space-y-12 border-l border-border pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-2xl font-bold">{job.company}</h3>
              <p className="text-sm text-muted">
                {job.location} · {job.period}
              </p>
            </div>
            <p className="mt-1 text-muted italic">{job.summary}</p>

            <ul className="mt-4 space-y-1">
              {job.roles.map((role, i) => (
                <li key={role.title} className="flex flex-wrap items-baseline gap-x-2">
                  <span className={i === 0 ? "font-semibold" : "text-muted"}>{role.title}</span>
                  <span className="text-sm text-muted">· {role.period}</span>
                </li>
              ))}
            </ul>
            {job.promotionNote && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <TrendingUp className="h-4 w-4" aria-hidden="true" /> {job.promotionNote}
              </p>
            )}

            <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
              {job.highlights.map((h) => (
                <li key={h}>
                  <RichText text={h} />
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Tags items={job.tags} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
