export default function BlogHero({ categories, activeCategory, onCategoryChange }) {
  return (
    <section className="relative w-full overflow-hidden bg-surface-base py-2xl lg:py-3xl">
      {/* Resplandores ambientales, consistentes con el Hero del home */}
      <div className="pointer-events-none absolute -left-20 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent-soft/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-lg px-gutter lg:px-gutter-lg">
        <div className="inline-flex w-fit items-center gap-xs rounded-full bg-accent-soft/10 px-sm py-2xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-soft" />
          <span className="font-mono text-mono font-semibold uppercase tracking-wide text-accent-soft">
            Actualizado 09 SET 2026
          </span>
        </div>

        <h1 className="max-w-2xl font-display text-hero-sm font-bold tracking-tight text-text lg:text-hero">
          Noticias de Certificados SSL/TLS
        </h1>

        <p className="max-w-2xl font-body text-body-lg leading-relaxed text-text-muted">
          Cambios en los estándares del CA/Browser Forum, requisitos de validación en
          Perú y guías de instalación, explicados para equipos de TI y cumplimiento.
        </p>

        <div className="flex flex-wrap gap-xs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-md py-xs font-mono text-mono font-semibold uppercase tracking-wide transition-colors ${
                category === activeCategory
                  ? 'bg-primary text-primary-on'
                  : 'bg-surface-card text-text-muted hover:bg-surface-elevated hover:text-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
