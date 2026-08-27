import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { REGIONS } from '../../types'
import { useFilterStore } from '../../store/filterStore'

// Chemins stylisés — représentation minimaliste, pas géographiquement exacte
const REGION_PATHS: Record<string, string> = {
  'Diana': 'M140,20 L185,68 L166,118 L104,118 L84,68 Z',
  'Boeny': 'M104,118 L166,118 L156,188 L84,188 L74,148 Z',
  'Atsinanana': 'M166,118 L226,138 L216,300 L196,398 L166,318 L156,188 Z',
  'Analamanga': 'M84,188 L156,188 L150,254 L90,254 Z',
  'Vakinankaratra': 'M90,254 L150,254 L145,314 L85,314 Z',
  "Amoron'i Mania": 'M85,314 L145,314 L140,368 L80,368 Z',
  'Haute Matsiatra': 'M80,368 L140,368 L130,422 L76,422 Z',
  'Menabe': 'M74,148 L84,188 L90,254 L85,314 L80,368 L40,398 L16,338 L20,218 L44,168 Z',
  'Atsimo-Andrefana': 'M40,398 L76,422 L130,422 L118,468 L88,498 L44,478 L18,438 Z',
  'Anosy': 'M130,422 L196,398 L170,480 L120,540 L88,498 L118,468 Z',
}

export default function RegionMap() {
  const { activeRegion, setRegion } = useFilterStore()
  const [hovered, setHovered] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleKeyDown = (e: React.KeyboardEvent, region: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setRegion(region)
    }
  }

  return (
    <div className="w-full">
      {/* Carte SVG — visible à partir de md */}
      <div className="hidden md:flex flex-col items-center">
        <svg
          viewBox="0 0 240 560"
          className="w-full max-w-[220px] h-auto"
          role="group"
          aria-label="Carte de Madagascar, filtre par région"
        >
          {REGIONS.map((region) => {
            const isActive = activeRegion === region
            const isHovered = hovered === region
            return (
              <motion.path
                key={region}
                d={REGION_PATHS[region]}
                data-region={region}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setRegion(region)}
                onKeyDown={(e) => handleKeyDown(e, region)}
                onMouseEnter={() => setHovered(region)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(region)}
                onBlur={() => setHovered(null)}
                stroke="var(--bg)"
                strokeWidth={2}
                className="cursor-pointer outline-none"
                animate={{
                  fill: isActive ? '#C08A2E' : isHovered ? '#D9A94F' : '#C08A2E',
                  fillOpacity: isActive ? 1 : isHovered ? 0.7 : 0.22,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                style={{
                  filter: isActive ? 'drop-shadow(0 2px 6px rgba(192,138,46,0.5))' : 'none',
                }}
              >
                <title>{region}</title>
              </motion.path>
            )
          })}
        </svg>
        <p className="font-mono text-xs mt-3 h-4 text-sisal uppercase tracking-wide">
          {hovered || activeRegion || 'Survolez une région'}
        </p>
        {activeRegion && (
          <button
            onClick={() => setRegion(activeRegion)}
            className="font-mono text-[11px] mt-1 underline underline-offset-2 text-ink/60 dark:text-raffia/60 hover:text-sisal"
          >
            Réinitialiser la région
          </button>
        )}
      </div>

      {/* Fallback liste — visible en dessous de md (SVG trop petit pour être utilisable au doigt) */}
      <div className="md:hidden flex flex-wrap gap-2" role="group" aria-label="Filtrer par région">
        {REGIONS.map((region) => {
          const isActive = activeRegion === region
          return (
            <button
              key={region}
              onClick={() => setRegion(region)}
              aria-pressed={isActive}
              className={`font-mono text-xs px-3 py-2 rounded-full border transition-colors duration-200 ${
                isActive
                  ? 'bg-sisal border-sisal text-raffia'
                  : 'border-border text-ink/70 dark:text-raffia/70'
              }`}
            >
              {region}
            </button>
          )
        })}
      </div>
    </div>
  )
}