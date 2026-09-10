export const navLinks = [
  { path: 'inicio', label: 'Inicio' },
  { path: 'beneficios', label: 'Beneficios' },
  { path: 'precios', label: 'Precios' },
  { path: 'marcas', label: 'Marcas' },
  { path: 'contacto', label: 'Contacto' },
  // A diferencia de los demás, no es un ancla dentro del home sino una
  // página aparte (ver src/pages/Blog.jsx), de ahí el `route`.
  { path: 'blog', label: 'Blog', route: '/blog' },
]
