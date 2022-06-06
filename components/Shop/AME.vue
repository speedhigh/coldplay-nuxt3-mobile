<template>
  <div class="pt-5">
    <!-- 轮播图 -->
    <div class="px-3">
      <div class="w-full relative pt-[37%]">
        <div class="absolute inset-0">
          <van-swipe class="w-full h-full bg-blue-400 rounded-lg" :autoplay="3000" indicator-color="white">
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
        <div class="w-12 h-12 bg-red-400 rounded-3xl mx-auto"></div>
        <p class="mt-2">家庭常备</p>
      </div>
    </div>
    <!-- 康复治疗 -->
    <div class="mt-5 px-3">
      <div class="w-full h-56 bg-orange-100 rounded-lg shadow">康复治疗</div>
    </div>

    <!-- 人性化设计 -->
    <div class="mt-5 px-3">
      <div class="w-full h-56 bg-blue-100 rounded-lg shadow">人性化设计</div>
    </div>

    <!-- list -->
    <div class="mt-5 px-3">
      <div class="flex items-center">
        <h2>更多推荐</h2>
        <p class="ml-auto text-gray-500">查看全部
          <van-icon name="arrow" />
        </p>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div v-for="i in 13" :key="i" class="w-full h-56 bg-white rounded-lg shadow"></div>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-center py-4">没有更多了</p>
    </div>
  </div>
</template>