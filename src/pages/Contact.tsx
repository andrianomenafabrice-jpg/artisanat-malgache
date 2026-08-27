import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormErrors {
  nom?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!nom.trim()) newErrors.nom = 'Le nom est requis.'

    if (!email.trim()) {
      newErrors.email = "L'email est requis."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Format d’email invalide.'
    }

    if (!message.trim()) {
      newErrors.message = 'Le message ne peut pas être vide.'
    } else if (message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // ------------------------------------------------------------------
    // FRONTEND ONLY — point d'intégration backend futur.
    // Ici, brancher un vrai appel réseau, par exemple :
    //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ nom, email, message }) })
    // Pour l'instant, la soumission est simulée avec un délai.
    // ------------------------------------------------------------------
    setTimeout(() => {
      setStatus('success')
      setNom('')
      setEmail('')
      setMessage('')
    }, 900)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-sisal">Contact</span>
        <h1 className="font-display text-5xl mt-3">Parlons de votre projet</h1>
        <p className="font-body mt-4 text-ink/70 dark:text-raffia/70">
          Une question sur une pièce, un artisan, ou une commande particulière ?
          Écrivez-nous, nous répondons sous quelques jours.
        </p>
      </motion.header>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 p-8 rounded-sm border border-ravinala bg-ravinala/10 text-center"
          >
            <CheckCircle2 className="mx-auto text-ravinala mb-3" size={36} />
            <h2 className="font-display text-2xl">Message envoyé</h2>
            <p className="font-body text-ink/70 dark:text-raffia/70 mt-2">
              Merci, votre message a bien été transmis. Nous revenons vers vous rapidement.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="font-mono text-xs uppercase tracking-wide mt-6 px-5 py-2.5 rounded-full border border-border hover:border-sisal hover:text-sisal transition-colors"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 flex flex-col gap-6"
          >
            <div>
              <label htmlFor="nom" className="font-mono text-xs uppercase tracking-wide text-sisal">
                Nom
              </label>
              <input
                id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                aria-invalid={!!errors.nom}
                aria-describedby={errors.nom ? 'nom-error' : undefined}
                className={`w-full mt-2 font-body px-4 py-3 rounded-sm bg-surface border outline-none transition-colors ${
                  errors.nom ? 'border-tany-mena' : 'border-border focus:border-sisal'
                }`}
              />
              {errors.nom && (
                <p id="nom-error" className="flex items-center gap-1 text-tany-mena text-sm mt-1.5">
                  <AlertCircle size={13} /> {errors.nom}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-sisal">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full mt-2 font-body px-4 py-3 rounded-sm bg-surface border outline-none transition-colors ${
                  errors.email ? 'border-tany-mena' : 'border-border focus:border-sisal'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="flex items-center gap-1 text-tany-mena text-sm mt-1.5">
                  <AlertCircle size={13} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-sisal">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full mt-2 font-body px-4 py-3 rounded-sm bg-surface border outline-none transition-colors resize-none ${
                  errors.message ? 'border-tany-mena' : 'border-border focus:border-sisal'
                }`}
              />
              {errors.message && (
                <p id="message-error" className="flex items-center gap-1 text-tany-mena text-sm mt-1.5">
                  <AlertCircle size={13} /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wide px-6 py-3.5 rounded-full bg-sisal text-raffia hover:bg-sisal-dark transition-colors disabled:opacity-60"
            >
              {status === 'submitting' ? (
                'Envoi en cours...'
              ) : (
                <>
                  Envoyer <Send size={14} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </main>
  )
}