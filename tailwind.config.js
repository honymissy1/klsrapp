/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['"Great Vibes"', 'Funnel Display'],
        headline: ['Mozilla Headline'],
        redhat: ["Red Hat Text", 'sans-serif']
      }
    },
  },
  plugins: [],
}

