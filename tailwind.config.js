/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Azur: "#7f7fd5",
        Navy: "#000080",
        floralWhite: " #FFFAF0"
      },
      backgroundImage: {
        skype: "url('./assets/sky.jpeg')"
      },
      screens: {
        sm: '300px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

