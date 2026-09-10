import { trustBadges } from '../data/trustBadges'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-surface-base py-2xl lg:py-4xl"
    >
      {/* Resplandores ambientales criptográficos */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 -z-0 h-80 w-80 rounded-full bg-accent-soft/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-container px-gutter lg:px-gutter-lg">
        <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-12 lg:gap-2xl">
          {/* Contenido izquierdo */}
          <div className="flex flex-col items-start gap-md lg:col-span-7">
            <div className="inline-flex items-center gap-xs rounded-full bg-surface-card px-sm py-2xs shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent-soft" />
              <span className="font-mono text-mono font-medium uppercase tracking-wide text-accent-soft">
                Ciberseguridad Corporativa en Perú • Validación de Organización (OV)
              </span>
            </div>

            <h1 className="font-display text-hero-sm leading-tight tracking-tight text-text lg:text-hero">
              Certificados SSL OV en Perú:{' '}
              <span className="text-primary">Protege tu Empresa</span> y Muestra tu
              Identidad Corporativa Verificada
            </h1>

            <p className="max-w-2xl font-body text-body-lg leading-relaxed text-text-muted">
              Valida la existencia legal de tu organización, evita alertas de seguridad
              en los navegadores y proyecta máxima confianza ante tus clientes con el
              respaldo de las mejores marcas de ciberseguridad.
            </p>

            <div className="flex flex-wrap items-center gap-md pt-sm">
              <a
                href="#precios"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-lg py-sm font-display text-h3 font-bold text-primary-on shadow-lg transition-all hover:bg-primary-strong hover:shadow-primary/20"
              >
                Ver Certificados Disponibles
                <span className="material-symbols-outlined ml-xs">arrow_downward</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-surface-elevated px-lg py-sm font-display text-h3 font-medium text-text transition-all hover:bg-surface-bright"
              >
                Contactar a un Asesor
                <span className="material-symbols-outlined ml-xs">support_agent</span>
              </a>
            </div>

            {/* Franja de confianza */}
            <div className="mt-sm grid w-full grid-cols-1 gap-md rounded-xl bg-surface-raised/60 p-md pt-lg backdrop-blur-sm sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-xs">
                  <span
                    className={`material-symbols-outlined text-2xl ${badge.color}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {badge.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body text-label uppercase text-text">
                      {badge.title}
                    </span>
                    <span className="font-body text-body-sm text-text-muted">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual derecho */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-surface-raised shadow-2xl">
              <img
                alt="Ilustración tecnológica 3D de ciberseguridad con candado dorado protegido por escudo de cristal, microchips criptográficos, llaves de seguridad y sellos holográficos de certificación SSL TLS"
                className="h-full w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuh519wUl2maNFKh5sucFrt47pIAxVY9-iMKTOeZxAkJ71rBDz5ehjmHvB7l-TkUrUwT8KjmWfVBxbGjfiISufY0RxUBoPHsrFyEdZBx7QcvhfVMczde2BKBxTOSBPKOzu3QRDMg_lIj8fipWmVyviZKIZv_E3I7eP35AN6urAOWohSNOgjxfmit2369UhfXmA9xSaiVAKGMX4hgGcRxwmpoqEx8-HeVDuKuk8XOubX5HLz83oa3OWNg"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-surface-base/90 p-sm shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-accent-soft">lock</span>
                  <div>
                    <p className="font-mono text-mono font-bold text-accent-soft">
                      RSA 2048 / 4096-bit &amp; ECC
                    </p>
                    <p className="font-body text-label text-text-muted">
                      TLS 1.3 Enterprise Standard
                    </p>
                  </div>
                </div>
                <span className="rounded bg-accent-soft/10 px-xs py-2xs font-mono text-mono text-accent-soft">
                  ESTADO: ACTIVO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
