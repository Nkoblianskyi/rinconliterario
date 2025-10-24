"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { mockBooks, genres } from "@/lib/mock-books"

export default function CatalogoPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("todos")

  const filteredBooks = useMemo(() => {
    return mockBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesGenre = selectedGenre === "todos" || book.genre === selectedGenre

      return matchesSearch && matchesGenre
    })
  }, [searchQuery, selectedGenre])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Catálogo completo
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explora nuestra colección completa de obras literarias en español
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por título, autor o descripción..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-full md:w-[240px]">
                  <SelectValue placeholder="Seleccionar género" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value}>
                      {genre.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedGenre === "todos"
                  ? "Todos los libros"
                  : `Género: ${genres.find((g) => g.value === selectedGenre)?.label}`}
              </h2>
              <p className="text-muted-foreground">
                {filteredBooks.length} {filteredBooks.length === 1 ? "libro encontrado" : "libros encontrados"}
              </p>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No se encontraron libros que coincidan con tu búsqueda.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedGenre("todos")
                  }}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
