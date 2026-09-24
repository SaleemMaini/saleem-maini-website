import { GraduationCap, Languages } from "lucide-react";
import { about, education, languages } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" /> Education
            </h3>
            <ul className="mt-3 space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-muted">
                    {e.school} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="h-5 w-5 text-accent" aria-hidden="true" /> Languages
            </h3>
            <ul className="mt-3 space-y-1">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
