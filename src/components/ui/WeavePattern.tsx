export function WeaveDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-6 overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 24" preserveAspectRatio="none" className="w-full h-full">
        <pattern id="weave-divider" width="20" height="24" patternUnits="userSpaceOnUse">
          <path d="M0,12 Q5,0 10,12 T20,12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M0,12 Q5,24 10,12 T20,12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#weave-divider)" className="text-sisal/40" />
      </svg>
    </div>
  )
}

export function WeaveSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-surface animate-pulse ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <pattern id="weave-skeleton" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#weave-skeleton)" className="text-sisal" />
      </svg>
    </div>
  )
}