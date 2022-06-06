<template>
  <div class="relatvie pt-11 pb-12">
    <!-- header -->
    <header class="fixed top-0 bg-gray-50 inset-x-0 h-11 max-w-md mx-auto px-3 z-[1000]">
      <h2 class="leading-[2.75rem]">最新资讯</h2>
    </header>
    <!-- search -->
    <div class="h-[2.88rem] px-3 py-2">
      <BaseSearch title="请输入您要搜索的文章" />
    </div>
    <!-- tabs -->
    <van-tabs
      ref="tabsRef"
      v-model:active="active"
      background="#f9fafb" 
      color="#FF442B" 
      title-active-color="#FF442B" 
      sticky 
      offset-top="2.75rem"
    >
      <van-tab v-for="index in 5" :title="'标签 ' + index" class="space-y-3.5 pt-3.5 px-3">
        <div class="w-full relative pt-[37%]">
          <div class="absolute inset-0">
            <van-swipe 
              :autoplay="3000" 
              indicator-color="white" 
              class="w-full h-full bg-blue-400 rounded-lg"
            >
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </van-swipe>
          </div>
        </div>
      </van-tab>
      <div class="px-3">
        <div
          v-for="i in 3"
          :key="i" 
          class="py-3.5 border-b space-y-3 h-[9.5rem]"
          @click="$router.push('/info/detail/' + i)"
        >
          <p class="text-primary font-bold">抗癌体检</p>
          <div class="flex space-x-4">
            <div>
              <h3 class="leading-[1.38rem] line-2">腹泻、胀气腹痛，这些肠道「小问题」千万要警惕腹泻、胀气腹痛，这些肠道「小问题」千万要警惕</h3>
              <p class="mt-3 text-gray-400 line-1">坐在马桶上急得满头大汗颗粒感十足哈哈哈</p>
              <div class="mt-3 flex items-end space-x-3">
                <p class="text-gray-500">04月24日</p>
                <div class="tag1">最新</div>
              </div>
            </div>
            <van-image
              src="https://api.lorem.space/image?w=112&h=93"
              radius="7"
              alt="腹泻、胀气腹痛，这些肠道「小问题」千万要警惕"
              class="flex-shrink-0 w-28 h-[5.83rem]"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
        </div>
      </div>
    </van-tabs>
    <p class="text-center py-5">划到底了哦~</p>
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