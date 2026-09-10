import { useState } from 'react'

export default function CtaBanner() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="relative w-full bg-surface-base py-3xl lg:py-4xl">
      <div className="mx-auto max-w-container px-gutter lg:px-gutter-lg">
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-surface-card p-xl shadow-2xl lg:p-3xl">
          {!submitted ? (
            <>
              <div className="mb-xl text-center">
                <div className="mb-xs inline-flex items-center gap-xs rounded-full bg-primary/10 px-sm py-2xs text-primary">
                  <span className="material-symbols-outlined text-sm">assignment</span>
                  <span className="font-mono text-mono font-semibold uppercase tracking-wider">
                    Atención Corporativa Inmediata
                  </span>
                </div>
                <h2 className="font-display text-h1-sm font-bold tracking-tight text-text lg:text-h1">
                  Solicita una Cotización Corporativa a Medida
                </h2>
                <p className="mx-auto mt-2xs max-w-xl font-body text-body text-text-muted">
                  Recibe asesoría directa de especialistas en ciberseguridad y
                  facturación con RUC en Perú en menos de 15 minutos.
                </p>
              </div>

              <form className="grid grid-cols-1 gap-md md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2xs">
                  <label className="font-body text-label uppercase tracking-wider text-text" htmlFor="nombre">
                    Nombre Completo <span className="text-primary">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    className="h-11 w-full rounded-lg bg-surface-base px-sm font-body text-body text-text placeholder-outline transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2xs">
                  <label className="font-body text-label uppercase tracking-wider text-text" htmlFor="correo">
                    Correo Electrónico Corporativo <span className="text-primary">*</span>
                  </label>
                  <input
                    id="correo"
                    type="email"
                    required
                    placeholder="cmendoza@tuempresa.pe"
                    className="h-11 w-full rounded-lg bg-surface-base px-sm font-body text-body text-text placeholder-outline transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2xs">
                  <label className="font-body text-label uppercase tracking-wider text-text" htmlFor="telefono">
                    Teléfono de Contacto <span className="text-primary">*</span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="+51 987 654 321"
                    className="h-11 w-full rounded-lg bg-surface-base px-sm font-body text-body text-text placeholder-outline transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2xs">
                  <label className="font-body text-label uppercase tracking-wider text-text" htmlFor="empresa">
                    Nombre de la Empresa / RUC <span className="text-primary">*</span>
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    required
                    placeholder="Empresa S.A.C. / 20123456789"
                    className="h-11 w-full rounded-lg bg-surface-base px-sm font-body text-body text-text placeholder-outline transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2xs md:col-span-2">
                  <label className="font-body text-label uppercase tracking-wider text-text" htmlFor="dominios">
                    Número de Dominios a Proteger <span className="text-primary">*</span>
                  </label>
                  <select
                    id="dominios"
                    required
                    defaultValue=""
                    className="h-11 w-full cursor-pointer rounded-lg bg-surface-base px-sm font-body text-body text-text transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="1">1 Dominio (Certificado OV Estándar)</option>
                    <option value="2-5">2-5 Dominios (Multi-Dominio SAN Empresarial)</option>
                    <option value="mas5">Más de 5 / Multi-Dominio (SAN/UCC Bancario)</option>
                    <option value="wildcard">
                      Dominio Principal + Ilimitados Subdominios (*.empresa.pe)
                    </option>
                  </select>
                </div>

                <div className="pt-sm md:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-xs rounded-xl bg-primary px-xl py-md font-display text-h3 font-bold text-primary-on shadow-xl transition-all hover:bg-primary-strong hover:shadow-primary/30"
                  >
                    <span>Enviar Solicitud Segura</span>
                    <span className="material-symbols-outlined font-bold">send</span>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-md pt-xs text-center text-text-muted sm:flex-row md:col-span-2">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base text-accent-soft">lock</span>
                    <span className="font-body text-body-sm">
                      Tus datos están protegidos bajo estricto acuerdo de confidencialidad.
                    </span>
                  </div>
                  <span className="hidden text-outline sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base text-primary">
                      receipt_long
                    </span>
                    <span className="font-body text-body-sm">
                      Facturación formal con IGV para Perú.
                    </span>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-sm p-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft/20 text-accent-soft">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <h3 className="font-display text-h2 font-bold text-text">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="mx-auto max-w-md font-body text-body text-text-muted">
                Un especialista de Cosmo SSL Perú se pondrá en contacto con tu empresa en
                menos de 15 minutos para entregar tu cotización formal con RUC y validar
                los requisitos técnicos.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-md rounded-lg bg-surface-elevated px-md py-xs font-mono text-mono text-text transition-colors hover:bg-surface-bright"
              >
                Enviar otra consulta
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
