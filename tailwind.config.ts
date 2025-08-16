import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF37',
        'brand-gold-light': '#F4E4BC',
        'brand-gold-dark': '#B8860B',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-gray': '#1A1A1A',
        'brand-gray-light': '#2A2A2A',
      },
      fontFamily: {
        'hebrew': ['Noto Sans Hebrew', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
