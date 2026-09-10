/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ---------------------------------------------------------------
      // Design tokens extraídos del diseño de Stitch "Cosmo SSL Perú".
      // Cada color conserva, en comentario, el token original (Material
      // You) del que proviene, para trazabilidad.
      // ---------------------------------------------------------------
      colors: {
        primary: {
          DEFAULT: '#ffb800', // primary-container — dorado de marca (CTAs, acentos)
          strong: '#ffba20', // surface-tint — hover de botones primarios
          soft: '#ffdca1', // primary — dorado suave (texto/labels destacados)
          on: '#412d00', // on-primary — texto sobre botones dorados
          onMuted: '#6b4c00', // on-primary-container — dorado oscuro sobre chips claros
          onSurface: '#5e4200', // on-primary-fixed-variant — iconos sobre banda clara
          inverse: '#7c5800', // inverse-primary — etiqueta dorada sobre banda clara
        },
        accent: {
          DEFAULT: '#01e599', // secondary-container — verde menta (estados, precios)
          soft: '#70ffba', // secondary — check icons, dot animado
          dim: '#00e297', // secondary-fixed-dim — badge de país en el footer
        },
        info: '#77cfff', // tertiary-container — acento celeste (iconografía secundaria)
        surface: {
          base: '#0e0e0e', // surface-container-lowest — fondo de página
          raised: '#1c1b1b', // surface-container-low — franjas/inputs
          card: '#201f1f', // surface-container — tarjetas por defecto
          elevated: '#2a2a2a', // surface-container-high — hover / botones secundarios
          high: '#353534', // surface-container-highest / surface-variant — badges
          bright: '#3a3939', // surface-bright — hover de superficies elevadas
          inverse: '#e5e2e1', // inverse-surface — banda clara invertida (Services)
        },
        text: {
          DEFAULT: '#e5e2e1', // on-surface — texto principal
          muted: '#d5c4ab', // on-surface-variant — texto secundario
          inverse: '#313030', // inverse-on-surface — texto sobre banda clara
        },
        outline: {
          DEFAULT: '#9e8f78', // outline — bordes/texto terciario
          soft: '#514532', // outline-variant — indicadores inactivos
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'], // headlines y hero
        body: ['Inter', 'sans-serif'], // texto de cuerpo y labels
        mono: ['"JetBrains Mono"', 'monospace'], // datos técnicos (label-code)
      },
      fontSize: {
        hero: ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-sm': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-sm': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '36px', letterSpacing: '-0.015em', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '30px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        body: ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        label: ['11px', { lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }],
        mono: ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '500' }],
      },
      spacing: {
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4.5rem',
        '4xl': '6rem',
        gutter: '1rem', // padding lateral mobile
        'gutter-lg': '1.5rem', // padding lateral desktop
      },
      maxWidth: {
        container: '1240px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
}
