function PostCard({ post }) {
  return (
    <a
      href="#"
      className="flex flex-col overflow-hidden rounded-xl bg-surface-card transition-colors hover:bg-surface-elevated"
    >
      <div className="relative flex aspect-video items-center justify-center bg-surface-raised">
        <span className="font-mono text-mono uppercase text-outline-soft">Imagen 16:9</span>
        <span className="absolute left-sm top-sm rounded bg-surface-base/90 px-xs py-2xs font-mono text-mono font-semibold uppercase text-primary-soft backdrop-blur-md">
          {post.categoria}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-sm p-lg">
        <span className="font-mono text-mono uppercase text-outline">{post.meta}</span>
        <h3 className="font-display text-h3 font-bold leading-snug text-text">
          {post.titulo}
        </h3>
        <p className="font-body text-body text-text-muted">{post.bajada}</p>
        <span className="mt-auto pt-xs font-display text-body font-semibold text-primary-soft">
          Leer artículo
        </span>
      </div>
    </a>
  )
}

export default function PostGrid({ posts, totalArticles }) {
  return (
    <section className="mx-auto max-w-container px-gutter pb-3xl lg:px-gutter-lg">
      <div className="mb-lg flex items-baseline justify-between gap-md">
        <h2 className="font-display text-h2 font-semibold text-text">
          Últimas Publicaciones
        </h2>
        <span className="font-mono text-mono uppercase text-outline">
          {posts.length} de {totalArticles} artículos
        </span>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.titulo} post={post} />
          ))}
        </div>
      ) : (
        <p className="font-body text-body text-text-muted">
          No hay artículos publicados en esta categoría todavía.
        </p>
      )}

      <div className="mt-2xl flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-xs rounded-xl bg-surface-elevated px-lg py-sm font-display text-h3 font-medium text-text transition-all hover:bg-surface-bright"
        >
          Ver más artículos
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </section>
  )
}
