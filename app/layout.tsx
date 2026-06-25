import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import GAClientTracker from './components/GAClientTracker'

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif-sc',
})

export const metadata: Metadata = {
  title: 'INFJ + INFP的中国旅游审美小众地图 | A Niche Aesthetic Travel Map of China for INFJ + INFP',
  description: 'infj infp 的印象中国，大美中国，小众新奇，游乐园，人文风俗',
  generator: 'v0.app',
  keywords: ['中国旅游', '中国审美地图', '旅游攻略', 'China Travel', 'China Aesthetic Map', 'human customs', 'niche travel', 'INFJ', 'INFP'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  themeColor: '#f4f9f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="zh-CN" className="bg-background">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${notoSerifSC.variable} font-sans antialiased`}>
        {/* 移除了 GA_ID && 的限制，让 Google 统计代码直接常驻加载 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHVMFK1Z1H"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHVMFK1Z1H', { page_path: window.location.pathname });
          `}
        </Script>
        
        {/* 这里保留你原本的客户端路由追踪器组件 */}
        <GAClientTracker />

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
