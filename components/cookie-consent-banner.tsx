"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-5xl">
        <Card className="border-2 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0">
                <Cookie className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">Utilizamos cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y
                  personalizar el contenido. Al hacer clic en "Aceptar", aceptas nuestro uso de cookies.{" "}
                  <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
                    Más información
                  </Link>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button variant="outline" onClick={rejectCookies} className="w-full sm:w-auto bg-transparent">
                  Rechazar
                </Button>
                <Button onClick={acceptCookies} className="w-full sm:w-auto">
                  Aceptar cookies
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={rejectCookies}
                className="absolute top-2 right-2 md:relative md:top-0 md:right-0"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Cerrar</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
