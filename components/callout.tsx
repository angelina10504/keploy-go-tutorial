import { Info, Lightbulb, TriangleAlert, type LucideIcon } from 'lucide-react'

type CalloutType = 'info' | 'tip' | 'warning'

const styles: Record<CalloutType, { icon: LucideIcon; label: string; border: string; iconCls: string }> = {
  info: {
    icon: Info,
    label: 'Note',
    border: 'border-l-blue-500 dark:border-l-blue-400',
    iconCls: 'text-blue-600 dark:text-blue-400',
  },
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    border: 'border-l-emerald-500 dark:border-l-emerald-400',
    iconCls: 'text-emerald-600 dark:text-emerald-400',
  },
  warning: {
    icon: TriangleAlert,
    label: 'Heads up',
    border: 'border-l-amber-500 dark:border-l-amber-400',
    iconCls: 'text-amber-600 dark:text-amber-400',
  },
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}) {
  const s = styles[type]
  const CalloutIcon = s.icon
  return (
    <div
      className={`my-6 rounded-r-lg border border-l-[3px] border-zinc-200 bg-zinc-50/50 px-4 py-3 text-[0.95em] dark:border-zinc-800 dark:bg-zinc-900/30 ${s.border}`}
    >
      <div className="mb-1 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
        <CalloutIcon aria-hidden="true" className={`size-[18px] shrink-0 ${s.iconCls}`} />
        {title ?? s.label}
      </div>
      <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </div>
  )
}
