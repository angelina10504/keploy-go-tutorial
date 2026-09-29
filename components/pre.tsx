'use client'

import { useRef, useState, type ComponentProps } from 'react'

export function Pre(props: ComponentProps<'pre'>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(ref.current?.innerText ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="group relative">
      <pre ref={ref} {...props} />
      <button
        onClick={copy}
        aria-label="Copy code"
        className="absolute right-2 top-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700 transition hover:bg-zinc-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}