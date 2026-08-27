import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import MobileNav from './MobileNav'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-raffia/90 dark:bg-nofy/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-2xl tracking-tight text-ink dark:text-raffia">
          Artisanat <span className="text-sisal">Malgache</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-sisal ${
                  isActive ? 'text-sisal font-medium' : 'text-ink dark:text-raffia'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden text-ink dark:text-raffia"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}