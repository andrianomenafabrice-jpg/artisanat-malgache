import type { Produit } from '../../types'
import ProductCard from '../gallery/ProductCard'

export default function SimilarProducts({ produits }: { produits: Produit[] }) {
  if (produits.length === 0) return null

  return (
    <section className="mt-20">
      <h2 className="font-display text-3xl mb-6">Produits similaires</h2>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-5">
        {produits.map((p) => (
          <ProductCard key={p.id} produit={p} />
        ))}
      </div>
    </section>
  )
}