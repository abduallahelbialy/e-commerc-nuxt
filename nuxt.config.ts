// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
      title: "E-Commerce ",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "project products with api",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // إضافة Bootstrap CSS
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/css/main.css"],

  // إضافة مكون إضافي لتشغيل Bootstrap JavaScript (إن كنت بحاجة له)
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    { src: "~/plugins/swiper.js", mode: "client" },
    { src: "~/plugins/primevue.js", mode: "client" },
  ],
  modules: [],
  devtools: { enabled: false },
  compatibilityDate: "2024-08-28",
});