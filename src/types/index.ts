export interface Artisan {
  id: string
  nom: string
  region: string
  ville: string
  specialite: string
  badges: string[]
  bio: string
  anneesExperience: number
  photo: string
}

export interface Produit {
  id: string
  artisanId: string
  nom: string
  categorie: string
  region: string
  prixAr: number
  materiaux: string[]
  dimensions: string
  tempsFabricationJours: number
  description: string
  images: string[]
  ratio: 'portrait' | 'carre' | 'paysage'
}

export const REGIONS = [
  "Analamanga",
  "Haute Matsiatra",
  "Amoron'i Mania",
  "Vakinankaratra",
  "Atsimo-Andrefana",
  "Boeny",
  "Atsinanana",
  "Diana",
  "Menabe",
  "Anosy",
] as const

export const CATEGORIES = [
  "Vannerie",
  "Broderie",
  "Bois sculpté",
  "Tissage & lamba en soie",
  "Corne & os zébu",
  "Poterie",
  "Bijouterie",
] as const