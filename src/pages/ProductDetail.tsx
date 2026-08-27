import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Ruler, Hammer, Package } from 'lucide-react'
import ProductGallery from '../components/product/ProductGallery'
import ArtisanBadge from '../components/product/ArtisanBadge'
import SimilarProducts from '../components/product/SimilarProducts'
import { useProduit, useProduitsSimilaires } from '../hooks/useProduit'
import { useArtisan } from '../hooks/useArtisan'
import { formatPrice } from '../utils/format'

export default function ProductDetail() {
  const { id } = useParams()
  const produit = useProduit(id)

  if (!produit) return <Navigate to="/galerie" replace />

  const artisan = useArtisan(produit.artisanId)
  const similaires = useProduitsSimilaires(produit)

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Fil d'ariane */}
      <nav aria-label="Fil d'ariane" className="flex items-center gap-2 font-mono text-xs text-ink/50 dark:text-raffia/50 mb-8">
        <Link to="/" className="hover:text-sisal">Accueil</Link>
        <ChevronRight size={12} />
        <Link to="/galerie" className="hover:text-sisal">Galerie</Link>
        <ChevronRight size={12} />
        <span className="text-sisal truncate">{produit.nom}</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <ProductGallery images={produit.images} categorie={produit.categorie} nom={produit.nom} />

        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-sisal">
            {produit.region} · {produit.categorie}
          </span>
          <h1 className="font-display text-4xl mt-2 leading-tight">{produit.nom}</h1>
          <p className="font-mono text-2xl mt-4 text-ravinala dark:text-ravinala-light">
            {formatPrice(produit.prixAr)}
          </p>

          <p className="font-body mt-6 text-ink/80 dark:text-raffia/80 leading-relaxed">
            {produit.description}
          </p>

          <div className="my-8 h-px bg-border" />

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <dt className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-raffia/50 mb-1">
                <Package size={13} /> Matériaux
              </dt>
              <dd className="font-body text-sm">{produit.materiaux.join(', ')}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-raffia/50 mb-1">
                <Ruler size={13} /> Dimensions
              </dt>
              <dd className="font-body text-sm">{produit.dimensions}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-raffia/50 mb-1">
                <Hammer size={13} /> Fabrication
              </dt>
              <dd className="font-body text-sm">{produit.tempsFabricationJours} jours</dd>
            </div>
          </dl>

          {artisan && <ArtisanBadge artisan={artisan} />}
        </div>
      </motion.div>

      <SimilarProducts produits={similaires} />
    </main>
  )
}