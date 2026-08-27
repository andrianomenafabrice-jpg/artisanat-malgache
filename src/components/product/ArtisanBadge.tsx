import { Link } from 'react-router-dom'
import { MapPin, Award } from 'lucide-react'
import type { Artisan } from '../../types'
import CraftImage from '../ui/CraftImage'

export default function ArtisanBadge({ artisan }: { artisan: Artisan }) {
  return (
    <Link
      to={`/artisan/${artisan.id}`}
      className="group flex items-center gap-4 p-4 rounded-sm border border-border bg-surface hover:border-sisal transition-colors duration-300"
    >
      <CraftImage
        src={artisan.photo}
        alt={artisan.nom}
        className="w-16 h-16 rounded-full shrink-0"
      />
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wider text-sisal">
          Artisan
        </p>
        <h3 className="font-display text-lg group-hover:text-sisal transition-colors truncate">
          {artisan.nom}
        </h3>
        <p className="font-body text-sm text-ink/60 dark:text-raffia/60 flex items-center gap-1 mt-0.5">
          <MapPin size={12} /> {artisan.ville}, {artisan.region}
        </p>
        {artisan.badges[0] && (
          <p className="font-mono text-[11px] text-ravinala flex items-center gap-1 mt-1">
            <Award size={11} /> {artisan.badges[0]}
          </p>
        )}
      </div>
    </Link>
  )
}