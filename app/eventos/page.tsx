"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockEvents, eventCategories } from "@/lib/mock-events"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventosPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "todos") return mockEvents
    return mockEvents.filter((event) => event.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Eventos literarios
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Participa en nuestras actividades y conecta con otros amantes de la lectura
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="max-w-md mx-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedCategory === "todos"
                  ? "Todos los eventos"
                  : eventCategories.find((c) => c.value === selectedCategory)?.label}
              </h2>
              <p className="text-muted-foreground">
                {filteredEvents.length} {filteredEvents.length === 1 ? "evento disponible" : "eventos disponibles"}
              </p>
            </div>

            <div className="space-y-8">
              {filteredEvents.map((event, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={event.id}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-6 bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow`}
                  >
                    {/* Image */}
                    <div className="relative w-full lg:w-2/5 h-64 lg:h-auto flex-shrink-0">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4">{event.category}</Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-balance">{event.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 flex-shrink-0" />
                            <span>
                              {event.availableSpots > 0 ? `${event.availableSpots} lugares disponibles` : "Agotado"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-6">
                        <Button asChild className="flex-1 sm:flex-initial">
                          <Link href={`/evento/${event.id}`}>Ver detalles</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 sm:flex-initial bg-transparent">
                          <Link href="/contacto">Reservar lugar</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
