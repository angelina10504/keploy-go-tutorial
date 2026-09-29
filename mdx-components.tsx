import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/callout'
import { Steps } from '@/components/steps'
import { Pre } from '@/components/pre'
import { RecordReplayDiagram } from '@/components/record-replay-diagram'
import { ConceptGrid, Concept } from '@/components/concept'
import { Explain } from '@/components/explain'
import { DocHeader } from '@/components/doc-header'
import { AtAGlance } from '@/components/at-a-glance'
import { Messages, Message, Footnote } from '@/components/messages'

const components: MDXComponents = {
  pre: Pre,
  Callout,
  Steps,
  RecordReplayDiagram,
  ConceptGrid,
  Concept,
  Explain,
  DocHeader,
  AtAGlance,
  Messages,
  Message,
  Footnote,
}

export function useMDXComponents(): MDXComponents {
  return components
}