import { Link } from 'react-router-dom'
import { navLinks } from '../data/navLinks'

export default function Navbar() {
  return (
    <aside
      aria-label="Navegación Rápida"
      className="pointer-events-auto fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-sm md:right-8"
    >
      <div className="flex flex-col gap-xs rounded-xl bg-surface-raised/90 p-2xs shadow-2xl backdrop-blur-md">
        <nav className="flex flex-col gap-2xs">
          {navLinks.map((link, index) => {
            const itemClassName = `group flex items-center justify-end gap-xs rounded-lg px-sm py-xs transition-all ${
              index === 0
                ? 'bg-primary font-bold text-primary-onMuted'
                : 'text-text-muted hover:bg-surface-elevated hover:text-text'
            }`
            const content = (
              <>
                <span className="hidden font-body text-label uppercase tracking-wider opacity-80 group-hover:opacity-100 md:inline-block">
                  {link.label}
                </span>
                <span className="h-2 w-2 rounded-full bg-outline-soft transition-all group-hover:bg-primary-soft" />
              </>
            )

            // Las entradas con `route` son páginas aparte (p.ej. /blog), no
            // anclas dentro del home, así que navegan con React Router.
            return link.route ? (
              <Link key={link.path} to={link.route} className={itemClassName}>
                {content}
              </Link>
            ) : (
              <a
                key={link.path}
                href={`#${link.path}`}
                aria-current={index === 0 ? 'page' : undefined}
                className={itemClassName}
              >
                {content}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
