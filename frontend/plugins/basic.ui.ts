import InputAuth from '~/components/supports/InputAuth.vue'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('input-auth', InputAuth)
})