'use client'

import { useState } from 'react'

type Mode = 'record' | 'replay'

function Node({
  label,
  sub,
  accent = false,
  dim = false,
}: {
  label: string
  sub: string
  accent?: boolean
  dim?: boolean
}) {
  const tone = dim
    ? 'border-dashed border-zinc-300 bg-transparent text-zinc-400 dark:border-zinc-700 dark:text-zinc-600'
    : accent
      ? 'border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950/40 dark:text-orange-200'
      : 'border-zinc-200 bg-white text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100'

  return (
    <div
      className={
        'rounded-lg border px-2 py-2 text-center transition-all duration-300 sm:min-w-0 sm:flex-1 sm:self-stretch ' +
        tone
      }
    >
      <div className={'text-sm font-semibold ' + (dim ? 'line-through' : '')}>{label}</div>
      <div className="text-[11px] leading-snug opacity-80">{sub}</div>
    </div>
  )
}

function Arrow({ dim = false }: { dim?: boolean }) {
  const tone = dim ? 'text-zinc-300 opacity-40 dark:text-zinc-700' : 'text-zinc-400 dark:text-zinc-500'
  return (
    <span aria-hidden="true" className={'shrink-0 text-center transition-opacity duration-300 ' + tone}>
      <span className="sm:hidden">↓</span>
      <span className="hidden sm:inline">→</span>
    </span>
  )
}

const captions: Record<Mode, string[]> = {
  record: [
    'You use the API as normal, e.g. with curl.',
    'Keploy saves each request and the app’s response as a test case.',
    'When the app talks to MongoDB, Keploy saves that conversation as a mock.',
  ],
  replay: [
    'Keploy restarts your app and re-sends the saved requests.',
    'When the app asks MongoDB something, Keploy answers from the saved mocks.',
    'Keploy compares the new responses with the saved ones. Same response = test passes.',
  ],
}

export function RecordReplayDiagram() {
  const [mode, setMode] = useState<Mode>('record')
  const isRecord = mode === 'record'

  const tabBase = 'rounded-md px-3 py-1.5 text-sm font-medium transition-colors'
  const tabOn = 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100'
  const tabOff = 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'

  return (
    <figure
      className="not-prose my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
      aria-label="How Keploy records and replays"
    >
      <div
        role="tablist"
        aria-label="Keploy mode"
        className="mb-5 inline-flex rounded-lg border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <button role="tab" aria-selected={isRecord} onClick={() => setMode('record')} className={tabBase + ' ' + (isRecord ? tabOn : tabOff)}>
          1 · Record
        </button>
        <button role="tab" aria-selected={!isRecord} onClick={() => setMode('replay')} className={tabBase + ' ' + (!isRecord ? tabOn : tabOff)}>
          2 · Replay
        </button>
      </div>

      <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center">
        {isRecord ? (
          <>
            <Node label="You (curl)" sub="send requests" />
            <Arrow />
            <Node label="Keploy" sub="saves request + response" accent />
            <Arrow />
          </>
        ) : (
          <>
            <Node label="Keploy" sub="re-sends saved requests" accent />
            <Arrow />
          </>
        )}
        <Node label="Gin app" sub="your code, unchanged" />
        <Arrow />
        <Node label="Keploy" sub={isRecord ? 'saves DB replies' : 'answers from mocks'} accent />
        <Arrow dim={!isRecord} />
        <Node label="MongoDB" sub={isRecord ? 'real database' : 'not needed'} dim={!isRecord} />
      </div>

      <ol className="mt-5 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
        {captions[mode].map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </figure>
  )
}
