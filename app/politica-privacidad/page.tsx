import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-balance">Política de Privacidad</h1>
            <p className="text-muted-foreground mb-8">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <Card>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>Introducción</h2>
                <p className="leading-relaxed">
                  En Rincón Literario, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de
                  Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos tu información personal
                  cuando utilizas nuestro sitio web.
                </p>

                <h2>Información que recopilamos</h2>

                <h3>Información que nos proporcionas</h3>
                <p className="leading-relaxed">
                  Podemos recopilar información personal que nos proporcionas directamente, incluyendo:
                </p>
                <ul>
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Información de contacto</li>
                  <li>Comentarios y reseñas que publicas</li>
                  <li>Cualquier otra información que decidas compartir con nosotros</li>
                </ul>

                <h3>Información recopilada automáticamente</h3>
                <p className="leading-relaxed">
                  Cuando visitas nuestro sitio web, podemos recopilar automáticamente cierta información sobre tu
                  dispositivo y tu uso del sitio, incluyendo:
                </p>
                <ul>
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y versión</li>
                  <li>Sistema operativo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Fuente de referencia</li>
                </ul>

                <h2>Cómo utilizamos tu información</h2>
                <p className="leading-relaxed">Utilizamos la información que recopilamos para:</p>
                <ul>
                  <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                  <li>Responder a tus comentarios, preguntas y solicitudes</li>
                  <li>Enviarte información técnica, actualizaciones y mensajes administrativos</li>
                  <li>Personalizar tu experiencia en nuestro sitio web</li>
                  <li>Analizar tendencias y uso del sitio web</li>
                  <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                </ul>

                <h2>Compartir información</h2>
                <p className="leading-relaxed">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros para sus propios fines de
                  marketing sin tu consentimiento explícito. Podemos compartir tu información en las siguientes
                  circunstancias:
                </p>
                <ul>
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Para proteger nuestros derechos, privacidad, seguridad o propiedad</li>
                  <li>En conexión con una fusión, venta o transferencia de activos</li>
                </ul>

                <h2>Seguridad de los datos</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                  personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, ningún
                  método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                </p>

                <h2>Retención de datos</h2>
                <p className="leading-relaxed">
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos
                  descritos en esta Política de Privacidad, a menos que la ley requiera o permita un período de
                  retención más largo.
                </p>

                <h2>Tus derechos</h2>
                <p className="leading-relaxed">
                  Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal,
                  incluyendo:
                </p>
                <ul>
                  <li>Derecho de acceso a tu información personal</li>
                  <li>Derecho a rectificar información inexacta</li>
                  <li>Derecho a solicitar la eliminación de tu información</li>
                  <li>Derecho a restringir u oponerte al procesamiento</li>
                  <li>Derecho a la portabilidad de datos</li>
                  <li>Derecho a retirar el consentimiento</li>
                </ul>

                <h2>Cookies y tecnologías similares</h2>
                <p className="leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Para más
                  información, consulta nuestra Política de Cookies.
                </p>

                <h2>Enlaces a otros sitios web</h2>
                <p className="leading-relaxed">
                  Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las
                  prácticas de privacidad de estos sitios. Te recomendamos que leas las políticas de privacidad de
                  cualquier sitio web que visites.
                </p>

                <h2>Cambios en esta política</h2>
                <p className="leading-relaxed">
                  Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier
                  cambio publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
                </p>

                <h2>Contacto</h2>
                <p className="leading-relaxed">
                  Si tienes alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos tu información
                  personal, por favor contáctanos a través de nuestra página de contacto o enviando un correo
                  electrónico a contacto@rinconliterarioes.com.
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
