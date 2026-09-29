'use client'

import { useEffect, useState } from 'react'

type Heading = { id: string; text: string; level: number }

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('article h2[id], article h3[id]')
    )
    setHeadings(
      els.map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }))
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '0px 0px -70% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!headings.length) return null

  const base = '-ml-px block border-l'
  const activeCls =
    'border-zinc-900 font-medium text-zinc-900 dark:border-zinc-100 dark:text-zinc-100'
  const idleCls =
    'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'

  return (
    <nav aria-label="On this page" className="sticky top-20 text-sm">
      <p className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">On this page</p>
      <ul className="space-y-2 border-l border-zinc-200 dark:border-zinc-800">
        {headings.map((h) => {
          const indent = h.level === 3 ? 'pl-6' : 'pl-3'
          const state = active === h.id ? activeCls : idleCls
          return (
            <li key={h.id}>
              <a href={'#' + h.id} className={base + ' ' + indent + ' ' + state}>
                {h.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}