import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Coffee, Calendar, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestra Sala de Lectura</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                Un espacio tranquilo y acogedor diseñado para los amantes de los libros y la literatura.
              </p>
            </div>

            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/reading-room-main.jpg"
                alt="Sala de lectura principal"
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            <Card className="mb-8">
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>Bienvenido a Rincón Literario</h2>
                <p className="leading-relaxed">
                  Rincón Literario es más que una biblioteca: es un refugio para los amantes de la lectura. Nuestra sala
                  de lectura ha sido cuidadosamente diseñada para ofrecer un ambiente tranquilo y acogedor donde puedas
                  sumergirte en tus libros favoritos, descubrir nuevas obras y conectar con otros lectores apasionados.
                </p>

                <p className="leading-relaxed">
                  Desde nuestros cómodos sillones hasta nuestra iluminación natural perfectamente equilibrada, cada
                  detalle ha sido pensado para crear la experiencia de lectura ideal. Ya sea que busques un lugar
                  silencioso para concentrarte o un espacio comunitario para compartir tu amor por la literatura, aquí
                  encontrarás tu rincón perfecto.
                </p>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Espacio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-cozy-corner.jpg"
                    alt="Rincón acogedor de lectura"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Rincones Acogedores</h3>
                    <p className="text-sm text-muted-foreground">Espacios íntimos para lectura individual</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-bookshelves.jpg"
                    alt="Estanterías de libros"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Amplia Colección</h3>
                    <p className="text-sm text-muted-foreground">Miles de títulos en diversos géneros</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-community.jpg"
                    alt="Área comunitaria"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Espacio Comunitario</h3>
                    <p className="text-sm text-muted-foreground">Área para eventos y clubes de lectura</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-natural-light.jpg"
                    alt="Iluminación natural"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Luz Natural</h3>
                    <p className="text-sm text-muted-foreground">Grandes ventanales con vistas relajantes</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-cafe.jpg"
                    alt="Área de café"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Café Literario</h3>
                    <p className="text-sm text-muted-foreground">Disfruta de bebidas mientras lees</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/reading-room-study-area.jpg"
                    alt="Área de estudio"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="font-semibold mb-1">Zona de Estudio</h3>
                    <p className="text-sm text-muted-foreground">Mesas amplias para trabajar y estudiar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Colección Extensa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Más de 5,000 títulos en español de todos los géneros literarios a tu disposición.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Coffee className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Café Incluido</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disfruta de café, té y bebidas mientras te sumerges en tu lectura favorita.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Eventos Literarios</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clubes de lectura, talleres de escritura y encuentros con autores regularmente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Horario Flexible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Abierto de lunes a domingo de 9:00 a 21:00 para adaptarnos a tu agenda.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ubicación Céntrica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fácil acceso en el corazón de la ciudad con estacionamiento disponible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reserva tu Espacio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reserva tu lugar favorito o una sala privada para grupos de lectura.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>Visítanos</h2>
                <p className="leading-relaxed">
                  Te invitamos a descubrir nuestro espacio y experimentar la magia de leer en un ambiente diseñado
                  especialmente para ti. Ya sea que busques un lugar tranquilo para concentrarte, un espacio para
                  compartir con otros lectores, o simplemente un refugio del ajetreo diario, Rincón Literario es tu
                  hogar literario.
                </p>

                <p className="leading-relaxed">
                  Puedes visitarnos sin reserva previa, pero si deseas asegurar un espacio específico o participar en
                  nuestros eventos, te recomendamos reservar con anticipación a través de nuestro formulario de
                  contacto.
                </p>

                <p className="leading-relaxed">
                  ¡Esperamos verte pronto en Rincón Literario, donde cada página es una nueva aventura!
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
