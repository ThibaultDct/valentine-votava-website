/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Le contenu ne s'étale plus jusqu'aux bords sur grand écran :
    // au-delà de ~1200px, une page de texte devient pénible à lire.
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '2.5rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', '"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      // Ombres teintées d'ambre plutôt que de noir : sur un fond chaud,
      // une ombre neutre grise le rendu.
      boxShadow: {
        soft: '0 1px 2px rgba(120, 53, 15, 0.04), 0 4px 16px rgba(120, 53, 15, 0.05)',
        lift: '0 2px 6px rgba(120, 53, 15, 0.06), 0 16px 36px rgba(120, 53, 15, 0.10)',
        inner_soft: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      maxWidth: {
        prose: '65ch',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(1.25rem)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
