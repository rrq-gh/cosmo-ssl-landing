import { Link } from 'react-router-dom'

// Cabecera horizontal fija, usada en páginas del sitio distintas al home
// (que usa el Navbar flotante de anclas). Los enlaces a secciones del home
// navegan con hash para poder llegar desde cualquier página.
const navLinks = [
  { to: '/#beneficios', label: 'Certificados' },
  { to: '/#precios', label: 'Precios' },
]

export default function Header() {
  return (
    <div className="sticky top-0 z-20 w-full bg-surface-base/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between gap-md px-gutter py-sm lg:px-gutter-lg">
        <Link
          to="/"
          className="flex items-center gap-1 font-display text-h3 font-bold tracking-tight text-text"
        >
          COSMO<span className="text-primary">SSL</span>
        </Link>

        <div className="flex items-center gap-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hidden font-body text-body-sm text-text-muted transition-colors hover:text-primary sm:inline-block"
            >
              {link.label}
            </Link>
          ))}
          <span className="hidden font-body text-body-sm font-semibold text-primary sm:inline-block">
            Blog
          </span>
          <Link
            to="/#contacto"
            className="shrink-0 rounded-xl bg-primary px-md py-xs font-display text-body-sm font-bold text-primary-on shadow-lg transition-all hover:bg-primary-strong"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </div>
  )
}
