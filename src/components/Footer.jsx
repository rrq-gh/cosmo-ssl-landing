const legalLinks = [
  { path: 'terminos', label: 'Términos del Servicio' },
  { path: 'privacidad', label: 'Política de Privacidad' },
  { path: 'sunat', label: 'Facturación Electrónica SUNAT' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-surface-base text-text-muted">
      <div className="mx-auto max-w-container px-gutter py-3xl lg:px-gutter-lg">
        <div className="grid grid-cols-1 gap-xl pb-2xl md:grid-cols-12">
          <div className="flex flex-col items-start gap-sm md:col-span-6">
            <div className="flex items-center gap-xs">
              <span className="font-display text-h3 font-bold tracking-tight text-text">
                COSMO<span className="text-primary">SSL</span>
              </span>
              <span className="rounded bg-accent/10 px-xs py-2xs font-mono text-mono font-medium text-accent-dim">
                PERÚ - PE
              </span>
            </div>
            <p className="max-w-md font-body text-body-sm text-text-muted">
              Infraestructura de certificación digital y validación de organización (OV)
              para entidades corporativas en Perú. Emisión regulada con facturación
              electrónica SUNAT y soporte técnico especializado local.
            </p>
          </div>

          <div className="flex flex-col gap-xs md:col-span-3">
            <span className="font-body text-label uppercase tracking-wider text-text">
              Atención Corporativa
            </span>
            <a
              href="mailto:ventas@cosmossl.pe"
              className="font-body text-body-sm text-text-muted transition-colors hover:text-primary"
            >
              ventas@cosmossl.pe
            </a>
            <a
              href="mailto:soporte@cosmossl.pe"
              className="font-body text-body-sm text-text-muted transition-colors hover:text-primary"
            >
              soporte@cosmossl.pe
            </a>
            <span className="font-mono text-mono text-outline">
              Lunes a Viernes 08:30 - 18:30 PET
            </span>
          </div>

          <div className="flex flex-col gap-xs md:col-span-3">
            <span className="font-body text-label uppercase tracking-wider text-text">
              Legal y Normativa
            </span>
            {legalLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                className="font-body text-body-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-md pt-lg md:flex-row">
          <p className="font-body text-body-sm text-outline">
            © 2026 Cosmo SSL. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-md">
            <span className="font-mono text-mono text-outline">
              Validación RUC 20 | Estándar TLS 1.3 / ECC / RSA
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
