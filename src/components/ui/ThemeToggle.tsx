import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      className="relative w-14 h-8 rounded-full border border-border flex items-center px-1 transition-colors duration-300"
      style={{ backgroundColor: theme === 'light' ? '#E8DBC0' : '#1D212C' }}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center bg-sisal text-raffia"
        animate={{ x: theme === 'light' ? 0 : 22 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
      </motion.div>
    </button>
  )
}