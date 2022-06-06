<template>
  <div class="pt-5">
    <!-- 轮播图 -->
    <div class="px-3">
      <div class="w-full relative pt-[37%]">
        <div class="absolute inset-0">
          <van-swipe class="w-full h-full bg-orange-400 rounded-lg" :autoplay="3000" indicator-color="white">
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
      <div v-for="i in 5" :key="i" class="text-center">
        <div class="w-12 h-12 bg-blue-300 rounded-3xl mx-auto"></div>
        <p class="mt-2">家庭常备</p>
      </div>
    </div>
    <!-- 热销产品 -->
    <div class="mt-5 px-3">
      <div class="w-full h-48 bg-orange-50 rounded-lg shadow">热销产品</div>
    </div>
    <!-- list -->
    <div class="mt-3.5 px-3 grid grid-cols-2 gap-4">
      <div v-for="i in 13" :key="i" class="w-full h-[15.25rem] bg-white rounded-lg shadow"></div>
    </div>
    <div class="mt-4">
      <p class="text-center py-4">没有更多了</p>
    </div>
  </div>
</template>