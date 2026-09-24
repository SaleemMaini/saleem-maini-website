import { skills } from "@/content/site";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My toolkit">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-semibold">{s.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-md border border-border px-2.5 py-1 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
