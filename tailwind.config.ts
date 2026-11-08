import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sammy: {
          black: '#111111',
          gold: '#D4AF37',
          white: '#FFFFFF',
          light: '#F3F3F3',
        },
      },
      boxShadow: {
        media: '0 10px 30px rgba(17,17,17,0.08)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(17,17,17,0.05), rgba(17,17,17,0.05))',
      },
    },
  },
  plugins: [],
};

export default config;
