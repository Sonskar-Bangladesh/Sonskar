export default {
  theme: {
    extend: {
      colors: {
        BangladeshGreen: "#006a4e",
        BangladeshRed: "#f42a41",
      },
      fontFamily: {
        sans: ["Roboto", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: [
    `src/components/**/*.{vue,js,ts}`,
    `src/layouts/**/*.vue`,
    `src/pages/**/*.vue`,
    `src/composables/**/*.{js,ts}`,
    `src/plugins/**/*.{js,ts}`,
    `src/utils/**/*.{js,ts}`,
    `src/App.{js,ts,vue}`,
    `src/app.{js,ts,vue}`,
    `src/Error.{js,ts,vue}`,
    `src/error.{js,ts,vue}`,
    `src/app.config.{js,ts}`,
  ],
};
