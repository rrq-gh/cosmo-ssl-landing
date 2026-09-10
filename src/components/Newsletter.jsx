import { useState } from 'react'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="w-full bg-surface-inverse py-3xl text-text-inverse lg:py-4xl">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-2xl px-gutter lg:grid-cols-12 lg:items-center lg:px-gutter-lg">
        <div className="flex flex-col gap-sm lg:col-span-7">
          <span className="font-mono text-mono font-bold uppercase text-primary-inverse">
            Boletín Mensual
          </span>
          <h2 className="font-display text-h1-sm font-bold tracking-tight text-text-inverse lg:text-h1">
            Cambios de Estándares en tu Correo, Antes de que te Afecten
          </h2>
          <p className="font-body text-body-lg text-surface-high">
            Un resumen mensual con las decisiones del CA/Browser Forum, avisos de las
            autoridades certificadoras y requisitos de validación vigentes en Perú.
          </p>
        </div>

        <div className="flex flex-col gap-sm rounded-xl bg-surface-bright/20 p-xl lg:col-span-5">
          {!submitted ? (
            <form className="flex flex-col gap-sm" onSubmit={handleSubmit}>
              <label
                htmlFor="newsletter-email"
                className="font-body text-label uppercase tracking-wider text-text-inverse"
              >
                Correo corporativo
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="cmendoza@tuempresa.pe"
                className="h-11 w-full rounded-lg border-none bg-white px-sm font-body text-body text-text-inverse placeholder-outline outline-none transition-all focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-xs rounded-lg bg-primary px-md py-xs font-display text-body font-bold text-primary-on transition-all hover:bg-primary-strong"
              >
                Suscribirme
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
              <span className="font-mono text-mono uppercase text-primary-onMuted">
                Sin publicidad • Baja en un clic
              </span>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-xs py-sm text-center">
              <span
                className="material-symbols-outlined text-3xl text-accent-soft"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <p className="font-body text-body text-text-inverse">
                ¡Listo! Revisa tu correo para confirmar la suscripción.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
