import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rincón Literario - Tu espacio de lectura",
  description:
    "Descubre, explora y comparte tu pasión por los libros. Reseñas, recomendaciones y una comunidad de lectores.",

  metadataBase: new URL("https://rinconliterario.com"),
  openGraph: {
    title: "Rincón Literario - Tu espacio de lectura",
    description:
      "Descubre, explora y comparte tu pasión por los libros. Reseñas, recomendaciones y una comunidad de lectores.",
    url: "https://rinconliterario.com",
    siteName: "Rincón Literario",
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}
