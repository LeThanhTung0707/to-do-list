<template>
  <div class="grid grid-cols-3 w-full h-full ">
    <div class="col-span-2 text flex flex-col border-r-[1px] h-full p-10">
      <div class="font-[600] text-[35px]">Good {{  sessionDay }}, Thanh Tùng</div>
      <div class="font-[600] text-[28px] text-slate-300">Be so good no one can ignore you</div>
      <div class=" font-[500] text-[20px]"><span class="text-red-700 text-[50px]">.</span> {{ new Date().toLocaleString('vi-vn', {weekday:'long', year:'numeric', month: "2-digit", day: "2-digit"}) }}</div>
      <div class="flex flex-col py-5 space-y-10 w-[80%] ">
        <div class="text-[20px]">Công việc cần làm hiện tại</div>
        <div class="rounded-lg border-[1px] border-t-[5px] border-t-orange-800 shadow-2xl h-[300px] flex justify-between flex-col px-10">
          <div class="font-bold text-[25px] py-4"><span class="text-orange-900 text-[40px]">.</span> Title Công việc</div>
          <div class="leading-6"><span class="text-fuchsia-900 text-[40px]">. </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste at officia asperiores! Architecto, quam odit. Hic non corporis iusto minus ipsa numquam animi voluptatum accusantium? Neque, voluptas enim. Recusandae, consequuntur!</div>
          <div class="flex items-end justify-end"><i class="ri-bubble-chart-fill text-[70px] text-transparent bg-clip-text
          bg-gradient-to-r from-[#659999] to-[#f4791f]"></i></div>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({layout:'default'})

const listSessionDay = ['Morning', 'AfterNoon', 'Evening', 'Night']
const hours = new Date().getHours()
const sessionDay = computed(() => {
  if (hours >= 5 && hours < 12) return listSessionDay[0];
  if (hours >= 12 && hours < 17) return listSessionDay[1];
  if (hours >= 17 && hours < 21) return listSessionDay[2];
  if (hours >= 21 && hours < 5) return listSessionDay[3];
  return 'Day'
})
</script>

<style scoped>

</style>