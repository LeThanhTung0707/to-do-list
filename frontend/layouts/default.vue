<template>
  <div class="flex flex-row justify-center h-screen min-h-screen items-center w-screen">
    <div class="w-[90%] h-[90%] bg-white mx-4 rounded-2xl shadow-lg shadow-sky-500 flex flex-row overflow-hidden">
      <div class="w-[13%] h-full border-r-[1px] bg-slate-50/50">
        <NuxtLink to="/">
          <div class="w-full leading-[50px] py-5 mb-6 font-[800] text-[30px] text-center text-transparent bg-clip-text
          bg-gradient-to-r from-[#659999] to-[#f4791f] uppercase border-b-[1px] cursor-pointer">TODO List</div>
        </NuxtLink>
        <div class="p-4 w-full space-y-5">
          <template v-for="n in navMenu">
            <div :class="useRoute().fullPath == n.href ? 'text-green-500' : ''" class=" space-x-3 text-[20px] rounded-lg hover:scale-[1.1]">
              <NuxtLink :to="n.href">
                <div class="space-x-3 flex items-center cursor-pointer p-3"><i :class="n.icon"></i><span >{{ n.title }}</span></div>
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
      <div class="overflow-auto w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const navMenu = ref<any[]>([
  {
    title: 'Today',
    href: '/today',
    icon: 'ri-briefcase-5-line text-green-600 ri-xl'
  },
  {
    title: 'Upcomming',
    href: '/upcomming',
    icon: 'ri-calendar-todo-line text-purple-600 ri-xl'
  },
  {
    title: 'Expired',
    href: '/expired',
    icon: 'ri-close-line text-red-500 ri-xl'
  }
])
</script>

<style scoped>

</style>