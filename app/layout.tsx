import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'
import { TableOfContents } from '@/components/table-of-contents'
import { GitHubIcon } from '@/components/icon'
import { ReadingProgress } from '@/components/reading-progress'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

// Same title and description as app/page.mdx, so link previews match the page
const title = 'Test a Go API without writing tests — Keploy + Gin + MongoDB on macOS'
const description =
  'A beginner-friendly walkthrough of the Keploy Gin + MongoDB quickstart, run natively on an Apple Silicon Mac.'

export const metadata: Metadata = {
  metadataBase: new URL('https://keploy-go-tutorial-seven.vercel.app'),
  title,
  description,
  openGraph: { type: 'article', title, description, siteName: 'Keploy x Go', url: '/' },
  twitter: { card: 'summary_large_image', title, description },
}

// Runs before the page paints: applies saved theme (or system preference) to avoid a flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#content"
          className="sr-only rounded-lg bg-zinc-900 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Skip to content
        </a>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
          <ReadingProgress />
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <span className="font-semibold">Keploy × Go</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/angelina10504/keploy-go-tutorial"
                aria-label="Source on GitHub"
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              >
                <GitHubIcon className="size-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="mx-auto flex max-w-7xl gap-10 px-4">
          <aside className="hidden w-52 shrink-0 py-10 xl:block">
            <TableOfContents title="Sections" sectionsOnly />
          </aside>
          <article id="content" tabIndex={-1} className="outline-none prose prose-zinc min-w-0 max-w-4xl flex-1 py-10 dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
            {children}
          </article>
          <aside className="hidden w-56 shrink-0 py-10 lg:block">
            <TableOfContents />
          </aside>
        </div>
      </body>
    </html>
  )
}