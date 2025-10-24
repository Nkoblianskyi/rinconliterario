import Link from "next/link"
import {  Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Rincón Literario" width={32} height={32} />

          <span className="text-xl font-semibold">Rincón Literario ES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-sm font-medium transition-colors hover:text-primary">
            Catálogo
          </Link>
          <Link href="/eventos" className="text-sm font-medium transition-colors hover:text-primary">
            Eventos
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-sm font-medium transition-colors hover:text-primary">
                Catálogo
              </Link>
              <Link href="/eventos" className="text-sm font-medium transition-colors hover:text-primary">
                Eventos
              </Link>
              <Link href="/sobre-nosotros" className="text-sm font-medium transition-colors hover:text-primary">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
