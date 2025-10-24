export type Genre =
  | "ficción"
  | "no-ficción"
  | "misterio"
  | "romance"
  | "ciencia-ficción"
  | "fantasía"
  | "biografía"
  | "historia"
  | "poesía"
  | "thriller"

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface Book {
  id: string
  title: string
  author: string
  genre: Genre
  coverImage: string
  description: string
  publishedYear: number
  pages: number
  isbn: string
  rating: number
  reviews: Review[]
}

export interface Event {
  id: string
  title: string
  description: string
  date?: string
  time: string
  location: string
  image: string
  capacity: number
  registered: number
  category: "lectura" | "taller" | "presentación" | "club"
}
