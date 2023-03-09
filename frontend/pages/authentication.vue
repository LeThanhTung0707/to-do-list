<template>
  <div class="flex justify-center items-center h-screen w-screen  bg-gradient-to-r from-[#659999] to-[#f4791f]">
    <div class="relative w-[450px] h-[700px] bg-white rounded-lg flex flex-row overflow-hidden">
      <div :class="form ? 'right-0' : 'right-[-100%]'" class="duration-1000 absolute p-8 w-full h-full login flex flex-col justify-between items-center">
        <div class="flex flex-col justify-start items-center w-full">
          <div class="font-[800] text-[39px] mb-8 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#659999] to-[#f4791f]">LOGIN</div>
          <div class="flex flex-col justify-center items-start w-full py-5">
            <span class="text-[18px]">Username</span>
            <input-auth type="email" icon="ri-user-line" placeholder="Type your username"></input-auth>
          </div>
          <div class="flex flex-col justify-center items-start w-full py-5">
            <span class="text-[18px]">Password</span>
            <input-auth type="password" icon="ri-user-line" placeholder="Type your password"></input-auth>
          </div>
          <div class="flex justify-end items-end w-full px-5 text-[#666] cursor-pointer">
            <span>Forgot password?</span>
          </div>
          <div class=" relative w-full overflow-hidden rounded-[25px] h-[50px] px-5 bg-gradient-to-r from-[#659999] to-[#f4791f] mt-4 mx-5">
            <div class="text-white w-full h-full flex justify-center items-center font-bold">LOGIN</div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="cursor-default">
            Dont have an account? <span class="text-[#f4791f] cursor-pointer" @click="trans">Sign up</span>
          </div>
        </div>
      </div>
      <div :class="!form ? 'left-0' : 'left-[-100%]'" class="duration-1000 absolute p-8 w-full h-full register flex flex-col justify-between items-center">
        <div class="flex flex-col justify-start items-center w-full">
          <div class="font-[800] text-[39px] mb-8 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#659999] to-[#f4791f]">REGISTER</div>
          <div class="flex flex-col justify-center items-start w-full py-3">
            <span class="text-[18px]">Username</span>
            <input-auth type="email" icon="ri-user-line" placeholder="Type your username"></input-auth>
          </div>
          <div class="flex flex-col justify-center items-start w-full py-3">
            <span class="text-[18px]">Password</span>
            <input-auth type="password" icon="ri-user-line" placeholder="Password"></input-auth>
          </div>
          <div class="flex flex-col justify-center items-start w-full py-3">
            <span class="text-[18px]">Confirm Password</span>
            <input-auth type="password" icon="ri-user-line" placeholder="Password Confirm"></input-auth>
          </div>
          <div class=" relative w-full overflow-hidden rounded-[25px] h-[50px] px-5 bg-gradient-to-r from-[#659999] to-[#f4791f] mt-4 mx-5">
            <div class="text-white w-full h-full flex justify-center items-center font-bold">REGISTER</div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="cursor-default">
            Dont have an account? <span class="text-[#f4791f] cursor-pointer" @click="trans">Sign up</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({layout: false})
const form = ref<boolean | null>(true)
const trans = () => {
  form.value = !form.value
}
</script>

<style scoped>

</style>