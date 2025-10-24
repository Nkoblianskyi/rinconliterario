import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-balance">Política de Cookies</h1>
            <p className="text-muted-foreground mb-8">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <Card>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>¿Qué son las cookies?</h2>
                <p className="leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                  web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y
                  proporcionar información a los propietarios del sitio.
                </p>

                <h2>¿Cómo utilizamos las cookies?</h2>
                <p className="leading-relaxed">
                  En Rincón Literario utilizamos cookies para mejorar tu experiencia de navegación y entender cómo
                  interactúas con nuestro sitio web. Las cookies nos ayudan a:
                </p>
                <ul>
                  <li>Recordar tus preferencias y configuraciones</li>
                  <li>Entender cómo utilizas nuestro sitio web</li>
                  <li>Mejorar el rendimiento y la funcionalidad del sitio</li>
                  <li>Personalizar tu experiencia de usuario</li>
                </ul>

                <h2>Tipos de cookies que utilizamos</h2>

                <h3>Cookies esenciales</h3>
                <p className="leading-relaxed">
                  Estas cookies son necesarias para que el sitio web funcione correctamente. Incluyen cookies que te
                  permiten acceder a áreas seguras del sitio web y recordar tus preferencias de cookies.
                </p>

                <h3>Cookies de rendimiento</h3>
                <p className="leading-relaxed">
                  Estas cookies nos permiten reconocer y contar el número de visitantes y ver cómo los visitantes se
                  mueven por el sitio web. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio web.
                </p>

                <h3>Cookies de funcionalidad</h3>
                <p className="leading-relaxed">
                  Estas cookies se utilizan para reconocerte cuando regresas a nuestro sitio web. Esto nos permite
                  personalizar nuestro contenido para ti y recordar tus preferencias.
                </p>

                <h3>Cookies analíticas</h3>
                <p className="leading-relaxed">
                  Utilizamos cookies analíticas para entender cómo los visitantes interactúan con nuestro sitio web.
                  Estas cookies nos ayudan a mejorar la experiencia del usuario al proporcionar información sobre las
                  áreas visitadas, el tiempo dedicado al sitio y cualquier problema encontrado.
                </p>

                <h2>Gestión de cookies</h2>
                <p className="leading-relaxed">
                  Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están
                  en tu dispositivo y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin
                  embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez
                  que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
                </p>

                <h2>Cookies de terceros</h2>
                <p className="leading-relaxed">
                  Algunos de nuestros socios pueden establecer cookies en tu dispositivo cuando visitas nuestro sitio
                  web. Estas cookies de terceros pueden incluir servicios de análisis y redes sociales. No tenemos
                  control sobre estas cookies y te recomendamos que revises las políticas de privacidad de estos
                  terceros.
                </p>

                <h2>Cambios en esta política</h2>
                <p className="leading-relaxed">
                  Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en nuestras
                  prácticas o por otras razones operativas, legales o reglamentarias. Te recomendamos que revises esta
                  página periódicamente para estar informado sobre cómo utilizamos las cookies.
                </p>

                <h2>Contacto</h2>
                <p className="leading-relaxed">
                  Si tienes alguna pregunta sobre nuestra Política de Cookies, por favor contáctanos a través de nuestra
                  página de contacto o enviando un correo electrónico a contacto@rinconliterario.com.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
