import type { Metadata } from 'next'
import { siteConfig } from '@/lib/metadata'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'plomero en Córdoba',
    'gasista matriculado',
    'electricista domiciliario',
    'instalación de bombas de agua',
    'reparación cloacas',
    'instalación eléctrica completa',
    'urgencias domiciliarias',
    'servicio técnico Córdoba',
    'reparaciones del hogar',
    'obras y reformas',
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
