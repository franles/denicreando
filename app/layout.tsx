import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Denicreando | Social Media Manager',
  description: 'Estrategia digital, gestión de redes sociales y creación de contenido que conecta con tu audiencia.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logos/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logos/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logos/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/logos/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1625',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
