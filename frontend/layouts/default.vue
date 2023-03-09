<template>
  <div class="flex flex-row justify-center h-screen min-h-screen items-center w-screen">
    <div class="w-[90%] h-[90%] bg-white mx-4 rounded-2xl">
      <div class="w-[20%] h-full border-r-[1px] ">
        <div class="w-full leading-[50px] py-5 mb-6 font-[800] text-[20px] text-center text-transparent bg-clip-text 
        bg-gradient-to-r from-[#659999] to-[#f4791f] uppercase border-b-[1px]">TODO List</div>
        <div class="p-4 w-full space-y-5">
          <template v-for="n in navMenu">
            <div class="space-x-3">
              <NuxtLink :to="n.href">
                <div class="space-x-3 flex items-center cursor-pointer"><i :class="n.icon"></i><span>{{ n.title }}</span></div>
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const navMenu = ref<any[]>([
  {
    title: 'Today',
    href: '/a',
    icon: 'ri-briefcase-5-line text-green-600 ri-xl'
  },
  {
    title: 'Upcomming',
    href: '/',
    icon: 'ri-calendar-todo-line text-purple-600 ri-xl'
  }
])
</script>

<style scoped>

</style>