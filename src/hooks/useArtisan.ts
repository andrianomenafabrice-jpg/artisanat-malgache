import artisansData from '../data/artisans.json'
import type  { Artisan } from '../types'

const artisans = artisansData as Artisan[]

export function useArtisan(id: string | undefined) {
  return artisans.find((a) => a.id === id)
}

export function useArtisans() {
  return artisans
}