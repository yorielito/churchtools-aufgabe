/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
     
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-auto": "repeat(auto-fill, minmax(250px, 1fr))",
        "grid-col": "repeat(auto-fill, minmax(200px, 1fr))",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

