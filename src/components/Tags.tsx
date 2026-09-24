export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          {t}
        </li>
      ))}
    </ul>
  );
}
