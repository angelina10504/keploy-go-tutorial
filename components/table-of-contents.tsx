'use client'

import { useEffect, useState } from 'react'

type Heading = { id: string; text: string; level: number }

// Reads the article's headings and tracks which one is being read.
// Shared by the sidebars and the mobile "On this page" bar.
export function useHeadings(sectionsOnly = false) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        sectionsOnly ? 'article h2[id]' : 'article h2[id], article h3[id]'
      )
    )
    setHeadings(
      els.map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }))
    )

    // Active = the last heading that has scrolled above the top 120px of the screen.
    // Works for fast scrolling and jump links, unlike watching headings enter view.
    const update = () => {
      let current = els[0]?.id ?? ''
      for (const el of els) {
        if (el.getBoundingClientRect().top <= 120) current = el.id
        else break
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionsOnly])

  return { headings, active }
}

export function TableOfContents({
  title = 'On this page',
  sectionsOnly = false,
}: {
  title?: string
  /** List only the h2s (main sections) instead of h2 + h3 */
  sectionsOnly?: boolean
}) {
  const { headings, active } = useHeadings(sectionsOnly)

  if (!headings.length) return null

  const base = '-ml-px block border-l'
  const activeCls =
    'border-zinc-900 font-medium text-zinc-900 dark:border-zinc-100 dark:text-zinc-100'
  const idleCls =
    'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'

  return (
    <nav aria-label={title} className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto text-sm">
      <p className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">{title}</p>
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
