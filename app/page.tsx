"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCard } from "@/components/book-card"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Calendar, Mail, Users, Sparkles, MessageCircle, ArrowRight } from "lucide-react"
import { mockBooks } from "@/lib/mock-books"
import { mockEvents } from "@/lib/mock-events"
import Link from "next/link"
import { SuccessDialog } from "@/components/success-dialog"
import Image from "next/image"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const featuredBooks = mockBooks.slice(0, 4)
  const upcomingEvents = mockEvents.slice(0, 3)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShowSuccessDialog(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setShowSuccessDialog(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50/50 via-background to-primary/5 dark:from-amber-950/20 dark:via-background dark:to-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb,139,92,246),0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb,251,191,36),0.08),transparent_50%)]" />

          <div className="container relative py-12 md:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                  Tu espacio literario en español
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                  Donde las{" "}
                  <span className="text-primary relative inline-block">
                    historias
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </span>{" "}
                  cobran vida
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Un rincón tranquilo para explorar, descubrir y compartir el amor por la lectura
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button size="lg" className="text-base group" asChild>
                    <Link href="#libros">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Explorar libros
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base bg-background/50 backdrop-blur-sm" asChild>
                    <Link href="#eventos">
                      <Calendar className="h-5 w-5 mr-2" />
                      Ver eventos
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Libros</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground mt-1">Eventos</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground mt-1">Lectores</div>
                  </div>
                </div>
              </div>

              {/* Right Images Grid */}
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Image src="/reading-room-main.jpg" alt="Sala de lectura" fill className="object-cover" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                      <Image src="/reading-room-cozy-corner.jpg" alt="Rincón acogedor" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Image src="/reading-room-bookshelves.jpg" alt="Estanterías" fill className="object-cover" />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <Image src="/reading-room-community.jpg" alt="Comunidad" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border shadow-lg rounded-full px-6 py-3 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                    <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                    <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
                  </div>
                  <span className="text-sm font-medium">Únete a nuestra comunidad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Service Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Qué ofrecemos?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rincón Literario es más que una biblioteca digital. Es una comunidad vibrante de lectores apasionados.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Colección Curada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obras literarias cuidadosamente seleccionadas de autores latinoamericanos y españoles.
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Comunidad Activa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Únete a clubes de lectura, talleres y eventos para compartir tu pasión por los libros.
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">Reseñas Auténticas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lee opiniones honestas de otros lectores y comparte tus propias experiencias literarias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section id="libros" className="py-16 md:py-24">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Libros destacados</h2>
                <p className="text-muted-foreground">Descubre nuestras recomendaciones más populares</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
                <Link href="/catalogo">Ver todos</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/catalogo">Ver todos los libros</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="eventos" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Próximos eventos</h2>
                <p className="text-muted-foreground">Únete a nuestras actividades en la sala de lectura</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
                <Link href="/eventos">Ver todos</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/eventos">Ver todos los eventos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Mail className="h-7 w-7" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-3">¿Tienes alguna pregunta?</h2>
                <p className="text-lg text-muted-foreground">
                  Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-muted/30 p-8 rounded-lg">
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
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Mail className="h-5 w-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
    </div>
  )
}
