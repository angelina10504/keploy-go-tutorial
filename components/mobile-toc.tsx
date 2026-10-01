'use client'

import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { useHeadings } from '@/components/table-of-contents'

// Collapsible "On this page" for screens where the right sidebar is hidden
export function MobileToc() {
  const { headings } = useHeadings()
  const details = useRef<HTMLDetailsElement>(null)

  if (!headings.length) return null

  return (
    <details
      ref={details}
      className="group not-prose mb-8 rounded-xl border border-zinc-200 bg-zinc-50/70 lg:hidden dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-semibold text-zinc-900 select-none dark:text-zinc-100 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className="size-4 text-zinc-400 transition-transform duration-200 group-open:rotate-90"
        />
        On this page
      </summary>
      <nav aria-label="On this page" className="border-t border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <ul className="space-y-2.5 text-sm">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? 'pl-4' : undefined}>
              <a
                href={'#' + h.id}
                onClick={() => {
                  if (details.current) details.current.open = false
                }}
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}
