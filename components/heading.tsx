import type { ComponentProps } from 'react'

// h2/h3 with a quiet "#" link after the text. The "#" itself comes from CSS
// (.heading-anchor::after) so it stays out of the heading's text content.
function Anchor({ id }: { id?: string }) {
  if (!id) return null
  return <a href={'#' + id} aria-label="Link to this section" className="heading-anchor" />
}

export function H2({ children, ...props }: ComponentProps<'h2'>) {
  return (
    <h2 {...props}>
      {children}
      <Anchor id={props.id} />
    </h2>
  )
}

export function H3({ children, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 {...props}>
      {children}
      <Anchor id={props.id} />
    </h3>
  )
}
