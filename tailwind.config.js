/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sac: {
          darkest: '#06201e',
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
        },
        forest: {
          900: '#0b301c',
          800: '#11482b',
          700: '#16643c',
          600: '#1c824e',
          500: '#23a362',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'premium': '0 10px 30px -10px rgba(9, 51, 47, 0.08), 0 4px 6px -2px rgba(9, 51, 47, 0.04)',
        'floating': '0 20px 40px -15px rgba(9, 51, 47, 0.15)',
      }
    },
  },
  plugins: [],
}
