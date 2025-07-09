import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'アパレル在庫管理システム',
  description: 'マルチ拠点対応のアパレルEC在庫管理システム',
  keywords: ['在庫管理', 'アパレル', 'EC', 'マルチ拠点', '需要予測'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full">
      <body className="h-full bg-gray-50">
        {children}
      </body>
    </html>
  )
} 