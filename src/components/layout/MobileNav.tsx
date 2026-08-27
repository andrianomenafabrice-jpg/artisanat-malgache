import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { theme } = useTheme()

  // Bloque le scroll de la page tant que le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex flex-col h-[100dvh] w-screen"
          style={{ backgroundColor: theme === 'light' ? '#F1E7D3' : '#14171F' }}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="text-ink dark:text-raffia"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `font-display text-3xl ${isActive ? 'text-sisal' : 'text-ink dark:text-raffia'}`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}