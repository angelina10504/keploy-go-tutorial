export function Explain({
  title = 'What just happened?',
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <details className="group my-4 rounded-xl border border-zinc-200 bg-zinc-50/60 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/40">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-zinc-700 select-none dark:text-zinc-300 [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-open:rotate-90">
          ▸
        </span>
        {title}
      </summary>
      <div className="mt-2 text-[0.95em] [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </details>
  )
}