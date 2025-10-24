import Link from "next/link"
import Image from "next/image"
import { Star, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Book } from "@/lib/types"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl group h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={book.coverImage || "/placeholder.svg"}
          alt={`Portada de ${book.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="capitalize shadow-md">
            {book.genre}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-balance leading-snug">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{book.description}</p>
        </div>
        <div className="mt-4 pt-4 border-t space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-semibold">{book.rating}</span>
              <span className="text-xs text-muted-foreground">({book.reviews.length})</span>
            </div>
            <span className="text-xs text-muted-foreground">{book.publishedYear}</span>
          </div>
          <Link href={`/libro/${book.id}`} className="block">
            <Button className="w-full" variant="default">
              <BookOpen className="h-4 w-4 mr-2" />
              Ver detalles
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
