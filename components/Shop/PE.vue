<template>
  <div class="pt-5">
    <!-- 轮播图 -->
    <div class="px-3">
      <div class="w-full relative pt-[37%]">
        <div class="absolute inset-0">
          <van-swipe class="w-full h-full bg-red-500 rounded-lg" :autoplay="3000" indicator-color="white">
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
    <!-- list -->
    <div class="px-3">
      <div v-for="i in 7" :key="i" class="border-b py-5">
        <div class="flex items-center space-x-4">
          <div class="w-[6.25rem] h-[6.25rem] rounded-md flex-shrink-0 bg-red-500"></div>
          <div>
            <h3 class="line-1">尊贵阜康-健康无忧风情文化女大风歌</h3>
            <p class="text-gray-500 mt-2">日本体检丨月销275</p>
            <div class="mt-3 text-xl text-primary">41123<span class="text-xs">元</span></div>
            <p class="text-gray-500 mt-2">HSD国际株式会社 ></p>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-4">
      <p class="text-center py-4">没有更多了</p>
    </div>
  </div>
</template>