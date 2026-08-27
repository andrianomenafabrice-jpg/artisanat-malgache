import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import CraftImage from '../ui/CraftImage'
import type { Produit } from '../../types'
import { formatPrice } from '../../utils/format'

const RATIO_CLASS: Record<Produit['ratio'], string> = {
  portrait: 'aspect-[3/4]',
  carre: 'aspect-square',
  paysage: 'aspect-[4/3]',
}

export default function ProductCard({ produit }: { produit: Produit }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      layout={!shouldReduceMotion}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      className="break-inside-avoid mb-5"
    >
      <Link
        to={`/produit/${produit.id}`}
        className="group block rounded-sm overflow-hidden border border-border bg-surface hover:border-sisal transition-colors duration-300"
      >
        <CraftImage
          src={produit.images[0]}
          alt={`${produit.nom}, ${produit.categorie.toLowerCase()} de la région ${produit.region}`}
          className={`${RATIO_CLASS[produit.ratio]} w-full group-hover:scale-[1.03] transition-transform duration-500`}
        />
        <div className="p-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-sisal">
            {produit.region}
          </span>
          <h3 className="font-display text-lg mt-1 leading-snug">{produit.nom}</h3>
          <p className="font-mono text-sm mt-2 text-ink/80 dark:text-raffia/80">
            {formatPrice(produit.prixAr)}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}