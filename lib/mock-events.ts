import type { Event } from "./types"

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Club de Lectura: Cien Años de Soledad",
    description:
      "Únete a nuestra discusión mensual sobre la obra maestra de García Márquez. Exploraremos los temas del realismo mágico y la historia familiar.",
    date: "Por acuerdo",
    time: "18:00",
    location: "Sala Principal",
    image: "/event-club-lectura.jpg",
    capacity: 25,
    registered: 18,
    category: "club",
  },
  {
    id: "2",
    title: "Taller de Escritura Creativa",
    description:
      "Aprende técnicas de narrativa y desarrolla tu voz única como escritor. Ideal para principiantes y escritores experimentados.",
    date: "Por acuerdo",
    time: "16:00",
    location: "Sala de Talleres",
    image: "/event-taller-escritura.jpg",
    capacity: 15,
    registered: 12,
    category: "taller",
  },
  {
    id: "3",
    title: "Presentación: Nuevas Voces Latinoamericanas",
    description:
      "Conoce a los autores emergentes de la literatura latinoamericana contemporánea. Sesión de preguntas y firma de libros.",
    date: "Por acuerdo",
    time: "19:00",
    location: "Auditorio",
    image: "/event-presentacion.jpg",
    capacity: 50,
    registered: 35,
    category: "presentación",
  },
  {
    id: "4",
    title: "Lectura de Poesía al Atardecer",
    description:
      "Una tarde íntima de poesía con lecturas de autores clásicos y contemporáneos. Ambiente relajado con café y té.",
    date: "Por acuerdo",
    time: "17:30",
    location: "Terraza",
    image: "/event-poesia.jpg",
    capacity: 30,
    registered: 22,
    category: "lectura",
  },
]

export const eventCategories = [
  { value: "todos", label: "Todos los eventos" },
  { value: "lectura", label: "Lecturas" },
  { value: "taller", label: "Talleres" },
  { value: "presentación", label: "Presentaciones" },
  { value: "club", label: "Club de Lectura" },
]
