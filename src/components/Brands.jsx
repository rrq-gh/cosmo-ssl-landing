import { brands } from '../data/brands'

export default function Brands() {
  return (
    <section id="marcas" className="w-full bg-surface-raised py-2xl lg:py-3xl">
      <div className="mx-auto max-w-container px-gutter text-center lg:px-gutter-lg">
        <span className="mb-xs block font-body text-label font-semibold uppercase tracking-wider text-primary-soft">
          Autoridades de Certificación (CA) de Confianza Raíz
        </span>
        <h2 className="mx-auto max-w-2xl font-display text-h2 font-bold text-text">
          Respaldado por las Autoridades de Certificación Líderes a Nivel Mundial
        </h2>
        <p className="mx-auto mb-xl mt-xs max-w-xl font-body text-body text-text-muted">
          Emitimos únicamente certificados oficiales con reconocimiento del 99.9% en
          todos los navegadores, sistemas operativos y dispositivos móviles.
        </p>

        <div className="grid grid-cols-2 items-center justify-center gap-md sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-2xs rounded-xl bg-surface-card p-md transition-colors hover:bg-surface-elevated"
            >
              <span className={`material-symbols-outlined text-3xl ${brand.color}`}>
                {brand.icon}
              </span>
              <span className="font-display text-body font-bold tracking-wider text-text">
                {brand.name}
              </span>
              <span className="font-mono text-[10px] uppercase text-outline">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
