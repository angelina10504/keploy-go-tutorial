import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'
import { TableOfContents } from '@/components/table-of-contents'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keploy + Go on macOS',
  description: 'Record and replay API tests for a Gin + MongoDB app with Keploy, natively on macOS.',
}

// Runs before the page paints: applies saved theme (or system preference) to avoid a flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <span className="font-semibold">Keploy × Go</span>
            <ThemeToggle />
          </div>
        </header>
        <div className="mx-auto flex max-w-6xl gap-12 px-4">
          <article className="prose prose-zinc min-w-0 max-w-3xl flex-1 py-10 dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
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