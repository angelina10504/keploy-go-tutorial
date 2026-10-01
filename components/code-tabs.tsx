'use client'

import { Children, isValidElement, useId, useRef, useState, type KeyboardEvent } from 'react'

export function CodeTabs({ labels, children }: { labels: string[]; children: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId()
  // One code block per label; skip the whitespace MDX leaves between blocks
  const panels = Children.toArray(children).filter(isValidElement)

  const select = (i: number) => {
    setActive(i)
    tabs.current[i]?.focus()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const last = labels.length - 1
    let next: number
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    else return
    e.preventDefault()
    select(next)
  }

  return (
    <div className="code-tabs my-6">
      <div
        role="tablist"
        aria-label="Files"
        onKeyDown={onKeyDown}
        className="flex gap-1 overflow-x-auto rounded-t-xl border border-b-0 border-zinc-200 bg-zinc-50 px-2 dark:border-zinc-800 dark:bg-zinc-900"
      >
        {labels.map((label, i) => {
          const on = i === active
          // "Test: post-url-1.yaml" shows as just "Test" on small screens
          const [short, ...rest] = label.split(':')
          return (
            <button
              key={label}
              ref={(el) => {
                tabs.current[i] = el
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${id}-panel`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={
                'shrink-0 border-b-2 px-3 py-2.5 text-sm whitespace-nowrap transition-colors ' +
                (on
                  ? 'border-orange-500 font-medium text-zinc-900 dark:text-zinc-100'
                  : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200')
              }
            >
              {short}
              {rest.length > 0 && <span className="hidden sm:inline">:{rest.join(':')}</span>}
            </button>
          )
        })}
      </div>
      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`}>
        {panels[active]}
      </div>
    </div>
  )
}
