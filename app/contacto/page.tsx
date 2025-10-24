"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Clock } from "lucide-react"

export default function ContactPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-balance">Contáctanos</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                ¿Tienes alguna pregunta, sugerencia o comentario? Nos encantaría escucharte. Completa el formulario y te
                responderemos lo antes posible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>contacto@rinconliterario.com</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Horario</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Lunes a Viernes
                    <br />
                    9:00 - 18:00
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Respuesta</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>En menos de 24 horas</CardDescription>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                <CardDescription>Haz clic en el botón para abrir el formulario de contacto</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Button size="lg" onClick={() => setIsDialogOpen(true)}>
                  Abrir formulario de contacto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />

      <ContactFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
