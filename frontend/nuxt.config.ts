// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel:"preconnect", href:"https://fonts.googleapis.com" },
        { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: true},
        { href:"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap", rel:"stylesheet" },
        {
          href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css", rel:"stylesheet"
        }
      ]
    }
  }
})
