<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="flex flex-col justify-center items-center gap-6 relative">
      <div class="text-[50px] md:text-[100px] lg:text-[200px] tracking-[0.3rem] 
      lg:tracking-[1rem] font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-[#82ae46] to-green-600 animate__animated animate__fadeIn ">{{ error.statusCode }}</div>
      <div style="animation-delay: 400ms;" class="text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[#82ae46] to-green-600 animate__animated animate__fadeIn">
        Ooops !! {{ messageTitle[error.statusCode] || `An error has occurred` }} !
      </div>
      <div style="animation-delay: 800ms;" class="text-center text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#82ae46] to-green-600 px-10 animate__animated animate__fadeIn animate__delay-1s">
        {{ message[error.statusCode] || error.message }}
      </div>
      <NuxtLink to="/">
        <div style="animation-delay: 1200ms;" class="mt-3 animate__animated animate__fadeIn animate__delay-1s">
          <button class="text-center font-bold text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#82ae46] to-green-600 px-10 border-2 border-[#82ae46] rounded-lg">GO BACK HOME</button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['error'])
useHead({title:'Setup Zone - OOPS! ... ERROR '})
const message:any = {
  '404': `The page you're looking for does not seem to exist`
}
const messageTitle:any = {
  '404': `PAGE NOT FOUND !`
}
</script>

<style>
  
</style>