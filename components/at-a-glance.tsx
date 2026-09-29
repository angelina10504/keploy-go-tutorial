import { Check } from 'lucide-react'

function Column({ title, items, check }: { title: string; items: string[]; check?: boolean }) {
  return (
    <div>
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {check ? (
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AtAGlance({
  youWillDo,
  goodToKnow,
  children,
}: {
  youWillDo: string[]
  goodToKnow: string[]
  /** Optional short note shown in muted text under the card */
  children?: React.ReactNode
}) {
  return (
    <section aria-label="At a glance" className="not-prose my-8">
      <div className="grid gap-6 rounded-xl border border-zinc-200 bg-zinc-50/70 p-5 sm:grid-cols-2 sm:gap-8 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        <Column title="What you'll do" items={youWillDo} check />
        <Column title="Good to know" items={goodToKnow} />
      </div>
      {children && <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{children}</div>}
    </section>
  )
}
