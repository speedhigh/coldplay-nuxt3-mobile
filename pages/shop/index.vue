<template>
  <div class="relatvie pt-[5.5rem] pb-12">
    <!-- header -->
    <header class="fixed top-0 bg-gray-50 inset-x-0 h-11 max-w-md mx-auto px-3 z-[1000]">
      <h2 class="leading-[2.75rem]">在线商城</h2>
    </header>
    <!-- search -->
    <div class="fixed inset-x-0 top-11 h-[2.88rem] pl-3 py-2 flex items-center space-x-2.5 bg-gray-50 z-[1000]">
      <BaseSearch title="大正感冒药" />
      <div class="ml-auto w-11 h-[1.88rem] bg-primary rounded-l-2xl flex items-center justify-center pl-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
    <van-tabs 
      ref="tabsRef" 
      v-model:active="active" 
      background="#f9fafb" 
      color="#FF442B" 
      title-active-color="#FF442B" 
      sticky
      :border="true"
      offset-top="5.5rem"
    >
      <van-tab title="药品">
        <ShopDrug />
      </van-tab>
      <van-tab title="保健品">
        <ShopHealth />
      </van-tab>
      <van-tab title="设备">
        <ShopAME />
      </van-tab>
      <van-tab title="体检">
        <ShopPE />
      </van-tab>
    </van-tabs>
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