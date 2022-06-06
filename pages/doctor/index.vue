<template>
  <div class="relative pt-11 pb-12">
    <!-- header -->
    <header class="fixed top-0 bg-gray-50 inset-x-0 h-11 max-w-md mx-auto px-3 z-[1000]">
      <h2 class="leading-[2.75rem]">在线医生</h2>
    </header>
    <!-- search -->
    <div class="h-[2.88rem] px-3 py-2">
      <BaseSearch title="输入症状、疾病、医院、科室、医生" />
    </div>
    <!-- 描述病情找医生 -->
    <div class="mt-3 px-3">
      <div class="w-full h-[4.38rem] bg-white rounded-lg shadow px-3 py-2.5 flex items-center">
        <van-image src="https://api.lorem.space/image/face?w=50&h=50" width="50" height="50" round class="flex-shrink-0" />
        <div class="ml-3.5 space-y-3">
          <h3>描述病情找医生</h3>
          <h4 class="text-gray-400 text-[0.81rem]">智能病情分析，精准推荐医生</h4>
        </div>
        <button class="ml-auto btn-plain w-20 h-7 text-xs">一键找医生</button>
      </div>
    </div>
    <!-- 国内医生、日本医生 -->
    <div class="mt-4 px-3">
      <div class="w-full h-[4.38rem] flex justify-between space-x-4">
        <div class="w-full h-full bg-white rounded-lg shadow">国内医生</div>
        <div class="w-full h-full bg-white rounded-lg shadow">日本医生</div>
      </div>
    </div>
    <!-- 按科室 -->
    <div class="mt-5 px-3">
      <div class="w-full h-48 bg-white rounded-lg shadow px-3.5 py-4">
        <div class="flex items-center">
          <h2>按科室</h2>
          <p class="ml-auto text-gray-500">更多科室
            <van-icon name="arrow" />
          </p>
        </div>
      </div>
    </div>
    <!-- 按疾病 -->
    <div class="mt-5 px-3">
      <div class="w-full h-32 bg-white rounded-lg shadow px-3.5 py-4">
        <div class="flex items-center">
          <h2>按疾病</h2>
          <p class="ml-auto text-gray-500">更多疾病
            <van-icon name="arrow" />
          </p>
        </div>
      </div>
    </div>
    <!-- tab -->
    <div class="mt-4">
      <van-tabs
        ref="tabsRef"
        v-model:active="active"
        background="#f9fafb"
        color="#FF442B"
        title-active-color="#FF442B"
        sticky
        offset-top="2.75rem"
      >
        <van-tab v-for="index in 8" :title="'标签 ' + index" class="space-y-3.5 pt-3.5 px-3">
          <div v-for="i in 13" :key="i" class="w-full h-[12.5rem] bg-white rounded-lg shadow"></div>
          <!-- card-doctor -->
        </van-tab>
      </van-tabs>
    </div>
    <!-- footer -->
    <LazyBaseFooter />
  </div>
</template>

<script setup>
// loading
const showLoadingPage = changeLoading()

const active = ref(0)
const tabsRef = ref()

onMounted(() => {
  showLoadingPage.value = true
  setTimeout(() => tabsRef.value.resize(), 100)
})


setTimeout(() => {
  showLoadingPage.value = false
}, 500)
</script>

<style>
  .van-sticky {
    @apply border-b border-gray-300
  }
</style>