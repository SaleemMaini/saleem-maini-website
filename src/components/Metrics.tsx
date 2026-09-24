import { metrics } from "@/content/site";

export function Metrics() {
  return (
    <section aria-label="Key numbers" className="mx-auto max-w-5xl px-4 sm:px-6">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col-reverse justify-end bg-surface p-6">
            <dt className="mt-1 text-sm leading-snug text-muted">{m.label}</dt>
            <dd className="text-4xl font-extrabold tracking-tight text-accent">{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
