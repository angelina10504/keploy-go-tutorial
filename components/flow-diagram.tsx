function Box({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={
        'rounded-lg border px-3 py-2 text-center text-sm font-medium ' +
        (accent
          ? 'border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950/40 dark:text-orange-200'
          : 'border-zinc-200 bg-white text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200')
      }
    >
      {children}
    </div>
  )
}

function Arrow() {
  return <span className="text-zinc-400 dark:text-zinc-500" aria-hidden="true">→</span>
}

function Row({ label, children, note }: { label: string; children: React.ReactNode; note: string }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
      <p className="!my-0 text-sm text-zinc-600 dark:text-zinc-400">{note}</p>
    </div>
  )
}

export function FlowDiagram() {
  return (
    <figure
      className="not-prose my-8 space-y-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
      aria-label="How Keploy records and replays"
    >
      <Row
        label="1 · Record"
        note="Keploy sits in the middle and writes down every request, response, and database call."
      >
        <Box>curl</Box>
        <Arrow />
        <Box accent>Keploy</Box>
        <Arrow />
        <Box>Gin app</Box>
        <Arrow />
        <Box accent>Keploy</Box>
        <Arrow />
        <Box>MongoDB</Box>
      </Row>
      <Row
        label="2 · Replay"
        note="Keploy sends the saved requests and answers the app's database calls from the saved mocks. No database needed."
      >
        <Box accent>Keploy (tests)</Box>
        <Arrow />
        <Box>Gin app</Box>
        <Arrow />
        <Box accent>Keploy (mocks)</Box>
      </Row>
    </figure>
  )
}