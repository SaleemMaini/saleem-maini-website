import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/content/site";
import { Section } from "./Section";
import { Tags } from "./Tags";

export function CaseStudies() {
  return (
    <Section id="work" eyebrow="Featured work" title="Products I've built and shipped">
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent motion-reduce:hover:translate-y-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.kind}</p>
            <h3 className="mt-2 text-xl font-bold">{cs.title}</h3>
            <p className="text-sm text-muted">{cs.company}</p>

            <dl className="mt-5 flex-1 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold">Challenge</dt>
                <dd className="text-muted">{cs.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold">What I did</dt>
                <dd className="text-muted">{cs.action}</dd>
              </div>
              <div>
                <dt className="font-semibold">Outcome</dt>
                <dd className="font-medium text-accent">{cs.outcome}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <Tags items={cs.tags} />
            </div>
            {cs.links && cs.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                {cs.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                    {l.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
