import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, MapPin, Calendar, Award } from 'lucide-react'
import ProductCard from '../components/gallery/ProductCard'
import CraftImage from '../components/ui/CraftImage'
import { useArtisan } from '../hooks/useArtisan'
import { useProduitsParArtisan } from '../hooks/useProduit'

export default function ArtisanDetail() {
  const { id } = useParams()
  const artisan = useArtisan(id)

  if (!artisan) return <Navigate to="/galerie" replace />

  const produits = useProduitsParArtisan(artisan.id)

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <nav aria-label="Fil d'ariane" className="flex items-center gap-2 font-mono text-xs text-ink/50 dark:text-raffia/50 mb-8">
        <Link to="/" className="hover:text-sisal">Accueil</Link>
        <ChevronRight size={12} />
        <Link to="/galerie" className="hover:text-sisal">Galerie</Link>
        <ChevronRight size={12} />
        <span className="text-sisal truncate">{artisan.nom}</span>
      </nav>

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10"
      >
        <CraftImage
          src={artisan.photo}
          alt={artisan.nom}
          className="w-28 h-28 rounded-full shrink-0"
        />

        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-sisal">
            {artisan.specialite}
          </span>
          <h1 className="font-display text-4xl mt-1">{artisan.nom}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 font-body text-sm text-ink/70 dark:text-raffia/70">
            <span className="flex items-center gap-1"><MapPin size={13} /> {artisan.ville}, {artisan.region}</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {artisan.anneesExperience} ans d'expérience</span>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
      >
        <div className="md:col-span-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sisal mb-3">
            Parcours
          </h2>
          <p className="font-body leading-relaxed text-ink/80 dark:text-raffia/80">
            {artisan.bio}
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-sisal mb-3">
            Badges
          </h2>
          <ul className="flex flex-col gap-2">
            {artisan.badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 font-body text-sm px-3 py-2 rounded-sm bg-surface border border-border"
              >
                <Award size={14} className="text-ravinala shrink-0" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <section>
        <h2 className="font-display text-3xl mb-6">
          Créations de {artisan.nom.split(' ')[0]}
        </h2>
        {produits.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {produits.map((p) => (
              <ProductCard key={p.id} produit={p} />
            ))}
          </div>
        ) : (
          <p className="font-body text-ink/60 dark:text-raffia/60">
            Aucun produit référencé pour le moment.
          </p>
        )}
      </section>
    </main>
  )
}