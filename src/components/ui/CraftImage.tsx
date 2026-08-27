import { useState } from 'react'

interface CraftImageProps {
  src: string
  alt: string
  className?: string
}

export default function CraftImage({ src, alt, className = '' }: CraftImageProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-surface text-ink/30 dark:text-raffia/30 font-mono text-xs ${className}`}
      >
        image indisponible
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  )
}