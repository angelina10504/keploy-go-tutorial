import { ImageResponse } from 'next/og'

export const alt = 'Test a Go API without writing a single test'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a0a0a',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, letterSpacing: 4, color: '#f97316' }}>
          TUTORIAL · BEGINNER
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
            color: '#ffffff',
          }}
        >
          Test a Go API without writing a single test
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 34, color: '#a1a1aa' }}>
          Keploy + Gin + MongoDB · Native on macOS, no Docker
        </div>
      </div>
    ),
    size
  )
}
