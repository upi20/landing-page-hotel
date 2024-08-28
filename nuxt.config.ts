/** @format */

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    format: ['webp'],
    quality: 80
  },

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

  plugins: [
    "~/plugins/toastification.js"
  ],
  compatibilityDate: "2024-08-15",
  build: { transpile: ["vue-toastification"] },
  modules: ["@nuxt/image", "@nuxtjs/seo"],
  site: {
    url: 'https://tukangbikin.web.id',
  },
  nitro: {
    prerender: {
      routes: [
        '/robots.txt',
        '/sitemap.xml'
      ]
    }
  }
});