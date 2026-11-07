/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#E5C383',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B8935A',
          700: '#9A7539',
          800: '#7A5B28',
          900: '#523C15',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F5',
          200: '#F5F1E8',
          300: '#EBE5D8',
          400: '#DFD6C3',
        },
        obsidian: {
          800: '#1C2220',
          900: '#121615',
          950: '#090D0C',
        },
        ink: {
          900: '#0F1211',
          800: '#1E2524',
          700: '#2F3A38',
          600: '#465653',
          500: '#647A75',
        },
        forest: {
          900: '#06201E',
          800: '#0A312D',
          700: '#0F4741',
          600: '#17625A',
          500: '#228277',
        },
        sac: {
          900: '#09332f',
          800: '#0e4a44',
          700: '#146059',
          600: '#1a776e',
          500: '#23958a',
          400: '#38b2a6',
          300: '#6ed1c7',
          200: '#aee8e2',
          100: '#e1f7f5',
          50: '#f0faf9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
        widest: '0.18em',
      },
      boxShadow: {
        'luxe': '0 20px 45px -15px rgba(9, 13, 12, 0.12), 0 0 1px 1px rgba(184, 147, 90, 0.15)',
        'floating': '0 25px 50px -12px rgba(9, 13, 12, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.35)',
      },
      animation: {
        'kenburns': 'kenburns 16s ease-out infinite alternate',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        }
      }
    },
  },
  plugins: [],
}
