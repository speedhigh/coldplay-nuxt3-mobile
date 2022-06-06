<template>
  <div class="pt-5">
    <!-- 轮播图 -->
    <div class="px-3">
      <div class="w-full relative pt-[37%]">
        <div class="absolute inset-0">
          <van-swipe
            :autoplay="3000"
            indicator-color="white"
            class="w-full h-full bg-red-400 rounded-lg"
          >
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- kingkong -->
    <div class="mt-5 px-4 grid grid-cols-5 gap-x-6 gap-y-4">
      <div v-for="i in 10" :key="i" class="text-center">
        <div class="w-12 h-12 bg-blue-300 rounded-3xl mx-auto"></div>
        <p class="mt-2">家庭常备</p>
      </div>
    </div>
    <!-- 国产药、日本药 -->
    <div class="mt-6 px-3 flex justify-between space-x-4 h-[5.81rem]">
      <div class="w-full h-full text-primary rounded-lg shadow bg-orange-50">国产药品专区</div>
      <div class="w-full h-full text-primary rounded-lg shadow bg-orange-50">日本药品专区</div>
    </div>
    <!-- 高发疾病 -->
    <div class="mt-3.5 px-3">
      <div class="w-full h-[8.88rem] bg-white rounded-lg shadow">高发疾病</div>
    </div>
    <div class="mt-4">
      <van-tabs
        ref="drugRef"
        v-model:active="active"
        background="#f9fafb"
        color="#FF442B"
        title-active-color="#FF442B"
        sticky
        offset-top="5.5rem"
      >
        <van-tab v-for="index in 8" :title="'标签 ' + index" class="pt-5 px-3 border-t border-gray-300 grid grid-cols-2 gap-4">
          <div v-for="i in 13" :key="i" class="w-full h-[15.25rem] bg-white rounded-lg shadow"></div>
          <!-- card-doctor -->
        </van-tab>
      </van-tabs>
      <p class="text-center py-4">没有更多了</p>
    </div>
  </div>
</template>

<script setup>
const active = ref(0)
const drugRef = ref()

onMounted(() => {
  setTimeout(() => drugRef.value.resize(), 100)
})

</script>

<style>
  .van-sticky {
    @apply border-b border-gray-300
  }
</style>