import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Event } from "@/lib/types"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const availableSpots = event.capacity - event.registered
  const occupancyPercentage = (event.registered / event.capacity) * 100

  const categoryColors = {
    lectura: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    taller: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    presentación: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    club: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl group h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`capitalize shadow-md ${categoryColors[event.category]}`}>{event.category}</Badge>
        </div>
      </div>
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-balance leading-snug">{event.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{event.description}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-xs">
                {new Date(event.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-xs">{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground col-span-2">
              <MapPin className="h-4 w-4" />
              <span className="text-xs">{event.location}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>
                  {event.registered}/{event.capacity} inscritos
                </span>
              </div>
              <span className="text-muted-foreground">{availableSpots} lugares</span>
            </div>
            <Progress value={occupancyPercentage} className="h-1.5" />
          </div>
          <Button className="w-full" variant="default" disabled={availableSpots === 0} asChild>
            {availableSpots === 0 ? <span>Evento lleno</span> : <Link href={`/evento/${event.id}`}>Ver detalles</Link>}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
