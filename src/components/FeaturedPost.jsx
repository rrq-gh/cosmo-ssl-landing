export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <section className="mx-auto max-w-container px-gutter pb-2xl pt-lg lg:px-gutter-lg">
      <a
        href="#"
        className="grid grid-cols-1 items-center gap-xl rounded-xl bg-surface-card p-xl transition-colors hover:bg-surface-elevated lg:grid-cols-2"
      >
        <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-xs overflow-hidden rounded-lg bg-gradient-to-br from-surface-card to-surface-elevated">
          <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <span
            className="material-symbols-outlined relative text-4xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lock
          </span>
          <span className="relative font-mono text-mono uppercase text-outline">
            Imagen de portada 16:10
          </span>
        </div>

        <div className="flex flex-col gap-md">
          <div className="flex flex-wrap items-center gap-xs">
            <span className="rounded bg-primary px-xs py-2xs font-mono text-mono font-bold uppercase text-primary-on">
              Destacado
            </span>
            <span className="font-mono text-mono uppercase text-outline">
              {post.categoria} • {post.meta}
            </span>
          </div>

          <h2 className="font-display text-h1-sm font-bold tracking-tight text-text lg:text-h1">
            {post.titulo}
          </h2>

          <p className="font-body text-body-lg leading-relaxed text-text-muted">
            {post.bajada}
          </p>

          <div className="mt-1 flex items-center gap-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-display text-body-sm font-bold text-primary-soft">
              {post.autorIniciales}
            </span>
            <span className="font-body text-body-sm text-text-muted">
              {post.autor} · {post.autorRole}
            </span>
          </div>
        </div>
      </a>
    </section>
  )
}
