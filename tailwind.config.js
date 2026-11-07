import plugin from 'tailwindcss/plugin'

const c = (v) => `rgb(var(--${v}) / <alpha-value>)`

// Freight-waybill design system: manila paper, carbon ink, rubber-stamp red.
// Dark theme (default, same toggle logic as before) = carbon paper with manila ink.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: c('bg'), surface: c('surface'), line: c('border'), fg: c('fg'), muted: c('muted'), accent: c('accent'), tint: c('tint'), onaccent: c('onaccent') },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans: ['Spectral', 'Georgia', 'serif'],
        mono: ['"Courier Prime"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        hardsm: '3px 3px 0 0 rgb(var(--fg))',
        hard: '7px 7px 0 0 rgb(var(--fg))',
        stamp: '4px 4px 0 0 rgb(var(--accent) / .35)',
      },
      keyframes: {
        stamp: {
          '0%': { opacity: '0', transform: 'scale(2.6) rotate(-16deg)' },
          '55%': { opacity: '1', transform: 'scale(.92) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-7deg)' },
        },
        wipe: { from: { clipPath: 'inset(0 100% 0 0)' }, to: { clipPath: 'inset(0 0 0 0)' } },
        slip: { from: { opacity: '0', transform: 'translate(-10px, 6px)' }, to: { opacity: '1', transform: 'translate(0,0)' } },
      },
      animation: {
        stamp: 'stamp .55s cubic-bezier(.2,.9,.3,1) 1.1s both',
        wipe: 'wipe 1.1s steps(22, end) .1s both',
        slip: 'slip .3s ease-out both',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) =>
      addBase({
        ':root': {
          '--bg': '21 30 44', '--surface': '30 42 60', '--border': '226 213 174', '--fg': '226 213 174',
          '--muted': '163 165 150', '--accent': '238 100 62', '--tint': '150 182 130', '--onaccent': '21 30 44',
          colorScheme: 'dark',
        },
        '.light': {
          '--bg': '226 213 174', '--surface': '238 229 199', '--border': '28 42 69', '--fg': '28 42 69',
          '--muted': '86 82 66', '--accent': '170 46 22', '--tint': '66 100 58', '--onaccent': '242 234 208',
          colorScheme: 'light',
        },
        html: { scrollBehavior: 'smooth', scrollPaddingTop: '4.5rem' },
        body: {
          '@apply bg-bg font-sans text-fg antialiased': {},
          fontSize: '1.0625rem',
          lineHeight: '1.65',
          // ruled-paper texture, pure gradient
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 31px, rgb(var(--fg) / .055) 31px 32px)',
        },
        '::selection': { backgroundColor: 'rgb(var(--accent))', color: 'rgb(var(--onaccent))' },
        ':focus-visible': { outline: '3px solid rgb(var(--accent))', outlineOffset: '3px' },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*, *::before, *::after': { animationDuration: '.01ms !important', transitionDuration: '.01ms !important' },
        },
      })
    ),
  ],
}
