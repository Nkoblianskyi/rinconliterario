import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
              <span className="font-semibold">Rincón Literario</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu espacio para descubrir y compartir la pasión por la lectura.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contacto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ¿Tienes alguna pregunta? No dudes en{" "}
              <Link href="/contacto" className="text-primary hover:underline">
                contactarnos
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rincón Literario. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
