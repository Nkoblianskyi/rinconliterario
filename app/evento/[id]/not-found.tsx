import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EventNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="container py-16 text-center">
          <BookOpen className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Evento no encontrado</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Lo sentimos, el evento que buscas no existe o ha sido eliminado.
          </p>
          <Button asChild size="lg">
            <Link href="/eventos">Ver todos los eventos</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
