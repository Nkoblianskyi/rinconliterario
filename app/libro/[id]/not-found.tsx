import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { BookX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center">
        <div className="container py-16 text-center">
          <BookX className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Libro no encontrado</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, no pudimos encontrar el libro que estás buscando.
          </p>
          <Button asChild>
            <Link href="/">Volver al catálogo</Link>
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
