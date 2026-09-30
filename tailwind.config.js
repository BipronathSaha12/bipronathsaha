/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        dark: {
          700: '#1f2937',
          800: '#111827',
          900: '#0b0f19',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
