// Definition-style list: a log message in monospace, with what it means underneath
export function Messages({ children }: { children: React.ReactNode }) {
  return (
    <dl className="not-prose my-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {children}
    </dl>
  )
}

export function Message({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="py-4">
      <dt className="font-mono text-[0.85rem] break-words text-zinc-900 dark:text-zinc-100">{text}</dt>
      <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-zinc-600 dark:text-zinc-400 [&_code]:rounded-md [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:text-zinc-800 dark:[&_code]:bg-zinc-800 dark:[&_code]:text-zinc-200">
        {children}
      </dd>
    </div>
  )
}

export function Footnote({ children }: { children: React.ReactNode }) {
  return <div className="not-prose mt-10 text-sm text-zinc-500 dark:text-zinc-400">{children}</div>
}
