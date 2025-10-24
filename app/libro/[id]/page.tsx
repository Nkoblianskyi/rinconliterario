import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, Calendar, BookOpen, Hash, ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { mockBooks } from "@/lib/mock-books"

interface BookPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return mockBooks.map((book) => ({
    id: book.id,
  }))
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params
  const book = mockBooks.find((b) => b.id === id)

  if (!book) {
    notFound()
  }

  const averageRating = book.rating
  const totalReviews = book.reviews.length

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al catálogo
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover and Quick Info */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden sticky top-24">
                <div className="relative aspect-[2/3] bg-muted">
                  <Image
                    src={book.coverImage || "/placeholder.svg"}
                    alt={`Portada de ${book.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="text-2xl font-bold">{averageRating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({totalReviews} {totalReviews === 1 ? "reseña" : "reseñas"})
                    </span>
                  </div>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Año de publicación</p>
                        <p className="text-muted-foreground">{book.publishedYear}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Páginas</p>
                        <p className="text-muted-foreground">{book.pages}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Hash className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">ISBN</p>
                        <p className="text-muted-foreground font-mono text-xs">{book.isbn}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button asChild className="w-full" size="lg">
                    <Link href="/contacto">Consultar disponibilidad</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Book Details and Reviews */}
            <div className="lg:col-span-2 space-y-8">
              {/* Book Info */}
              <div>
                <Badge variant="secondary" className="mb-3 capitalize">
                  {book.genre}
                </Badge>
                <h1 className="text-4xl font-bold mb-3 text-balance">{book.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">por {book.author}</p>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Sinopsis</h2>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{book.description}</p>
                </div>
              </div>

              <Separator />

              {/* Reviews Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Reseñas de lectores</h2>

                {book.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {book.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{review.author}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {new Date(review.date).toLocaleDateString("es-ES", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-semibold">{review.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">Aún no hay reseñas para este libro.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
