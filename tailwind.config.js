/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1.2rem;`,
      },
      fontFamily: {
        Fatface: ["Abril Fatface"],
        Raleway: ["Raleway"],
      },
      content: {
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      colors: {
        current: "currentColor",
        sky: {
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
        },
      },
    },
  },
  plugins: [],
};
