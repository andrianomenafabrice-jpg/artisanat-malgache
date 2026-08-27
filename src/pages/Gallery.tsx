import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, RotateCcw } from 'lucide-react'
import RegionMap from '../components/gallery/RegionMap'
import CategoryFilter from '../components/gallery/CategoryFilter'
import ProductCard from '../components/gallery/ProductCard'
import { WeaveDivider, WeaveSkeleton } from '../components/ui/WeavePattern'
import { useFilteredProducts } from '../hooks/useFilteredProducts'
import { useFilterStore } from '../store/filterStore'

export default function Gallery() {
  const { produits, total } = useFilteredProducts()
  const { searchQuery, setSearchQuery, resetFilters, activeRegion, activeCategory } = useFilterStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const hasActiveFilters = activeRegion || activeCategory || searchQuery
  

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="font-display text-5xl">Galerie</h1>
        <p className="font-body mt-3 text-ink/70 dark:text-raffia/70 max-w-2xl">
          Explorez les pièces par région ou par catégorie. Chaque objet est fabriqué à la main par un artisan malgache.
        </p>
      </header>

      <WeaveDivider className="mb-10 text-sisal" />

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* Colonne carte-filtre */}
        <aside>
          <h2 className="font-mono text-xs uppercase tracking-wider text-sisal mb-4">
            Filtrer par région
          </h2>
          <RegionMap />
        </aside>

        {/* Colonne contenu */}
        <div>
          <div className="flex flex-col gap-4 mb-6">
            <CategoryFilter />

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
              <div className="relative w-full sm:w-72">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40 dark:text-raffia/40"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un objet..."
                  aria-label="Rechercher un produit"
                  className="w-full font-body text-sm pl-9 pr-3 py-2 rounded-full bg-surface border border-border focus:border-sisal outline-none"
                />
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-ink/60 dark:text-raffia/60">
                <span>{total} produit{total > 1 ? 's' : ''} trouvé{total > 1 ? 's' : ''}</span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-sisal hover:underline"
                  >
                    <RotateCcw size={12} /> Réinitialiser
                  </button>
                )}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <WeaveSkeleton key={i} className="w-full aspect-[3/4] rounded-sm break-inside-avoid" />
              ))}
            </div>
          ) : produits.length > 0 ? (
            <motion.div
              layout
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {produits.map((produit) => (
                  <ProductCard key={produit.id} produit={produit} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 border border-dashed border-border rounded-sm">
              <p className="font-display text-2xl mb-2">Aucune pièce ne correspond</p>
              <p className="font-body text-ink/60 dark:text-raffia/60 mb-6">
                Essayez une autre région ou catégorie.
              </p>
              <button
                onClick={resetFilters}
                className="font-mono text-xs uppercase tracking-wide px-5 py-2.5 rounded-full bg-sisal text-raffia hover:bg-sisal-dark transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}