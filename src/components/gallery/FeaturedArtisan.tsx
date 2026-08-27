import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import type { Artisan } from '../../types'
import CraftImage from '../ui/CraftImage'

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturedArtisan({ artisan, index }: { artisan: Artisan; index: number }) {
  return (
    <motion.div variants={CARD_VARIANTS} custom={index}>
      <Link
        to={`/artisan/${artisan.id}`}
        className="group flex flex-col p-6 rounded-sm border border-border bg-surface hover:border-sisal transition-colors duration-300 h-full"
      >
        <CraftImage src={artisan.photo} alt={artisan.nom} className="w-14 h-14 rounded-full mb-4" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-sisal">
          {artisan.specialite}
        </span>
        <h3 className="font-display text-xl mt-1 group-hover:text-sisal transition-colors">
          {artisan.nom}
        </h3>
        <p className="font-body text-sm text-ink/60 dark:text-raffia/60 flex items-center gap-1 mt-2">
          <MapPin size={12} /> {artisan.ville}, {artisan.region}
        </p>
        <p className="font-body text-sm mt-3 text-ink/70 dark:text-raffia/70 line-clamp-3">
          {artisan.bio}
        </p>
      </Link>
    </motion.div>
  )
}