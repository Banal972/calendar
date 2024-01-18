import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../asset/scss/style.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '달력',
  description: '로그인한후 사용이 가능합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <main className="_main">
        
          {children}
          <div className="__darkmod">🌙</div>

        </main>
      </body>
    </html>
  )
}
