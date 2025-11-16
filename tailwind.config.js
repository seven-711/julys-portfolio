/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: "#0b0d12",
        panel: "#11141b",
        text: "#e7ebf3",
        muted: "#a9b0bf",
        brand: "#6ea8fe",
        brand2: "#8b5cf6",
        border: "#1a1f2b"
      }
    },
  },
  plugins: [],
}
