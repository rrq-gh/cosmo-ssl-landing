import { benefits } from '../data/benefits'

export default function Services() {
  return (
    <section
      id="beneficios"
      className="w-full bg-surface-inverse py-3xl text-text-inverse lg:py-4xl"
    >
      <div className="mx-auto max-w-container px-gutter lg:px-gutter-lg">
        <div className="mb-2xl max-w-3xl">
          <div className="mb-xs inline-flex items-center gap-xs rounded-full bg-surface-high/20 px-sm py-2xs">
            <span className="font-mono text-mono font-semibold uppercase tracking-widest text-primary-inverse">
              Garantía Corporativa
            </span>
          </div>
          <h2 className="mb-xs font-display text-h1-sm font-bold tracking-tight text-text-inverse lg:text-h1">
            Por qué elegir Validación de Organización (OV) para tu Entidad
          </h2>
          <p className="font-body text-body-lg text-surface-high">
            A diferencia de los certificados básicos por dominio (DV), el certificado OV
            corrobora la autenticidad jurídica de tu razón social en registros oficiales
            peruanos como SUNAT y SUNARP.
          </p>
        </div>

        {/* Las 3 tarjetas, renderizadas desde el arreglo `benefits` */}
        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-sm rounded-xl bg-surface-bright/20 p-xl transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary-onSurface">
                <span
                  className="material-symbols-outlined text-2xl font-bold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-xs font-display text-h3 font-bold text-text-inverse">
                {item.title}
              </h3>
              <p className="font-body text-body leading-relaxed text-surface-high">
                {item.description}
              </p>
              <div className="mt-auto flex items-center gap-xs pt-sm font-mono text-mono font-bold text-primary-onSurface">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Barra de cumplimiento normativo */}
        <div className="mt-xl flex flex-col items-center justify-between gap-md rounded-xl bg-surface-high/30 p-lg md:flex-row">
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-3xl text-primary-onSurface">
              security_update_good
            </span>
            <div>
              <h4 className="font-display text-h3 font-bold text-text-inverse">
                Cumplimiento Normativo Financiero y Gubernamental
              </h4>
              <p className="font-body text-body-sm text-surface-high">
                Aprobado para portales transaccionales, e-commerce B2B/B2C, pasarelas de
                pago y sistemas de licitación con el Estado peruano.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 rounded-lg bg-surface-base px-md py-xs font-display text-body font-semibold text-text transition-colors hover:bg-surface-elevated"
          >
            Consultar con Ingeniero
          </a>
        </div>
      </div>
    </section>
  )
}
