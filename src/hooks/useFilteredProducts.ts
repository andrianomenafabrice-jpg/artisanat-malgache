import { useMemo } from 'react'
import produitsData from '../data/produits.json'
import { useFilterStore } from '../store/filterStore'
import type { Produit } from '../types'

const produits = produitsData as Produit[]

export function useFilteredProducts() {
  const { activeRegion, activeCategory, searchQuery } = useFilterStore()

  const filteredProducts = useMemo(() => {
    return produits.filter((produit) => {
      const matchRegion = activeRegion ? produit.region === activeRegion : true
      const matchCategory = activeCategory ? produit.categorie === activeCategory : true
      const matchSearch = searchQuery
        ? produit.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
          produit.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true

      return matchRegion && matchCategory && matchSearch
    })
  }, [activeRegion, activeCategory, searchQuery])

  return {
    produits: filteredProducts,
    total: filteredProducts.length,
  }
}