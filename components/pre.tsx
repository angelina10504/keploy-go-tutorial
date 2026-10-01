'use client'

import { useEffect, useRef, useState, type ComponentProps } from 'react'

export function Pre(props: ComponentProps<'pre'>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)
  const [moreRight, setMoreRight] = useState(false)

  // Show the right-edge fade only while there is code hidden off to the right
  useEffect(() => {
    const pre = ref.current
    if (!pre) return
    const update = () => setMoreRight(pre.scrollLeft + pre.clientWidth < pre.scrollWidth - 1)

    update()
    const observer = new ResizeObserver(update)
    observer.observe(pre)
    pre.addEventListener('scroll', update, { passive: true })
    return () => {
      observer.disconnect()
      pre.removeEventListener('scroll', update)
    }
  }, [])

  const copy = async () => {
    await navigator.clipboard.writeText(ref.current?.innerText ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="group relative">
      <pre ref={ref} {...props} />
      <div
        aria-hidden="true"
        className={
          'pointer-events-none absolute inset-y-px right-px w-6 rounded-r-xl bg-linear-to-l from-zinc-50 to-transparent transition-opacity duration-200 dark:from-zinc-900 ' +
          (moreRight ? 'opacity-100' : 'opacity-0')
        }
      />
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
