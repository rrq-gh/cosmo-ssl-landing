# Cosmo SSL Landing

Landing page construida con React, Vite y Tailwind CSS.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Instalación

```bash
npm install
```

## Uso

### Servidor de desarrollo

```bash
npm run dev
```

Levanta el servidor de desarrollo de Vite con recarga en caliente (por defecto en `http://localhost:5173`).

### Build de producción

```bash
npm run build
```

Genera los archivos optimizados para producción en la carpeta `dist/`.

### Vista previa del build

```bash
npm run preview
```

Sirve localmente el contenido de `dist/` para verificar el build de producción antes de desplegar.

## Estructura del proyecto

```
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes de la landing (Navbar, Hero, Services, etc.)
│   ├── data/            # Datos estáticos usados por los componentes (planes, marcas, links, etc.)
│   ├── App.jsx          # Composición principal de la página
│   ├── main.jsx         # Punto de entrada de React
│   └── index.css        # Estilos globales / Tailwind
├── index.html           # HTML raíz
├── tailwind.config.js   # Configuración de Tailwind CSS
├── postcss.config.js    # Configuración de PostCSS
└── vite.config.js       # Configuración de Vite
```

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
