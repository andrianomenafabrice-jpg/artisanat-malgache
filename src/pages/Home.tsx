import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPinned } from 'lucide-react'
import CraftImage from '../components/ui/CraftImage'
import FeaturedArtisan from '../components/gallery/FeaturedArtisan'
import { WeaveDivider } from '../components/ui/WeavePattern'
import { useArtisans } from '../hooks/useArtisan'

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } },
}

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function Home() {
  const artisans = useArtisans()
  const featured = artisans.slice(0, 3)
  const shouldReduceMotion = useReducedMotion()

  return (
    <main>
      {/* HERO — séquence orchestrée au chargement */}
      <motion.section
        variants={shouldReduceMotion ? undefined : heroContainer}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.span
            variants={shouldReduceMotion ? undefined : heroItem}
            className="font-mono text-xs uppercase tracking-wider text-sisal"
          >
            Vannerie · Broderie · Bois sculpté · Tissage · Corne · Poterie · Bijouterie
          </motion.span>

          <motion.h1
            variants={shouldReduceMotion ? undefined : heroItem}
            className="font-display text-5xl md:text-6xl leading-[1.05] mt-4"
          >
            La matière malgache,{' '}
            <span className="text-sisal">façonnée à la main</span>
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : heroItem}
            className="font-body text-lg mt-6 text-ink/75 dark:text-raffia/75 max-w-md"
          >
            Fibre de raphia, bois zafimaniry, soie sauvage, corne de zébu — chaque pièce
            porte l'histoire d'un artisan et de sa région. Découvrez leur savoir-faire,
            région par région.
          </motion.p>

          <motion.div variants={shouldReduceMotion ? undefined : heroItem} className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide px-6 py-3 rounded-full bg-sisal text-raffia hover:bg-sisal-dark transition-colors"
            >
              Explorer la galerie <ArrowRight size={14} />
            </Link>
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide px-6 py-3 rounded-full border border-border hover:border-sisal hover:text-sisal transition-colors"
            >
              <MapPinned size={14} /> Filtrer par région
            </Link>
          </motion.div>
        </div>

        <motion.div variants={shouldReduceMotion ? undefined : heroItem} className="grid grid-cols-2 gap-4">
          <CraftImage
            src="https://images.unsplash.com/photo-1497219055242-93359eeed651?auto=format&fit=crop&w=800&q=80"
            alt="Artisan sculptant le bois"
            className="aspect-[3/4] rounded-sm"
          />
          <div className="flex flex-col gap-4 mt-8">
            <CraftImage
              src="https://images.unsplash.com/photo-1564656622440-e6206eb5ee63?auto=format&fit=crop&w=800&q=80"
              alt="Métier à tisser la soie"
              className="aspect-square rounded-sm"
            />
            <CraftImage
              src="https://images.unsplash.com/photo-1601330862030-1e08c703ac04?auto=format&fit=crop&w=800&q=80"
              alt="Paniers tressés en raphia"
              className="aspect-square rounded-sm"
            />
          </div>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6">
        <WeaveDivider className="text-sisal" />
      </div>

      {/* Artisans à la une — reveal au scroll */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl">Artisans à la une</h2>
            <p className="font-body text-ink/60 dark:text-raffia/60 mt-2">
              Trois parcours, trois régions, un même souci du geste juste.
            </p>
          </div>
          <Link
            to="/galerie"
            className="hidden sm:flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-sisal hover:underline"
          >
            Tout voir <ArrowRight size={13} />
          </Link>
        </div>

        <motion.div
          variants={shouldReduceMotion ? undefined : gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {featured.map((artisan, i) => (
            <FeaturedArtisan key={artisan.id} artisan={artisan} index={i} />
          ))}
        </motion.div>
      </section>

      {/* Entrée vers la carte-filtre */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-sm border border-border bg-surface p-10 text-center"
        >
          <MapPinned className="mx-auto text-sisal mb-4" size={28} />
          <h2 className="font-display text-2xl">Dix régions, un savoir-faire propre à chacune</h2>
          <p className="font-body text-ink/70 dark:text-raffia/70 mt-2 max-w-lg mx-auto">
            De la vannerie d'Analamanga au tissage de Haute Matsiatra, explorez
            Madagascar région par région grâce à la carte-filtre interactive.
          </p>
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide px-6 py-3 mt-6 rounded-full bg-sisal text-raffia hover:bg-sisal-dark transition-colors"
          >
            Ouvrir la carte <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}