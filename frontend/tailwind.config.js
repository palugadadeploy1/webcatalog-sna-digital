export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#3674B5",
          secondary: "#5F95C8",
          accent: "#9FE3F9",
          soft: "#D7F9F1",
          dark: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
