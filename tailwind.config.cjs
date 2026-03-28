/** Tailwind configuration for Astro project */
module.exports = {
  content: ['./src/**/*.{astro,ts,tsx,js}'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [],
};