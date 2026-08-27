import { useState } from 'react'
import { motion } from 'framer-motion'
import CraftImage from '../ui/CraftImage'

interface ProductGalleryProps {
  images: string[]
  categorie: string
  nom: string
}

export default function ProductGallery({ images, categorie, nom }: ProductGalleryProps) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <motion.div
        key={active}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-sm border border-border"
      >
        <CraftImage
          src={images[active]}
          alt={`${nom} — ${categorie}`}
          className="aspect-square w-full hover:scale-[1.05] transition-transform duration-500 cursor-zoom-in"
        />
      </motion.div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`Voir l'image ${i + 1}`}
              aria-current={active === i}
              className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${
                active === i ? 'border-sisal' : 'border-transparent opacity-60'
              }`}
            >
              <CraftImage src={img} alt="" className="w-full h-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}