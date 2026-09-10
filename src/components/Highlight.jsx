import { plans } from '../data/plans'

function FeatureItem({ feature, featured }) {
  const text = typeof feature === 'string' ? feature : feature.text
  const icon = featured ? 'check_circle' : 'check'
  const textClass = typeof feature === 'object' && feature.highlight
    ? 'font-bold text-primary-soft'
    : typeof feature === 'object' && feature.strong
      ? 'font-medium text-text'
      : undefined

  return (
    <li className="flex items-start gap-xs">
      <span className="material-symbols-outlined mt-0.5 text-base text-accent-soft">
        {icon}
      </span>
      <span className={textClass}>{text}</span>
    </li>
  )
}

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-1 flex-col rounded-xl p-lg transition-all duration-300 ${
        plan.featured
          ? 'bg-surface-card shadow-2xl lg:-translate-y-2'
          : 'bg-surface-raised hover:bg-surface-card'
      }`}
    >
      {plan.topBadge && (
        <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-sm py-2xs font-body text-label font-bold uppercase text-primary-on shadow-md">
          <span className="material-symbols-outlined text-sm font-bold">star</span>
          {plan.topBadge}
        </div>
      )}

      <div className={`mb-xs flex items-start justify-between ${plan.topBadge ? 'mt-2xs' : ''}`}>
        <span
          className={`rounded px-xs py-2xs font-body text-label uppercase ${
            plan.featured
              ? 'bg-primary/20 text-primary-soft'
              : plan.accentBadge
                ? 'bg-accent-soft/10 font-bold text-accent-soft'
                : 'bg-surface-high text-text-muted'
          }`}
        >
          {plan.badge}
        </span>
        <span
          className={`material-symbols-outlined ${
            plan.featured ? 'text-primary' : plan.accentBadge ? 'text-accent-soft' : 'text-outline'
          }`}
        >
          {plan.badgeIcon}
        </span>
      </div>

      <h3 className="font-display text-h3 font-bold text-text">{plan.name}</h3>
      <p className="mb-md font-body text-body-sm text-text-muted">{plan.issuer}</p>

      <div className="my-sm">
        <span className="block font-mono text-mono text-text-muted">Desde</span>
        <div className="flex items-baseline gap-1">
          <span
            className={`font-display text-hero-sm font-bold ${plan.featured ? 'text-primary' : 'text-text'}`}
          >
            {plan.price}
          </span>
          <span className="font-body text-body-sm text-outline">/ año</span>
        </div>
        <span className="mt-1 block font-mono text-mono font-medium text-accent-soft">
          Precio incluye IGV
        </span>
      </div>

      <ul
        className={`my-md flex flex-grow flex-col gap-xs pt-sm font-body text-body-sm ${
          plan.featured ? 'text-text' : 'text-text-muted'
        }`}
      >
        {plan.features.map((feature) => (
          <FeatureItem key={typeof feature === 'string' ? feature : feature.text} feature={feature} featured={plan.featured} />
        ))}
      </ul>

      <a
        href="#contacto"
        className={`mt-auto w-full rounded-lg px-md py-sm text-center font-display text-body font-bold transition-all ${
          plan.featured
            ? 'bg-primary text-primary-on shadow-lg hover:bg-primary-strong hover:shadow-primary/20'
            : 'bg-surface-elevated text-text hover:bg-surface-bright'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  )
}

export default function Highlight() {
  return (
    <section id="precios" className="w-full bg-surface-base py-3xl lg:py-4xl">
      <div className="mx-auto max-w-container px-gutter lg:px-gutter-lg">
        <div className="mb-xl flex flex-col justify-between gap-md md:flex-row md:items-end">
          <div>
            <div className="mb-xs inline-flex items-center gap-xs rounded bg-primary/10 px-sm py-2xs font-mono text-mono font-semibold uppercase text-primary-soft">
              Transparencia Comercial SUNAT
            </div>
            <h2 className="font-display text-h1-sm font-bold tracking-tight text-text lg:text-h1">
              Planes y Certificados SSL OV Disponibles
            </h2>
            <p className="font-body text-body-lg text-text-muted">
              Emisión oficial con garantía en dólares y comprobante fiscal electrónico
              peruano.
            </p>
          </div>
          <div className="flex items-center gap-xs rounded-lg bg-surface-card p-2xs">
            <span className="rounded bg-primary px-sm py-2xs font-mono text-mono font-bold text-primary-on">
              USD $ (Facturado en S/ al TC)
            </span>
            <span className="px-sm py-2xs font-mono text-mono text-text-muted">
              Factura con IGV 18%
            </span>
          </div>
        </div>

        {/* Barra de servicio adicional */}
        <div className="mb-2xl flex w-full flex-col items-center justify-between gap-md rounded-xl bg-surface-raised p-md shadow-md md:flex-row">
          <div className="flex items-center gap-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">build_circle</span>
            </div>
            <div>
              <span className="font-body text-label font-bold uppercase tracking-wider text-primary-soft">
                Servicio Adicional Clave
              </span>
              <p className="font-display text-h3 font-bold text-text">
                Complemento indispensable: OV – Servicio de Instalación Profesional por{' '}
                <span className="text-primary">$103.84</span> (incluye IGV)
              </p>
              <p className="font-body text-body-sm text-text-muted">
                Instalación remota certificada en Apache, NGINX, IIS, cPanel, AWS o
                Kubernetes por ingenieros senior. Cero tiempo de inactividad.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 rounded-lg bg-surface-elevated px-md py-xs font-mono text-mono font-bold text-text transition-colors hover:bg-surface-bright"
          >
            Agregar a Cotización
          </a>
        </div>

        {/* Matriz de 4 planes, renderizada desde el arreglo `plans` */}
        <div className="grid grid-cols-1 items-stretch gap-md sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
