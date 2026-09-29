import { Icon, type IconName } from '@/components/icon'

export function ConceptGrid({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">{children}</div>
}

export function Concept({
  icon,
  title,
  children,
}: {
  icon: IconName
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="h-full rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
      <div className="flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
        <Icon name={icon} className="size-5" />
      </div>
      <div className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
      <div className="mt-1 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-zinc-800 dark:[&_code]:bg-zinc-800 dark:[&_code]:text-zinc-200">
        {children}
      </div>
    </div>
  )
}
