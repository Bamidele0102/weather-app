module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify content sources
  darkMode: 'media', // Set darkMode to media
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add any other plugins here
  ],
};
