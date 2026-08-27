import { motion } from 'framer-motion'
import { Heart, Sprout, HandHeart } from 'lucide-react'
import { WeaveDivider } from '../components/ui/WeavePattern'

const VALEURS = [
  {
    icon: HandHeart,
    titre: 'Commerce équitable',
    texte:
      "Chaque artisan est rémunéré à un juste prix pour son travail, sans intermédiaire qui écrase la valeur de la pièce ou du temps passé à la fabriquer.",
  },
  {
    icon: Sprout,
    titre: 'Savoir-faire préservé',
    texte:
      "De la vannerie de raphia à la sculpture zafimaniry, ces gestes se transmettent depuis des générations. Les mettre en lumière, c'est aider à les faire durer.",
  },
  {
    icon: Heart,
    titre: 'Matières locales',
    texte:
      "Raphia, sisal, bois local, corne de zébu, argile régionale : les matériaux utilisés viennent du territoire malgache et de ses ressources gérées durablement.",
  },
]

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-sisal">
          À propos du projet
        </span>
        <h1 className="font-display text-5xl mt-3">
          Une vitrine, pas une boutique de plus
        </h1>
        <p className="font-body text-lg mt-6 text-ink/75 dark:text-raffia/75 leading-relaxed">
          Artisanat Malgache est née d'un constat simple : les artisans de Madagascar
          sont d'une diversité et d'une richesse rarement montrées à leur juste valeur.
          Vannerie de raphia, broderie d'Antsirabe, bois sculpté zafimaniry d'Ambositra,
          tissage de lamba en soie, travail de la corne de zébu, poterie, bijouterie —
          chacune de ces pratiques porte l'histoire d'une région et d'une main qui la
          façonne depuis des années.
        </p>
        <p className="font-body text-lg mt-4 text-ink/75 dark:text-raffia/75 leading-relaxed">
          Ce projet met en avant ces artisans, leur région et leur parcours, pour un
          public qui cherche des pièces authentiques et leur histoire — diaspora
          malgache, voyageurs, ou simples curieux d'un savoir-faire qu'on ne trouve
          nulle part ailleurs.
        </p>
      </motion.header>

      <WeaveDivider className="my-14 text-sisal" />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <h2 className="font-display text-3xl mb-8">Nos valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALEURS.map((valeur) => {
            const Icon = valeur.icon
            return (
              <motion.div
                key={valeur.titre}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-sm border border-border bg-surface"
              >
                <Icon className="text-sisal mb-4" size={26} />
                <h3 className="font-display text-xl mb-2">{valeur.titre}</h3>
                <p className="font-body text-sm text-ink/70 dark:text-raffia/70 leading-relaxed">
                  {valeur.texte}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </main>
  )
}