'use client'

import { useEffect, useRef } from 'react'

// 2px bar along the top of the header that fills as you scroll the page
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 motion-reduce:hidden">
      <div ref={bar} className="h-full origin-left bg-orange-500" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
