<template>
  <div class="flex flex-row relative w-full border-b-[1px]">
    <input class="focus:border-b-[1px] focus:border-cyan-600 duration-500 inputt outline-none font-[16px] w-full h-[55px] pl-[20px]" :type="type ?? 'text'" :placeholder="placeholder">
    <span class="duration-500 text-[#adadad] span-input absolute top-0 left-0 h-full flex items-center justify-center"><i :class="icon"></i></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['icon', 'placeholder', 'type'])
</script>
<style>
.inputt:focus ~ .span-input{
  @apply text-cyan-600
}

</style>