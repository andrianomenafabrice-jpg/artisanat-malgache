import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-raffia dark:bg-nofy">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl text-ink dark:text-raffia mb-2">
            Artisanat <span className="text-sisal">Malgache</span>
          </h3>
          <p className="font-body text-sm text-ink/70 dark:text-raffia/70 max-w-xs">
            Une vitrine des savoir-faire artisanaux de Madagascar, région par région.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-sisal mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 font-body text-sm">
            <li><NavLink to="/galerie" className="hover:text-sisal transition-colors">Galerie</NavLink></li>
            <li><NavLink to="/a-propos" className="hover:text-sisal transition-colors">À propos</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-sisal transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-sisal mb-3">
            Engagement
          </h4>
          <p className="font-body text-sm text-ink/70 dark:text-raffia/70">
            Commerce équitable · Savoir-faire préservé · Artisans mis en valeur
          </p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center font-mono text-xs text-ink/50 dark:text-raffia/50">
        © 2026 Artisanat Malgache. Tous droits réservés.
      </div>
    </footer>
  )
}