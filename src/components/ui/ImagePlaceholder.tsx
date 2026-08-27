import { ShoppingBasket, Scissors, TreePine, Shirt, Sparkles, Amphora, Gem, Package } from 'lucide-react'

const CATEGORY_STYLE: Record<string, { icon: typeof Package; from: string; to: string }> = {
  'Vannerie': { icon: ShoppingBasket, from: '#C08A2E', to: '#96691F' },
  'Broderie': { icon: Scissors, from: '#A8382B', to: '#7A281F' },
  'Bois sculpté': { icon: TreePine, from: '#3F6B4F', to: '#2B4C37' },
  'Tissage & lamba en soie': { icon: Shirt, from: '#C08A2E', to: '#A8382B' },
  'Corne & os zébu': { icon: Sparkles, from: '#211C16', to: '#4A4038' },
  'Poterie': { icon: Amphora, from: '#A8382B', to: '#C08A2E' },
  'Bijouterie': { icon: Gem, from: '#3F6B4F', to: '#C08A2E' },
}

interface ImagePlaceholderProps {
  categorie: string
  className?: string
}

export default function ImagePlaceholder({ categorie, className = '' }: ImagePlaceholderProps) {
  const style = CATEGORY_STYLE[categorie] ?? { icon: Package, from: '#C08A2E', to: '#3F6B4F' }
  const Icon = style.icon

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${style.from}, ${style.to})`,
      }}
      aria-hidden="true"
    >
      {/* texture tressée légère en surimpression */}
      <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none">
        <pattern id={`weave-${categorie.replace(/\s/g, '')}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="14" stroke="white" strokeWidth="2" />
          <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#weave-${categorie.replace(/\s/g, '')})`} />
      </svg>
      <Icon className="text-raffia/90 relative z-10" size={36} strokeWidth={1.5} />
    </div>
  )
}