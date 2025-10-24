"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react"
import { SuccessDialog } from "@/components/success-dialog"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShowSuccessDialog(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setShowSuccessDialog(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb,139,92,246),0.1),transparent_50%)]" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Estamos aquí para ti</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                ¿Tienes alguna pregunta o quieres reservar un lugar en nuestros eventos? Contáctanos y te responderemos
                lo antes posible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left - Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3">Envíanos un mensaje</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre completo
                        </label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Correo electrónico
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        placeholder="¿Sobre qué quieres hablar?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Right - Contact Info & Image */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Image */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/reading-room-main.jpg" alt="Sala de lectura" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Visítanos</h3>
                    <p className="text-white/90">Nuestra sala de lectura te espera</p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Correo electrónico</h3>
                        <p className="text-muted-foreground">contacto@rinconliterario.online</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horario de atención</h3>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Ubicación</h3>
                        <p className="text-muted-foreground">Calle de los Libros, 123</p>
                        <p className="text-muted-foreground">Madrid, España</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/10 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
    </div>
  )
}
