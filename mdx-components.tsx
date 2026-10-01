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
import { CodeTabs } from '@/components/code-tabs'
import { H2, H3 } from '@/components/heading'
import { MobileToc } from '@/components/mobile-toc'

const components: MDXComponents = {
  pre: Pre,
  h2: H2,
  h3: H3,
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
  CodeTabs,
  MobileToc,
}

export function useMDXComponents(): MDXComponents {
  return components
}