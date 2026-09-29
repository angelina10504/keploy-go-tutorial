import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/callout'
import { Steps } from '@/components/steps'
import { Pre } from '@/components/pre'
import { FlowDiagram } from '@/components/flow-diagram'

const components: MDXComponents = {
  pre: Pre,
  Callout,
  Steps,
  FlowDiagram,
}

export function useMDXComponents(): MDXComponents {
  return components
}