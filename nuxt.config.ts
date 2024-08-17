/** @format */

export default defineNuxtConfig({
  css: [
    "@/assets/css/style.css",
    "@/assets/css/custom.css",
    "@/assets/css/vendors/swiper-bundle.min.css",
    "@/assets/css/vendors/jos.css",
    "@/assets/css/vendors/menu.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ["~/plugins/toastification.js"],

  compatibilityDate: "2024-08-15",

  build: { transpile: ["vue-toastification"] },
});
