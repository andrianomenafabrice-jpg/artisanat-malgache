import { CATEGORIES } from '../../types'
import { useFilterStore } from '../../store/filterStore'

export default function CategoryFilter() {
  const { activeCategory, setCategory } = useFilterStore()

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none" role="group" aria-label="Filtrer par catégorie">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat
        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            aria-pressed={isActive}
            className={`shrink-0 font-mono text-xs uppercase tracking-wide px-3 py-2 rounded-full border transition-colors duration-200 ${
              isActive
                ? 'bg-sisal border-sisal text-raffia'
                : 'border-border text-ink/70 dark:text-raffia/70 hover:border-sisal hover:text-sisal'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}