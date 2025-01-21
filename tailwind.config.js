/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'serif'],
      },
      colors: {
        primary: '#3F302B',
        secondary: '#FFEFE2',
        icon: {
          green: '#E5E7EB',
          purple: '#4B5563',
          brown: '#4B5563',
        },
      }
    },
  },
  plugins: [],
}