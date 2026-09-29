type CalloutType = 'info' | 'tip' | 'warning'

const styles: Record<CalloutType, { icon: string; label: string; cls: string }> = {
  info: {
    icon: 'ℹ️',
    label: 'Note',
    cls: 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40',
  },
  tip: {
    icon: '💡',
    label: 'Tip',
    cls: 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40',
  },
  warning: {
    icon: '⚠️',
    label: 'Heads up',
    cls: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40',
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
  return (
    <div className={`my-6 rounded-xl border p-4 text-[0.95em] ${s.cls}`}>
      <div className="mb-1 font-semibold">
        {s.icon} {title ?? s.label}
      </div>
      <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </div>
  )
}