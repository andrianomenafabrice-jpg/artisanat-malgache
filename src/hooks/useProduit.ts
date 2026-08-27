import produitsData from '../data/produits.json'
import type { Produit } from '../types'

const produits = produitsData as Produit[]

export function useProduit(id: string | undefined) {
  return produits.find((p) => p.id === id)
}

export function useProduitsParArtisan(artisanId: string) {
  return produits.filter((p) => p.artisanId === artisanId)
}

export function useProduitsSimilaires(produit: Produit, limit = 4) {
  return produits
    .filter(
      (p) =>
        p.id !== produit.id &&
        (p.categorie === produit.categorie || p.region === produit.region)
    )
    .slice(0, limit)
}