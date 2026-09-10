// Contenido de la sección "Blog" (#blog). El artículo destacado y el listado
// se mantienen separados porque el destacado usa un layout propio.
export const categories = [
  'Todas',
  'Estándares',
  'Validación',
  'Autoridades',
  'Guías',
  'Cumplimiento',
  'Soporte',
]

// Total real de artículos publicados (independiente de cuántos se muestren
// en el listado inicial), usado para el contador "X de Y artículos".
export const totalArticles = 34

export const featuredPost = {
  categoria: 'Estándares',
  meta: '05 SET 2026 • 6 min',
  titulo: 'Los certificados TLS bajarán a 47 días de vigencia hacia 2029',
  bajada:
    'La reducción progresiva del periodo máximo de validez obliga a automatizar la renovación. Qué debe preparar tu equipo de infraestructura este año y cuáles son las fechas de corte.',
  autor: 'Carlos Mendoza',
  autorRole: 'Equipo Cosmo SSL',
  autorIniciales: 'CM',
}

export const posts = [
  {
    categoria: 'Validación',
    meta: '02 SET 2026 • 4 min',
    titulo: 'SUNAT actualiza los requisitos de validación de RUC para certificados OV',
    bajada:
      'Qué documentos pide ahora la verificación de existencia legal y cómo evitar que la emisión se demore más de 24-48h.',
  },
  {
    categoria: 'Autoridades',
    meta: '28 AGO 2026 • 5 min',
    titulo: 'Sectigo migra su jerarquía de raíces a ECC P-384',
    bajada:
      'La transición afecta a las cadenas intermedias. Revisa la compatibilidad de tus balanceadores antes de renovar.',
  },
  {
    categoria: 'Guías',
    meta: '25 AGO 2026 • 8 min',
    titulo: 'Automatizar la renovación con ACME en NGINX y cPanel',
    bajada:
      'Paso a paso para dejar la renovación desatendida, con el detalle de permisos y rutas en cada entorno.',
  },
  {
    categoria: 'Cumplimiento',
    meta: '20 AGO 2026 • 6 min',
    titulo: 'Qué cambia para la banca peruana con TLS 1.3 obligatorio',
    bajada:
      'Requisitos de cifrado, plazos de adecuación y el impacto en pasarelas de pago y banca por internet.',
  },
  {
    categoria: 'Guías',
    meta: '14 AGO 2026 • 7 min',
    titulo: 'Wildcard o SAN/UCC: cuál conviene según tu arquitectura',
    bajada:
      'Comparación de cobertura, costo por dominio y riesgo operativo cuando administras decenas de subdominios.',
  },
  {
    categoria: 'Soporte',
    meta: '08 AGO 2026 • 5 min',
    titulo: 'Los errores de instalación más comunes en Apache e IIS',
    bajada:
      'Cadena incompleta, clave privada desalineada y puertos sin redirección: cómo diagnosticarlos en minutos.',
  },
]
