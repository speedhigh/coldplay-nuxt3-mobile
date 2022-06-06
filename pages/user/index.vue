<template>
  <div class="w-full bg-gray-100 h-screen">
    <div 
      class="h-52 bg-primary relative p-5" 
      style="border-bottom-left-radius: 40% 10%; border-bottom-right-radius: 40% 10%"
    >
      <div class=" flex items-start justify-between">
        <div class="flex items-center space-x-1.5 text-white">
          <van-image src="https://api.lorem.space/image/face?w=59&h=59" width="59" height="59" alt="潘周聃" round class="flex-shrink-0"></van-image>
          <div class="space-y-2">
            <h3 class="font-bold">潘周聃</h3>
            <h4>账户管理<van-icon name="arrow" /></h4>
          </div>
        </div>
        <div class="mt-2 flex">
          <div class="p-1">
            <van-icon name="chat-o" size="1.25rem" color="#FFFFFF" class="w-5 h-5" />
          </div>
          <div class="p-1">
            <van-icon name="scan" size="1.25rem" color="#FFFFFF" class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-3">
      <div class="-mt-[7.15rem] w-full relative">
        <div class="px-5">
          <div class="relative w-full h-10 bg-[#3e3c38] rounded-t-lg flex items-center px-4">
            <h3 class="font-bold text-[#FAD49A]">优惠券</h3>
            <van-icon name="coupon-o" color="#FAD49A" class="ml-1" />
            <p class="ml-2 text-[#FDD598]">专属16项优惠特权</p>
            <div class="absolute right-0 inset-y-0 w-32"></div>
            <button 
              class="ml-auto w-16 h-5 text-xs text-[#905C32] rounded-full" 
              style="background: linear-gradient(0deg, #FBDAA6 0%, #FFD18C 100%)"
            >
              立即使用
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div class="w-full h-full bg-white rounded pt-[0.9rem] pb-4 pl-2.5 pr-4">
          <div class="flex">
            <h3 class="font-bold">我的订单</h3>
            <p class="ml-auto text-gray-400">查看全部
              <van-icon name="arrow" />
            </p>
          </div>
          <div class="mt-5 flex justify-around">
            <div v-for="i in 5" :key="i" class="space-y-2.5">
              <div class="w-6 h-5 bg-red-400 mx-auto"></div>
              <p class="text-center">待付款</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 就诊信息 -->
      <div class="mt-2 w-full bg-white rounded px-2.5 py-4">
        <h3 class="font-bold">就诊信息</h3>
        <div class="mt-2.5 w-full h-[3.65rem] bg-gray-200 flex items-center"></div>
      </div>
      <!-- 常用服务 -->
      <div class="mt-2 w-full bg-white rounded h-44 pt-4 px-2.5">
        <h3 class="font-bold">常用服务</h3>
      </div>
    </div>
    <!-- footer -->
    <LazyBaseFooter />
  </div>
</template>

<script setup>
// loading
const showLoadingPage = changeLoading()
onMounted(() => {
  showLoadingPage.value = true
})
setTimeout(() => {
  showLoadingPage.value = false
}, 500)
</script>