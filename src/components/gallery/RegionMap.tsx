import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { REGIONS } from '../../types'
import { useFilterStore } from '../../store/filterStore'

const REGION_PATHS: Record<string, string> = {
  'Diana': 'M118,18 L158,50 L150,92 L100,96 L82,58 Z',
  'Boeny': 'M82,58 L100,96 L96,148 L54,150 L48,108 L60,80 Z',
  'Atsinanana': 'M150,92 L188,110 L200,220 L188,340 L160,360 L150,240 L96,148 L100,96 Z',
  'Analamanga': 'M96,148 L150,240 L128,280 L88,270 L70,210 L54,150 Z',
  'Vakinankaratra': 'M88,270 L128,280 L120,326 L82,332 L68,296 Z',
  "Amoron'i Mania": 'M82,332 L120,326 L114,368 L78,374 Z',
  'Haute Matsiatra': 'M78,374 L114,368 L106,412 L72,418 Z',
  'Menabe': 'M48,108 L54,150 L70,210 L88,270 L82,332 L78,374 L44,392 L18,320 L20,200 L30,140 Z',
  'Atsimo-Andrefana': 'M44,392 L78,374 L72,418 L106,412 L96,456 L60,486 L28,452 L20,410 Z',
  'Anosy': 'M106,412 L160,360 L150,240 L188,340 L172,430 L140,486 L96,456 Z',
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
                  fill: isActive ? '#2F6B4A' : isHovered ? '#4C8A66' : '#2F6B4A',
                  fillOpacity: isActive ? 1 : isHovered ? 0.7 : 0.22,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                style={{
                  filter: isActive ? 'drop-shadow(0 2px 6px rgba(47,107,74,0.5))' : 'none',
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