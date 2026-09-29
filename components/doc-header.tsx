import Link from 'next/link'
import { GitHubIcon, Icon, type IconName } from '@/components/icon'

type Action = { label: string; href: string }

export function DocHeader({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  meta,
  primary,
  secondary,
}: {
  breadcrumb: string[]
  eyebrow: string
  title: string
  subtitle: string
  meta: { icon: IconName; label: string }[]
  primary: Action
  secondary: Action
}) {
  return (
    <header className="not-prose mb-10 border-b border-zinc-200 pb-10 dark:border-zinc-800">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          {breadcrumb.map((crumb, i) => (
            <li key={crumb} className="flex items-center gap-1.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
                  /
                </span>
              )}
              <span className={i === breadcrumb.length - 1 ? 'text-zinc-700 dark:text-zinc-300' : undefined}>
                {crumb}
              </span>
            </li>
          ))}
        </ol>
      </nav>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {meta.map((m) => (
          <li
            key={m.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            <Icon name={m.icon} className="size-3.5 text-zinc-400 dark:text-zinc-500" />
            {m.label}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={primary.href}
          className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          {primary.label}
        </Link>
        <a
          href={secondary.href}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
        >
          <GitHubIcon className="size-4" />
          {secondary.label}
        </a>
      </div>
    </header>
  )
}
